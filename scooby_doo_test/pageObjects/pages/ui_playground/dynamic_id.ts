import { Locator, Page } from "@playwright/test";

class DynamicIDPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Dynamic ID'
    title_txt = 'Modern applications often generate';
    scenario_label = 'Scenario';
    scenario_text = 'Record button click';
    scenario_2_text = 'Then execute your test';
    playground_label = 'Playground';
    dynamic_id_btn = 'Button with Dynamic ID';

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

    async click_dynamic_id_btn(): Promise<void> {
        await this.page.getByRole('button', { name: this.dynamic_id_btn}).click();
    }

    async get_dynamic_id_btn(): Promise<Locator> {
        return this.page.getByRole('button', { name: this.dynamic_id_btn});
    }

    async get_dynamic_id_btn_text(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.dynamic_id_btn}).textContent();
    }
}

export { DynamicIDPage };