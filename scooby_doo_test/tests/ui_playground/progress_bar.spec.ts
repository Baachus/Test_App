import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_ui_playground';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('@UI_Playground Progress Bar Tests', () => {
    test('Verify Title, Labels, and Text', async ({ 
        page,
        homePage,
        progressBarPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Progress Bar page', async () => {
            await homePage.click_on_link('Progress Bar');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await progressBarPage.get_title_label()).toBe('Progress Bar');
            expect(await progressBarPage.get_title_text()).toBe('A web application may use a progress bar to reflect state of some lengthy process. Thus a test may need to read the value of a progress bar to determine if it is time to proceed or not.');
            expect(await progressBarPage.get_scenario_label()).toBe('Scenario');
            expect(await progressBarPage.get_scenario_text()).toBe('Create a test that clicks Start button and then waits for the progress bar to reach 75%. Then the test should click Stop. The less the differnce between value of the stopped progress bar and 75% the better your result.');
            expect(await progressBarPage.get_playground_heading()).toBe('Progress Bar');
            expect(await progressBarPage.get_start_button_text()).toBe('Start');
            expect(await progressBarPage.get_stop_button_text()).toBe('Stop                ');
            expect(await progressBarPage.get_progress_bar_value()).toBe('25');
            expect(await progressBarPage.get_result_text()).toBe('Result: n/a');
        });
    });

    test('Progress to 75% and Stop', async ({
        page,
        homePage,
        progressBarPage,
        }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Progress Bar page', async () => {
            await homePage.click_on_link('Progress Bar');
        });

        // TODO: Change this to verify difference between progress bar and result (this is currently within 3 from 75% but sometimes it goes so fast it cant stop that quickly)
        await test.step('Click Start and wait for 75%', async () => {
            await progressBarPage.click_on_start_button();
            await progressBarPage.wait_for_progress_bar_to_reach(75);
            await progressBarPage.click_on_stop_button();

            const validResultRegex = /Result: (-?[0-5]), duration: ([1-9]\d*|\d*[1-9]\d*)$/;

            expect(validResultRegex.test(await progressBarPage.get_result_text()||'')).toBe(true);
        });
    });
});