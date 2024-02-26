import { expect } from '@playwright/test';

async function testLogin(page) {
  await page.goto('http://127.0.0.1:8000/family_tree/login/?next=/family_tree/');
  await page.getByTestId('username').fill('AutomationUser');
  await page.getByTestId('password').fill('Password$1');
  await page.getByTestId('login').click();
  await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
}

export { testLogin };