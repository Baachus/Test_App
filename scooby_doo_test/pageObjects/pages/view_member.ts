import { Locator, Page } from "@playwright/test";

class ViewMemberPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    name_txt = 'name';
    gang_txt = 'gang';
    relationship_txt = 'relationship';
    appearance_txt = 'appearance';
    image = 'image';

    // Methods
    async get_name(): Promise<Locator> {
        return await this.page.getByTestId(this.name_txt);
    }

    async get_name_text(): Promise<string> {
        const name = await this.get_name();
        return await name.innerText();
    }

    async get_gang(): Promise<Locator> {
        return await this.page.getByTestId(this.gang_txt);
    }

    async get_gang_text(): Promise<string> {
        const gang = await this.get_gang();
        return await gang.innerText();
    }

    async get_relationship(): Promise<Locator> {
        return await this.page.getByTestId(this.relationship_txt);
    }

    async get_relationship_text(): Promise<string> {
        const relationship = await this.get_relationship();
        return await relationship.innerText();
    }

    async get_appearance(): Promise<Locator> {
        return await this.page.getByTestId(this.appearance_txt);
    }

    async get_appearance_text(): Promise<string> {
        const appearance = await this.get_appearance();
        return await appearance.innerText();
    }
    
    async get_image(): Promise<Locator> {
        return await this.page.getByTestId(this.image);
    }
}

export { ViewMemberPage };