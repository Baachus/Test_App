import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('AJAX Data Tests', 
    {
        tag:['@UI_Playground']
    },
    () => {
    test('Verify Title, labels, and text', async ({ 
        page,
        homePage,
        ajaxDataPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the AJAX Data page', async () => {
            await homePage.click_on_link('AJAX Data');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await ajaxDataPage.get_title_label()).toBe('AJAX Data');
            // Bug in the page, the text is not correct
            expect(await ajaxDataPage.get_title_text()).toBe('An element may appaear on a page after processing of an AJAX request to a web server. A test should be able to wait for an element to show up.');
            expect(await ajaxDataPage.get_scenario_label()).toBe('Scenario');
            expect(await ajaxDataPage.get_scenario_text()).toBe('Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.');
            expect(await ajaxDataPage.get_scenario_2_text()).toBe('Then execute your test to make sure it waits for label text to appear.');
            expect(await ajaxDataPage.get_playground_label()).toBe('Playground');
            expect(await ajaxDataPage.get_ajax_btn()).toBe('Button Triggering AJAX Request');
        });
    });

    test('Clicking the AJAX Button Changes the Button Text', async ({
        page,
        homePage,
        ajaxDataPage,
        })=>{
        
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the AJAX Data page', async () => {
            await homePage.click_on_link('AJAX Data');
        });

        await test.step('Click the AJAX Button and wait for data to appear', async () => {
            await ajaxDataPage.click_ajax_btn();
            
            // The button text changes to "Data loaded" after a few seconds below the button
            expect(await ajaxDataPage.get_ajax_load_text()).toBe('Data loaded with AJAX get request.');
        });
    });

    test('Click the AJAX Button Displays Loading Icon', async ({
        page,
        homePage,
        ajaxDataPage,
        })=>{

        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the AJAX Data page', async () => {
            await homePage.click_on_link('AJAX Data');
        });

        await test.step('Click the AJAX Button and Loading Icon Appears', async () => {
            await ajaxDataPage.click_ajax_btn();
            
            // The loading icon appears below the button
            expect(await ajaxDataPage.get_ajax_load_icon_locator()).not.toBeNull();
        });
    });
});