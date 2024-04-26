import { Page } from "@playwright/test";

class AccordionsPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    back_to_practice_link = 'back-link'

    accordion_1 = "Accordion 1"
    click_me_button = 'basic-click'
    click_me_result = 'Button clicked'
    double_click_me_button = 'double-click'
    double_click_me_result = 'Button double clicked'
    right_click_me_button = 'right-click'
    right_click_me_result = 'Button right mouse clicked'

    accordion_2 = "Accordion 2"
    radio_button_1 = 'option1'
    radio_button_2 = 'option2'
    option1_selected = 'option1 clicked'
    option2_selected = 'option2 clicked'
    
    accordion_3 = "Accordion 3"
    checkbox_1 = 'checkbox1'
    checkbox_1_selected = 'Checkbox 1 checked'
    checkbox_2 = 'checkbox2'
    checkbox_2_selected = 'Checkbox 2 checked'
    checkbox_3 = 'checkbox3'
    checkbox_3_selected = 'Checkbox 3 checked'

    // Methods
    async clickBackToPracticeLink() {
        await this.page.getByTestId(this.back_to_practice_link).click();
    }

    async getBackToPracticeLink(): Promise<string> {
        return await this.page.getByTestId(this.back_to_practice_link).innerText();
    }

    // Accordion 1
    async clickAccordion1() {
        await this.page.getByRole('button', { name: this.accordion_1 }).click();
    }

    async getAccordion1(): Promise<string> {
        return await this.page.getByTestId(this.accordion_1).innerText();
    }

    async clickAccordion1Button(clickType: string) {
        switch(clickType) {
            case 'click':
                await this.page.getByTestId(this.click_me_button).click();
                break;
            case 'double':
                await this.page.getByTestId(this.click_me_button).dblclick();
                break;
            case 'right':
                await this.page.getByTestId(this.click_me_button).click({ button: 'right' });
                break;
            default:
                console.log('Invalid click type');
        }
    }

    async getAccordion1Button(): Promise<string> {
        return await this.page.getByTestId(this.click_me_button).innerText();
    }

    async getAccordion1ButtonResult(): Promise<string> {
        return await this.page.getByText(this.click_me_result).innerText();
    }

    async accordion1ButtonResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.click_me_result).isVisible();
    }

    async clickAccordion1DoubleClickButton(clickType: string) {
        switch(clickType) {
            case 'click':
                await this.page.getByTestId(this.double_click_me_button).click();
                break;
            case 'double':
                await this.page.getByTestId(this.double_click_me_button).dblclick();
                break;
            case 'right':
                await this.page.getByTestId(this.double_click_me_button).click({ button: 'right' });
                break;
            default:
                console.log('Invalid click type');
        }
    }

    async getAccordion1DoubleClickButton(): Promise<string> {
        return await this.page.getByTestId(this.double_click_me_button).innerText();
    }

    async getAccordion1DoubleClickButtonResult(): Promise<string> {
        return await this.page.getByText(this.double_click_me_result).innerText();
    }

    async accordion1DoubleClickButtonResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.double_click_me_result).isVisible();
    }

    async clickAccordion1RightClickButton(clickType: string) {
        switch(clickType) {
            case 'click':
                await this.page.getByTestId(this.right_click_me_button).click();
                break;
            case 'double':
                await this.page.getByTestId(this.right_click_me_button).dblclick();
                break;
            case 'right':
                await this.page.getByTestId(this.right_click_me_button).click({ button: 'right' });
                break;
            default:
                console.log('Invalid click type');
        }
    }

    async getAccordion1RightClickButton(): Promise<string> {
        return await this.page.getByTestId(this.right_click_me_button).innerText();
    }

    async getAccordion1RightClickButtonResult(): Promise<string> {
        return await this.page.getByText(this.right_click_me_result).innerText();
    }

    async accordion1RightClickButtonResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.right_click_me_result).isVisible();
    }

    // Accordion 2
    async clickAccordion2() {
        await this.page.getByRole('button', { name: this.accordion_2 }).click();
    }

    async getAccordion2(): Promise<string> {
        return await this.page.getByTestId(this.accordion_2).innerText();
    }
    
    async clickRadioButton1() {
        await this.page.getByTestId(this.radio_button_1).click();
    }

    async getRadioButton1Visible(): Promise<boolean> {
        return await this.page.getByTestId(this.radio_button_1).isVisible();
    }

    async getRadioButton1Result(): Promise<string> {
        return await this.page.getByText(this.option1_selected).innerText();
    }

    async getRadioButton1ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.option1_selected).isVisible();
    }

    async clickRadioButton2() {
        await this.page.getByTestId(this.radio_button_2).click();
    }

    async getRadioButton2Visible(): Promise<boolean> {
        return await this.page.getByTestId(this.radio_button_2).isVisible();
    }

    async getRadioButton2Result(): Promise<string> {
        return await this.page.getByText(this.option2_selected).innerText();
    }

    async getRadioButton2ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.option2_selected).isVisible();
    }

    // Accordion 3
    async clickAccordion3() {
        await this.page.getByRole('button', { name: this.accordion_3 }).click();
    }

    async getAccordion3(): Promise<string> {
        return await this.page.getByTestId(this.accordion_3).innerText();
    }

    async clickCheckbox1() {
        await this.page.getByTestId(this.checkbox_1).click();
    }

    async getCheckbox1Visible(): Promise<boolean> {
        return await this.page.getByTestId(this.checkbox_1).isVisible();
    }

    async getCheckbox1Result(): Promise<string> {
        return await this.page.getByText(this.checkbox_1_selected).innerText();
    }

    async getCheckbox1ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.checkbox_1_selected).isVisible();
    }

    async clickCheckbox2() {
        await this.page.getByTestId(this.checkbox_2).click();
    }

    async getCheckbox2Visible(): Promise<boolean> {
        return await this.page.getByTestId(this.checkbox_1).isVisible();
    }

    async getCheckbox2Result(): Promise<string> {
        return await this.page.getByText(this.checkbox_2_selected).innerText();
    }

    async getCheckbox2ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.checkbox_2_selected).isVisible();
    }

    async clickCheckbox3() {
        await this.page.getByTestId(this.checkbox_3).click();
    }

    async getCheckbox3Visible(): Promise<boolean> {
        return await this.page.getByTestId(this.checkbox_3).isVisible();
    }

    async getCheckbox3Result(): Promise<string> {
        return await this.page.getByText(this.checkbox_3_selected).innerText();
    }

    async getCheckbox3ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.checkbox_3_selected).isVisible();
    }
}

export { AccordionsPage };