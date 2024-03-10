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
exports.createMember = void 0;
const test_1 = require("@playwright/test");
const faker_1 = require("@faker-js/faker");
const random_data_1 = require("../../utils/random_data");
function createMember(page, loginPage, indexPage, addMemberPage, removeMemberPage, headerComp) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = new random_data_1.RandomData();
        const newUser = {
            name: faker_1.faker.person.fullName(),
            gang: data.randomGang(),
            relationship: data.randomRelationship(),
            appearance: '{"TV":[{}],"Movie":[{}],"APPEARED":false}'
        };
        let new_member_id = ''; // Member ID of newly created family member
        yield loginPage.family_tree_login();
        yield headerComp.click_add_family_member();
        yield addMemberPage.add_new_family_member({
            name_to_add: newUser.name,
            gang_to_add: newUser.gang,
            relationship_to_add: newUser.relationship,
            appearance_to_add: newUser.appearance
        });
        new_member_id = yield indexPage.getIndex(newUser.name);
        yield (0, test_1.expect)(page.getByTestId(`name_${new_member_id}`)).toHaveText(newUser.name);
        yield (0, test_1.expect)(page.getByTestId(`gang_${new_member_id}`)).toHaveText(newUser.gang);
        yield (0, test_1.expect)(page.getByTestId(`relationship_${new_member_id}`)).toHaveText(newUser.relationship);
        yield headerComp.click_remove_family_member();
        yield removeMemberPage.remove_family_member(new_member_id);
        yield headerComp.logout();
        yield (0, test_1.expect)(page.getByTestId("login")).toBeVisible();
    });
}
exports.createMember = createMember;
