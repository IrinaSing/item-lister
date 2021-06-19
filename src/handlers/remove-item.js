/* eslint-disable no-restricted-globals */
const itemList = document.getElementById("items");

export const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    const div = e.target.parentElement;
    const li = div.parentElement;
    itemList.removeChild(li);
  }
};
