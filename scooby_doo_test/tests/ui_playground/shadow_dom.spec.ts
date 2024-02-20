import { expect } from '@playwright/test';
import test from './test_setup';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Shadow DOM Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        shadowDOMPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Shadow DOM page', async () => {
            await homePage.click_on_link('Shadow DOM');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await shadowDOMPage.get_title_label()).toBe('Shadow DOM');
            expect(await shadowDOMPage.get_title_text()).toBe('This is a page with a Shadow DOM component guid-generator. Using it one can generate a guid and copy it to the clipboard.');
            expect(await shadowDOMPage.get_scenario_label()).toBe('Scenario');
            expect(await shadowDOMPage.get_scenario_text()).toBe('Create a test that clicks on  and then on  buttons. This sequence of steps generates new guid and copies it to the clipboard.');
            expect(await shadowDOMPage.get_scenario_2_text()).toBe('Add an assertion step to your test to compare the value from the clipboard with the value of the input field.');
            expect(await shadowDOMPage.get_scenario_3_text()).toBe('Then execute the test to make sure that the assertion step is not failing.');
            expect(await shadowDOMPage.get_playground_label()).toBe('Playground');
            expect(await shadowDOMPage.get_playground_text()).toBe('GUID Generator:');
        });
    });

    test('Generate GUID', async ({
        page,
        homePage,
        shadowDOMPage,
        }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Shadow DOM page', async () => {
            await homePage.click_on_link('Shadow DOM');
        });

        await test.step('Generate GUID', async () => {
            await shadowDOMPage.click_generate_guid_btn();
            await expect(page.locator('#editField')).toBeVisible();
        });
    });
});