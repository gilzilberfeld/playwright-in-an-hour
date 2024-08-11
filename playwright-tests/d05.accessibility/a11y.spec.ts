import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.skip("registration page should not have accessibility issues", async ({ page }) => {
  await page.goto("/");

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); 

//  expect(accessibilityScanResults.violations.length).toEqual(0); 
  expect(accessibilityScanResults.violations).toEqual([]); 
});
