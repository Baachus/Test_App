import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';
import test from '../../fixtures/test_setup_scooby_doo';

test.describe('@Scooby_Doo Edit Family Member Tests', () => {
    test('Edit family member and verify successful data changes', async ({ 
        page, 
        indexPage, 
        loginPage, 
        addMemberPage,
        removeMemberPage,
        editMemberPage,
        viewMemberPage,
        headerComp 
    }) => {
        let newUser;
        let updatedUser;
        let new_member_id;

        await test.step('Setup test data', async () => {
            const data = new RandomData();
            newUser = {
                name: faker.person.fullName(),
                gang: data.randomGang(),
                relationship: data.randomRelationship(),
                appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
            }

            updatedUser = {
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

            new_member_id = await indexPage.getIndex(newUser.name);
        });

        await test.step('Edit the family member', async () => {
            await indexPage.edit_family_member(new_member_id);

            await editMemberPage.update_family_member({
                name_to_update: updatedUser.name,
                gang_to_update: updatedUser.gang,
                relationship_to_update: updatedUser.relationship,
                appearance_to_update: updatedUser.appearance
            });
        });

        await test.step('Verify the family member is updated', async () => {
            await indexPage.view_family_member(new_member_id);
            await expect(await viewMemberPage.get_name()).toHaveText(updatedUser.name);
            await expect(await viewMemberPage.get_gang()).toHaveText(updatedUser.gang);
            await expect(await viewMemberPage.get_relationship()).toHaveText(updatedUser.relationship);
            await expect(await viewMemberPage.get_appearance()).toHaveText(updatedUser.appearance);
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

    test('@Accessibility Verify Edit Family Member Accessibility', async ({ 
        page, 
        indexPage, 
        loginPage, 
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

            new_member_id = await indexPage.getIndex(newUser.name);
        });

        await test.step('Edit the family member', async () => {
            await indexPage.edit_family_member(new_member_id);
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