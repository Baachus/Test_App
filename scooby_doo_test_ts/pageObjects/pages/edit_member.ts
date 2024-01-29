import { faker } from '@faker-js/faker';
import { RandomData } from '../../utils/random_data';
import { Page } from "@playwright/test";

class EditMemberPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    name_txt = 'name';
    gang_txt = 'gang';
    relationship_txt = 'relationship';
    appearance_txt = 'appearance';
    image_input = 'image';
    update_member_btn = 'editMember';
    

    // Methods
    async update_family_member({
        name_to_update,
        gang_to_update,
        relationship_to_update,
        appearance_to_update,
        image_to_update,
    }: {
        name_to_update?: string,
        gang_to_update?: string,
        relationship_to_update?: string,
        appearance_to_update?: string,
        image_to_update?: string
    }):Promise<typeof updatedUser> {
        const data = new RandomData();

        // check passed in values or else generate random values
        name_to_update = name_to_update || faker.person.fullName();
        gang_to_update = gang_to_update || data.randomGang();
        relationship_to_update = relationship_to_update || data.randomRelationship();
        appearance_to_update = appearance_to_update || '{"TV":[{}],"Movie":[{}],"APPEARED":false}';
        image_to_update = image_to_update;

        const updatedUser = {
            name: name_to_update,
            gang: gang_to_update,
            relationship: relationship_to_update,
            appearance: appearance_to_update,
            image: image_to_update
        }

        // Enter data into form
        await this.page.getByTestId(this.name_txt).fill(updatedUser.name);
        await this.page.getByTestId(this.gang_txt).selectOption( updatedUser.gang);
        await this.page.getByTestId(this.relationship_txt).fill(updatedUser.relationship);
        await this.page.getByTestId(this.appearance_txt).fill(updatedUser.appearance);
        
        // Add image
        const file_input = await this.page.locator(this.image_input);
        if(updatedUser.image)
            await file_input.setInputFiles(updatedUser.image);
        
        await this.page.getByTestId(this.update_member_btn).click();

        return updatedUser;
    }
}

export { EditMemberPage };