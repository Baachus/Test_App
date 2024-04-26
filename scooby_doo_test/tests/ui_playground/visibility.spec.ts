import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Visibility Tests',
    {
        tag:['@UI_Playground']
    },
    () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        visibilityPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Visibility page', async () => {
            await homePage.click_on_link('Visibility');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await visibilityPage.get_title_label()).toBe('Visibility');
            expect(await visibilityPage.get_title_text()).toBe('Checking if element is visible on screen may be a non trivial task. ');
            expect(await visibilityPage.get_title_2_text()).toBe('An element may be removed (simplest case),');
            expect(await visibilityPage.get_title_3_text()).toBe('it may have zero height or width,');
            expect(await visibilityPage.get_title_4_text()).toBe('it may be covered by another element,');
            expect(await visibilityPage.get_title_5_text()).toBe('it may be hidden using styles: opacity: 0, visibility: hidden, display: none,');
            expect(await visibilityPage.get_title_6_text()).toBe('or moved offscreen.');

            expect(await visibilityPage.get_scenario_label()).toBe('Scenario');
            expect(await visibilityPage.get_scenario_text()).toBe('Learn locators of all buttons.');
            expect(await visibilityPage.get_scenario_2_text()).toBe('In your testing scenario press Hide button.');
            expect(await visibilityPage.get_scenario_3_text()).toBe('Determine if other buttons visible or not.');

            expect(await visibilityPage.get_playground_label()).toBe('Playground');
            expect(await visibilityPage.get_hide_btn_text()).toBe('Hide');
            expect(await visibilityPage.get_removed_btn_text()).toBe('Removed');
            expect(await visibilityPage.get_zero_width_btn_text()).toBe('Zero Width');
            expect(await visibilityPage.get_overlapped_btn_text()).toBe('Overlapped');
            expect(await visibilityPage.get_opacity_btn_text()).toBe('Opacity 0');
            expect(await visibilityPage.get_visibility_hidden_btn_text()).toBe('Visibility Hidden');
            expect(await visibilityPage.get_display_none_btn_text()).toBe('Display None');
            expect(await visibilityPage.get_offscreen_btn_text()).toBe('Offscreen');
        });
    });

    test('Click the Hide Button and Verify Hidden Buttons', async ({
        page,
        homePage,
        visibilityPage,
        }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Visibility page', async () => {
            await homePage.click_on_link('Visibility');
        });

        await test.step('Visibility of Buttons', async () => {
            
            let buttonToCheck = await visibilityPage.get_removed_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_zero_width_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_overlapped_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_opacity_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_visibility_hidden_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_display_none_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_offscreen_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);
        });

        await test.step('Click the Hide Button', async () => {
            await visibilityPage.click_hide_btn();

            let buttonToCheck = await visibilityPage.get_removed_btn();
            expect(await buttonToCheck?.isVisible()).toBe(false);

            buttonToCheck = await visibilityPage.get_zero_width_btn();
            expect(await buttonToCheck?.isVisible()).toBe(false);

            buttonToCheck = await visibilityPage.get_overlapped_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_opacity_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);

            buttonToCheck = await visibilityPage.get_visibility_hidden_btn();
            expect(await buttonToCheck?.isVisible()).toBe(false);

            buttonToCheck = await visibilityPage.get_display_none_btn();
            expect(await buttonToCheck?.isVisible()).toBe(false);

            buttonToCheck = await visibilityPage.get_offscreen_btn();
            expect(await buttonToCheck?.isVisible()).toBe(true);
        });
    });
});