import { test } from "@playwright/test";
import { RegisterPage } from "./page-objects/register_page_object";
import { ANY_FIRST_NAME, ANY_LAST_NAME, VALID_EMAIL } from "./consts";

test("register process with valid data stores data correctly", async ({ page }) => {
  const registerPage = new RegisterPage(page);

  await registerPage.initialize()
  await registerPage.checkTermsBox();

  await registerPage.typeInFirstName(ANY_FIRST_NAME)
  await registerPage.typeInLastName(ANY_LAST_NAME)
  await registerPage.typeEmail(VALID_EMAIL)

  const thankYou = await registerPage.submit()
  await thankYou.verifyMessageDisplayedWith(ANY_FIRST_NAME)

});
