// import { removeItem } from "../handlers/remove-item.js";

/**
 * render button element
 *
 * @param {string} classList - the class list to create button with exact appearance
 * @returns {HTMLButtonElement}
 */

// create delete button element + class + text node

export const deleteBtn = (classList) => {
  const dltBtn = document.createElement("button");
  dltBtn.classList = classList;
  dltBtn.appendChild(document.createTextNode("X"));
  // dltBtn.addEventListener("click", removeItem);

  // console.log(dltBtn); // returns all of buttons
  return dltBtn;
};
