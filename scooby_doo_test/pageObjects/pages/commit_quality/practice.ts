import { Page } from "@playwright/test";

class PracticePage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    practice_title = 'Note to user:'
    general_components = 'General Components'
    

    // Methods    
    async get_login_title(): Promise<string> {
        return await this.page.getByText(this.login_title).innerText();
    }
}

export { PracticePage };