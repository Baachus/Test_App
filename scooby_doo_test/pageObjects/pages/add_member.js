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
exports.AddMemberPage = void 0;
const faker_1 = require("@faker-js/faker");
const random_data_1 = require("../../utils/random_data");
class AddMemberPage {
    constructor(page) {
        // Selectors
        this.name_txt = '#id_name';
        this.gang_txt = '#id_gang';
        this.relationship_txt = '#id_relationship';
        this.appearance_txt = '#id_appearance';
        this.image_input = 'input[type=file]';
        this.add_member_btn = 'button:has-text("Add Family Member")';
        this.page = page;
    }
    // Methods
    add_new_family_member({ name_to_add, gang_to_add, relationship_to_add, appearance_to_add, image_to_add, }) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = new random_data_1.RandomData();
            // check passed in values or else generate random values
            name_to_add = name_to_add || faker_1.faker.person.fullName();
            gang_to_add = gang_to_add || data.randomGang();
            relationship_to_add = relationship_to_add || data.randomRelationship();
            appearance_to_add = appearance_to_add || '{"TV":[{}],"Movie":[{}],"APPEARED":false}';
            const newUser = {
                name: name_to_add,
                gang: gang_to_add,
                relationship: relationship_to_add,
                appearance: appearance_to_add,
                image: image_to_add
            };
            // Enter data into form
            yield this.page.fill(this.name_txt, newUser.name);
            yield this.page.selectOption(this.gang_txt, newUser.gang);
            yield this.page.fill(this.relationship_txt, newUser.relationship);
            yield this.page.fill(this.appearance_txt, newUser.appearance);
            // Add image
            const file_input = this.page.locator(this.image_input);
            if (newUser.image)
                yield file_input.setInputFiles(newUser.image);
            yield this.page.click(this.add_member_btn);
            return newUser;
        });
    }
}
exports.AddMemberPage = AddMemberPage;
