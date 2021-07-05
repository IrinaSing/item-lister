import { removeItem } from "../handlers/remove-item.js";

const listContainer = document.getElementById("list-container");
// delete event
listContainer.addEventListener("click", removeItem);
