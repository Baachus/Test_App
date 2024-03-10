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
exports.EditMemberPage = void 0;
const faker_1 = require("@faker-js/faker");
const random_data_1 = require("../../utils/random_data");
class EditMemberPage {
    constructor(page) {
        // Selectors
        this.name_txt = 'name';
        this.gang_txt = 'gang';
        this.relationship_txt = 'relationship';
        this.appearance_txt = 'appearance';
        this.image_input = 'image';
        this.update_member_btn = 'editMember';
        this.page = page;
    }
    // Methods
    update_family_member({ name_to_update, gang_to_update, relationship_to_update, appearance_to_update, image_to_update, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new random_data_1.RandomData();
            // check passed in values or else generate random values
            name_to_update = name_to_update || faker_1.faker.person.fullName();
            gang_to_update = gang_to_update || data.randomGang();
            relationship_to_update = relationship_to_update || data.randomRelationship();
            appearance_to_update = appearance_to_update || '{"TV":[{}],"Movie":[{}],"APPEARED":false}';
            const updatedUser = {
                name: name_to_update,
                gang: gang_to_update,
                relationship: relationship_to_update,
                appearance: appearance_to_update,
                image: image_to_update
            };
            // Enter data into form
            yield this.page.getByTestId(this.name_txt).fill(updatedUser.name);
            yield this.page.getByTestId(this.gang_txt).selectOption(updatedUser.gang);
            yield this.page.getByTestId(this.relationship_txt).fill(updatedUser.relationship);
            yield this.page.getByTestId(this.appearance_txt).fill(updatedUser.appearance);
            // Add image
            const file_input = this.page.locator(this.image_input);
            if (updatedUser.image)
                yield file_input.setInputFiles(updatedUser.image);
            yield this.page.getByTestId(this.update_member_btn).click();
            return updatedUser;
        });
    }
}
exports.EditMemberPage = EditMemberPage;
