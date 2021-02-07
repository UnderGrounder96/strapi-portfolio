/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `This WebDev Portfolio Site that uses Strapi and GatsbyJS.`,
    author: `Lucio Afonso`,
    twitterUsername: `@UnderGrounder96`,
    image: `/twitter-card.png`,
    siteUrl: "https://lucio-afonso-portfolio.netlify.app",
    social: [
      {
        name: `linkedin`,
        url: `https://bit.ly/2AV9b0N`,
      },
      {
        name: `github`,
        url: `https://github.com/UnderGrounder96`,
      },
    ],
  },
  pathPrefix: `/`,
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        singleTypes: [`about`],
        contentTypes: [`jobs`, `projects`],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/favicon.ico`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Roboto`,
              variants: [`400`, `700`],
            },
            { family: `Open Sans` },
          ],
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
