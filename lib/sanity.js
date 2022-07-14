import {
  createClient,
  createImageUrlBuilder,
  createPortableTextComponent,
  createPreviewSubscriptionHook
} from 'next-sanity';
import sanityImage from '@sanity/image-url';

const config = {
  dataset: process.env.SANITY_PROJECT_DATASET,
  projectId: process.env.SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production'
};

if (!config.projectId) {
  throw Error('The Project ID is not set. Check your environment variables.');
}
if (!config.dataset) {
  throw Error('The dataset name is not set. Check your environment variables.');
}

export const urlFor = (source) => createImageUrlBuilder(config).image(source);
export const usePreviewSubscription = createPreviewSubscriptionHook(config);
export const PortableText = createPortableTextComponent({
  ...config,
  serializers: {}
});

export const sanityClient = createClient(config);
// A preview client is like the client above but with the cdn set to false
export const previewClient = (token) =>
  createClient({
    ...config,
    useCdn: false,
    token
  });

export const imageBuilder = sanityImage(sanityClient);

// Helper function for easily switching between normal client and preview client
export const getClient = (preview) => {
  if (preview?.active) {
    return previewClient(preview.token);
  } else {
    return sanityClient;
  }
};
