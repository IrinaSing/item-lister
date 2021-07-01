// make button delete element
// make text + checkbox element
// make li element

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

  // create div element + class
  const div = document.createElement("div");
  div.className = "form-check-div";

  // add text node with input value
  div.appendChild(document.createTextNode(newItem.text));

  // append input to div
  itemDiv.appendChild(checkbox);
  // append div to div
  itemDiv.appendChild(div);

  // create delete button element + class + text node
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.appendChild(document.createTextNode("X"));

  // append button to div
  itemDiv.appendChild(deleteBtn);

  // append div to li
  li.appendChild(itemDiv);

  return li;
};
