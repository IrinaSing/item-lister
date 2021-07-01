// make button delete element
// make text + checkbox element
// make li element
import { deleteBtn } from "./delete-btn.js";
/**
 * renders a single item element
 *
 * @param {object} item - object from array items (data.js)
 * @returns {Element} <li> item with text, checkbox and button.
 */

export const listItem = (item) => {
  const newItem = item; // { text: "Item", isChecked: false, id: Date.now() }
  // const text = item[Object.keys(item)[0]]; // get item name from object
  // create new li element
  const li = document.createElement("li");
  // add class
  li.className = "list-group-item";

  // create div element and it's class
  const itemDiv = document.createElement("div");
  itemDiv.className = "form-check";

  // create input checkbox + class + type
  const checkbox = document.createElement("input");
  checkbox.className = "checkbox";
  checkbox.setAttribute("type", "checkbox");
  // append input to div
  itemDiv.appendChild(checkbox);
  // create div element + class
  // const textDiv = document.createElement("div");

  // add text node with input value, append to item div
  const name = document.createTextNode(newItem.text);
  itemDiv.appendChild(name);
  // textDiv.appendChild(document.createTextNode(newItem.text));

  // append delete button to div
  itemDiv.appendChild(deleteBtn("btn btn-danger btn-sm float-right delete"));

  // append div to li
  li.appendChild(itemDiv);

  return li;
};
