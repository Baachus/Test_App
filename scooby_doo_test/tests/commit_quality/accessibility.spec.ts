import test from '../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('@Commit_Quality Practice API page', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page, accessibilityBuilder }) => {
    await page.goto('practice-api/');

    await page.locator('.back-link').waitFor();

    const accessibilityScanResults = await accessibilityBuilder
        .include('.back-link')
        .analyze();
      
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('stuff', async ({ page, request }) => {
    await page.goto('practice-api/');

    await page.locator('.back-link').waitFor();

    // const accessibilityScanResults = await page.accessibility.snapshot();
    expect([]).toEqual([]);
    
    await request.get('https://commitquality.com/practice-api/', {
      headers: {
        'Header': 'Value',
        'Another-Header': 'Another-Value'
      },
      form: {
        'field1': 'value1',
        'field2': 'value2'
      }
    }).then(response => {
      console.log(response.status());
    });

  });
});