<<<<<<< HEAD
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
=======
/* eslint-disable no-restricted-globals */
const itemList = document.getElementById("items");

export const removeItem = (e) => {
  if (e.target.classList.contains("delete")) {
    const div = e.target.parentElement;
    const li = div.parentElement;
    itemList.removeChild(li);
  }
};
>>>>>>> 96a856a4fe8ee4218d8799904db97a088dfc04ff
