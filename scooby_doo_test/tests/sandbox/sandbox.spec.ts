import { test, expect } from '@playwright/test'

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
    browserName: 'chromium',
  });

test.describe('sandbox tests', () => {
    test.skip('Successful Mock', async ({ page }) => {
        // Open the page
        await page.goto('');

        // Assert that the title is correct
        const title = page.locator('h1');
        await expect(title).toHaveText('UI Test AutomationPlayground');

        await page.route('**/hiddenlayers', async (route) => {
          const request = route.request();
          const postData = await request.postDataJSON();
        
          await route.fulfill({
            status: 200,
            contentType: "application/json",
            body: JSON.stringify(Object.assign({ id: 1 }, postData)),
          });
        });

        await page.getByText('Hidden Layers').click();

        await expect(page.getByText('1')).toBeVisible();
    });

    test.skip('API Failure - 500', async ({ page }) => {
        // Open the page
        await page.goto('');

        // Assert that the title is correct
        const title = page.locator('h1');
        await expect(title).toHaveText('UI Test AutomationPlayground');

        await page.route('**/hiddenlayers', async (route) => {
          await route.fulfill({
            status: 500,
          });
        });

        await page.getByText('Hidden Layers').click();

        await expect(page.getByText('HTTP ERROR 500')).toBeVisible();
    });

    test.skip('API Failure - 429', async ({ page }) => {
        // Open the page
        await page.goto('');

        // Assert that the title is correct
        const title = page.locator('h1');
        await expect(title).toHaveText('UI Test AutomationPlayground');

        await page.route('**/hiddenlayers', async (route) => {
          await route.fulfill({
            status: 429,
          });
        });

        await page.getByText('Hidden Layers').click();

        await expect(page.getByText('HTTP ERROR 429')).toBeVisible();
    });
});