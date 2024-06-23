import test from '../../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Download Practice page', 
    {
        tag:['@Commit_Quality']
    },
    () => {
  test('Back to Practice', async ({
    page,
    practicePage,
    downloadPage
    }) => {
        await test.step('Navigate to the file download page', async () => {
            await page.goto('practice');
            await practicePage.clickFileDownloadLink();
        });

        await test.step('Click Back to Practice and Verify Navigation', async () => {
            expect(await downloadPage.getBackToPracticeLink()).toBe('back to practice');
            await downloadPage.clickBackToPracticeLink();

            expect(await practicePage.getPracticeTitle()).toBe('Note to user: This page is likely to be updated - Things may move around and extra items will be added.');
        });
  });
  
  test('Click Download File and Verify Text', async ({
    page, 
    practicePage,
    downloadPage
  }) => {
    await test.step('Navigate to the file download page', async () => {
        await page.goto('practice');
        await practicePage.clickFileDownloadLink();
    });


    await test.step('Download File', async () => {
        await downloadPage.downloadAndSave();
    });

    await test.step('Verify Downloaded File Text', async () => {
      const downloadedText = await downloadPage.verifyDownloadedText('This is a dummy text file.');

      expect(downloadedText).toBe(true);
    });
  });
});