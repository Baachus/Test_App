import { Page } from "@playwright/test";

class RemoveMemberPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    id_to_remove_txt = '#id_id';
    remove_member_btn = '#removeMember';

    // Methods
    async remove_family_member(idToRemove: string): Promise<void>{
        await this.page.fill(this.id_to_remove_txt, idToRemove);
        await this.page.locator(this.remove_member_btn).click();
    }
}

export { RemoveMemberPage };