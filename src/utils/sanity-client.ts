import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { ImageUrlBuilder } from "sanity";

const sanityClient = createClient({
  projectId: "tbbskh2a",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

const sanityUrlBuilder = imageUrlBuilder(sanityClient);

const imageUrl = (source: string): ImageUrlBuilder => {
  return sanityUrlBuilder.image(source);
};

export default sanityClient;
export { imageUrl, sanityClient };
