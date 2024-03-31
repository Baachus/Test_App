import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_scooby_doo';

test.describe('@Scooby_Doo Scooby-Doo Family Tree Application Tests', () => {
    test('Verify Family Tree', async ({ 
        page,
        loginPage,
        headerComp,
    }) => {
        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Navigate to the Family Tree and Verify URL', async () => {
            // Navigate to the family tree page
            await headerComp.click_family_tree();

            // Verify the family tree page is displayed
            await expect(page).toHaveURL(/view_gang_tree/);
        });
    });


    test('@Accessibility Verify Family Tree Accessibility', async ({ 
        loginPage, 
        accessibilityBuilder 
    }) => {
        
        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Verify family tree table page accessibility', async () => {
            const accessibilityScanResults = await accessibilityBuilder.analyze();
            expect(accessibilityScanResults.violations).toEqual([]);
        });
    });
});