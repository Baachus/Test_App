import { Page } from "@playwright/test";

class ScrollbarsPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Scrollbars'
    title_txt = 'An application may use'            // Bug in the page, the text is not correct
    scenario_label = 'Scenario'
    scenario_text = 'Find a button in'
    scenario_2_text = 'Update your test to'
    scenario_3_text = 'Then execute your'
    playground_label = 'Playground'
    scrollbars_btn = 'Hiding Button'

    // Methods
    async get_title_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async get_title_text(): Promise<string | null> {
        return this.page.getByText(this.title_txt).textContent();
    }

    async get_scenario_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.scenario_label}).textContent();
    }

    async get_scenario_text(): Promise<string | null> {
        return this.page.getByText(this.scenario_text).textContent();
    }

    async get_scenario_2_text(): Promise<string | null> {
        return this.page.getByText(this.scenario_2_text).textContent();
    }

    async get_scenario_3_text(): Promise<string | null> {
        return this.page.getByText(this.scenario_3_text).textContent();
    }

    async get_playground_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.playground_label}).textContent();
    }

    async click_scrollbars_btn(): Promise<void> {
        await this.page.getByRole('button', { name: this.scrollbars_btn}).click();
    }

    async get_scrollbars_btn_text(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.scrollbars_btn}).textContent();
    }

    async get_scrollbars_btn_text_visible(): Promise<boolean> {
        return this.page.getByRole('button', { name: this.scrollbars_btn}).isVisible();
    }
}

export { ScrollbarsPage };