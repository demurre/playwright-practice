import { test, expect } from "@playwright/test";
import HomePage from "../pages/home.page";

test.describe("Home page", () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigate();
  });

  test("Open Homepage and verify title", async ({ page }) => {
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test.skip("Open About page and verify title", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/about/");

    await expect(page).toHaveTitle("About – Practice E-Commerce Site");
  });

  test("Click get started button using CSS Selector", async ({ page }) => {
    // await page.locator("#get-started").click();
    await homePage.getStartedBtn.click();

    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify heading text is visible using text selector", async ({
    page,
  }) => {
    // const headingText = page.locator("text=Think different. Make different.");
    const headingText = await homePage.headingText;

    await expect(headingText).toBeVisible();
  });

  test("Verify home link is enabled using text and css selector", async ({
    page,
  }) => {
    // const homeText = await page.locator("#zak-primary-menu >> text=Home");
    // const homeText = page.locator('#zak-primary-menu:has-text("Home")');
    const homeText = await homePage.homeLink;

    await expect(homeText).toBeEnabled();
  });

  test("Verify search icon is visible using xpath selector", async ({
    page,
  }) => {
    // const searchIcon = page
    //   .locator(
    //     '//*[@id="zak-masthead"]//*[@class="zak-icon zakra-icon--magnifying-glass"]'
    //   )
    //   .first();
    const searchIcon = await homePage.searchIcon.first();

    await expect(searchIcon).toBeVisible();
  });

  test("Vetify text of all nav links", async ({ page }) => {
    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];

    // find the nav links
    // const navLinks = page.locator("#zak-primary-menu li[id*=menu]");
    // const navLinks = await homePage.navLinks;

    // print out all the links
    // for (const el of await navLinks.elementHandles()) {
    //   console.log(await el.textContent());
    // }

    expect(await homePage.getNavLinksText()).toEqual(expectedLinks);
    // expect(await navLinks.allTextContents()).toEqual(expectedLinks);
    // expect(await navLinks.textContent()).toEqual(expectedLinks[3]);
  });
});
