import test from './test_setup';
import { Page, expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Header Tests', () => {
  test('Navigation should land user on correct page', async ({ 
    page, 
    headerComp
 }) => {
    await test.step('Navigate to the commit quality page', async () => {
      await page.goto('');
    });

    await test.step('Navigate to the practice page', async () => {
      await headerComp.click_practice();
      expect(page.url()).toBe('https://commitquality.com/practice');

      await page.goBack();
    });

    await test.step('Navigate to the add product page', async () => {
      await headerComp.click_add_product();
      expect(page.url()).toBe('https://commitquality.com/add-product');

      await page.goBack();
    });

    await test.step('Navigate to the products page', async () => {
      await headerComp.click_products();
      expect(page.url()).toBe('https://commitquality.com/');
    });

    await test.step('Navigate to the login page', async () => {
      await headerComp.click_login();
      expect(page.url()).toBe('https://commitquality.com/login');
  
      await page.goBack();    
    });

    await test.step('Navigate to the learn page', async () => {
      // Listen for the popup event
      const newPagePromise = new Promise<Page>(resolve => page.once('popup', resolve));
      
      // Trigger the action that opens the new tab
      // Replace this with your actual action
      await headerComp.click_learn();
      
      // Wait for the new tab to open
      const newPage = await newPagePromise;
      
      // Verify the new tab's URL
      const url = newPage.url();
      expect(url).toBe('https://www.youtube.com/@commitquality');
    });
  });

  test('Verify Header Text', async ({
    page,
    headerComp
    }) => {
      await test.step('Navigate to the commit quality page', async () => {
        await page.goto('');
      });

    await test.step('Verify the products link text', async () => {
      expect(await headerComp.get_products_text()).toBe('Products');
    });

    await test.step('Verify the add product link text', async () => {
      expect(await headerComp.get_add_product_text()).toBe('Add Product');
    });

    await test.step('Verify the practice link text', async () => {
      expect(await headerComp.get_practice_text()).toBe('Practice');
    });

    await test.step('Verify the learn link text', async () => {
      expect(await headerComp.get_learn_text()).toBe('Learn');
    });

    await test.step('Verify the login link text', async () => {
      expect(await headerComp.get_login_text()).toBe('Login');
    });
  });
});