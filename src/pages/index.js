import React from 'react';
import PropTypes from 'prop-types';
import Gridfolio from '../components/gridfolio';
import Header from '../components/header';
import Masthead from '../components/masthead';
import Footer from '../components/footer';

const Index = ({ data }) => {
  const blocks = data.allMarkdownRemark.edges;
  return (
    <div className="content">
      <Header />
      <Masthead />
      <Gridfolio blocks={blocks} />
      <Footer />
    </div>
  );
};

export const ChildImageSharp = {
  childImageSharp: PropTypes.shape({
    sizes: PropTypes.shape({
      aspectRatio: PropTypes.number.isRequired,
      sizes: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      srcSet: PropTypes.string.isRequired,
      srcSetWebp: PropTypes.string.isRequired,
      srcWebp: PropTypes.string.isRequired,
      tracedSVG: PropTypes.string.isRequired,
    }),
  }),
};

export const Node = {
  fields: PropTypes.shape({
    slug: PropTypes.string.isRequired,
  }),
  frontmatter: PropTypes.shape({
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    height: PropTypes.number.isRequired,
    image: PropTypes.shape({ ChildImageSharp }).isRequired,
    tags: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    className: PropTypes.string,
  }),
};

Index.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape(Node)),
  }).isRequired,
};

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            className
            url
            tags
            width
            height
            image {
              childImageSharp {
                sizes(maxWidth: 850, quality: 90, traceSVG: { color: "#f3f3f3" }) {
                  ...GatsbyImageSharpSizes_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
