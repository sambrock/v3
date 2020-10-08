/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Sam Brocklehurst",
    description:
      "Sam Brocklehurst is currently studying Web Technologies at the Univeristy of Huddersifeld, final year.",
    siteUrl: "https://sambrock.net",
    image: "/og.png",
    twitterUsername: "@sxmbrock",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/json/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout.js`),
      },
    },
  ],
}
