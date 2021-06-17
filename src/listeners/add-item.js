import { addItem } from "../handlers/add-item.js";

const form = document.getElementById("addForm");
// form submit event
form.addEventListener("submit", addItem);
