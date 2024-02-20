import { Page } from "@playwright/test";

class MouseOverPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Mouse Over'
    title_txt = 'Placing mouse over an element may lead'
    title_2_text = 'This puzzle complicates'
    scenario_label = 'Scenario'
    scenario_text = 'Record 2 consecutive'
    scenario_2_text = 'Execute the test and make'
    playground_label = 'Playground'
    click_lnk = 'Click me'
    click_link_result_label = 'The link clicked'
    click_count_label = '#clickCount'


    // Methods
    async get_title_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async get_title_text(): Promise<string | null> {
        return this.page.getByText(this.title_txt).textContent();
    }

    async get_title_2_text(): Promise<string | null> {
        return this.page.getByText(this.title_2_text).textContent();
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

    async get_click_result(): Promise<string | null> {
        return await this.page.getByText(this.click_link_result_label).textContent(); 
    }

    async get_click_count(): Promise<string | null> {
        return await this.page.textContent(this.click_count_label);
    }

    async click_link(): Promise<void> {
        await this.page.getByText(this.click_lnk).click();
    }
}

export { MouseOverPage };