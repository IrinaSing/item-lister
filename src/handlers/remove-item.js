import { list } from "../components/list.js";
import { state } from "../data.js";

// const itemList = document.getElementsByTagName("ul"); // it returns html collection

export const removeItem = (e) => {
  const todoArray = state.items; // list array in state
  const div = e.target.parentElement;
  const li = div.parentElement;

  const { key } = li.dataset; // id of DOM object strings
  const kToNumber = Number(key); // id of DOM object to number

  // go through each item object in state array
  for (let i = 0; i < todoArray.length; i++) {
    const itemObj = todoArray[i];
    // find id of target object
    const idTarget = itemObj.id; // id of object in array, state

    if (kToNumber === idTarget) {
      const indexOfObject = todoArray.findIndex((x) => x.id === idTarget);
      todoArray.splice(indexOfObject, 1);
    }
  }

  // clear inner html of the list container
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
  // render a new list of list components
  const newListEl = list(state.items);
  // append component to list component
  listContainer.appendChild(newListEl);
};
