import { Locator, Page } from "@playwright/test";

class NonBreakingPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Non-Breaking Space'
    title_txt = 'There are cases in test automation when'
    scenario_label = 'Scenario'
    scenario_text = 'Use the following xpath to find'
    scenario_2_text = 'Notice that the XPath'
    playground_label = 'Playground'
    click_button = 'My Button'

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

    async get_button(): Promise<Locator | null> {
        return this.page.getByRole('button', { name: this.click_button})
    }

    async get_button_text(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.click_button}).textContent();
    }
}

export { NonBreakingPage };