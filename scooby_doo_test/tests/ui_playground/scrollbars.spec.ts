import { expect } from '@playwright/test';
import test from './test_setup';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Scrollbars Data Tests', () => {
    test('Verify Title, labels, and text', async ({ 
        page,
        homePage,
        scrollbarsPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Scrollbars page', async () => {
            await homePage.click_on_link('Scrollbars');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await scrollbarsPage.get_title_label()).toBe('Scrollbars');
            expect(await scrollbarsPage.get_title_text()).toBe('An application may use native or custom scrollbars and some elements may be out of view. A test scenario may require to ensure that an element is visible on screen and this may require scrolling.');
            expect(await scrollbarsPage.get_scenario_label()).toBe('Scenario');
            expect(await scrollbarsPage.get_scenario_text()).toBe('Find a button in the scroll view and record button click.');
            expect(await scrollbarsPage.get_scenario_2_text()).toBe('Update your test to automatically scroll the button into a visible area.');
            expect(await scrollbarsPage.get_scenario_3_text()).toBe('Then execute your test to make sure it works.');
            expect(await scrollbarsPage.get_playground_label()).toBe('Playground');
            expect(await scrollbarsPage.get_scrollbars_btn_text()).toBe('Hiding Button');
        });
    });

    test('Click a Hidden Button', async ({ 
        page,
        homePage,
        scrollbarsPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Scrollbars page', async () => {
            await homePage.click_on_link('Scrollbars');
        });

        await test.step('Click the Hiding Button', async () => {
            await scrollbarsPage.click_scrollbars_btn();
            expect(await scrollbarsPage.get_scrollbars_btn_text_visible()).toBe(true);
        });
    });
});