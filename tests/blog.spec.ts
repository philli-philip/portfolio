import { test, expect } from "@playwright/test";

test("some blog post", async ({ page }) => {
  await page.goto("/blog");

  expect(page.getByRole("button", { name: "All" })).toBeVisible();
});
