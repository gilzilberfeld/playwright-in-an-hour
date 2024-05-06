import { ERROR_MESSAGE, PROMOTION_TEXT, TERMS_TEXT } from "@/app/components/registration";
import { WELCOME_TEXT } from "@/app/page";
import { Page, Locator } from "@playwright/test";

export function getErrorMessage(page: Page): Locator {
    return page.getByText(ERROR_MESSAGE);
}
export function getButton(page: Page): Locator {
    return page.getByRole('button', { name: 'Register' });
}
export function getTermsCheckbox(page: Page): Locator {
    return page.getByRole('checkbox', { name: TERMS_TEXT });
}
export function getPromotionsCheckbox(page: Page): Locator {
    return page.getByRole('checkbox', { name: PROMOTION_TEXT });
}
export function getTitle(page: Page): Locator {
    return page.getByText(WELCOME_TEXT);
}
export function getFirstName(page: Page): Locator {
    return page.getByRole('textbox', { name: 'First Name' });
}
export function getLastName(page: Page): Locator {
    return page.getByRole('textbox', { name: 'Last Name' });
}
export function getEmail(page: Page): Locator {
    return page.getByRole('textbox', { name: 'Email' });
}
