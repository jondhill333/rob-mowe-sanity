export default {
  name: "images",
  title: "images",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Image Name",
      type: "string",
      description: "Name of the image",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 100,
      },
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the image",
    },
    {
      name: "date",
      title: "Added Date",
      type: "date",
    },
    {
      name: "photoCategory",
      title: "Photo Category",
      description: "What category do you want this photo to be in",
      type: "array",
      of: [{ type: "reference", to: [{ type: "category" }] }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
