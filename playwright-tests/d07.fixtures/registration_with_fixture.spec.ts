import { ANY_FIRST_NAME, VALID_EMAIL } from './consts';
import { test } from './fixtures/registration_fixture';

test('should add an item', async ({ registerPage }) => {
    await registerPage.typeInFirstName(ANY_FIRST_NAME);
    await registerPage.typeInLastName(ANY_FIRST_NAME);
    await registerPage.typeEmail(VALID_EMAIL);

    const thankYou = await registerPage.submit();
    await thankYou.verifyMessageDisplayedWith(ANY_FIRST_NAME);
});
