export default {
  name: "otherImages",
  title: "Other Images",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Image Name",
      type: "string",
      description: "Name of the image",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
      description: "Description of the image",
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
