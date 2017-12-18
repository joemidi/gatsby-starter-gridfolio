import React from 'react';
import Helmet from 'react-helmet';
import Gridfolio from '../templates/gridfolio';
import Intro from './intro';
import Themes from './themes';

import './index.scss';

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

    const generateBlocks = () => {
      const textures = {
        classic: [
          'dark-bg black-texture-1',
          'dark-bg black-texture-2',
          'dark-bg black-texture-3',
          'light-bg white-texture-1',
          'light-bg white-texture-2',
          'light-bg white-texture-3',
        ],
        warhol: [
          'dark-bg solid-blue',
          'dark-bg solid-red',
          'dark-bg solid-yellow',
          'dark-bg solid-pink',
          'dark-bg solid-green',
        ],
      };

      const blocks = [];
      let i;
      for (i = 0; i < 12; i += 1) {
        blocks.push({
          id: i,
          title: 'Project Title',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          url: 'http://joemidi.github.io/gatsby-starter-gridfolio/',
          tags: ['html', 'css', 'javascript'],
          className: textures[this.state.theme]
            ? textures[this.state.theme][i % textures[this.state.theme].length]
            : '',
        });
      }
      return blocks;
    };

    return (
      <div>
        <Helmet
          title="Gatsby Starter Gridfolio"
          meta={[{ name: 'description', content: 'Sample' }, { name: 'keywords', content: 'sample, something' }]}
          link={[
            {
              href: 'https://fonts.googleapis.com/css?family=Playfair+Display|Work+Sans',
              rel: 'stylesheet',
            },
          ]}
        />
        <Intro />
        <Themes
          selectTheme={getTheme}
          activeTheme={this.state.theme}
          themes={['classic', 'warhol', 'circular', 'brutalist']}
        />
        <Gridfolio theme={this.state.theme} blocks={generateBlocks()} />
      </div>
    );
  }
}

export default TemplateWrapper;
