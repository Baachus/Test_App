import { Locator, Page } from "@playwright/test";

class HiddenLayersPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Hidden Layers'
    title_txt = 'Some applications use DOM'            // Bug in the page, the text is not correct
    scenario_label = 'Scenario'
    scenario_text = 'Record button click and then'
    scenario_2_text = 'Execute the test to make'
    playground_label = 'Playground'
    green_btn = '#greenButton'
    blue_btn = '#blueButton'

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

    async click_green_btn(): Promise<void> {
        await this.page.locator(this.green_btn).click();
    }

    async get_green_btn_text(): Promise<string | null> {
        return this.page.locator(this.green_btn).textContent();
    }

    async click_blue_btn(): Promise<void> {
        await this.page.locator(this.blue_btn).click();
    }

    async get_blue_btn_text(): Promise<string | null> {
        return this.page.locator(this.blue_btn).textContent();
    }

    async get_button_image(): Promise<Locator | null> {
        return this.page.locator(this.blue_btn);
    }
}

export { HiddenLayersPage };