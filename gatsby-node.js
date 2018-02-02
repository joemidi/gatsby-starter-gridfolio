const path = require('path')
const _ = require('lodash')
const fs = require('fs');

exports.modifyWebpackConfig = ({ config, stage }) => {
  switch (stage) {
    case 'develop':
      config.preLoader('eslint-loader', {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/, /gatsby-\w+.js/]
      });

      break;
  }
  return config;
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug

  if (node.internal.type === 'MarkdownRemark') {
    if (Object.prototype.hasOwnProperty.call(node, 'frontmatter')) {
      const parent = path.basename(path.join(node.parent, '../'));
      slug = `${_.kebabCase(parent)}`
    }

    createNodeField({ node, name: 'slug', value: slug })
  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const projectPage = path.resolve('src/templates/project.js')
    resolve(
      graphql(
        `
        {
          projects: allMarkdownRemark {
            edges {
              node {
                fields {
                  slug
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          /* eslint no-console: "off" */
          console.log(result.errors)
          reject(result.errors)
        }

        result.data.projects.edges.forEach(edge => {
          createPage({
            path: edge.node.fields.slug,
            component: projectPage,
            context: {
              slug: edge.node.fields.slug,
            }
          })
        })
      })
    )
  })
}
