import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Dynamic ID Tests',  
    {
        tag:['@UI_Playground']
    },
    () => {
    test('Verify Title, labels, and text', async ({ 
        page,
        homePage,
        dynamicIDPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Dynamic ID page', async () => {
            await homePage.click_on_link('Dynamic ID');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await dynamicIDPage.get_title_label()).toBe('Dynamic ID');
            expect(await dynamicIDPage.get_title_text()).toBe('Modern applications often generate dynamic IDs for elements. In this case ID is not a reliable attribute for using in element selector. By default many UI automation tools record IDs and this results in tests broken from the very beginning. An automation tool needs a way to instruct it to skip dynamic IDs when XPath is generated for an element.');
            expect(await dynamicIDPage.get_scenario_label()).toBe('Scenario');
            expect(await dynamicIDPage.get_scenario_text()).toBe('Record button click.');
            expect(await dynamicIDPage.get_scenario_2_text()).toBe('Then execute your test to make sure that ID is not used for button identification.');
            expect(await dynamicIDPage.get_playground_label()).toBe('Playground');

            expect(await dynamicIDPage.get_dynamic_id_btn_text()).toBe('Button with Dynamic ID');
        });
    });

    test('Clicking the Dynamic ID Button Changes the Button Text', async ({
        page,
        homePage,
        dynamicIDPage,
    })=>{
        
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Dynamic ID page', async () => {
            await homePage.click_on_link('Dynamic ID');
        });

        await test.step('Click the Dynamic ID Button', async () => {
            await dynamicIDPage.click_dynamic_id_btn();

            // Nothing changes on page so nothing to verify except things don't change.
            expect(await dynamicIDPage.get_dynamic_id_btn_text()).toBe('Button with Dynamic ID');
        });
    });
});