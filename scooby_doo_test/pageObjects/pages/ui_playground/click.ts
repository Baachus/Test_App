import { Locator, Page } from "@playwright/test";

class ClickPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Click'
    title_txt = 'Physical mouse click and DOM event emulated'            // Bug in the page, the text is not correct
    scenario_label = 'Scenario'
    scenario_text = 'Record button click'
    scenario_2_text = 'Then execute your test'
    playground_label = 'Playground'
    click_button = 'Button That Ignores DOM Click Event'

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

    async get_playground_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.playground_label}).textContent();
    }

    async click_btn(): Promise<void> {
        await this.page.getByRole('button', { name: this.click_button, includeHidden: false}).click();
    }

    async get_click_btn(): Promise<Locator | null> {
        return this.page.getByRole('button', { name: this.click_button})
    }

    async get_click_btn_text(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.click_button}).textContent();
    }
}

export { ClickPage };