import { expect } from '@playwright/test';
import { ColorRange } from '../../utils/color_range';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@UI_Playground Click Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        clickPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Click page', async () => {
            await homePage.click_on_link('Click');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await clickPage.get_title_label()).toBe('Click');
            expect(await clickPage.get_title_text()).toBe('Physical mouse click and DOM event emulated click are differently handled by browsers. There are still cases, with sometimes hardly identifiable reasons, when an event based click does not work. The solution for this problem is emulating physical mouse click. This page is specifically designed to ignore event based click.');
            expect(await clickPage.get_scenario_label()).toBe('Scenario');
            expect(await clickPage.get_scenario_text()).toBe('Record button click. The button becomes green after clicking.');
            expect(await clickPage.get_scenario_2_text()).toBe('Then execute your test to make sure that it is able to click the button.');
            expect(await clickPage.get_playground_label()).toBe('Playground');
            expect(await clickPage.get_click_btn_text()).toBe('Button That Ignores DOM Click Event');
        });
    });

    test('Click Button and Verify Color Change', async ({ 
        page,
        homePage,
        clickPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Click page', async () => {
            await homePage.click_on_link('Click');
        });

        await test.step('Click Button Multiple Times and Verify Button is Blue', async () => {
            await clickPage.click_btn();

            const btn = await clickPage.get_click_btn();
            const color = await btn?.evaluate((el) => {
                return window.getComputedStyle(el).backgroundColor;
            });

            // TODO: Verify color is within a range
        });
    });    
});