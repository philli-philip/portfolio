import { test, expect } from "@playwright/test";

test.describe("Todo Group", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000/code/todo");
  });
  test("has title", async ({ page }) => {
    // Expect a title "to contain" a substring.
    await expect(page.getByRole("heading", { name: "Todo" })).toBeVisible();
  });

  test("create todo", async ({ page }) => {
    await page.getByPlaceholder("Add a task...").fill("test todo");
    await page.getByPlaceholder("Add a task...").press("Enter");
    await expect(page.locator("input:nth-child(2)").first()).toHaveValue(
      "test todo"
    );
  });
  test("delete todo", async ({ page }) => {
    await page.getByRole("button", { name: "delete" }).first().click();
    await expect(page.locator("input:nth-child(2)").first()).not.toHaveValue(
      "2nd test"
    );
  });
});
