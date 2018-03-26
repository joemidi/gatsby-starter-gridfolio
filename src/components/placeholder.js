import React from 'react';
import './placeholder.scss';

const Placeholder = () => (
  <div className="placeholder">
    <div className="placeholder--header" />
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
        <div className="placeholder--skyscraper" />
        <div className="placeholder--block" />
        <div className="placeholder--block" />
      </div>
    </div>
  </div>
);

export default Placeholder;
