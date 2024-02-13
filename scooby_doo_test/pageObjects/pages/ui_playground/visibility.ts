import { Locator, Page } from "@playwright/test";

class VisibilityPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_label = 'Visibility'
    title_txt = 'Checking if element is '
    title_2_txt = 'An element may be '
    title_3_txt = 'it may have zero height'
    title_4_txt = 'it may be covered by'
    title_5_txt = 'it may be hidden using styles'
    title_6_txt = 'or moved offscreen.'

    scenario_label = 'Scenario'
    scenario_text = 'Learn locators of all buttons.'
    scenario_2_text = 'In your testing scenario '
    scenario_3_text = 'Determine if other buttons'
    
    playground_label = 'Playground'
    hide_btn = 'Hide'
    removed_btn = 'Removed'
    zero_width_btn = 'Zero Width'
    overlapped_btn = 'Overlapped'
    opacity_btn = 'Opacity'
    visibility_hidden_btn = 'Visibility Hidden'
    display_none_btn = 'Display None'
    offscreen_btn = 'Offscreen'

    // Methods
    async get_title_label(): Promise<string | null> {
        return this.page.getByRole('heading', { name: this.title_label}).textContent();
    }

    async get_title_text(): Promise<string | null> {
        return this.page.getByText(this.title_txt).textContent();
    }

    async get_title_2_text(): Promise<string | null> {
        return this.page.getByText(this.title_2_txt).textContent();
    }

    async get_title_3_text(): Promise<string | null> {
        return this.page.getByText(this.title_3_txt).textContent();
    }

    async get_title_4_text(): Promise<string | null> {
        return this.page.getByText(this.title_4_txt).textContent();
    }

    async get_title_5_text(): Promise<string | null> {
        return this.page.getByText(this.title_5_txt).textContent();
    }

    async get_title_6_text(): Promise<string | null> {
        return this.page.getByText(this.title_6_txt).textContent();
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

    // Playground Buttons 

    async click_hide_btn(): Promise<void> {
        await this.page.locator('button', {hasText: this.hide_btn}).click();
    }

    async get_hide_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.hide_btn});
    }

    async get_hide_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.hide_btn}).textContent();
    }

    async click_removed_btn(): Promise<void> {
        await this.page.click(this.removed_btn);
    }

    async get_removed_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.removed_btn});
    }

    async get_removed_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.removed_btn}).textContent();
    }

    async click_zero_width_btn(): Promise<void> {
        await this.page.click(this.zero_width_btn);
    }

    async get_zero_width_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.zero_width_btn});
    }

    async get_zero_width_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.zero_width_btn}).textContent();
    }

    async click_overlapped_btn(): Promise<void> {
        await this.page.click(this.overlapped_btn);
    }

    async get_overlapped_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.overlapped_btn});
    }

    async get_overlapped_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.overlapped_btn}).textContent();
    }

    async click_opacity_btn(): Promise<void> {
        await this.page.click(this.opacity_btn);
    }

    async get_opacity_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.opacity_btn});
    }

    async get_opacity_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.opacity_btn}).textContent();
    }

    async click_visibility_hidden_btn(): Promise<void> {
        await this.page.click(this.visibility_hidden_btn);
    }

    async get_visibility_hidden_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.visibility_hidden_btn});
    }

    async get_visibility_hidden_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.visibility_hidden_btn}).textContent();
    }

    async click_display_none_btn(): Promise<void> {
        await this.page.click(this.display_none_btn);
    }

    async get_display_none_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.display_none_btn});
    }

    async get_display_none_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.display_none_btn}).textContent();
    }

    async click_offscreen_btn(): Promise<void> {
        await this.page.click(this.offscreen_btn);
    }

    async get_offscreen_btn(): Promise<Locator | null> {
        return this.page.locator('button', { hasText: this.offscreen_btn});
    }

    async get_offscreen_btn_text(): Promise<string | null> {
        return this.page.locator('button', { hasText: this.offscreen_btn}).textContent();
    }
}

export { VisibilityPage };