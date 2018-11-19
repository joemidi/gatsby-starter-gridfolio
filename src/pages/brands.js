import React from 'react';
// import Link from 'gatsby';
import PropTypes from 'prop-types';

import Header from '../components/header';
import Footer from '../components/footer';

const Brands = ({ data: { allMarkdownRemark: { group } } }) => (
  <div className="content">
    <Header />
    {group.map(brands => {
      return (
        <Link key={brands.fieldValue} to={`/brands/${brands.fieldValue}`}>
          <h2>{brands.fieldValue}</h2>
        </Link>
      );
    })}
    <Footer />
  </div>
);

export default Brands;

Brands.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.array.isRequired,
    }),
  }).isRequired,
};

export const pageQuery = graphql`
  query BrandsQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___brand], order: DESC }) {
      group(field: frontmatter___brand) {
        fieldValue
        totalCount
      }
    }
  }
`;
