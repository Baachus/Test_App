import { expect } from '@playwright/test';
import test from './test_setup';

test.describe('Scooby-Doo Family Tree Application Login Tests', () => {
    test('Login Title Verification', async ({ page }) => {
        await page.goto('/family_tree');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveTitle(/Scooby-Doo Family Tree/);
    });

    test('Successful Login to Scooby-Doo Family Tree Application', async ({ 
        page,
        loginPage,
        headerComp
    }) => {
        // Log into the family tree application
        await loginPage.family_tree_login();

        // Verify user is logged in successfully
        await expect(page.getByText("Logout")).toBeVisible();

        // Log out and verify logged out successfully
        await headerComp.logout();
        await expect(page.getByTestId("login")).toBeVisible();
    });

    test('Invalid Login to Scooby-Doo Family Tree Application', async ({ 
        page, 
        loginPage 
    }) => {
        // Attempt to log into the family tree application with fake username
        await loginPage.family_tree_login('FakeUser', 'Password$1');

        // Verify user is not logged in
        await expect(page.getByText("Invalid Login Credentials")).toBeVisible();
    });

    test('Verify Login Page Accessibility', async ({ page, accessibilityBuilder }) => {
        await page.goto('/family_tree');

        await test.step('Verify login page accessibility', async () => {
            const accessibilityScanResults = await accessibilityBuilder.analyze();
            expect(accessibilityScanResults.violations).toEqual([]);
        });
    });
});