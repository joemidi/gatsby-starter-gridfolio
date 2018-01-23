import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';

import './gridfolio.scss';

const Block = props => (
  <div className={`gridfolio--block is-animated ${props.className}`}>
    <a className="gridfolio--block-link" href={props.url}>
      <div
        className="gridfolio--block-image"
        style={{
          backgroundImage: `url(${withPrefix('/thumbnails/') + props.image})`,
        }}
      />
      <div className="gridfolio--block-content">
        <div className="gridfolio--block-title-wrapper">
          <h2
            className="gridfolio--block-title"
            style={{
              fontSize: '132.385%',
            }}
          >
            {props.title}
          </h2>
        </div>
        <div className="gridfolio--block-description-wrapper">
          <p
            className="gridfolio--block-description"
            style={{
              fontSize: '132.385%',
            }}
          >
            {props.description}
          </p>
        </div>
        <div className="gridfolio--block-tags-wrapper">
          <div className="gridfolio--block-tags">{props.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        </div>
      </div>
    </a>
  </div>
);

Block.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  image: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  className: PropTypes.string.isRequired,
};

Block.defaultProps = {
  image: '',
  tags: [],
};

export const ChildImageSharp = {
  sizes: PropTypes.shape({
    aspectRatio: PropTypes.number.isRequired,
    sizes: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    srcSet: PropTypes.string.isRequired,
    srcSetWebp: PropTypes.string.isRequired,
    srcWebp: PropTypes.string.isRequired,
    tracedSVG: PropTypes.string.isRequired,
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

const Gridfolio = props => (
  <div className="gridfolio animates-into-view">
    {props.blocks.map(block => (
      <Block
        key={block.node.fields.slug}
        title={block.node.frontmatter.title}
        description={block.node.frontmatter.description}
        url={block.node.frontmatter.url}
        image={block.node.frontmatter.url}
        tags={block.node.frontmatter.tags}
        className={block.node.frontmatter.className}
      />
    ))}
  </div>
);

Gridfolio.propTypes = {
  blocks: PropTypes.arrayOf(PropTypes.shape(Node)).isRequired,
};

export default Gridfolio;
