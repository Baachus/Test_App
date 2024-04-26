import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@ Client Side Delay Tests', 
    {
        tag:['@UI_Playground']
    },
    () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        clientSideDelayPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Client Side Delay page', async () => {
            await homePage.click_on_link('Client Side Delay');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await clientSideDelayPage.get_title_label()).toBe('Client Side Delay');
            expect(await clientSideDelayPage.get_title_text()).toBe('An element may appaear on a page after heavy JavaScript processing on a client side. A test should be able to wait for an element to show up.');
            expect(await clientSideDelayPage.get_scenario_label()).toBe('Scenario');
            expect(await clientSideDelayPage.get_scenario_text()).toBe('Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.');
            expect(await clientSideDelayPage.get_scenario_2_text()).toBe('Then execute your test to make sure it waits for label text to appear.');
            expect(await clientSideDelayPage.get_playground_label()).toBe('Playground');
            expect(await clientSideDelayPage.get_client_side_btn()).toBe('Button Triggering Client Side Logic');
        });
    });

    test('Verify Client Side Delay', async ({
        page,
        homePage,
        clientSideDelayPage,
        }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Client Side Delay page', async () => {
            await homePage.click_on_link('Client Side Delay');
        });

        await test.step('Click on the Client Side Button', async () => {
            await clientSideDelayPage.click_on_client_side_btn();
        });

        await test.step('Verify the Load Icon', async () => {
            const loadIcon = await clientSideDelayPage.get_load_icon();
            expect(await loadIcon?.isVisible()).toBe(true);
        });

        await test.step('Verify the Successful Load Text', async () => {
            expect(await clientSideDelayPage.get_successful_load_txt()).toBe('Data calculated on the client side.');
        });
    });
});