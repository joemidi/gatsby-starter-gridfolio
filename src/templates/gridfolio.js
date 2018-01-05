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

const Gridfolio = props => (
  <div className="gridfolio animates-into-view" data-theme={props.theme}>
    {props.blocks.map(block => (
      <Block
        key={block.id}
        title={block.title}
        description={block.description}
        url={block.url}
        image={block.image}
        tags={block.tags}
        className={block.className}
      />
    ))}
  </div>
);

Gridfolio.propTypes = {
  theme: PropTypes.string.isRequired,
  blocks: PropTypes.arrayOf(PropTypes.shape({ Block })).isRequired,
};

export default Gridfolio;
