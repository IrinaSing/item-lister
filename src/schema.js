export const schema = {
  title: "item data",
  description: "item content and status",
  type: "object",
  properties: {
    items: {
      type: "array",
      description: "items of the list",
      properties: {
        text: {
          type: "strings",
          description: "text of user input",
        },
        isChecked: {
          type: "boolean",
          description: "specifies if the item was checked",
        },
      },
      required: ["text"],
    },
  },
  required: ["items"],
};
