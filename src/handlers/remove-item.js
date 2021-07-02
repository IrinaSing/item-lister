import { list } from "../components/list.js";
import { state } from "../data.js";

// const itemList = document.getElementsByTagName("ul"); // it returns html collection

export const removeItem = (e) => {
  /*
  if (e.target.classList.contains("delete")) {
    const div = e.target.parentElement;
    const li = div.parentElement;
    // console.log(li); // it returns a correct li element
    const itemList = li.parentElement;
    // console.log(itemList); // returns ul
    itemList.removeChild(li);
  }
*/

  // list array in state
  const todoArray = state.items;
  console.log(todoArray); // returns correct

  for (let i = 0; i < todoArray.length; i++) {
    const itemObj = todoArray[i];

    // find index of target object
    const index = itemObj.id;
    const div = e.target.parentElement;
    const li = div.parentElement;
    console.log(index); // returns different indexes
    console.log(li); // returns the same li

    // delete target object from array state
    if (li.id === index) {
      todoArray.splice(itemObj);
    }
  }

  // clear inner html of the list container
  const listContainer = document.getElementById("list-container");
  listContainer.innerHTML = "";
  // render a new list of list components
  const newListEl = list(state.items);
  // console.log(state.items);
  // append component to list component
  listContainer.appendChild(newListEl);
};
