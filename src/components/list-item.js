// make button delete element
// make text + checkbox element
// make li element

/**
 * renders a single item element
 *
 * @param {string} textContent - User input of item name.
 * @returns {Element} <li> item with text, checkbox and button.
 */

export const listItem = (textContent = "") => {
  const newItem = document.getElementById("item").value;

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

  // create label element + class
  const label = document.createElement("label");
  label.className = "form-check-label";

  // add text node with input value
  label.appendChild(document.createTextNode(newItem));

  // append input to div
  itemDiv.appendChild(checkbox);
  // append label to div
  itemDiv.appendChild(label);

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

// append li to list
// itemList.appendChild(li);
