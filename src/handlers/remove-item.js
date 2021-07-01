/* eslint-disable no-restricted-globals */
// import { list } from "../components/list.js";

const itemList = document.getElementsByTagName("ul");

export const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    const div = e.target.parentElement;
    const li = div.parentElement;
    itemList.removeChild(li);
  }
};
