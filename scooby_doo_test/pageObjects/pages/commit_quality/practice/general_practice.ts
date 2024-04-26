import { Page } from "@playwright/test";

class GeneralPracticePage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    back_to_practice_link = 'back-link'

    // Buttons
    buttons_title = 'Buttons'
    click_me_button = 'basic-click'
    double_click_me_button = 'double-click'
    right_click_me_button = 'right-click'
    click_me_result = 'Button clicked'
    double_click_me_result = 'Button double clicked'
    right_click_me_result = 'Button right mouse clicked'

    // Radio Buttons
    radio_buttons_title = 'Radio Buttons'
    radio_button_1 = 'option1'
    radio_button_1_selected = 'option1 clicked'
    radio_button_2 = 'option2'
    radio_button_2_selected = 'option2 clicked'

    // Select Option
    select_option_title = 'Select Option'
    select_option = 'dropdown'

    // Checkboxes
    checkboxes_title = 'Checkboxes'
    checkbox_1_label = 'checkbox1-label'
    checkbox_1 = 'checkbox1'
    checkbox_1_selected = 'Checkbox 1 checked'
    checkbox_2_label = 'checkbox2-label'
    checkbox_2 = 'checkbox2'
    checkbox_2_selected = 'Checkbox 2 checked'
    checkbox_3_label = 'checkbox3-label'
    checkbox_3 = 'checkbox3'
    checkbox_3_selected = 'Checkbox 3 checked'

    // Links
    links_title = 'Links'
    youtube_link = 'link-same-tab'
    new_tab_youtube_link = 'link-newtab'
    practice_page_link = 'link-newtab-practice'

    // Methods
    async clickBackToPracticeLink() {
        await this.page.getByTestId(this.back_to_practice_link).click();
    }

    async getBackToPracticeLink(): Promise<string> {
        return await this.page.getByText(this.back_to_practice_link).innerText();
    }

    // Buttons
    async getButtonsTitle(): Promise<string> {
        return await this.page.getByText(this.buttons_title).innerText();
    }

    async clickClickMeButton(clickType: string) {
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

    async getClickMeButton(): Promise<string> {
        return await this.page.getByTestId(this.click_me_button).innerText();
    }

    async getClickMeResult(): Promise<string> {
        return await this.page.getByText(this.click_me_result).innerText();
    }

    async clickDoubleClickMeButton(clickType: string) {
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

    async getDoubleClickMeButton(): Promise<string> {
        return await this.page.getByTestId(this.double_click_me_button).innerText();
    }

    async getDoubleClickMeResult(): Promise<string> {
        return await this.page.getByText(this.double_click_me_result).innerText();
    }

    async clickRightClickMeButton(clickType: string) {
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

    async getRightClickMeButton(): Promise<string> {
        return await this.page.getByTestId(this.right_click_me_button).innerText();
    }

    async getRightClickMeResult(): Promise<string> {
        return await this.page.getByText(this.right_click_me_result).innerText();
    }

    // Radio Buttons
    async getRadioButtonsTitle(): Promise<string> {
        return await this.page.getByText(this.radio_buttons_title).innerText();
    }

    async clickRadioButton1() {
        await this.page.getByTestId(this.radio_button_1).click();
    }

    async getRadioButton1Result(): Promise<string> {
        return await this.page.getByText(this.radio_button_1_selected).innerText();
    }

    async clickRadioButton2() {
        await this.page.getByTestId(this.radio_button_2).click();
    }

    async getRadioButton2Result(): Promise<string> {
        return await this.page.getByText(this.radio_button_2_selected).innerText();
    }

    // Select Option
    async getSelectOptionTitle(): Promise<string> {
        return await this.page.getByText(this.select_option_title).innerText();
    }

    async selectOption(option: string) {
        await this.page.selectOption(this.select_option, option);
    }

    async getSelectOption(): Promise<string> {
        return await this.page.$eval(this.select_option, (element: HTMLSelectElement) => element.options[element.selectedIndex].text);
    }

    // Checkboxes
    async getCheckboxesTitle(): Promise<string> {
        return await this.page.getByText(this.checkboxes_title).innerText();
    }

    async getCheckbox1Label(): Promise<string> {
        return await this.page.getByTestId(this.checkbox_1_label).innerText();
    }

    async clickCheckbox1() {
        await this.page.getByTestId(this.checkbox_1).click();
    }

    async getCheckbox1Result(): Promise<string> {
        return await this.page.getByText(this.checkbox_1_selected).innerText();
    }

    async getCheckbox1ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.checkbox_1_selected).isVisible();
    }

    async getCheckbox2Label(): Promise<string> {
        return await this.page.getByTestId(this.checkbox_2_label).innerText();
    }

    async clickCheckbox2() {
        await this.page.getByTestId(this.checkbox_2).click();
    }

    async getCheckbox2Result(): Promise<string> {
        return await this.page.getByText(this.checkbox_2_selected).innerText();
    }

    async getCheckbox2ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.checkbox_2_selected).isVisible();
    }

    async getCheckbox3Label(): Promise<string> {
        return await this.page.getByTestId(this.checkbox_3_label).innerText();
    }

    async clickCheckbox3() {
        await this.page.getByTestId(this.checkbox_3).click();
    }

    async getCheckbox3Result(): Promise<string> {
        return await this.page.getByText(this.checkbox_3_selected).innerText();
    }

    async getCheckbox3ResultVisible(): Promise<boolean> {
        return await this.page.getByText(this.checkbox_3_selected).isVisible();
    }

    // Links
    async getLinksTitle(): Promise<string> {
        return await this.page.getByText(this.links_title).innerText();
    }

    async getYoutubeLink(): Promise<string> {
        return await this.page.getByTestId(this.youtube_link).innerText();
    }

    async clickYoutubeLink() {
        await this.page.getByTestId(this.youtube_link).click();
    }

    async getNewTabYoutubeLink(): Promise<string> {
        return await this.page.getByTestId(this.new_tab_youtube_link).innerText();
    }

    async clickNewTabYoutubeLink() {
        await this.page.getByTestId(this.new_tab_youtube_link).click();
    }

    async getPracticePageLink(): Promise<string> {
        return await this.page.getByTestId(this.practice_page_link).innerText();
    }

    async clickPracticePageLink() {
        await this.page.getByTestId(this.practice_page_link).click();
    }

}

export { GeneralPracticePage };