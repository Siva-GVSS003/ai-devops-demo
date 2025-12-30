const add = require("./index");

describe("add", () => {
  test("adds two positive numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two negative numbers", () => {
    expect(add(-2, -3)).toBe(-5);
  });

  test("adds positive and negative number", () => {
    expect(add(5, -3)).toBe(2);
  });

  test("adds zero to a number", () => {
    expect(add(5, 0)).toBe(5);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.5)).toBe(4);
  });
});
