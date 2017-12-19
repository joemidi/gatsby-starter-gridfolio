import React from 'react';
import Helmet from 'react-helmet';
import Gridfolio from '../templates/gridfolio';
import Intro from './intro';
import Themes from './themes';

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
    const getTheme = theme => {
      this.setState({ theme });
    };

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
        <Themes selectTheme={getTheme} activeTheme={this.state.theme} themes={['Vertical', 'Feature', 'Format']} />
        <Gridfolio theme="classic" blocks={blocks} />
      </div>
    );
  }
}

export default TemplateWrapper;
