import { Page } from "@playwright/test";

class PracticePage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    practice_title = 'Note to user:'

    // * General Components
    general_components_title = 'General Components'
    general_components_instructions = 'Click here to practice working with:'
    buttons_link = 'Buttons'
    radio_buttons_link = 'Radio Buttons'
    dropdowns_link = 'Dropdowns'
    checkboxes_link = 'Checkboxes'
    links_link = 'Links'

    // * Accordions
    accordions_title = 'Accordions'
    accordion_link = 'Click here to practice working with accordions'

    // * Popups
    popups_title = 'Popups'
    popups_link = 'Click here to practice working with random popups'

    // * IFrames
    iframe_title = 'Iframes'
    iframe_link = 'Click here to practice Iframes'

    // * APIs
    apis_title = 'Apis'
    api_link = 'Click here to practice Api requests'

    // * Dynamic Text
    dynamic_text_title = 'Dynamic Text'
    dynamic_text_link = 'Click here to practice dynamic text'

    // * File Upload
    file_upload_title = 'File Upload'
    file_upload_link = 'Click here to practice Uploading files'
    
    // * Drag and Drop
    drag_and_drop_title = 'Drag and Drop'
    drag_and_drop_link = 'Click here to practice Dragging and dropping'

    // * Contact Us Form
    contact_us_form_title = 'Contact Us Form'
    contact_us_form_link = 'Click here to practice filling out forms'

    // * Mock Data Layer
    mock_data_layer_title = 'Mock Datalayer'
    mock_data_layer_link = 'Click here to practice testing a mocked version of a datalayer'

    // Methods
    async getPracticeTitle() {
        return await this.page.innerText(`text=${this.practice_title}`);
    }

    async clickLink(link: string) {
        await this.page.click(`text=${link}`);
    }

    // * General Components
    async getGeneralComponentsTitle() {
        return await this.page.innerText(`text=${this.general_components_title}`);
    }

    async getGeneralComponentsInstructions() {
        return await this.page.innerText(`text=${this.general_components_instructions}`);
    }

    async getButtonsLink() {
        return await this.page.innerText(`text=${this.buttons_link}`);
    }

    async clickButtonsLink() {
        await this.page.click(`text=${this.buttons_link}`);
    }

    async getRadioButtonsLink() {
        return await this.page.innerText(`text=${this.radio_buttons_link}`);
    }

    async clickRadioButtonsLink() {
        await this.page.click(`text=${this.radio_buttons_link}`);
    }

    async getDropdownsLink() {
        return await this.page.innerText(`text=${this.dropdowns_link}`);
    }

    async clickDropdownsLink() {
        await this.page.click(`text=${this.dropdowns_link}`);
    }

    async getCheckboxesLink() {
        return await this.page.innerText(`text=${this.checkboxes_link}`);
    }

    async clickCheckboxesLink() {
        await this.page.click(`text=${this.checkboxes_link}`);
    }

    async getLinksLink() {
        return await this.page.innerText(`text=${this.links_link}`);
    }

    async clickLinksLink() {
        await this.page.click(`text=${this.links_link}`);
    }
    
    // * Accordions
    async getAccordionsTitle() {
        return await this.page.innerText(`text=${this.accordions_title}`);
    }

    async getAccordionLink() {
        return await this.page.innerText(`text=${this.accordion_link}`);
    }

    async clickAccordionLink() {
        await this.page.click(`text=${this.accordion_link}`);
    }

    // * Popups
    async getPopupsTitle() {
        return await this.page.innerText(`text=${this.popups_title}`);
    }

    async getPopupsLink() {
        return await this.page.innerText(`text=${this.popups_link}`);
    }

    async clickPopupsLink() {
        await this.page.click(`text=${this.popups_link}`);
    }

    // * IFrames
    async getIframeTitle() {
        return await this.page.innerText(`text=${this.iframe_title}`);
    }   

    async getIframeLink() {
        return await this.page.innerText(`text=${this.iframe_link}`);
    }

    async clickIframeLink() {
        await this.page.click(`text=${this.iframe_link}`);
    }

    // * APIs
    async getApisTitle() {
        return await this.page.innerText(`text=${this.apis_title}`);
    }

    async getApiLink() {
        return await this.page.innerText(`text=${this.api_link}`);
    }

    async clickApiLink() {
        await this.page.click(`text=${this.api_link}`);
    }

    // * Dynamic Text
    async getDynamicTextTitle() {
        return await this.page.innerText(`text=${this.dynamic_text_title}`);
    }

    async getDynamicTextLink() {
        return await this.page.innerText(`text=${this.dynamic_text_link}`);
    }

    async clickDynamicTextLink() {
        await this.page.click(`text=${this.dynamic_text_link}`);
    }

    // * File Upload
    async getFileUploadTitle() {
        return await this.page.innerText(`text=${this.file_upload_title}`);
    }

    async getFileUploadLink() {
        return await this.page.innerText(`text=${this.file_upload_link}`);
    }

    async clickFileUploadLink() {
        await this.page.click(`text=${this.file_upload_link}`);
    }

    // * Drag and Drop
    async getDragAndDropTitle() {
        return await this.page.innerText(`text=${this.drag_and_drop_title}`);
    }

    async getDragAndDropLink() {
        return await this.page.innerText(`text=${this.drag_and_drop_link}`);
    }

    async clickDragAndDropLink() {
        await this.page.click(`text=${this.drag_and_drop_link}`);
    }

    // * Contact Us Form
    async getContactUsFormTitle() {
        return await this.page.innerText(`text=${this.contact_us_form_title}`);
    }

    async getContactUsFormLink() {
        return await this.page.innerText(`text=${this.contact_us_form_link}`);
    }

    async clickContactUsFormLink() {
        await this.page.click(`text=${this.contact_us_form_link}`);
    }

    // * Mock Data Layer
    async getMockDataLayerTitle() {
        return await this.page.innerText(`text=${this.mock_data_layer_title}`);
    }

    async getMockDataLayerLink() {
        return await this.page.innerText(`text=${this.mock_data_layer_link}`);
    }

    async clickMockDataLayerLink() {
        await this.page.click(`text=${this.mock_data_layer_link}`);
    }
}

export { PracticePage };