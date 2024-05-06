import { ERROR_MESSAGE, PROMOTION_TEXT, TERMS_TEXT } from "@/app/components/registration";
import { WELCOME_TEXT } from "@/app/page";
import { expect, test } from "@playwright/test";

test("shows error if one of the fields is empty, then error is cleared", async ({ page }) => {
  await page.goto("/");

  const termsCheckBox = page.getByRole("checkbox", { name: TERMS_TEXT });
  const theButton = page.getByRole("button", { name: "Register" });
  const errorMessage = page.getByText(ERROR_MESSAGE)
  const firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
  
  // required for enabling the button
  await termsCheckBox.check()
  await theButton.click()

  // error appears because all fields are empty
  await expect(errorMessage).toBeVisible()
  
  await firstNameTextBox.fill('a')  
  // error disappears because one of the fields was touched
  await expect(errorMessage).toBeHidden()
  
});
