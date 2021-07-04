import { removeItem } from "../handlers/remove-item.js";

const itemList = document.getElementById("item-list"); // null
// delete event
itemList.addEventListener("click", removeItem);
