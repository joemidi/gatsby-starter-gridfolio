module.exports = {
  pathPrefix: `/cdp/global-gallery`,
  siteMetadata: {
    title: `Jellyfish Creative Display Gallery`,
  },
  plugins: [
    {
      resolve: `my-own-plugin`,
      options: {
        verbose: true,
        projects: `public/projects`,
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/projects`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
        {
          resolve: 'gatsby-remark-images',
          options: {
            maxWidth: 1600,
            quality: 90,
            linkImagesToOriginal: false
          }
        },
        {
          resolve: 'gatsby-remark-external-links',
          options: {
            target: '_blank',
            rel: 'nofollow noopener noreferrer'
          }
        },
        {
          resolve: 'gatsby-remark-responsive-iframe'
        },
        ]
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
