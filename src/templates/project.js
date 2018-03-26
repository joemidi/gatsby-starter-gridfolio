import React from 'react';
// import Helmet from 'react-helmet';
import Header from '../components/header';
import Footer from '../components/footer';
import Placeholder from '../components/placeholder';
import './project.scss';

const Project = props => {
  const { slug } = props.pathContext;
  const postNode = props.data.markdownRemark;
  const project = postNode.frontmatter;
  const { width, height } = project;
  const ratio = width / height;

  const banner = () => (
    <iframe
      title={project.title}
      width={project.width}
      height={project.height}
      src={`/projects/${slug}/index.html`}
      frameBorder="0"
      scrolling="no"
    />
  );

  return (
    <div className="content">
      <Header />
      <div className="project">
        <div className="sidebar">Sidebar</div>
        <div className="main">
          <Placeholder>
            <div>
              <div className="details">
                <h2 className="title">{project.title}</h2>
                <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <p className="description">{project.description}</p>
              </div>
              {ratio > 1.25 && <div className="banner-wrapper">{banner()}</div>}
              {ratio <= 1.25 && <div className="banner-wrapper">{banner()}</div>}
            </div>
          </Placeholder>
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
