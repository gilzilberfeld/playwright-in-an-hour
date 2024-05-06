import { Locator, Page, expect } from "@playwright/test";
import { THANK_YOU_PAGE } from "../consts";

const THANK_YOU_ERROR = "Who Are You?";
const THANK_YOU = "Thank you, ";

export class ThankYouPage {
  async verifyMessageDisplayedWith(name: string) {
    await expect(this.message(name)).toBeVisible()
  }
  
  page: Page;
  errorMessage!: Locator;

  constructor(page: Page) {
    this.page = page;
  }

  async initialize() {
    await this.page.goto(THANK_YOU_PAGE);
    this.errorMessage = this.page.getByText(THANK_YOU_ERROR);
  }

  message(name: string): Locator {
    const thankYouMessage = THANK_YOU + name +'!';
    return this.page.getByText(thankYouMessage);
  }

  async verifyErrorIsVisible() {
    await expect(this.errorMessage).toBeVisible()
  }
}