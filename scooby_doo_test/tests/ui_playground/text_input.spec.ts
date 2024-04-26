import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


  test.describe('Text Input Tests', 
    {
        tag:['@UI_Playground']
    },
    () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        textInputPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Text Input page', async () => {
            await homePage.click_on_link('Text Input');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await textInputPage.get_title_label()).toBe('Text Input');
            expect(await textInputPage.get_title_text()).toBe('Entering text with physical keyboard can be different from sending DOM events to an element. This page is specifically desined to illustrate this problem. There are cases when attempts to set a text via DOM events lead to nowhere and the only way to proceed is to emulate real keyboard input at OS level.');
            expect(await textInputPage.get_scenario_label()).toBe('Scenario');
            expect(await textInputPage.get_scenario_text()).toBe('Record setting text into the input field and pressing the button.');
            expect(await textInputPage.get_scenario_2_text()).toBe('Then execute your test to make sure that the button name is changing.');
            expect(await textInputPage.get_playground_label()).toBe('Playground');
            expect(await textInputPage.get_playground_text()).toBe('Set New Button Name');
            expect(await textInputPage.get_input_value()).toBe('');
            expect(await textInputPage.get_update_button_text()).toBe("Button That Should Change it's Name Based on Input Value");
        });
    });

    test('Enter New Name and Verify No Button Name Change', async ({ 
        page,
        browserName,
        homePage,
        textInputPage,
    }) => {
        test.skip(browserName === 'webkit' || browserName === 'firefox', 'This test is skipped in WebKit and Firefox because of a known issue with set input works as expected.');

        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Text Input page', async () => {
            await homePage.click_on_link('Text Input');
        });

        await test.step('Enter New Button Value and Verify No Change', async () => {
            await textInputPage.set_input_value('New Button Name');

            await textInputPage.click_update();

            expect(await textInputPage.get_update_button_text()).toBe("Button That Should Change it's Name Based on Input Value");
        });
    });

    test('Type New Name and Verify Button Name Change', async ({ 
        page,
        homePage,
        textInputPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Text Input page', async () => {
            await homePage.click_on_link('Text Input');
        });


        await test.step('Type New Button Value and Verify Change', async () => {
            await textInputPage.type_input_value('New Button Name');

            await textInputPage.click_update();

            expect(await textInputPage.get_update_button_text()).toBe('New Button Name');
        });
    });
});