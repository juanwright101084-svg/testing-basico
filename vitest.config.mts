import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/*.test.{js,ts,tsx}"],
    exclude: ["tests/**", "node_modules/**", ".next/**"],
  },
});
