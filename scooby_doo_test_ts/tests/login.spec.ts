import { test, expect } from '@playwright/test';

test('Scooby-Doo Login Title Verification', async ({ page }) => {
  await page.goto('/family_tree');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Scooby-Doo Family Tree/);
});

test('Test login to family tree application', async ({ page }) => {
    await page.goto('/family_tree');

    // Fill input[name="username"]
    await page.fill('input[name="username"]', 'AutomationUser');

    // Fill input[name="password"]
    await page.fill('input[name="password"]', 'Password$1');

    // Click button:has-text("Login")
    await page.click('input:has-text("Login")');

    // Verify user is logged in successfully
    await expect(page.getByText("Logout")).toBeVisible();

    // Click button:has-text("Logout")
    await page.click('a:has-text("Logout")');

    // Verify user is logged out successfully
    await expect(page.getByTestId("login")).toBeVisible();
});

test('Invalid login to family tree application', async ({ page }) => {
    // Navigate to login page
    await page.goto('/family_tree');

    // Fill input[name="username"]
    await page.fill('input[name="username"]', 'FakeUser');

    // Fill input[name="password"]
    await page.fill('input[name="password"]', 'Password$1');

    // Click button:has-text("Login")
    await page.click('input:has-text("Login")');

    // Verify user is not logged in
    await expect(page.getByText("Invalid Login Credentials")).toBeVisible();
});