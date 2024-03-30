import { faker } from '@faker-js/faker';
import { RandomData } from '../../../utils/random_data';
import { Page } from "@playwright/test";

class AddMemberPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    name_txt = '#id_name';
    gang_txt = '#id_gang';
    relationship_txt = '#id_relationship';
    appearance_txt = '#id_appearance';
    image_input = 'input[type=file]';
    add_member_btn = 'button:has-text("Add Family Member")';

    // Methods
    async add_new_family_member({
        name_to_add,
        gang_to_add,
        relationship_to_add,
        appearance_to_add,
        image_to_add,
    }: {
        name_to_add?: string,
        gang_to_add?: string,
        relationship_to_add?: string,
        appearance_to_add?: string,
        image_to_add?: string
    }):Promise<typeof newUser> {
        const data = new RandomData();

        // check passed in values or else generate random values
        name_to_add = name_to_add || faker.person.fullName();
        gang_to_add = gang_to_add || data.randomGang();
        relationship_to_add = relationship_to_add || data.randomRelationship();
        appearance_to_add = appearance_to_add || '{"TV":[{}],"Movie":[{}],"APPEARED":false}';

        const newUser = {
            name: name_to_add,
            gang: gang_to_add,
            relationship: relationship_to_add,
            appearance: appearance_to_add,
            image: image_to_add
        }

        // Enter data into form
        await this.page.fill(this.name_txt, newUser.name);
        await this.page.selectOption(this.gang_txt, newUser.gang);
        await this.page.fill(this.relationship_txt, newUser.relationship);
        await this.page.fill(this.appearance_txt, newUser.appearance);
        
        // Add image
        const file_input = this.page.locator(this.image_input);
        if(newUser.image)
            await file_input.setInputFiles(newUser.image);
        
        await this.page.click(this.add_member_btn);

        return newUser;
    }
    
}

export { AddMemberPage };