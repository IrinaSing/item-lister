import { list } from "../components/list.js";
import { state } from "../data.js";

// const itemList = document.getElementById("items");

export const addItem = (e) => {
  e.preventDefault();

  /*
  read the data (user input?) and update state
  clear the user input
  clear inner html of the list container
  render a new list of list component
  append component to list component
  
  */

  // read the user input and update state
  const itemInput = document.getElementById("item").value;
  const itemToData = { text: itemInput, isChecked: false, id: Date.now() };
  state.items.push(itemToData);

  // clear the user input
  // clear inner html of the list container
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";

  // render a new list of list components
  const newListEl = list(state.items);
  // console.log(state.items);
  // append component to list component
  listContainer.appendChild(newListEl);
};
