import { expect, test } from "@playwright/test";

test.describe("My Account page", () => {
  //   let page: Page;
  //   test.beforeAll(async ({ browser }) => {
  //     page = await browser.newPage();
  //     await page.goto("/my-account");
  //     await page.locator("#username").fill("practiceuser1");
  //     await page.locator("#password").fill("PracticePass1!");
  //     await page.locator("[value='Log in']").click();
  //     await expect(page.locator("li a:has-text('Log out')")).toBeVisible();
  //   });

  test("Access orders", async ({ page }) => {
    await page.goto("/my-account");
    await page.locator(`li a[href*='orders']`).click();
    await expect(page).toHaveURL(/.*orders/);
  });

  test("Access downloads", async ({ page }) => {
    await page.goto("/my-account");
    await page.locator(`li a[href*='downloads']`).click();
    await expect(page).toHaveURL(/.*downloads/);
  });

  test.describe("Account Page", () => {
    test.use({ storageState: "notLoggedInState.json" });

    test("Verify login and register is visible", async ({ page }) => {
      await page.goto("/my-account");
      await expect(page.locator('form[class*="login"]')).toBeVisible();
      await expect(page.locator('form[class*="register"]')).toBeVisible();
    });
  });
});
