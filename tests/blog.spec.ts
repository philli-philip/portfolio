import { test, expect } from "@playwright/test";

test("Some blog post", async ({ page }) => {
  await page.goto("/blog");

  await expect(page.getByRole("listitem")).toBeVisible();
});

test("Filter by category", async ({ page }) => {
  await page.goto("/blog");
  await page.getByRole("button", { name: "Opinion" }).click();
  await expect(
    page.getByText("Design Deliveries are not the goal")
  ).toBeHidden();
  await page.getByRole("button", { name: "All" }).click();
  await expect(
    page.getByText("Design Deliveries are not the goal")
  ).toBeVisible();
});
