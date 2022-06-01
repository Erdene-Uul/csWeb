import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "dtuheuws",
  dataset: "production",
  apiVersion: `1`,
  useCdn: true,
});
