import { Page } from "@playwright/test";

class VerifyTextPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Verify Text'
    title_txt = 'In general inner text of a DOM element'
    hello_txt = /^Hello UserName!$/
    title_2_txt = 'and the text of the DOM'
    dom_hello_txt = 'Hello UserName!'
    title_3_txt = 'Take this fact into account'
    does_not_work_txt = 'Does not work'
    does_not_work_example_txt = '//span[.=\'Welcome UserName!\']'
    works_txt = 'Works'
    works_example_txt = '//span[normalize-space(.)=\''
    scenario_label = 'Scenario'
    scenario_text = 'Create a test that finds'
    playground_label = 'Playground'
    playground_txt = 'Welcome UserName!'

    // Methods
    async get_title_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async get_title_text(): Promise<string | null> {
        return this.page.getByText(this.title_txt).textContent();
    }

    async get_hello_txt(): Promise<string | null> {
        return this.page.getByText(this.hello_txt).textContent();
    }

    async get_title_2_text(): Promise<string | null> {
        return this.page.getByText(this.title_2_txt).textContent();
    }

    async get_dom_hello_txt(): Promise<string | null> {
        return this.page.getByText(this.dom_hello_txt).textContent();
    }

    async get_title_3_text(): Promise<string | null> {
        return this.page.getByText(this.title_3_txt).textContent();
    }

    async get_does_not_work_txt(): Promise<string | null> {
        return this.page.getByText(this.does_not_work_txt).textContent();
    }

    async get_does_not_work_example_txt(): Promise<string | null> {
        return this.page.getByText(this.does_not_work_example_txt).textContent();
    }

    async get_works_txt(): Promise<string | null> {
        return this.page.getByText(this.works_txt).textContent();
    }

    async get_works_example_txt(): Promise<string | null> {
        return this.page.getByText(this.works_example_txt).textContent();
    }

    async get_scenario_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.scenario_label}).textContent();
    }

    async get_scenario_text(): Promise<string | null> {
        return this.page.getByText(this.scenario_text).textContent();
    }

    async get_playground_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.playground_label}).textContent();
    }
    
    async get_playground_txt(): Promise<string | null> {
        return this.page.getByText(this.playground_txt).textContent();
    }
}

export { VerifyTextPage };