import React from 'react';
import Helmet from 'react-helmet';
import styles from './project.module.scss';

const Project = () => {
  const { slug } = this.props.pathContext;
  const postNode = this.props.data.markdownRemark;
  const project = postNode.frontmatter;
  // const imageURL = project.image.childImageSharp.resize.src;
  if (!project.id) {
    project.id = slug;
  }
  return (
    <div className="container project-container">
      <Helmet title={`${project.title}`} />
      <div className={styles.headerWrapper}>
        <span>{project.title}</span>
        <span>{project.description}</span>
        <span>{project.url}</span>
        <span>{project.tags}</span>
        <span>{project.date}</span>
        <span>{slug}</span>
        <iframe
          title={project.title}
          width={project.width}
          height={project.height}
          src={`/projects/${slug}/index.html`}
          frameBorder="0"
        />
      </div>
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
