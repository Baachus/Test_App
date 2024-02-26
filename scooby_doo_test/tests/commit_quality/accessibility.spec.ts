import test from './test_setup';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Practice API page', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page, accessibilityBuilder }) => {
    await page.goto('practice-api/');

    await page.locator('.back-link').waitFor();

    const accessibilityScanResults = await accessibilityBuilder
        .include('.back-link')
        .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });
});