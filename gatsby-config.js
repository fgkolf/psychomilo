let contentfulConfig;

try {
  // Load the Contentful config from the .contentful.json
  contentfulConfig = require('./.contentful');
} catch (_) {}

// Overwrite the Contentful config with environment variables if they exist
contentfulConfig = {
  spaceId: process.env.CONTENTFUL_SPACE_ID || contentfulConfig.spaceId,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN || contentfulConfig.accessToken,
};

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
  throw new Error('Contentful spaceId and the delivery token need to be provided.');
}

module.exports = {
  siteMetadata: {
    title: `psychomilo`,
    url: 'https://psychomilo.netlify.com', // for share in share component
  },
  pathPrefix: '/gatsby-contentful-starter',
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require('postcss-easy-import')(),
          require('postcss-custom-properties')({ preserve: false }),
          require('postcss-color-function')(),
          require('autoprefixer')(),
        ],
      },
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    },
  ],
};
