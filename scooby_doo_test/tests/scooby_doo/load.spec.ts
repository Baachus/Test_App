import { test } from '@playwright/test';
import { testLogin } from './commands/login';

test('Artillery', async ({ page }) => {
    await testLogin(page);
});