/* eslint-disable eqeqeq */
/* eslint-disable no-param-reassign */
const itemList = document.getElementById("items");

export const filterItems = (e) => {
  // convert text to lowercase
  const text = e.target.value.toLowerCase();
  // get lis (html collection, not array)
  const items = itemList.getElementsByTagName("li");
  // convert to array
  Array.from(items).forEach((item) => {
    const itemName = item.firstChild.textContent;
    if (itemName.toLocaleLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
};
