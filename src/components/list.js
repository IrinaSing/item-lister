import { listItem } from "./list-item.js";

/**
 * renders a list with all added elements
 *
 * @param {Array} array - text of all the items
 * @returns {Element} <ul> new list
 */

export const list = (array) => {
  const ulEl = document.createElement("ul");
  // item - { text: "Item", isChecked: false, id: Date.now() }
  for (const item of array) {
    const liEl = listItem(item);
    ulEl.appendChild(liEl);
  }
  return ulEl; // <ul> element
};

/*
    create new list
    for each item in the array
        render a new item,     
        append new item into the list

    return new list
*/
