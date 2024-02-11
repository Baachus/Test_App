import { Page } from "@playwright/test";

class FooterComp {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    star_project_btn = '#github span';
    fork_project_lnk = 'a:has-text("Fork the website on GitHub")';
    rapise_lnk = 'a:has-text("Rapise")';
    inflectra_lnk = 'a:has-text("Inflectra Corporation")';
    apache_lnk = 'a:has-text("Apache")';

    // Methods
    async star_project(): Promise<void> {
        await this.page.locator(this.star_project_btn).click();
    }

    async click_fork_project(): Promise<void> {
        await this.page.click(this.fork_project_lnk);
    }

    async click_rapise(): Promise<void> {
        await this.page.click(this.rapise_lnk);
    }

    async click_inflectra(): Promise<void> {
        await this.page.click(this.inflectra_lnk);
    }

    async click_apache(): Promise<void> {
        await this.page.click(this.apache_lnk);
    }
}

export { FooterComp };