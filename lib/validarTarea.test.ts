import { describe, it, expect } from "vitest";
import { validarTarea } from "./validarTarea";

describe("validarTarea", () => {
  it("acepta un objeto válido", () => {
    const result = validarTarea({ titulo: "Estudiar Vitest", prioridad: "alta" });
    expect(result.success).toBe(true);
  });

  it("rechaza un título de menos de 3 caracteres", () => {
    const result = validarTarea({ titulo: "ab", prioridad: "media" });
    expect(result.success).toBe(false);
  });

  it("rechaza una prioridad fuera del enum", () => {
    const result = validarTarea({ titulo: "Estudiar Vitest", prioridad: "urgente" });
    expect(result.success).toBe(false);
  });

  it("rechaza un objeto sin el campo titulo", () => {
    const result = validarTarea({ prioridad: "baja" });
    expect(result.success).toBe(false);
  });

  // BONUS: documenta que el enum distingue mayúsculas de minúsculas
  it("rechaza la prioridad en mayúsculas ('ALTA')", () => {
    const result = validarTarea({ titulo: "Estudiar Vitest", prioridad: "ALTA" });
    expect(result.success).toBe(false);
  });
});