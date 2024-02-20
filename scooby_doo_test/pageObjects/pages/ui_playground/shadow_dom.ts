import { Locator, Page } from "@playwright/test";

class ShadowDOMPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Shadow DOM'
    title_txt = 'This is a page with a Shadow DOM'            // Bug in the page, the text is not correct
    scenario_label = 'Scenario'
    scenario_text = 'Create a test that clicks'
    scenario_2_text = 'Add an assertion step'
    scenario_3_text = 'Then execute the test'
    playground_label = 'Playground'
    playground_text = 'GUID Generator:'
    guid_text_field = '#editField'
    generate_guid_btn = '#buttonGenerate'
    copy_guid_btn = '#buttonCopy'

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

    async get_playground_text(): Promise<string | null> {
        return this.page.getByText(this.playground_text).textContent();
    }

    async get_guid_text_field(): Promise<Locator | null> {
        return this.page.locator(this.guid_text_field);
    }

    async get_guid_text_field_text(): Promise<string | null> {
        return this.page.locator(this.guid_text_field).textContent();
    }

    async get_generate_guid_btn(): Promise<Locator | null> {
        return this.page.locator(this.generate_guid_btn);
    }

    async click_generate_guid_btn(): Promise<void> {
        await this.page.click(this.generate_guid_btn);
    }

    async get_generate_guid_btn_text(): Promise<string | null> {
        return this.page.locator(this.generate_guid_btn).textContent();
    }

    async get_copy_guid_btn(): Promise<Locator | null> {
        return this.page.locator(this.copy_guid_btn);
    }

    async click_copy_guid_btn(): Promise<void> {
        await this.page.click(this.copy_guid_btn);
    }

    async get_copy_guid_btn_text(): Promise<string | null> {
        return this.page.locator(this.copy_guid_btn).textContent();
    }

    async generate_guid(): Promise<string | null> {
        await this.page.click(this.generate_guid_btn);
        return this.page.locator(this.guid_text_field).textContent();
    }
}

export { ShadowDOMPage };