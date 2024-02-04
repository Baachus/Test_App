import { expect } from '@playwright/test';
import test from './test_setup';

test('Verify Family Tree', async ({ 
    page,
    loginPage,
    headerComp,
 }) => {
    // Log into the family tree application
    await loginPage.family_tree_login();

    // Navigate to the family tree page
    await headerComp.click_family_tree();

    // Verify the family tree page is displayed
    await expect(page).toHaveURL(/view_gang_tree/);
});
