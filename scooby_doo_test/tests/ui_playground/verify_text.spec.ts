import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@UI_Playground Verify Text Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        verifyTextPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Verify Text page', async () => {
            await homePage.click_on_link('Verify Text');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await verifyTextPage.get_title_label()).toBe('Verify Text');
            expect(await verifyTextPage.get_title_text()).toBe('In general inner text of a DOM element is different from displayed on screen. Browsers normalize text upon rendering, but DOM nodes contain text as it is in HTML markup. For example a browser may show the text as');
            expect(await verifyTextPage.get_hello_txt()).toBe('Hello UserName!');
            expect(await verifyTextPage.get_title_2_text()).toBe('and the text of the DOM element can be');
            // TODO: Fix this
            // expect(await verifyTextPage.get_dom_hello_txt()).toBe('Hello UserName!');
            expect(await verifyTextPage.get_title_3_text()).toBe("Take this fact into account when searching for an element using it's text value. ");
            expect(await verifyTextPage.get_does_not_work_txt()).toBe('Does not work');
            expect(await verifyTextPage.get_does_not_work_example_txt()).toBe("//span[.='Welcome UserName!']");
            expect(await verifyTextPage.get_works_txt()).toBe('Works');
            expect(await verifyTextPage.get_works_example_txt()).toBe("//span[normalize-space(.)='Welcome UserName!']");
            expect(await verifyTextPage.get_scenario_label()).toBe('Scenario');
            expect(await verifyTextPage.get_scenario_text()).toBe('Create a test that finds an element with Welcome... text.');
            expect(await verifyTextPage.get_playground_label()).toBe('Playground');
            // TODO: Fix this
            // expect(await verifyTextPage.get_playground_txt()).toBe('Welcome UserName!');
        });
    });
});