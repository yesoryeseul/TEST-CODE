const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("is created empty", () => {
    expect(stack.size()).toBe(0);
  });

  it("allow to push item", () => {
    stack.push("🍌");
    expect(stack.size()).toBe(1);
  });

  describe("pop", () => {
    it("stack이 비어진 상태라면 에러를 던진다", () => {
      expect(() => stack.pop()).toThrow("Stack is empty");
    });

    it("마지막으로 푸시된 아이템을 리턴하고 기존 스택에서 제거한다.", () => {
      stack.push("🍌");
      stack.push("💛");

      expect(stack.pop()).toBe("💛");
      expect(stack.size()).toBe(1);
    });
  });

  describe("pop", () => {
    it("stack이 비어진 상태라면 에러를 던진다", () => {
      expect(() => stack.peek()).toThrow("Stack is empty");
    });

    it("마지막 푸시된 아이템을 리턴하지만 스택에서 아이템을 유지한다.", () => {
      stack.push("🍌");
      stack.push("💛");

      expect(stack.peek()).toBe("💛");
      expect(stack.size()).toBe(2);
    });
  });
});
