import { expect } from '@playwright/test';
import test from './test_setup';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Load Delay Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        loadDelayPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Load Delay page', async () => {
            await homePage.click_on_link('Load Delay');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await loadDelayPage.get_title_label()).toBe('Load Delays');
            expect(await loadDelayPage.get_title_text()).toBe('Server response may often come with an unpredictable delay. So a test must be able to patiently wait for page loaded event from a browser.');
            expect(await loadDelayPage.get_scenario_label()).toBe('Scenario');
            expect(await loadDelayPage.get_scenario_text()).toBe('Navigate to Home page and record Load Delays link click and button click on this page.');
            expect(await loadDelayPage.get_scenario_2_text()).toBe('Then play the test. It should wait until page is loaded.');
            expect(await loadDelayPage.get_playground_label()).toBe('Playground');
            expect(await loadDelayPage.get_delay_btn_text()).toBe('Button Appearing After Delay');
        });
    });

    test('Click Button Multiple Times', async ({ 
        page,
        homePage,
        loadDelayPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Load Delay page', async () => {
            await homePage.click_on_link('Load Delay');
        });

        await test.step('Verify Button is Present After Load Delay Navigation', async () => {
            expect(await loadDelayPage.get_delay_btn_text()).toBe('Button Appearing After Delay');
        });
    });
    
});