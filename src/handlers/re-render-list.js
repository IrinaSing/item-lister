import { list } from "../components/list.js";

// renders list into html div
export const renderList = (array) => {
  // clear inner html of the list container
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
  // render a new list of list components
  const newListEl = list(array);
  // append component to list component
  listContainer.appendChild(newListEl);
};
