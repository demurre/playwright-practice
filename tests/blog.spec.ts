import { test, expect } from "@playwright/test";
import BlogPage from "../pages/blog.page";

test.describe("Blog page", () => {
  let blogPage: BlogPage;

  test("Verify recent posts", async ({ page }) => {
    blogPage = new BlogPage(page);

    await blogPage.navigate();

    // get the recent posts
    // const recentPosts = blogPage.recentPosts;

    // loop the list and assert the char length > 10
    for (const el of await blogPage.recentPosts.elementHandles()) {
      console.log((await el.textContent())?.trim());
      expect((await el.textContent())?.trim()?.length).toBeGreaterThan(10);
    }

    // total length = 5
    expect(await blogPage.recentPosts.count()).toEqual(5);
  });
});
