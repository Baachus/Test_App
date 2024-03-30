import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@UI_Playground Non-Breaking Space Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        nonBreakingPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Non-Breaking Space page', async () => {
            await homePage.click_on_link('Non-Breaking Space');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await nonBreakingPage.get_title_label()).toBe('Non-Breaking Space');
            expect(await nonBreakingPage.get_title_text()).toBe('There are cases in test automation when something should obviously work but for some reason it does not. Searching for an element by its text is one of those cases. Text caption may contain non-breaking spaces that have no visual difference from generic spaces.');
            expect(await nonBreakingPage.get_scenario_label()).toBe('Scenario');
            expect(await nonBreakingPage.get_scenario_text()).toBe("Use the following xpath to find the button in your test://button[text()='My Button']");
            expect(await nonBreakingPage.get_scenario_2_text()).toBe("Notice that the XPath does not work. Change the space between 'My' and 'Button' to a non-breaking space. This time the XPath should be valid.");
            expect(await nonBreakingPage.get_playground_label()).toBe('Playground');
            expect(await nonBreakingPage.get_button_text()).toContain('My');
            expect(await nonBreakingPage.get_button_text()).toContain('Button');
        });
    });
    
    test('Verify My Button has no Space', async ({ 
        page,
        homePage,
        nonBreakingPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Non-Breaking Space page', async () => {
            await homePage.click_on_link('Non-Breaking Space');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await nonBreakingPage.get_button_text()).not.toContain('My Button');
        });
    });

    test('Click Button Multiple Times', async ({ 
        page,
        homePage,
        nonBreakingPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Non-Breaking Space page', async () => {
            await homePage.click_on_link('Non-Breaking Space');
        });

        await test.step('Click Button Verify Button is Present', async () => {
            await nonBreakingPage.click_btn();

            expect(await nonBreakingPage.get_button_text()).toContain('Button');
        });
    });
    
});