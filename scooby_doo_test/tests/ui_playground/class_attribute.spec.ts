import { expect } from '@playwright/test';
import test from './test_setup';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Class Attribute Tests', () => {
    test('Verify Title, labels, and text', async ({ 
        page,
        homePage,
        classAttributePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Class Attribute page', async () => {
            await homePage.click_on_link('Class Attribute');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await classAttributePage.get_title_label()).toBe('Class Attribute');
            expect(await classAttributePage.get_one_class_text()).toBe('Class attribute of an element may contain more than one class reference. E.g. ');
            expect(await classAttributePage.get_one_class_example_text()).toBe('<button class="btn btn-primary btn-test">');
            expect(await classAttributePage.get_xpath_text()).toBe('XPath selector relying on a class must be well formed. For example, the following will not work: ');
            expect(await classAttributePage.get_xpath_example_text()).toBe("//button[@class='btn-primary']");
            expect(await classAttributePage.get_correct_variant_text()).toBe('Correct variant is');
            expect(await classAttributePage.get_correct_variant_example_text()).toBe("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]");

            expect(await classAttributePage.get_scenario_label()).toBe('Scenario');
            expect(await classAttributePage.get_scenario_text()).toBe('Record primary (blue) button click and press ok in alert popup.');
            expect(await classAttributePage.get_scenario_2_text()).toBe('Then execute your test to make sure that it can identify the button using btn-primary class.');
            expect(await classAttributePage.get_playground_label()).toBe('Playground');

            // Verify button text
            expect(await classAttributePage.get_green_btn()).toContain('Button');   // Using toContain because the button text contains extra whitespace
            expect(await classAttributePage.get_yellow_btn()).toContain('Button');
            expect(await classAttributePage.get_blue_btn()).toContain('Button');
        });
    });

    test('Verify Colors on Buttons', async ({
        page,
        browserName,
        homePage,
        classAttributePage,
        }) => {
        test.skip(browserName === 'webkit' || browserName === 'firefox', 'This test is skipped in WebKit and Firefox because of a known issue with getComputedStyle.');

        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Class Attribute page', async () => {
            await homePage.click_on_link('Class Attribute');
        });

        await test.step('Verify Colors on Buttons', async () => {
            // Verify the colors
            const greenBtn = await classAttributePage.get_green_btn_locator();
            const yellowBtn = await classAttributePage.get_yellow_btn_locator();
            const blueBtn = await classAttributePage.get_blue_btn_locator();

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (greenBtn && yellowBtn && blueBtn) {
                const greenBtnComputedStyle = await greenBtn.evaluate(node => getComputedStyle(node));
                const yellowBtnComputedStyle = await yellowBtn.evaluate(node => getComputedStyle(node));
                const blueBtnComputedStyle = await blueBtn.evaluate(node => getComputedStyle(node));

                expect(greenBtnComputedStyle.backgroundColor).toBe('rgb(40, 167, 69)'); // Green
                expect(yellowBtnComputedStyle.backgroundColor).toBe('rgb(255, 193, 7)'); // Yellow
                expect(blueBtnComputedStyle.backgroundColor).toBe('rgb(0, 123, 255)'); // Blue
            }
            else{
                await expect(false).toBe(true);
            }
        });
    });

    // This test is skipped due to the applications pop-up alert not being handled consistently
    test.skip('Verify Button Click and Alert Popup', async ({
        page,
        homePage,
        classAttributePage,
        }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Class Attribute page', async () => {
            await homePage.click_on_link('Class Attribute');
        });

        await test.step('Click on the blue button', async () => {
            await classAttributePage.click_blue_btn();
        });

        await test.step('Verify Alert Popup', async () => {
            // Verify the alert popup
            const alert = page.locator('text=Primary button pressed').isVisible();
            expect(alert).toBe(true);
        });

        await test.step('Close the Alert Popup', async () => {
            await page.locator('text=OK').click();
        });

        await test.step('Click on the green button', async () => {
            await classAttributePage.click_blue_btn();
        });

        await test.step('Verify Alert Popup Does Not Appear', async () => {
            // Verify the alert popup
            const alert = page.locator('text=Primary button pressed').isVisible();
            expect(alert).toBe(false);
        });

        await test.step('Click on the yellow button', async () => {
            await classAttributePage.click_yellow_btn();
        });

        await test.step('Verify Alert Popup', async () => {
            // Verify the alert popup
            const alert = page.locator('text=Primary button pressed').isVisible();
            expect(alert).toBe(false);
        });
    });
});