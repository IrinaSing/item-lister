import { removeItem } from "../handlers/remove-item.js";

const listContainer = document.getElementById("list-container");
console.log("listcontainer", listContainer);
// delete event
listContainer.addEventListener("click", removeItem);
