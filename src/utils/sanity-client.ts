import { createClient } from "next-sanity";

const sanityClient = createClient({
  projectId: "tbbskh2a",
  dataset: "production",
  apiVersion: "2022-03-25",
  useCdn: false,
});

export default sanityClient;
