import { test, expect } from "@playwright/test";
import ContactPage from "../pages/contact.page";
import { faker } from "@faker-js/faker";

test.describe("Contact page", () => {
  let contactPage: ContactPage;

  test("Fill contact form and verify success message", async ({ page }) => {
    contactPage = new ContactPage(page);

    await contactPage.navigate();

    // await page.pause();

    // fill form
    await contactPage.submitForm(
      faker.person.firstName(),
      faker.internet.email(),
      faker.phone.number(),
      faker.lorem.paragraph()
    );

    // add soft assertion
    // await expect
    //   .soft(contactPage.messageText)
    //   .toHaveText(
    //     "Thanks for contacting us! We will be in touch with you shortly"
    //   );

    await expect(contactPage.successAlert).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
