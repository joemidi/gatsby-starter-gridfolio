import React from 'react';
import ReactPlayer from 'react-player';
import Header from '../components/header';
import Footer from '../components/footer';
import './banner.scss';

class Project extends React.Component {
  constructor(props) {
    super(props);
    const postNode = props.data.markdownRemark;
    const project = postNode.frontmatter;
    this.state = {
      title: project.title,
      description: project.description,
      tags: project.tags,
      videoUrl: project.videoUrl,
    };
  }

  render() {
    return (
      <div className="content">
        <Header />
        <div className="project">
          <div className="sidebar">
            <h2 className="title">{this.state.title}</h2>
            <p className="description">{this.state.description}</p>
            <div className="details">
              <h3>Tags</h3>
              <p>{this.state.tags.join(', ')}</p>
            </div>
          </div>
          <div className="main">
            <div className="video-backdrop">
              <ReactPlayer url={this.state.videoUrl} width="1024px" height="576px" playing controls />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Project;

export const pageQuery = graphql`
  query VideoPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        className
        date
        category
        brand
        description
        videoUrl
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
        template
      }
    }
  }
`;
