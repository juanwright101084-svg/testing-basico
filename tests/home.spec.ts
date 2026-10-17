import { test, expect } from "@playwright/test";

test("la página principal carga", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/Create Next App/);
});