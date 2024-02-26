import test from './test_setup';
import { faker } from '@faker-js/faker';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Add Product Tests', () => {
  test('Adding Product Redirects Back to Product Page', async ({
    page,
    addProductPage
    }) => {

    await test.step('Navigate to the commit quality page', async () => {
        await page.goto('add-product');
    });

    await test.step('Enter Valid Product', async () => {
        await addProductPage.set_name_text_box(faker.lorem.words({min:2, max:4}));
        await addProductPage.set_price_text_box(faker.commerce.price());
        await addProductPage.set_date_stocked_recent_date();
        await addProductPage.click_submit();
    });

    await test.step('User is redirected back to Product Page', async () => {
        expect(page.url()).toBe('https://commitquality.com/');
    });
  });

  test('Empty Fields', async ({
    page,
    addProductPage
    }) => {

    await test.step('Navigate to the commit quality page', async () => {
        await page.goto('add-product');
    });

    await test.step('Enter Empty Product', async () => {
        await addProductPage.set_name_text_box('');
        await addProductPage.set_price_text_box('');
        await addProductPage.set_date_stocked_text_box('');
        await addProductPage.click_submit();
        await addProductPage.click_submit();  // Must click twice as first doesn't let Please fill in all fields appear
    });

    await test.step('All Empty Field Errors Appear', async () => {
        // Verify error messages
        expect(await addProductPage.get_empty_name_error()).toBe('Name must be at least 2 characters.');
        expect(await addProductPage.get_empty_price_error()).toBe('Price must not be empty and within 10 digits');
        expect(await addProductPage.get_empty_date_error()).toBe('Date must not be empty.');
        expect(await addProductPage.get_fill_in_fields_error()).toBe('Please fill in all fields');
        expect(await addProductPage.get_resolve_errors()).toBe('Errors must be resolved before submitting');

        // Verify message visibility
        expect(await addProductPage.get_empty_name_error_visibility()).toBe(true);
        expect(await addProductPage.get_empty_price_error_visibility()).toBe(true);
        expect(await addProductPage.get_empty_date_error_visibility()).toBe(true);
        expect(await addProductPage.get_fill_in_fields_error_visibility()).toBe(true);
        expect(await addProductPage.get_resolve_errors_visibility()).toBe(true);

        // Verify User not Redirected URL
        expect(page.url()).toBe('https://commitquality.com/add-product');
    });
  });
  
  test('Fill in All Fields Does Not Appear on One Click', async ({
    page,
    addProductPage
    }) => {

    await test.step('Navigate to the commit quality page', async () => {
        await page.goto('add-product');
    });

    await test.step('Enter Empty Product', async () => {
        await addProductPage.set_name_text_box('');
        await addProductPage.set_price_text_box('');
        await addProductPage.set_date_stocked_text_box('');
        await addProductPage.click_submit();
    });

    await test.step('Fill in All Fields Not Visible', async () => {
        // Verify message visibility
        expect(await addProductPage.get_fill_in_fields_error_visibility()).toBe(false);
    });
  });

  test('One Character Product Name', async ({
    page,
    addProductPage
    }) => {

      await test.step('Navigate to the commit quality page', async () => {
          await page.goto('add-product');
      });
  
      await test.step('Enter Valid Product', async () => {
          await addProductPage.set_name_text_box(faker.string.alpha({length:1}));
          await addProductPage.set_price_text_box(faker.commerce.price());
          await addProductPage.set_date_stocked_recent_date();
          await addProductPage.click_submit();
      });
  
      await test.step('Name Must Be Over One Character', async () => {
          // Verify error messages
          expect(await addProductPage.get_empty_name_error()).toBe('Name must be at least 2 characters.');
      });
  });

  test('Eleven Digit Price', async ({
    page,
    addProductPage
    }) => {

      await test.step('Navigate to the commit quality page', async () => {
          await page.goto('add-product');
      });
  
      await test.step('Enter Valid Product', async () => {
        await addProductPage.set_name_text_box(faker.lorem.words({min:2, max:4}));
          await addProductPage.set_price_text_box(faker.string.numeric({length:11}));
          await addProductPage.set_date_stocked_recent_date();
          await addProductPage.click_submit();
      });
  
      await test.step('Prices Must Be Under Ten Digits', async () => {
          // Verify error messages
          expect(await addProductPage.get_empty_price_error()).toBe('Price must not be empty and within 10 digits');
      });
  });

  test('Future Date', async ({
    page,
    addProductPage
    }) => {

      await test.step('Navigate to the commit quality page', async () => {
          await page.goto('add-product');
      });
  
      await test.step('Enter Valid Product', async () => {
        const date = faker.date.future();
        const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });

        await addProductPage.set_name_text_box(faker.lorem.words({min:2, max:4}));
        await addProductPage.set_price_text_box(faker.commerce.price());
        await addProductPage.set_date_stocked_text_box(formattedDate);
        await addProductPage.click_submit();
      });
  
      await test.step('Date Stocked Must Be Present or Past', async () => {
          // Verify error messages
          expect(await addProductPage.get_future_date_error()).toBe('Date must not be in the future.');
          expect(await addProductPage.get_future_date_error_visibility()).toBe(true);
      });
  });
});