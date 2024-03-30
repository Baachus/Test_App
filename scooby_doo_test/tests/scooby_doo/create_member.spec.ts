import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';
import test from '../../fixtures/test_setup_scooby_doo';

test.describe('@Scooby_Doo Create Family Member Tests', () => {
    test('Create new family member and verify successful creation', async ({ 
        page, 
        loginPage, 
        indexPage, 
        addMemberPage,
        addMemberPageAssertion,
        removeMemberPage,
        headerComp 
    }) => {
        const data = new RandomData();

        const newUser = {
            name: faker.person.fullName(),
            gang: data.randomGang(),
            relationship: data.randomRelationship(),
            appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
        }

        let new_member_id = '';     // Member ID of newly created family member

        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Add family member', async () => {
            await headerComp.click_add_family_member();
            await addMemberPage.add_new_family_member({
                name_to_add: newUser.name,
                gang_to_add: newUser.gang,
                relationship_to_add: newUser.relationship,
                appearance_to_add: newUser.appearance
            });    
        });

        await test.step('Verify user is created successfully', async () => {
            new_member_id = await indexPage.getIndex(newUser.name);
            await expect(page.getByTestId(`name_${new_member_id}`)).toHaveText(newUser.name);
            await expect(page.getByTestId(`gang_${new_member_id}`)).toHaveText(newUser.gang);
            await expect(page.getByTestId(`relationship_${new_member_id}`)).toHaveText(newUser.relationship);
        });

        await test.step('Remove user from gang', async () => {
            await headerComp.click_remove_family_member();
            await removeMemberPage.remove_family_member(new_member_id);
        });
        
        await test.step('Log out', async () => {
            await headerComp.logout();
            await expect(page.getByTestId("login")).toBeVisible();
        });
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
        const newUser = {
            name: faker.person.fullName(),
            gang: data.randomGang(),
            relationship: data.randomRelationship(),
            appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
        }
        let new_member_id = '';     // Member ID of newly created family member

        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });


        await test.step('Add family member', async () => {
            await headerComp.click_add_family_member();
            await addMemberPage.add_new_family_member({
                name_to_add: newUser.name,
                gang_to_add: newUser.gang,
                relationship_to_add: newUser.relationship,
                appearance_to_add: newUser.appearance
            });    
        });

        await test.step('View Family Member and Verify Image', async () => {
            // Click View Family Member
            new_member_id = await indexPage.getIndex(newUser.name);
            await page.getByTestId(`view_button_${new_member_id}`).click();

            // Verify default image is displayed
        });

        await test.step('Remove user from gang', async () => {
            await headerComp.click_remove_family_member();
            await removeMemberPage.remove_family_member(new_member_id);
        });

        await test.step('Log out', async () => {
            await headerComp.logout();
            await expect(page.getByTestId("login")).toBeVisible();
        });
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
        let new_member_id = '';     // Member ID of newly created family member
        const newUser = {
            name: faker.person.fullName(),
            gang: data.randomGang(),
            relationship: data.randomRelationship(),
            appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}',
            image: './test_files/images/Happy_Duck.png'
        }

        await test.step('Log into the family tree application', async () => {
            await loginPage.family_tree_login();
        });

        await test.step('Add family member', async () => {
            await headerComp.click_add_family_member();
            await addMemberPage.add_new_family_member({
                name_to_add: newUser.name,
                gang_to_add: newUser.gang,
                relationship_to_add: newUser.relationship,
                appearance_to_add: newUser.appearance,
                image_to_add: newUser.image
            });    
        });

        await test.step('View Family Member and Verify Image', async () => {
            // Click View Family Member
            new_member_id = await indexPage.getIndex(newUser.name);
            await page.getByTestId(`view_button_${new_member_id}`).click();

            // Verify default image is displayed
            await page.getByTestId('image').waitFor({ state: 'visible' });
            await expect(page.getByTestId('image')).toHaveScreenshot();
        });

        await test.step('Remove user from gang', async () => {
            await headerComp.click_remove_family_member();
            await removeMemberPage.remove_family_member(new_member_id);
        });
        
        await test.step('Log out', async () => {
            await headerComp.logout();
            await expect(page.getByTestId("login")).toBeVisible();
        });
    });
});
