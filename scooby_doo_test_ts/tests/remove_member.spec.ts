import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../utils/random_data';
import test from './test_setup';

test('Remove family member and verify successful removal', async ({ 
    page,
    indexPage,
    loginPage,
    addMemberPage,
    removeMemberPage,
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

    // Add family member
    await headerComp.click_add_family_member();
    await addMemberPage.add_new_family_member({
        name_to_add: newUser.name,
        gang_to_add: newUser.gang,
        relationship_to_add: newUser.relationship,
        appearance_to_add: newUser.appearance
    });

    // Remove user from gang
    let new_member_id = await indexPage.getIndex(newUser.name);
    await headerComp.click_remove_family_member();
    await removeMemberPage.remove_family_member(new_member_id);

    // Verify user is removed successfully
    await expect(page.getByTestId(`name_${new_member_id}`)).toBeHidden();
    await expect(page.getByTestId(`gang_${new_member_id}`)).toBeHidden();
    await expect(page.getByTestId(`relationship_${new_member_id}`)).toBeHidden();

    // Log out
    await headerComp.logout();
    await expect(page.getByTestId("login")).toBeVisible();
});
