import { schema } from "./schema.js";
import { validate } from "../../lib/validate.js";

export const itemData = {
  items: [{ text: "Item 1", isChecked: true }],
};

validate(schema, itemData);
