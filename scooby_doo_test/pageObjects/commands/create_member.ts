import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';

async function createMember(
    page, 
    loginPage, 
    indexPage, 
    addMemberPage,
    removeMemberPage,
    headerComp 
)   {
    const data = new RandomData();

    const newUser = {
        name: faker.person.fullName(),
        gang: data.randomGang(),
        relationship: data.randomRelationship(),
        appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
    }

    let new_member_id = '';     // Member ID of newly created family member

    await loginPage.family_tree_login();

    await headerComp.click_add_family_member();
    await addMemberPage.add_new_family_member({
        name_to_add: newUser.name,
        gang_to_add: newUser.gang,
        relationship_to_add: newUser.relationship,
        appearance_to_add: newUser.appearance
    });    

    new_member_id = await indexPage.getIndex(newUser.name);
    await expect(page.getByTestId(`name_${new_member_id}`)).toHaveText(newUser.name);
    await expect(page.getByTestId(`gang_${new_member_id}`)).toHaveText(newUser.gang);
    await expect(page.getByTestId(`relationship_${new_member_id}`)).toHaveText(newUser.relationship);

    await headerComp.click_remove_family_member();
    await removeMemberPage.remove_family_member(new_member_id);

    await headerComp.logout();
    await expect(page.getByTestId("login")).toBeVisible();
}

export { createMember };
