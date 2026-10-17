import { describe, it, expect } from "vitest";
import { esPrimo } from "./primos";

describe("esPrimo", () => {
  it("retorna true para un número primo (7)", () => {
    expect(esPrimo(7)).toBe(true);
  });

  it("retorna false para un número no primo (8)", () => {
    expect(esPrimo(8)).toBe(false);
  });

  it("retorna false para un edge case n=1", () => {
    expect(esPrimo(1)).toBe(false);
  });

  it("retorna false para otro edge case: número negativo (-7)", () => {
    expect(esPrimo(-7)).toBe(false);
  });

  it("retorna false para 0", () => {
    expect(esPrimo(0)).toBe(false);
  });

  it("retorna true para 2, el primo más pequeño y el único par", () => {
    expect(esPrimo(2)).toBe(true);
  });

  it("retorna false para un decimal (7.5)", () => {
    expect(esPrimo(7.5)).toBe(false);
  });

  it("retorna true para un primo grande (97)", () => {
    expect(esPrimo(97)).toBe(true);
  });
});