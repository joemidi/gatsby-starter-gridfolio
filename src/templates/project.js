import React from 'react';
// import Helmet from 'react-helmet';
import './project.scss';

const Project = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;

  return (
    <div className="project-container">
      <div className="header">
        <h1>JellyFish</h1>
      </div>
      <div className="content">
        <div className="main">
          <div className="title" />
        </div>
        <div className="sidebar" />
      </div>
      <span>{project.title}</span>
      <span>{project.description}</span>
      <span>{project.url}</span>
      <span>{project.tags}</span>
      <span>{slug}</span>
      <iframe
        title={project.title}
        width={project.width}
        height={project.height}
        src={`/projects/${slug}/index.html`}
        frameBorder="0"
        scrolling="no"
      />
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
        date
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
