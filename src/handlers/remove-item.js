import { state } from "../data.js";
import { renderList } from "./re-render-list.js";

export const removeItem = (e) => {
  const todoArray = state.items; // list array in state
  const div = e.target.parentElement;

  const li = div.parentElement;

  const { key } = li.dataset; // id of DOM object strings
  const kToNumber = Number(key); // id of DOM object to number

  if (e.target.classList.contains("delete")) {
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
  }
  renderList(todoArray);
};
