import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@UI_Playground Mouse Over Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        mouseOverPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Mouse Over page', async () => {
            await homePage.click_on_link('Mouse Over');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await mouseOverPage.get_title_label()).toBe('Mouse Over');
            expect(await mouseOverPage.get_title_text()).toBe('Placing mouse over an element may lead to changes in the DOM tree. For example the  element may be modified or replaced. It means if you keep a reference to the original element and will try to click on it - it may not work.');
            expect(await mouseOverPage.get_title_2_text()).toBe('This puzzle complicates both recording and playback of a test.');
            expect(await mouseOverPage.get_scenario_label()).toBe('Scenario');
            expect(await mouseOverPage.get_scenario_text()).toBe('Record 2 consecutive link clicks.');
            expect(await mouseOverPage.get_scenario_2_text()).toBe('Execute the test and make sure that click count is increasing by 2.');
            expect(await mouseOverPage.get_playground_label()).toBe('Playground');
            expect(await mouseOverPage.get_click_result()).toBe('The link clicked 0 times.');
            expect(await mouseOverPage.get_click_count()).toBe('0');
        });
    });

    test('Click Button Multiple Times', async ({ 
        page,
        homePage,
        mouseOverPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Mouse Over page', async () => {
            await homePage.click_on_link('Mouse Over');
        });

        await test.step('Click Link Multiple Times and Verify Link Count Increased', async () => {
            await mouseOverPage.click_link();
            await mouseOverPage.click_link();
            
            expect(await mouseOverPage.get_click_count()).toBe('2');
        });

        await test.step('Click Link Multiple Times and Verify Link Count Increased', async () => {
            await mouseOverPage.click_link();
            await mouseOverPage.click_link();
            
            expect(await mouseOverPage.get_click_count()).toBe('4');
        });

        await test.step('Click Link Multiple Times and Verify Link Count Increased', async () => {
            await mouseOverPage.click_link();
            await mouseOverPage.click_link();
            
            expect(await mouseOverPage.get_click_count()).toBe('6');
        });

        await test.step('Click Link Multiple Times and Verify Link Count Increased', async () => {
            await mouseOverPage.click_link();
            await mouseOverPage.click_link();
            
            expect(await mouseOverPage.get_click_count()).toBe('8');
        });
    });
    
});