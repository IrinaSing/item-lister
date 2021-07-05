import { deleteBtn } from "./delete-btn.js";

describe("deleteBtn: renders a DOM button element", () => {
  describe('button element "delete"', () => {
    const actual = deleteBtn("btn btn-danger btn-sm float-right delete");

    it('has tagName: "BUTTON"', () => {
      expect(actual.tagName).toEqual("BUTTON");
    });
    it('has class lenght equal to 5:"', () => {
      expect(actual.classList.length).toEqual(5);
    });
    it("has childElementCount: 0", () => {
      expect(actual.childElementCount).toEqual(0);
    });
  });
});
