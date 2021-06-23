<<<<<<< HEAD
const itemList = document.getElementById("items");

export const addItem = (e) => {
  e.preventDefault();

  // get input value
  const newItem = document.getElementById("item").value;

  // create new li element
  const li = document.createElement("li");
  // add class
  li.className = "list-group-item";
  // add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // create delete button element
  const deleteBtn = document.createElement("button");

  // add classes to delete btn
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  // append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  // append button to li
  li.appendChild(deleteBtn);

  // append li to list
  itemList.appendChild(li);
};
=======
const itemList = document.getElementById("items");

export const addItem = (e) => {
  e.preventDefault();

  // get input value
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

  // append li to list
  itemList.appendChild(li);
};
>>>>>>> 96a856a4fe8ee4218d8799904db97a088dfc04ff
