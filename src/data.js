/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */

export const state = {
  items: [{ text: "Item 1", isChecked: false, id: Date.now() }],
};
console.log("initial state:", { ...state });
