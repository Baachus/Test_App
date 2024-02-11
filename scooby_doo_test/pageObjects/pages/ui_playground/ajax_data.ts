import { Locator, Page } from "@playwright/test";

class AJAXDataPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'AJAX Data'
    title_txt = 'An element may appaear'            // Bug in the page, the text is not correct
    scenario_label = 'Scenario'
    scenario_text = 'Record the following steps'
    scenario_2_text = 'Then execute your test'
    playground_label = 'Playground'
    ajax_btn = 'Button Triggering AJAX Request'
    ajax_load_icon = '#spinner'
    ajax_load_text = 'Data loaded'

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

    async click_ajax_btn(): Promise<void> {
        await this.page.getByRole('button', { name: this.ajax_btn}).click();
    }

    async get_ajax_btn(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.ajax_btn}).textContent();
    }

    async get_ajax_load_icon_locator(): Promise<Locator | null> {
        return this.page.locator(this.ajax_load_icon);
    }

    async get_ajax_load_text(): Promise<string | null> {
        return this.page.getByText(this.ajax_load_text).textContent();
    }

    async get_ajax_load_text_locator(): Promise<Locator | null> {
        return this.page.getByText(this.ajax_load_text);
    }
}

export { AJAXDataPage };