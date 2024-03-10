"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const faker_1 = require("@faker-js/faker");
const random_data_1 = require("../../utils/random_data");
const test_setup_1 = require("./test_setup");
(0, test_setup_1.default)('Edit family member and verify successful data changes', ({ page, indexPage, loginPage, addMemberPage, removeMemberPage, editMemberPage, viewMemberPage, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
    const data = new random_data_1.RandomData();
    // Log into the family tree application
    yield loginPage.family_tree_login();
    // Click button:has-text("Add Family Member")
    const newUser = {
        name: faker_1.faker.person.fullName(),
        gang: data.randomGang(),
        relationship: data.randomRelationship(),
        appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
    };
    const updatedUser = {
        name: faker_1.faker.person.fullName(),
        gang: data.randomGang(),
        relationship: data.randomRelationship(),
        appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":true}'
    };
    // Add family member
    yield headerComp.click_add_family_member();
    yield addMemberPage.add_new_family_member({
        name_to_add: newUser.name,
        gang_to_add: newUser.gang,
        relationship_to_add: newUser.relationship,
        appearance_to_add: newUser.appearance
    });
    // View Family Member
    const new_member_id = yield indexPage.getIndex(newUser.name);
    yield indexPage.edit_family_member(new_member_id);
    // Edit family member data
    yield editMemberPage.update_family_member({
        name_to_update: updatedUser.name,
        gang_to_update: updatedUser.gang,
        relationship_to_update: updatedUser.relationship,
        appearance_to_update: updatedUser.appearance
    });
    // Verify user is created successfully
    yield indexPage.view_family_member(new_member_id);
    yield (0, test_1.expect)(yield viewMemberPage.get_name()).toHaveText(updatedUser.name);
    yield (0, test_1.expect)(yield viewMemberPage.get_gang()).toHaveText(updatedUser.gang);
    yield (0, test_1.expect)(yield viewMemberPage.get_relationship()).toHaveText(updatedUser.relationship);
    yield (0, test_1.expect)(yield viewMemberPage.get_appearance()).toHaveText(updatedUser.appearance);
    // Remove user from gang
    yield headerComp.click_remove_family_member();
    yield removeMemberPage.remove_family_member(new_member_id);
    // Log out
    yield headerComp.logout();
    yield (0, test_1.expect)(page.getByTestId("login")).toBeVisible();
}));
