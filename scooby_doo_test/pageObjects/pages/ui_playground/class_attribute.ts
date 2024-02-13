import { Locator, Page } from "@playwright/test";

class ClassAttributePage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Class Attribute'
    one_class_txt = 'Class attribute of an element'
    one_class_example_txt = '<button class="btn btn-primary btn-test">'
    xpath_txt = 'XPath selector '
    xpath_example_txt = "//button[@class='btn-primary']"
    correct_variant_txt = 'Correct variant'
    correct_variant_example_txt = '//button[contains(concat('

    scenario_label = 'Scenario'
    scenario_text = 'Record primary (blue)'
    scenario_2_text = 'Then execute your test to make sure'
    playground_label = 'Playground'
    green_btn = 'btn-success'
    yellow_btn = 'btn-warning'
    blue_btn = 'btn-primary'

    // Methods
    async get_title_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async get_one_class_text(): Promise<string | null> {
        return this.page.getByText(this.one_class_txt).textContent();
    }

    async get_one_class_example_text(): Promise<string | null> {
        return this.page.getByText(this.one_class_example_txt).textContent();
    }

    async get_xpath_text(): Promise<string | null> {
        return this.page.getByText(this.xpath_txt).textContent();
    }

    async get_xpath_example_text(): Promise<string | null> {
        return this.page.getByText(this.xpath_example_txt).textContent();
    }

    async get_correct_variant_text(): Promise<string | null> {
        return this.page.getByText(this.correct_variant_txt).textContent();
    }

    async get_correct_variant_example_text(): Promise<string | null> {
        return this.page.getByText(this.correct_variant_example_txt).textContent();
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

    // Playground Buttons
    async get_green_btn(): Promise<string | null> {
        return this.page.locator(`.${this.green_btn}`).textContent();
    }

    async get_yellow_btn(): Promise<string | null> {
        return this.page.locator(`.${this.yellow_btn}`).textContent();
    }

    async get_blue_btn(): Promise<string | null> {
        return this.page.locator(`.${this.blue_btn}`).textContent();
    }

    async get_green_btn_locator(): Promise<Locator | null> {
        return this.page.locator(`.${this.green_btn}`);
    }

    async get_yellow_btn_locator(): Promise<Locator | null> {
        return this.page.locator(`.${this.yellow_btn}`);
    }

    async get_blue_btn_locator(): Promise<Locator | null> {
        return this.page.locator(`.${this.blue_btn}`);
    }

    async click_green_btn(): Promise<void> {
        await this.page.locator(`.${this.green_btn}`).click();
    }

    async click_yellow_btn(): Promise<void> {
        await this.page.locator(`.${this.yellow_btn}`).click();
    }

    async click_blue_btn(): Promise<void> {
        await this.page.locator(`.${this.blue_btn}`).click();
    }

}

export { ClassAttributePage };