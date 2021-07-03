/* eslint-disable import/no-cycle */
import { removeItem } from "../handlers/remove-item.js";

// create delete button element + class + text node

export const deleteBtn = (classList) => {
  const dltBtn = document.createElement("button");
  dltBtn.classList = classList;
  dltBtn.appendChild(document.createTextNode("X"));
  dltBtn.addEventListener("click", removeItem);

  // console.log(dltBtn); // returns all of buttons
  return dltBtn;
};
