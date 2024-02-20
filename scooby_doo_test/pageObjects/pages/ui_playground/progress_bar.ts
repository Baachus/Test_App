import { Page } from "@playwright/test";

class ProgressBarPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Progress Bar'
    title_txt = 'A web application may use a progress bar'
    scenario_label = 'Scenario'
    scenario_text = 'Create a test that clicks Start'
    start_btn = '#startButton'
    stop_btn = '#stopButton'
    progress_bar = '#progressBar'
    result = '#result'

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

    async get_playground_heading(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async click_on_start_button(): Promise<void> {
        await this.page.locator(this.start_btn).click();
    }

    async get_start_button_text(): Promise<string | null> {
        return this.page.locator(this.start_btn).textContent();
    }

    async click_on_stop_button(): Promise<void> {
        await this.page.locator(this.stop_btn).click();
    }

    async get_stop_button_text(): Promise<string | null> {
        return this.page.locator(this.stop_btn).textContent();
    }

    async get_progress_bar_value(): Promise<string | null> {
        return this.page.getAttribute(this.progress_bar, 'aria-valuenow');
    }

    async get_result_text(): Promise<string | null> {
        return this.page.locator(this.result).textContent();
    }

    async wait_for_progress_bar_to_reach(value: number): Promise<void> {
        await this.page.waitForFunction(
            `document.querySelector('${this.progress_bar}').getAttribute('aria-valuenow') === '${value}'`
        );
    }
}

export { ProgressBarPage };