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
