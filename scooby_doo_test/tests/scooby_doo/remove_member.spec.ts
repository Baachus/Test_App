import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';
import test from '../../fixtures/test_setup_scooby_doo';

test.describe('@Scooby_Doo Remove Family Member Tests', () => {
    test('@Scooby_Doo Remove family member and verify successful removal', async ({ 
        page,
        indexPage,
        loginPage,
        addMemberPage,
        removeMemberPage,
        headerComp
    }) => {
        let newUser;
        let new_member_id;

        await test.step('Setup test data', async () => {
            const data = new RandomData();

            newUser = {
                name: faker.person.fullName(),
                gang: data.randomGang(),
                relationship: data.randomRelationship(),
                appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
            }
        });

        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Add a new family member and remove them', async () => {
            // Add family member
            await headerComp.click_add_family_member();
            await addMemberPage.add_new_family_member({
                name_to_add: newUser.name,
                gang_to_add: newUser.gang,
                relationship_to_add: newUser.relationship,
                appearance_to_add: newUser.appearance
            });
        });

        await test.step('Remove the family member', async () => {
            new_member_id = await indexPage.getIndex(newUser.name);
            await headerComp.click_remove_family_member();
            await removeMemberPage.remove_family_member(new_member_id);
        });

        await test.step('Verify the family member is removed', async () => {
            // Verify user is removed successfully
            await expect(page.getByTestId(`name_${new_member_id}`)).toBeHidden();
            await expect(page.getByTestId(`gang_${new_member_id}`)).toBeHidden();
            await expect(page.getByTestId(`relationship_${new_member_id}`)).toBeHidden();
        });

        await test.step('Log out', async () => {
            await headerComp.logout();
            await expect(page.getByTestId("login")).toBeVisible();
        });
    });

    
    test('Verify Remove Family Member Accessibility', async ({ 
        loginPage, 
        headerComp,
        accessibilityBuilder 
    }) => {
        
        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Verify remove family member page accessibility', async () => {
            await headerComp.click_remove_family_member();
            const accessibilityScanResults = await accessibilityBuilder.analyze();
            expect(accessibilityScanResults.violations).toEqual([]);
        });
    });
});