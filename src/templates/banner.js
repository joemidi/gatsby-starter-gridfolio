import React from 'react';
// import Helmet from 'react-helmet';
import kebabCase from 'lodash/kebabCase';
import Header from '../components/header';
import Footer from '../components/footer';
import Placeholder from '../components/placeholder';
import './banner.scss';

const BannerLink = props => {
  const handleClick = () => {
    props.onHeaderClick(props);
  };
  return (
    <li>
      <button onClick={handleClick} onKeyPress={handleClick}>
        {props.name}
      </button>
    </li>
  );
};

class Project extends React.Component {
  constructor(props) {
    super(props);
    const { slug } = props.pathContext;
    const postNode = props.data.markdownRemark;
    const project = postNode.frontmatter;
    this.state = {
      title: project.title,
      description: project.description,
      tags: project.tags,
      banners: project.banners,
      basePath: `/projects/${slug}/`,
      currentBanner: project.banners[0],
    };
  }

  updateBanner(bannerName) {
    this.setState({
      currentBanner: this.state.banners.find(x => x.name === bannerName),
    });
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
            <div className="banners">
              <h3>Banners</h3>
              <ul>
                {this.state.banners.map(banner => (
                  <BannerLink
                    key={kebabCase(banner.name)}
                    name={banner.name}
                    onHeaderClick={() => this.updateBanner(banner.name)}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="main">
            <Placeholder basePath={this.state.basePath} banner={this.state.currentBanner} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

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
        template
      }
      excerpt
    }
  }
`;
