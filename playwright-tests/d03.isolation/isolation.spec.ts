import { PROMOTION_TEXT, TERMS_TEXT } from "@/app/components/registration";
import { WELCOME_TEXT } from "@/app/page";
import { expect, test } from "@playwright/test";


test('opening same page in same browser window', async ({ context }) => {
  const firstPage = await context.newPage()
  await firstPage.goto("/")
  const firstTitle = firstPage.getByText(WELCOME_TEXT);
  await expect(firstTitle).toBeVisible()
  
  const secondPage = await context.newPage()
  await secondPage.goto("/")
  const secondTitle = secondPage.getByText(WELCOME_TEXT);
  await expect(secondTitle).toBeVisible()
})



test('opening same page in different browser windows', async ({ browser }) => {
  const firstPage = await browser.newPage()
  await firstPage.goto("/")
  const firstTitle = firstPage.getByText(WELCOME_TEXT);
  await expect(firstTitle).toBeVisible()
  
  const secondPage = await browser.newPage()
  await secondPage.goto("/")
  const secondTitle = secondPage.getByText(WELCOME_TEXT);
  await expect(secondTitle).toBeVisible()
})

