import React from 'react';
// import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Header from '../components/header';
import Footer from '../components/footer';
import Placeholder from '../components/placeholder';
import './project.scss';

const Project = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const currentBanner = project.banners[0];
  const basePath = `/projects/${slug}/`;

  const activateLasers = element => {
    console.log(element);
  };

  return (
    <div className="content">
      <Header />
      <div className="project">
        <div className="sidebar">
          <h2 className="title">{project.title}</h2>
          <p className="description">{project.description}</p>
          <div className="details">
            <h3>Tags</h3>
            <p>{project.tags.join(', ')}</p>
          </div>
          <div className="banners">
            <h3>Banners</h3>
            <ul>
              {project.banners.map(banner => (
                <li key={kebabCase(banner.name)}>
                  <a href="" onClick={activateLasers} onKeyPress={activateLasers} role="button">
                    {banner.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="main">
          <Placeholder basePath={basePath} banner={currentBanner} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Project;

export const pageQuery = graphql`
  query ProjectPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        className
        banners {
          name
          src
          width
          height
        }
        date
        category
        brand
        description
        url
        tags
        width
        height
        image {
          childImageSharp {
            resize(width: 800) {
              src
            }
          }
        }
      }
      fields {
        slug
      }
      excerpt
    }
  }
`;
