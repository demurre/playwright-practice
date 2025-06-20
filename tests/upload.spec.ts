import { test, expect } from "@playwright/test";
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");
import CartPage from "../pages/cart.page";

test.describe("Upload file", () => {
  let cartPage: CartPage;

  const fileName = ["3mb-file.pdf", "coolcat.png"];

  for (const name of fileName) {
    test(`should upload a ${name} file`, async ({ page }) => {
      cartPage = new CartPage(page);

      await page.goto("https://practice.sdetunicorns.com/cart/");

      // provide test file path
      const filePath = path.join(__dirname, `../data/${name}`);

      // upload test file
      cartPage.uploadComponent().uploadFile(filePath);

      // hardcoded sleep
      // await page.waitForTimeout(5000);

      // wait for condition
      // await page
      //   .locator("#wfu_messageblock_header_1_1")
      //   .waitFor({ state: "visible", timeout: 10000 });

      // assertion (assertion wait)
      await expect(cartPage.uploadComponent().successMessage).toContainText(
        "uploaded successfully",
        { timeout: 10000 }
      );
    });
  }

  test.skip("should upload a test file on a hidden input field", async ({
    page,
  }) => {
    await page.goto("https://practice.sdetunicorns.com/cart/");

    // provide test file path
    const filePath = path.join(__dirname, "../data/coolcat.png");

    // dom manipulation
    await page.evaluate(() => {
      const selector = document.querySelector("input#upfile_1");
      if (selector) selector.className = "";
    });

    // upload test file
    await page.setInputFiles("input#upfile_1", filePath);

    await page.locator("#upload_1").click();

    await expect(page.locator("#wfu_messageblock_header_1_1")).toContainText(
      "uploaded successfully"
    );
  });
});
