import { expect } from '@playwright/test';
import test from './test_setup';

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Overlapped Element Data Tests', () => {
    test('Verify Title, labels, and text', async ({ 
        page,
        homePage,
        overlappedElementPage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Overlapped Element page', async () => {
            await homePage.click_on_link('Overlapped Element');
        });

        await test.step('Verify Labels and Text on Page', async () => {
            expect(await overlappedElementPage.get_title_label()).toBe('Overlapped Element');
            expect(await overlappedElementPage.get_title_text()).toBe('Entering text to a partially visible element may require scrolling it into view.');
            expect(await overlappedElementPage.get_scenario_label()).toBe('Scenario');
            expect(await overlappedElementPage.get_scenario_text()).toBe('Record setting text into the Name input field (scroll element before entering the text).');
            expect(await overlappedElementPage.get_scenario_2_text()).toBe('Then execute your test to make sure that the text was entered correctly.');
            expect(await overlappedElementPage.get_playground_label()).toBe('Playground');

            // Verify placeholder names
            const idPlaceholder = await overlappedElementPage.get_playground_id_textBox();
            const namePlaceholder = await overlappedElementPage.get_playground_name_textBox();
            expect(await idPlaceholder?.getAttribute('placeholder')).toBe('Id');
            expect(await namePlaceholder?.getAttribute('placeholder')).toBe('Name');
        });
    });

    test('Enter and ID into Overlapped Elements', async ({
        page,
        homePage,
        overlappedElementPage,
        }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Navigate to the Overlapped Element page', async () => {
            await homePage.click_on_link('Overlapped Element');
        });

        await test.step('Enter text into the ID input field', async () => {
            await overlappedElementPage.set_playground_id_textBox('123');
            const idPlaceholder = await overlappedElementPage.get_playground_id_textBox();
            expect(await idPlaceholder?.inputValue()).toBe('123');
        });

        await test.step('Enter text into the Name input field', async () => {
            await overlappedElementPage.set_playground_name_textBox('John Doe');
            const namePlaceholder = await overlappedElementPage.get_playground_name_textBox();
            expect(await namePlaceholder?.inputValue()).toBe('John Doe');
        });
    });
});