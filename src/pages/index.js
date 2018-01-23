import React from 'react';
import PropTypes from 'prop-types';
import Gridfolio from '../components/gridfolio';

// import blocks from '../data/blocks.json';

const Index = ({ data }) => {
  const blocks = data.allMarkdownRemark.edges;
  console.log(blocks);
  return (
    <div>
      <Gridfolio blocks={blocks} />
    </div>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
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
