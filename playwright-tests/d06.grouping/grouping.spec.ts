import { PROMOTION_TEXT, TERMS_TEXT } from "@/app/components/registration";
import { WELCOME_TEXT } from "@/app/page";
import { Locator, expect, test } from "@playwright/test";


test.describe('registration page tests', ()=> {
  let theTitle : Locator
  let promotions : Locator
  let theButton : Locator
  let termsCheckBox : Locator
  let firstNameTextBox : Locator
  let lastNameTextBox : Locator
  let emailTextBox : Locator
  let thankYouMessage : Locator

  test.beforeEach(async ({page})=> {
    await page.goto("/");
    
    theTitle = page.getByText(WELCOME_TEXT);
    promotions = page.getByRole("checkbox", { name: PROMOTION_TEXT });
    theButton = page.getByRole("button", { name: "Register" });
    termsCheckBox = page.getByRole("checkbox", { name: TERMS_TEXT });
    firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
    lastNameTextBox = page.getByRole("textbox", { name: "Last Name" });
    emailTextBox = page.getByRole("textbox", { name: "Email" });
    thankYouMessage = page.getByText("Thank you, gil!");
    
  })

  test("registration page opens correctly", async () => {
    await expect(theTitle).toBeVisible();
    await expect(promotions).toBeChecked();
    await expect(theButton).toBeDisabled();
  });
  
  test("register process with valid data completes on welcome page", async ({ page }) => {
    
    await termsCheckBox.check();
    await firstNameTextBox.fill("gil");
    await lastNameTextBox.fill("zilberfeld");
    await emailTextBox.fill("gil@testingil.com");
    await theButton.click();
    
    // After navigation
    await expect(thankYouMessage).toBeVisible();
  });
  
})