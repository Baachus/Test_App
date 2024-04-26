import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';
import test from '../../fixtures/test_setup_scooby_doo';

test.describe('View Family Member Tests', 
    {
        tag:['@Scooby-Doo']
    },
    () => {
    test('View new family member and verify successful data', async ({ 
        page,
        loginPage,
        indexPage,
        addMemberPage,
        removeMemberPage,
        viewMemberPage,
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

        await test.step('Add a new family member', async () => {
            await headerComp.click_add_family_member();
            await addMemberPage.add_new_family_member({
                name_to_add: newUser.name,
                gang_to_add: newUser.gang,
                relationship_to_add: newUser.relationship,
                appearance_to_add: newUser.appearance
            });
        });

        await test.step('View the new family member and verify new member', async () => {
            new_member_id = await indexPage.getIndex(newUser.name);
            await indexPage.view_family_member(new_member_id);

            // Verify user is created successfully
            await expect(await viewMemberPage.get_name()).toHaveText(newUser.name);
            await expect(await viewMemberPage.get_gang()).toHaveText(newUser.gang);
            await expect(await viewMemberPage.get_relationship()).toHaveText(newUser.relationship);
            await expect(await viewMemberPage.get_appearance()).toHaveText(newUser.appearance);
        });

        await test.step('Remove the family member', async () => {
            await headerComp.click_remove_family_member();
            await removeMemberPage.remove_family_member(new_member_id);
        });

        await test.step('Log out', async () => {
            await headerComp.logout();
            await expect(page.getByTestId("login")).toBeVisible();
        });
    });


    test('Verify New Family Member Accessibility', 
    {
        tag:['@Accessibility']
    },
    async ({ 
        page,
        loginPage,
        indexPage,
        addMemberPage,
        removeMemberPage,
        headerComp,
        accessibilityBuilder 
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

        await test.step('Add a new family member', async () => {
            await headerComp.click_add_family_member();
            await addMemberPage.add_new_family_member({
                name_to_add: newUser.name,
                gang_to_add: newUser.gang,
                relationship_to_add: newUser.relationship,
                appearance_to_add: newUser.appearance
            });
        });

        await test.step('View the new family member and verify new member', async () => {
            new_member_id = await indexPage.getIndex(newUser.name);
            await indexPage.view_family_member(new_member_id);
        });

        await test.step('Verify new family tree member page accessibility', async () => {
            const accessibilityScanResults = await accessibilityBuilder.analyze();
            expect(accessibilityScanResults.violations).toEqual([]);
        });

        await test.step('Remove the family member', async () => {
            await headerComp.click_remove_family_member();
            await removeMemberPage.remove_family_member(new_member_id);
        });

        await test.step('Log out', async () => {
            await headerComp.logout();
            await expect(page.getByTestId("login")).toBeVisible();
        });
    });
});