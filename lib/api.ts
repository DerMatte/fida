import { gql } from "graphql-request";
import request from "./datocms";

const API_URL = "https://graphql.datocms.com";
const API_TOKEN = process.env.DATOCMS_API_TOKEN;

const responsiveImageFragment = gql`
  fragment responsiveImageFragment on ResponsiveImage {
    srcSet
    webpSrcSet
    sizes
    src
    width
    height
    aspectRatio
    alt
    title
    base64
  }
`;
// ...responsiveImageFragment

export const getHome = async () => {
  const HomeQuery = gql`
    query HomeQuery {
      home {
        title
        subheading
      }
    }
    ${responsiveImageFragment}
  `;
  const data = await request({
    query: HomeQuery,
    variables: {},
    excludeInvalid: true,
    includeDrafts: true,
  });
  return data;
};

