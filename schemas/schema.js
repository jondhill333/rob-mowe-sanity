// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import otherImages from "./otherImages";
import images from "./images";
import category from "./category";
import blogs from "./blogs";

import mainImage from "../objects/mainImage";
import bodyPortableText from "../objects/bodyPortableText";
import excerptPortableText from "../objects/excerptPortableText";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "Rob Mowe",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    otherImages,
    images,
    category,
    blogs,
    mainImage,
    bodyPortableText,
    excerptPortableText,

    /* Your types here! */
  ]),
});
