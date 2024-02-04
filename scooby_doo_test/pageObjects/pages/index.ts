import { Page } from "@playwright/test";

class IndexPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    

    // Methods
    async getIndex(name: string): Promise<string> {
        const testId = await this.page.getAttribute(`text=${name}`, "data-testid");
        const index = testId?.split("_")[1];
        if (index === undefined) {
            throw new Error("Index not found");
        }
        return index;
    }

    async view_family_member(new_member_id: string): Promise<void> {
        await this.page.getByTestId(`view_button_${new_member_id}`).click();
    }

    async edit_family_member(new_member_id: string): Promise<void> {
        await this.page.getByTestId(`edit_button_${new_member_id}`).click();
    }
}

export { IndexPage };