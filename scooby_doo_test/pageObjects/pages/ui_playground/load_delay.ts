import { Locator, Page } from "@playwright/test";

class LoadDelayPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Load Delays'
    title_txt = 'Server response may often come'
    scenario_label = 'Scenario'
    scenario_text = 'Navigate to Home page and'
    scenario_2_text = 'Then play the test'
    playground_label = 'Playground'
    delay_btn = 'Button Appearing After Delay'

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
        await this.page.getByRole('button', { name: this.delay_btn, includeHidden: false}).click();
    }

    async get_delay_btn(): Promise<Locator | null> {
        return this.page.getByRole('button', { name: this.delay_btn});
    }

    async get_delay_btn_text(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.delay_btn}).textContent();
    }
}

export { LoadDelayPage };