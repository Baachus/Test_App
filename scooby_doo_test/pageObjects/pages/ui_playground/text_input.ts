import { Locator, Page } from "@playwright/test";

class TextInputPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Text Input'
    title_txt = 'Entering text with physical keyboard'
    scenario_label = 'Scenario'
    scenario_text = 'Record setting text into the'
    scenario_2_text = 'Then execute your test'
    playground_label = 'Playground'
    playground_text = 'Set New Button Name'
    input_value_text_box = '#newButtonName'
    update_button = '#updatingButton'

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

    async get_playground_text(): Promise<string | null> {
        return this.page.getByText(this.playground_text).textContent();
    }

    async set_input_value(value: string): Promise<void> {
        await this.page.locator(this.input_value_text_box).fill(value);
    }

    async type_input_value(value: string): Promise<void> {
        await this.page.locator(this.input_value_text_box).type(value);
    }

    async get_input_value(): Promise<string | null> {
        return this.page.locator(this.input_value_text_box).inputValue();
    }

    async click_update(): Promise<void> {
        await this.page.locator(this.update_button).click();
    }

    async get_click_btn(): Promise<Locator | null> {
        return this.page.locator(this.update_button)
    }

    async get_update_button_text(): Promise<string | null> {
        return this.page.locator(this.update_button).textContent();
    }
}

export { TextInputPage };