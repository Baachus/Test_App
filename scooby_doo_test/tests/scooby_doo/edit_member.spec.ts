import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';
import test from './test_setup';

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
    const data = new RandomData();

    // Log into the family tree application
    await loginPage.family_tree_login();

    // Click button:has-text("Add Family Member")
    const newUser = {
        name: faker.person.fullName(),
        gang: data.randomGang(),
        relationship: data.randomRelationship(),
        appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
    }

    const updatedUser = {
        name: faker.person.fullName(),
        gang: data.randomGang(),
        relationship: data.randomRelationship(),
        appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":true}'
    }

    // Add family member
    await headerComp.click_add_family_member();
    await addMemberPage.add_new_family_member({
        name_to_add: newUser.name,
        gang_to_add: newUser.gang,
        relationship_to_add: newUser.relationship,
        appearance_to_add: newUser.appearance
    });

    // View Family Member
    const new_member_id = await indexPage.getIndex(newUser.name);
    await indexPage.edit_family_member(new_member_id);

    // Edit family member data
    await editMemberPage.update_family_member({
        name_to_update: updatedUser.name,
        gang_to_update: updatedUser.gang,
        relationship_to_update: updatedUser.relationship,
        appearance_to_update: updatedUser.appearance
    });

    // Verify user is created successfully
    await indexPage.view_family_member(new_member_id);
    await expect(await viewMemberPage.get_name()).toHaveText(updatedUser.name);
    await expect(await viewMemberPage.get_gang()).toHaveText(updatedUser.gang);
    await expect(await viewMemberPage.get_relationship()).toHaveText(updatedUser.relationship);
    await expect(await viewMemberPage.get_appearance()).toHaveText(updatedUser.appearance);

    // Remove user from gang
    await headerComp.click_remove_family_member();
    await removeMemberPage.remove_family_member(new_member_id);
    
    // Log out
    await headerComp.logout();
    await expect(page.getByTestId("login")).toBeVisible();
});
