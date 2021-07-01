/* eslint-disable no-console */
/* eslint-disable import/no-unresolved */

export const state = {
  items: [{ text: "Item", isChecked: false, id: Date.now() }],
};
console.log("initial state:", { ...state });
