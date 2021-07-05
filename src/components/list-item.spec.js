import { listItem } from "./list-item.js";

const liEx = { text: "Item", isChecked: false, id: Date.now() };

describe("listItem: renders a DOM element <li>", () => {
  describe("renders li", () => {
    const actual = listItem(liEx);

    it('has tagName: "LI"', () => {
      expect(actual.tagName).toEqual("LI");
    });
    it('has class name "list-group-item"', () => {
      expect(actual.className).toEqual("list-group-item");
    });
    it("has childElementCount: 1", () => {
      expect(actual.childElementCount).toEqual(1);
    });

    describe(`first child`, () => {
      const actualChild = actual.children[0];
      it('has tagName: "DIV"', () => {
        expect(actualChild.tagName).toEqual("DIV");
      });
      it('has class name "form-check"', () => {
        expect(actualChild.className).toEqual("form-check");
      });
      it("has childElementCount: 2", () => {
        expect(actualChild.childElementCount).toEqual(2);
      });

      describe(`first grand child`, () => {
        const actualGrandChild = actualChild.children[0];
        it('has tagName: "INPUT"', () => {
          expect(actualGrandChild.tagName).toEqual("INPUT");
        });
        it('has class name "checkbox"', () => {
          expect(actualGrandChild.className).toEqual("checkbox");
        });
        it("has atribute type: checkbox", () => {
          expect(actualGrandChild.getAttribute("type")).toEqual("checkbox");
        });
      });
    });
  });
});
