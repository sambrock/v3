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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    'gatsby-transformer-json',
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/json/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/components/layout.js`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `sambrock`,
        short_name: `sambrock`,
        start_url: `/`,
        background_color: `#F1F5F5`,
        theme_color: `#ED1B35`,
        display: `standalone`,
        icon: 'src/images/icon.png',
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "sambrock.com",
      },
    },
  ],
}
