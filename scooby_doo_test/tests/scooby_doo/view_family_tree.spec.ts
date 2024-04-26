import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_scooby_doo';

test.describe('Scooby-Doo Family Tree Application Tests', 
    {
        tag:['@Scooby-Doo']
    },
    () => {
    // Skipped due to link removed for now
    test.skip('Verify Family Tree', async ({ 
        page,
        loginPage,
        headerComp,
    }) => {
        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Navigate to the Family Tree and Verify URL', async () => {
            await headerComp.click_family_tree();

            // Verify the family tree page is displayed
            await expect(page).toHaveURL(/view_gang_tree/);
        });
    });

    // Skipped due to link removed for now  
    test.skip('Verify Family Tree Accessibility', 
    {
        tag:['@Accessibility']
    },
    async ({ 
        loginPage,  
        headerComp,
        accessibilityBuilder 
    }) => {
        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Navigate to the Family Tree', async () => {
            await headerComp.click_family_tree();
        });

        await test.step('Verify family tree table page accessibility', async () => {
            const accessibilityScanResults = await accessibilityBuilder.analyze();
            expect(accessibilityScanResults.violations).toEqual([]);
        });
    });
});