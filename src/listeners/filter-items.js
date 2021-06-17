import { filterItems } from "../handlers/filter-items.js";

const filter = document.getElementById("filter");
// filter event
filter.addEventListener("keyup", filterItems);
