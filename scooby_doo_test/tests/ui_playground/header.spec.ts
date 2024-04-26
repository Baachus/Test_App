import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Header Component Tests for UI Test Automation Playground', 
    {
        tag:['@UI_Playground']
    },
    () => {
    test('Verify Home Link on Header Sends User to Right Page', async ({ 
        page,
        headerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the home link and verify it directs to the right page', async () => {
            await headerComp.click_home();

            // Expect a title "to contain" a string
            await expect(page).toHaveURL(/home/);
        });
    });

    test('Verify Resources Link on Header Sends User to Right Page', async ({ 
        page,
        headerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the resources link and verify it directs to the right page', async () => {
            await headerComp.click_resources();

            // Expect a url "to contain" a substring.
            await expect(page).toHaveURL(/resources/);
        });
    });

    test('Verify Home Icon on Header Sends User to Right Page', async ({ 
        page,
        headerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the home icon and verify it directs to the right page', async () => {
            await headerComp.click_home_icon();
            
            // Expect a title "to be" a string
            await expect(page).toHaveURL('https://www.uitestingplayground.com');
        });
    });
});