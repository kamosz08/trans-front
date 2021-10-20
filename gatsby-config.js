module.exports = {
  siteMetadata: {
    siteUrl: 'https://trans-manager.netlify.app',
    title: 'Trans',
    description: 'Gatsby hybrid project',
    author: 'kamosz08',
    twitterUsername: '@john_doe',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Trans',
        short_name: 'trans',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-plugin-google-fonts-v2',
      options: {
        fonts: [
          {
            family: 'Roboto',
            weights: ['400', '700'],
          },
          {
            family: 'Open Sans',
            weights: ['400', '700'],
          },
        ],
      },
    },
  ],
};
