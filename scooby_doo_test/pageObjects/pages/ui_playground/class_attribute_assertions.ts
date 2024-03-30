import { Page, expect } from "@playwright/test";
import { ClassAttributePage } from "./class_attribute";

class ClassAttributePageAssertions {
    private page: Page;
    private classAttributePage: ClassAttributePage;
    
    constructor(page: Page) {
        this.page = page;
        this.classAttributePage = new ClassAttributePage(page);
    }
    
    // Methods
    async verify_label(expectedValue: string){
        expect(await this.classAttributePage.get_title_label()).toBe(expectedValue);
    }

    async verify_one_class_text(expectedValue: string){
        expect(await this.classAttributePage.get_one_class_text()).toBe(expectedValue);
    }

    async verify_one_class_example_text(expectedValue: string){
        expect(await this.classAttributePage.get_one_class_example_text()).toBe(expectedValue);
    }

    async verify_xpath_text(expectedValue: string){
        expect(await this.classAttributePage.get_xpath_text()).toBe(expectedValue);
    }

    async verify_xpath_example_text(expectedValue: string){
        expect(await this.classAttributePage.get_xpath_example_text()).toBe(expectedValue);
    }

    async verify_correct_variant_text(expectedValue: string){
        expect(await this.classAttributePage.get_correct_variant_text()).toBe(expectedValue);
    }

    async verify_correct_variant_example_text(expectedValue: string){
        expect(await this.classAttributePage.get_correct_variant_example_text()).toBe(expectedValue);
    }

    async verify_scenario_label(expectedValue: string){
        expect(await this.classAttributePage.get_scenario_label()).toBe(expectedValue);
    }

    async verify_scenario_text(expectedValue: string){
        expect(await this.classAttributePage.get_scenario_text()).toBe(expectedValue);
    }

    async verify_scenario_2_text(expectedValue: string){
        expect(await this.classAttributePage.get_scenario_2_text()).toBe(expectedValue);
    }

    async verify_playground_label(expectedValue: string){
        expect(await this.classAttributePage.get_playground_label()).toBe(expectedValue);
    }

    async verify_green_btn(expectedValue: string){
        expect(await this.classAttributePage.get_green_btn()).toContain(expectedValue);   // Using toContain because the button text contains extra whitespace
    }

    async verify_yellow_btn(expectedValue: string){
        expect(await this.classAttributePage.get_yellow_btn()).toContain(expectedValue);
    }

    async verify_blue_btn(expectedValue: string){
        expect(await this.classAttributePage.get_blue_btn()).toContain(expectedValue);
    }

    async verify_colors_on_buttons(){
        // Verify the colors
        const greenBtn = await this.classAttributePage.get_green_btn_locator();
        const yellowBtn = await this.classAttributePage.get_yellow_btn_locator();
        const blueBtn = await this.classAttributePage.get_blue_btn_locator();

        // eslint-disable-next-line playwright/no-conditional-in-test
        if (greenBtn && yellowBtn && blueBtn) {
            const greenBtnComputedStyle = await greenBtn.evaluate(node => getComputedStyle(node));
            const yellowBtnComputedStyle = await yellowBtn.evaluate(node => getComputedStyle(node));
            const blueBtnComputedStyle = await blueBtn.evaluate(node => getComputedStyle(node));

            expect(greenBtnComputedStyle.backgroundColor).toBe('rgb(40, 167, 69)'); // Green
            expect(yellowBtnComputedStyle.backgroundColor).toBe('rgb(255, 193, 7)'); // Yellow
            expect(blueBtnComputedStyle.backgroundColor).toBe('rgb(0, 123, 255)'); // Blue
        }
        else{
            await expect(false).toBe(true);
        }
    }

    async verify_alert_popup_visible(){
        // Verify the alert popup
        const alert = this.page.locator('text=Primary button pressed').isVisible();
        expect(alert).toBe(true);
    }
}

export { ClassAttributePageAssertions };