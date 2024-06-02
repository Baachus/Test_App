import { expect } from '@playwright/test';
import test from '../../fixtures/test_setup_scooby_doo';

  
test.describe('Scooby-Doo Family Tree Application Login Tests', 
    {
        tag:['@Scooby-Doo']
    },
    () => {

    test.use({
        storageState: './.auth/auth.json',
    });

    // TODO: Fix authentication file to be updated consistently.
    test.skip('Login Title Verification without Logging In', async ({ page }) => {
        await page.goto('/family_tree/add_member/');

        // Expect a title "to contain" a substring.
        await expect(page).toHaveURL('http://127.0.0.1:8000/family_tree/add_member/');
    });
});