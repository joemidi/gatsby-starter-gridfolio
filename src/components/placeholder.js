import React from 'react';
import PropTypes from 'prop-types';
import { withPrefix } from 'gatsby-link';
import './placeholder.scss';

const Placeholder = props => {
  const { banner, basePath } = props;
  const { width, height } = banner;
  const ratio = width / height;

  const bannerIframe = () => (
    <iframe
      title={banner.name}
      width={width}
      height={height}
      src={withPrefix(`${basePath}${banner.src}/index.html`)}
      frameBorder="0"
      scrolling="no"
    />
  );

  return (
    <div className="placeholder">
      <div className="placeholder--header" />
      <div className="placeholder--masthead">{ratio > 1.25 && bannerIframe()}</div>
      <div style={{ display: 'flex' }}>
        <div className="placeholder--main">
          <div className="placeholder--navigation" />
          <div className="placeholder--block_hero" />
          <div className="placeholder--block" />

          <div className="placeholder--col2">
            <div className="placeholder--block_hero" />
            <div className="placeholder--block" />
          </div>
          <div className="placeholder--col2">
            <div className="placeholder--block_hero" />
            <div className="placeholder--block" />
          </div>
          <div className="placeholder--col4">
            <div className="placeholder--block_hero" />
            <div className="placeholder--block" />
          </div>
          <div className="placeholder--col4">
            <div className="placeholder--block_hero" />
            <div className="placeholder--block" />
          </div>
          <div className="placeholder--col4">
            <div className="placeholder--block_hero" />
            <div className="placeholder--block" />
          </div>
          <div className="placeholder--col4">
            <div className="placeholder--block_hero" />
            <div className="placeholder--block" />
          </div>
        </div>
        <div className="placeholder--aside">
          <div className="placeholder--skyscraper">{ratio <= 1.25 && bannerIframe()}</div>
          <div className="placeholder--block" />
          <div className="placeholder--block" />
        </div>
      </div>
    </div>
  );
};

Placeholder.propTypes = {
  banner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired,
  basePath: PropTypes.string.isRequired,
};

export default Placeholder;
