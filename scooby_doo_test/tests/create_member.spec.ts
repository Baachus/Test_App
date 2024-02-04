import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../utils/random_data';
import test from './test_setup';

test('Create new family member and verify successful creation', async ({ 
    page, 
    loginPage, 
    indexPage, 
    addMemberPage,
    headerComp 
}) => {
    const data = new RandomData();

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

    // Verify user is created successfully
    const new_member_id = await indexPage.getIndex(newUser.name);
    await expect(page.getByTestId(`name_${new_member_id}`)).toHaveText(newUser.name);
    await expect(page.getByTestId(`gang_${new_member_id}`)).toHaveText(newUser.gang);
    await expect(page.getByTestId(`relationship_${new_member_id}`)).toHaveText(newUser.relationship);

    // Remove user from gang
    await headerComp.click_remove_family_member();
    await page.getByTestId('id_to_remove').fill(new_member_id);
    await page.locator('#removeMember').click();
    
    // Log out
    await headerComp.logout();
    await expect(page.getByTestId("login")).toBeVisible();
});

test('Default new family member image is displayed', async ({ 
    page, 
    loginPage, 
    indexPage, 
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

    // Click View Family Member
    const new_member_id = await indexPage.getIndex(newUser.name);
    await page.getByTestId(`view_button_${new_member_id}`).click();

    // Verify default image is displayed
    await page.getByTestId('image').waitFor({ state: 'visible' });
    await expect(page.getByTestId('image')).toHaveScreenshot();

    // Remove user from gang
    await headerComp.click_remove_family_member();
    await removeMemberPage.remove_family_member(new_member_id);
    
    // Log out
    await headerComp.logout();
    await expect(page.getByTestId("login")).toBeVisible();

});

test('Uploaded family member image is displayed', async ({ 
    page, 
    loginPage, 
    indexPage, 
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
        appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}',
        image: './test_files/images/Happy_Duck.png'
    }

    // Add family member
    await headerComp.click_add_family_member();
    await addMemberPage.add_new_family_member({
        name_to_add: newUser.name,
        gang_to_add: newUser.gang,
        relationship_to_add: newUser.relationship,
        appearance_to_add: newUser.appearance,
        image_to_add: newUser.image
    });

    // Click View Family Member
    const new_member_id = await indexPage.getIndex(newUser.name);
    await page.getByTestId(`view_button_${new_member_id}`).click();

    // Verify default image is displayed
    await page.getByTestId('image').waitFor({ state: 'visible' });
    await expect(page.getByTestId('image')).toHaveScreenshot();

    // Remove user from gang
    await headerComp.click_remove_family_member();
    await removeMemberPage.remove_family_member(new_member_id);
    
    // Log out
    await headerComp.logout();
    await expect(page.getByTestId("login")).toBeVisible();
});
