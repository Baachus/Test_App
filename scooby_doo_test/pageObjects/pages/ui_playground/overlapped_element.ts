import { Locator, Page } from "@playwright/test";

class OverlappedElementPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Overlapped Element'
    title_txt = 'Entering text to a partially'            // Bug in the page, the text is not correct
    scenario_label = 'Scenario'
    scenario_text = 'Record setting text into'
    scenario_2_text = 'Then execute your test'
    playground_label = 'Playground'
    playground_id_textBox = '#id'
    playground_name_textBox = '#name'

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

    async get_playground_id_textBox(): Promise<Locator | null> {
        return this.page.locator(this.playground_id_textBox);
    }

    async set_playground_id_textBox(value: string): Promise<void> {
        await this.page.evaluate((selector) => {
            const element = document.querySelector(selector);
            if (element) {
                element.scrollIntoView();
            }
        }, this.playground_id_textBox);
        await this.page.fill(this.playground_id_textBox, value);
    }

    async get_playground_name_textBox(): Promise<Locator | null> {
        return this.page.locator(this.playground_name_textBox);
    }
    async set_playground_name_textBox(value: string): Promise<void> {
        await this.page.evaluate((selector) => {
            const element = document.querySelector(selector);
            if (element) {
                element.scrollIntoView();
            }
        }, this.playground_name_textBox);
        await this.page.fill(this.playground_name_textBox, value);
    }
}

export { OverlappedElementPage };