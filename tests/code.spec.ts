import { test, expect } from "@playwright/test";

test("Has Challenges", async ({ page }) => {
  await page.goto("/code");

  await page.getByText("Advanced Filtering").click();
  await expect(page.getByText("Visit project")).toBeVisible();
  await page.getByLabel("Close").click();
});

test("Filter by item", async ({ page }) => {
  await page.goto("/code");

  await page.getByText("intermediary").first().click();
  await expect(page.getByText("Clock App")).toBeVisible();
  await expect(page.getByText("PowerBank")).toBeHidden();
  await page.getByLabel("Remove difficulty filter").click();
  await expect(page.getByText("PowerBank")).toBeVisible();
});

test("Filter through Menu", async ({ page }) => {
  await page.goto("/code");

  await page.getByText("Filter").first().click();
  await page.getByText("Difficulty").click();
  await page.getByText("Beginner").first().click();
  await expect(page.getByText("Advice Generator")).toBeVisible();
  await expect(page.getByText("PowerBank")).toBeHidden();
  await page.getByLabel("Remove difficulty filter").click();
  await expect(page.getByText("PowerBank")).toBeVisible();
});
