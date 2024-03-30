import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });

test.describe('@UI_Playground Class Attribute Tests', () => {
    test('Verify Title, labels, and text', async ({ 
        page,
        homePage,
        classAttributePageAssertions
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Class Attribute page', async () => {
            await homePage.click_on_link('Class Attribute');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            await classAttributePageAssertions.verify_label('Class Attribute');
            await classAttributePageAssertions.verify_one_class_text('Class attribute of an element may contain more than one class reference. E.g. ');
            await classAttributePageAssertions.verify_one_class_example_text('<button class="btn btn-primary btn-test">');
            await classAttributePageAssertions.verify_xpath_text('XPath selector relying on a class must be well formed. For example, the following will not work: ');
            await classAttributePageAssertions.verify_xpath_example_text("//button[@class='btn-primary']");
            await classAttributePageAssertions.verify_correct_variant_text('Correct variant is');
            await classAttributePageAssertions.verify_correct_variant_example_text("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]");

            await classAttributePageAssertions.verify_scenario_label('Scenario');
            await classAttributePageAssertions.verify_scenario_text('Record primary (blue) button click and press ok in alert popup.');
            await classAttributePageAssertions.verify_scenario_2_text('Then execute your test to make sure that it can identify the button using btn-primary class.');
            await classAttributePageAssertions.verify_playground_label('Playground');

            // Verify button text
            await classAttributePageAssertions.verify_green_btn('Button');
            await classAttributePageAssertions.verify_yellow_btn('Button');
            await classAttributePageAssertions.verify_blue_btn('Button');
        });
    });

    test('Verify Colors on Buttons', async ({
        page,
        browserName,
        homePage,
        classAttributePageAssertions
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
            await classAttributePageAssertions.verify_colors_on_buttons();
        });
    });

    // This test is skipped due to the applications pop-up alert not being handled consistently
    test.skip('Verify Button Click and Alert Popup', async ({
        page,
        homePage,
        classAttributePage,
        classAttributePageAssertions
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
            classAttributePageAssertions.verify_alert_popup_visible();
        });

        await test.step('Close the Alert Popup', async () => {
            await page.locator('text=OK').click();
        });

        await test.step('Click on the green button', async () => {
            await classAttributePage.click_blue_btn();
        });

        await test.step('Verify Alert Popup Does Not Appear', async () => {
            // Verify the alert popup
            classAttributePageAssertions.verify_alert_popup_visible();
        });

        await test.step('Click on the yellow button', async () => {
            await classAttributePage.click_yellow_btn();
        });

        await test.step('Verify Alert Popup', async () => {
            // Verify the alert popup
            classAttributePageAssertions.verify_alert_popup_visible();
        });
    });
});