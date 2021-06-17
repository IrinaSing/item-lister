/* eslint-disable no-restricted-globals */
const itemList = document.getElementById("items");

export const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    // eslint-disable-next-line no-alert
    if (confirm("Are you sure?")) {
      const li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
};
