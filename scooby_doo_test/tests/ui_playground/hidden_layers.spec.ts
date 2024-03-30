import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@UI_Playground Hidden Layers Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        hiddenLayersPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Hidden Layers page', async () => {
            await homePage.click_on_link('Hidden Layers');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await hiddenLayersPage.get_title_label()).toBe('Hidden Layers');
            expect(await hiddenLayersPage.get_title_text()).toBe('Some applications use DOM caching techniques. For example, if a user follows a multi step process and each step requires filling data into a form then forms may be cached at the client side along the way. It allows to quickly navigate back and forward through the steps without requesting data from a server. When form is cached it just pushed on-top of z-order stack. It means that an element may be still present in the DOM tree but overlapped with another layer of elements. In this case it is important that a test does not interact with inactive elements becasue they are invisible to a user.');
            expect(await hiddenLayersPage.get_scenario_label()).toBe('Scenario');
            expect(await hiddenLayersPage.get_scenario_text()).toBe('Record button click and then duplicate the button click step in your test.');
            expect(await hiddenLayersPage.get_scenario_2_text()).toBe('Execute the test to make sure that green button can not be hit twice.');
            expect(await hiddenLayersPage.get_playground_label()).toBe('Playground');
            expect(await hiddenLayersPage.get_green_btn_text()).toBe('Button');
        });
    });

    test('Click Button Multiple Times', async ({ 
        page,
        homePage,
        hiddenLayersPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Hidden Layers page', async () => {
            await homePage.click_on_link('Hidden Layers');
        });

        await test.step('Click Button Multiple Times and Verify Button is Blue', async () => {
            await hiddenLayersPage.click_green_btn();
            await hiddenLayersPage.click_blue_btn();

            //  Screenshot compare
            const image = await hiddenLayersPage.get_button_image();
            await expect(image).toBeTruthy();
            await expect(image).toHaveScreenshot();
        });
    });
    
});