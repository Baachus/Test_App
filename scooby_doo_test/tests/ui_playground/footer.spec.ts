import { Page, expect } from '@playwright/test';
import test from './test_setup';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Footer Component Tests for UI Test Automation Playground', () => {
    test('Verify Star Project Link on Footer Sends User to Right Page', async ({ 
        page,
        footerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the star project link and verify it directs to the right page', async () => {
            // Listen for the popup event before clicking the link
            const newPagePromise = new Promise<Page>(resolve => page.once('popup', resolve));

            // Click the link that opens a new page
            await footerComp.star_project();

            // Wait for the new page to open
            const newPage = await newPagePromise;

            // Check the URL of the new page
            await expect(newPage.url()).toBe('https://github.com/inflectra/ui-test-automation-playground');
        });
    });

    test('Verify Fork Project Link on Footer Sends User to Right Page', async ({ 
        page,
        footerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the fork project link and verify it directs to the right page', async () => {
            await footerComp.click_fork_project();

            // Expect a title "to be" a string
            await expect(page).toHaveURL('https://github.com/inflectra/ui-test-automation-playground');
        });
    });

    test('Verify Rapise Link on Footer Sends User to Right Page', async ({ 
        page,
        footerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the Rapise link and verify it directs to the right page', async () => {
            await footerComp.click_rapise();

            // Expect a title "to be" a string
            await expect(page).toHaveURL('https://www.inflectra.com/Rapise/');
        });
    });

    test('Verify Inflectra Link on Footer Sends User to Right Page', async ({ 
        page,
        footerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the Inflectra link and verify it directs to the right page', async () => {
            await footerComp.click_inflectra();

            // Expect a title "to be" a string
            await expect(page).toHaveURL('https://www.inflectra.com/');
        });
    });

    test('Verify Apache License Link on Footer Sends User to Right Page', async ({ 
        page,
        footerComp
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the Apache License link and verify it directs to the right page', async () => {
            await footerComp.click_apache();

            // Expect a title "to be" a string
            await expect(page).toHaveURL('https://www.apache.org/licenses/LICENSE-2.0');
        });
    });
});