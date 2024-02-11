import { Page } from "@playwright/test";

class HeaderComp {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    home_lnk = 'a:has-text("Home")';
    resources_lnk = 'a:has-text("Resources")';
    home_icon = 'a:has-text("UITAP")';

    // Methods
    async click_home(): Promise<void> {
        await this.page.click(this.home_lnk);
    }
    async click_resources(): Promise<void> {
        await this.page.click(this.resources_lnk);
    }
    async click_home_icon(): Promise<void> {
        await this.page.click(this.home_icon);
    }
}

export { HeaderComp };