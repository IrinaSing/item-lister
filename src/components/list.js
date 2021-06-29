import { createListItem } from "./list-item.js";

/**
 * renders a list with all added elements
 *
 * @param {array} array - text of all the items
 * @returns {Element} <ul> new list
 */

export const list = (array) => {
  const newList = document.createElement("ul");
  array.forEach((item) => {
    const newItem = document.createElement("li");
    newItem.innerText = item;
    newItem.dataset.index = array.indexOf(item);
    newList.appendChild(newItem);
  });
  return newList;
};

/*
    create new list
    for each item in the array
        render a new item,     
        append new item into the list

    return new list
*/
