import { Locator, Page } from "@playwright/test";

class ClientSideDelayPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Client Side Delay'
    title_text = 'An element may appaear on a '

    scenario_label = 'Scenario'
    scenario_text = 'Record the following steps. Press'
    scenario_2_text = 'Then execute your test to make'

    playground_label = 'Playground'
    client_side_btn = 'Button Triggering Client Side Logic'
    load_icon = '#spinner'
    successful_load_txt = 'Data calculated on the client side'

    // Methods
    async get_title_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async get_title_text(): Promise<string | null> {
        return this.page.getByText(this.title_text).textContent();
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

    async click_on_client_side_btn(): Promise<void> {
        await this.page.getByText(this.client_side_btn).click();
    }

    async get_client_side_btn(): Promise<string | null> {
        return this.page.getByRole('button', { name: this.client_side_btn}).textContent();
    }

    async get_load_icon(): Promise<Locator | null> {
        return this.page.locator(this.load_icon);
    }

    async get_successful_load_txt(): Promise<string | null> {
        return this.page.getByText(this.successful_load_txt).textContent();
    }
}

export { ClientSideDelayPage };