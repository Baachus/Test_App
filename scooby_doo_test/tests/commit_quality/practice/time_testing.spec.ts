import test from '../../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Time Testing Practice page', 
    {
        tag:['@Commit_Quality']
    },
    () => {
  test('Back to Practice', async ({
    page,
    practicePage,
    timeTestingPage,
    }) => {
        await test.step('Navigate to the time testing page', async () => {
            await page.goto('practice');
            await practicePage.clickTimeTestingLink();
        });

        await test.step('Click Back to Practice and Verify Navigation', async () => {
            expect(await timeTestingPage.getBackToPracticeLink()).toBe('back to practice');
            await timeTestingPage.clickBackToPracticeLink();

            expect(await practicePage.getPracticeTitle()).toBe('Note to user: This page is likely to be updated - Things may move around and extra items will be added.');
        });
  });

  test('Verify Labels', async ({
    page,
    practicePage,
    timeTestingPage,
    }) => {
        await test.step('Navigate to the time testing page', async () => {
            await page.goto('practice');
            await practicePage.clickTimeTestingLink();
        });

        await test.step('Verify labels', async () => {
            expect(await timeTestingPage.getCurrentTimeLabel()).toBe('Current time');
            expect(await timeTestingPage.getCountdownLabel()).toBe('COUNTDOWN TIMER TO WIN A SPECIAL PRIZE');
        });
  });
  
  test('Verify Timers with Fixed Time', async ({
    page,
    practicePage,
    timeTestingPage,
    }) => {
        await test.step('Change Time to 9am - Fixed', async () => {
            await page.clock.setFixedTime(new Date("2024-01-01T09:00:00"));
        });

        await test.step('Navigate to the time testing page', async () => {
            await page.goto('practice');
            await practicePage.clickTimeTestingLink();
        });

        await test.step('Verify Current Time Label to 9am', async () => {
            await expect(await timeTestingPage.getCurrentTime()).toContainText('9:00:00 AM');
        });

        await test.step('Verify Timer starts at 5:00', async () => {
            await expect(await timeTestingPage.getTimer()).toContainText('5:00');
        });
  });
  
  test('Verify Timers with Pause Time', async ({
    page,
    practicePage,
    timeTestingPage,
    }) => {
        await test.step('Change Time to 9am - System', async () => {
            await page.clock.setSystemTime(new Date("2024-01-01T09:00:00"));
        });

        await test.step('Navigate to the time testing page', async () => {
            await page.goto('practice');
            await practicePage.clickTimeTestingLink();
        });

        await test.step('Pause Timer', async () => {
            // eslint-disable-next-line playwright/no-page-pause
            await page.pause();
        });

        await test.step('Verify Current Time Paused', async () => {
            await expect(await timeTestingPage.getCurrentTime()).toContainText('9:00:00 AM');
        });

        await test.step('Unpause Timer', async () => {
            // eslint-disable-next-line playwright/no-page-pause
            await page.clock.resume();
        });

        await test.step('Verify Current Time Increasing', async () => {
            await expect(await timeTestingPage.getCurrentTime()).not.toContainText('9:00:00 AM');
        });
  });
  
  test('Verify Time Skip', async ({
    page,
    practicePage,
    timeTestingPage,
    }) => {
        await page.clock.install();

        await test.step('Navigate to the time testing page', async () => {
            await page.goto('practice');
            await practicePage.clickTimeTestingLink();
        });

        await test.step('Skip Ahead 5 Minutes', async () => {
            await page.clock.fastForward('05:00');
        });

        await test.step('Verify Countdown Success', async () => {
            await expect(await timeTestingPage.getMessage()).toBe('YOU WON... GO SUBSCRIBE TO COMMIT QUALITY');
        });
  });
});