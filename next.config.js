const sanityClient = require('@sanity/client');

// Configuration object for Sanity using the secrets in .env file
const sanityConfig = {
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
};
// Create a client by sending that config to Sanity
const client = sanityClient(sanityConfig);

// Sanity Redirects
async function fetchSanityRedirects() {
  // Use our client object to ask for sanity for some redirects
  const data = await client.fetch(
    `*[_type == "redirect"]{from,to,isPermanent}`
  );
  // Go through redirects and return an array of objects, each correspondign to a redirect
  const redirects = data.map((redirect) => {
    return {
      source: `/${redirect.from}`,
      destination: `/${redirect.to}`,
      permanent: redirect.isPermanent
    };
  });
}

module.exports = {
  swcMinify: true,
  // I am guessing this is to not use process.env everywhere
  env: {
    SANITY_PROJECT_DATASET: process.env.SANITY_PROJECT_DATASET,
    SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
    SANITY_API_TOKEN: process.env.SANITY_API_TOKEN
  },
  // You would get an array of objects here
  async redirects() {
    const sanityRedirects = await fetchSanityRedirects();
    return sanityRedirects;
  },
  async headers() {
    return [
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "content-src 'self';"
          }
        ]
      }
    ];
  }
};
