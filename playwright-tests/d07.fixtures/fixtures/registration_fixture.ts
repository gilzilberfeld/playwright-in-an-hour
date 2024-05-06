import { test as base } from '@playwright/test';
import { RegisterPage } from '../page-objects/register_page_object';

// create a reusable "RegisterPage" fixture.
export const test = base.extend<{ registerPage: RegisterPage }>({
    registerPage: async ({ page }, use) => {
    
    // create the page object
    const thePage = new RegisterPage(page);
    
    // common setup
    await thePage.initialize()
    await thePage.checkTermsBox();

    // invokes the test part
    await use(thePage);

    // common cleanup
  },
});

