import test from '../../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Popup Practice page', 
    {
        tag:['@Commit_Quality']
    },
    () => {
  test('Back to Practice', async ({
    page,
    practicePage,
    popupPage,
    }) => {
        await test.step('Navigate to the popup page', async () => {
            await page.goto('practice');
            await practicePage.clickPopupsLink();
        });

        await test.step('Click Back to Practice and Verify Navigation', async () => {
            expect(await popupPage.getBackToPracticeLink()).toBe('back to practice');
            await popupPage.clickBackToPracticeLink();

            expect(await practicePage.getPracticeTitle()).toBe('Note to user: This page is likely to be updated - Things may move around and extra items will be added.');
        });
  });

  test('Verify Popup Text', async ({
    page,
    practicePage,
    popupPage,
    }) => {
        await test.step('Navigate to the popup page', async () => {
            await page.goto('practice');
            await practicePage.clickPopupsLink();
        });

        await test.step('Wait for popup to randomly appear', async () => {
            while(!await popupPage.popupVisible()){
                // eslint-disable-next-line playwright/no-wait-for-timeout
                await page.waitForTimeout(500);
            }
        });

        await test.step('Verify the text in the popup', async () => {
            expect(await popupPage.getPopupText()).toBe('Random Popup');
            expect(await popupPage.getPopupCloseButton()).toBe('Close');
        });
  });

  test('Verify Close Popup Removes Popup', async ({
    page,
    practicePage,
    popupPage,
    }) => {
        await test.step('Navigate to the popup page', async () => {
            await page.goto('practice');
            await practicePage.clickPopupsLink();
        });

        await test.step('Wait for popup to randomly appear', async () => {
            while(!await popupPage.popupVisible()){
                // eslint-disable-next-line playwright/no-wait-for-timeout
                await page.waitForTimeout(500);
            }
        });

        await test.step('Close the popup', async () => {
            await popupPage.clickPopupCloseButton();
        });

        await test.step('Verify the popup is no longer visible', async () => {
            expect(await popupPage.popupVisible()).toBe(false);
        });
  });
});