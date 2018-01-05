import React from 'react';
import Helmet from 'react-helmet';
import Gridfolio from '../templates/gridfolio';
import Intro from './intro';
import Filter from '../components/filter';

import './index.scss';
import blocks from '../data/blocks.json';

class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'classic',
    };
  }

  render() {
    return (
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
        <Intro />
        <Filter />
        <Gridfolio theme={this.state.theme} blocks={blocks} />
      </div>
    );
  }
}

export default TemplateWrapper;
