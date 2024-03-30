import { Page } from "@playwright/test";

class HeaderComp {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    logout_lnk = 'a:has-text("Logout")';
    home_lnk = 'a:has-text("home")';
    remove_family_member_lnk = 'a:has-text("Remove Family Member")';
    add_family_member_lnk = 'a:has-text("Add Family Member")';
    family_tree_lnk = 'a:has-text("View Family Tree")';

    // Methods
    async logout(): Promise<void> {
        await this.page.click(this.logout_lnk);
    }

    async click_home(): Promise<void> {
        await this.page.click(this.home_lnk);
    }

    async click_remove_family_member(): Promise<void> {
        await this.page.click(this.remove_family_member_lnk);
    }

    async click_add_family_member(): Promise<void> {
        await this.page.click(this.add_family_member_lnk);
    }
    
    async click_family_tree(): Promise<void> {
        await this.page.click(this.family_tree_lnk);
    }
}

export { HeaderComp };