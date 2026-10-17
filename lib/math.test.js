import { describe, it, expect } from "vitest";
import { sum } from "./math";

describe("sum function", () => {
  it("should return 5 when adding 2+3", () => {
    expect(sum(2, 3)).toBe(5);
  });

  it("should return negative numbers correctly", () => {
    expect(sum(-2, -3)).toBe(-5);
  });
});