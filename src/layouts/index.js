import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import './index.scss';
// import blocks from '../data/blocks.json';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Jellyfish Creative Display Gallery"
      meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro',
          rel: 'stylesheet',
        },
      ]}
    />
    {children()}
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
