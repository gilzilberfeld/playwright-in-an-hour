import { PROMOTION_TEXT, TERMS_TEXT } from "@/app/components/registration";
import { WELCOME_TEXT } from "@/app/page";
import { expect, test } from "@playwright/test";

test("registration page opens correctly", async ({ page }) => {
  // Navigate
  await page.goto("/");

  // Find locators
  const theTitle = page.getByText(WELCOME_TEXT);
  const promotions = page.getByRole("checkbox", { name: PROMOTION_TEXT });
  const theButton = page.getByRole("button", { name: "Register" });

  // Expectations
  await expect(theTitle).toBeVisible();
  await expect(promotions).toBeChecked();
  await expect(theButton).toBeDisabled();
});

test("register process with valid data completes on welcome page", async ({ page }) => {
  await page.goto("/");
  const termsCheckBox = page.getByRole("checkbox", { name: TERMS_TEXT });
  const theButton = page.getByRole("button", { name: "Register" });
  const firstNameTextBox = page.getByRole("textbox", { name: "First Name" });
  const lastNameTextBox = page.getByRole("textbox", { name: "Last Name" });
  const emailTextBox = page.getByRole("textbox", { name: "Email" });

  // Operations
  await termsCheckBox.check();
  await firstNameTextBox.fill("gil");
  await lastNameTextBox.fill("zilberfeld");
  await emailTextBox.fill("gil@testingil.com");
  await theButton.click();

  // After navigation
  const thankYouMessage = page.getByText("Thank you, gil!");
  await expect(thankYouMessage).toBeVisible();
});
