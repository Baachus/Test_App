import { Locator, Page } from "@playwright/test";

class HomePage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    title_txt = '#title';
    quote_txt = '#citation';
    purpose_txt = 'div[role="alert"]';
    pitfall_txt = 'Different automation pitfalls';

    rubik_cube_img = 'img[alt="Responsive image"]';
    rubik_cube_license = 'small';
    rubik_cube_link = 'a[href="http://pngimg.com/download/46552"]';
    rubik_cube_cc_link = 'a[href="https://creativecommons.org/licenses/by-nc/4.0/"]';

    // Link Selectors
    dynamic_id_link = 'a[href="/dynamicid"]';
    dynamic_id_desc = 'Make sure you are not';

    class_attribute_link = 'a[href="/classattr"]';
    class_attribute_desc = 'Check that class attribute';

    hidden_layers_link = 'a[href="/hiddenlayers"]';
    hidden_layers_desc = 'Verify that your test does';

    load_delay_link = 'a[href="/loaddelay"]';
    load_delay_desc = 'Ensure that a test is capable';

    ajax_data_link = 'a[href="/ajax"]';
    ajax_data_desc = 'Some elements may appear on a';

    client_delay_link = 'a[href="/clientdelay"]';
    client_delay_desc = 'Some elements may appear after client-side time consuming JavaScript';

    click_link = 'a[href="/click"]';
    click_desc = 'Event based click on an';

    text_input_link = 'a[href="/textinput"]';
    text_input_desc = 'Entering text into an edit';

    scrollbars_link = 'a[href="/scrollbars"]';
    scrollbars_desc = 'Scrolling an element into';

    dynamic_table_link = 'a[href="/dynamictable"]';
    dynamic_table_desc = 'Verify cell value in a';

    verify_text_link = 'a[href="/verifytext"]';
    verify_text_desc = 'Finding an element by';

    progress_bar_link = 'a[href="/progressbar"]';
    progress_bar_desc = 'Follow the progress of a';

    visibility_link = 'a[href="/visibility"]';
    visibility_desc = 'Check if element is visible';

    sample_app_link = 'a[href="/sampleapp"]';
    sample_app_desc = 'Demo application with';

    mouse_over_link = 'a[href="/mouseover"]';
    mouse_over_desc = 'Placing mouse over an element';

    non_breaking_space_link = 'a[href="/nbsp"]';
    non_breaking_space_desc = 'Non-breaking space looks like';

    overlapped_elements_link = 'a[href="/overlapped"]';
    overlapped_elements_desc = 'Make element visible to enter';

    shadow_dom_link = 'a[href="/shadowdom"]';
    shadow_dom_desc = 'Look inside Shadow DOM';

    // Methods
    async get_title(): Promise<string | null> {
        return this.page.locator(this.title_txt).textContent();
    }
    
    async get_rubiks_cube_image(): Promise<Locator> {
        return this.page.locator(this.rubik_cube_img);
    }

    async get_quote(): Promise<string | null> {
        return this.page.locator(this.quote_txt).textContent();
    }

    async get_purpose_text(): Promise<string | null> {
        return this.page.locator(this.purpose_txt).textContent();
    }

    async get_purpose(): Promise<Locator> {
        return this.page.locator(this.purpose_txt);
    }

    async get_pitfall(): Promise<string | null> {
        return this.page.getByText(this.pitfall_txt).textContent();
    }

    async get_rubiks_cube_license(): Promise<string | null> {
        return this.page.locator(this.rubik_cube_license).textContent();
    }

    async click_on_rubiks_cube_link(): Promise<void> {
        await this.page.locator(this.rubik_cube_link).click();
    }

    async click_on_rubiks_cube_cc_link(): Promise<void> {
        await this.page.locator(this.rubik_cube_cc_link).click();
    }

    async get_link_description(link: string): Promise<string | null> {
        switch(link.toLowerCase()) {
            case 'dynamic id':
            case 'dynamicid':
            case 'dynamic':
                link = this.dynamic_id_desc;
                break;
            case 'class attribute':
            case 'classattr':
            case 'class':
                link = this.class_attribute_desc;
                break;
            case 'hidden layers':
            case 'hiddenlayers':
            case 'hidden':
                link = this.hidden_layers_desc;
                break;
            case 'load delay':
            case 'loaddelay':
            case 'load':
                link = this.load_delay_desc;
                break;
            case 'ajax data':
            case 'ajaxdata':
            case 'ajax':
                link = this.ajax_data_desc;
                break;
            case 'client delay':
            case 'clientdelay':
            case 'client':
            case 'client side delay':
            case 'clientsidedelay':
                link = this.client_delay_desc;
                break;
            case 'click':
                link = this.click_desc;
                break;
            case 'text input':
            case 'textinput':
            case 'text':
                link = this.text_input_desc;
                break;
            case 'scrollbars':
                link = this.scrollbars_desc;
                break;
            case 'dynamic table':
            case 'dynamictable':
            case 'table':
                link = this.dynamic_table_desc;
                break;
            case 'verify text':
            case 'verifytext':
            case 'verify':
                link = this.verify_text_desc;
                break;
            case 'progress bar':
            case 'progressbar':
            case 'progress':
                link = this.progress_bar_desc;
                break;
            case 'visibility':
                link = this.visibility_desc;
                break;
            case 'sample app':
            case 'sampleapp':
            case 'app':
                link = this.sample_app_desc;
                break;
            case 'mouse over':
            case 'mouseover':
                link = this.mouse_over_desc;
                break;
            case 'non breaking space':
            case 'nonbreaking':
            case 'space':
            case 'non-breaking space':
            case 'nonbreakingspace':
                link = this.non_breaking_space_desc;
                break;
            case 'overlapped elements':
            case 'overlapped element':
            case 'overlappedelement':
            case 'overlapped':
                link = this.overlapped_elements_desc;
                break;
            case 'shadow dom':
            case 'shadowdom':
            case 'shadow':
                link = this.shadow_dom_desc;
                break;
            default:
                return null;
        }
        return this.page.getByText(link).textContent();
    }

    async click_on_link(link: string): Promise<void> {
        
        switch(link.toLowerCase()) {
            case 'dynamic id':
            case 'dynamicid':
            case 'dynamic':
                link = this.dynamic_id_link;
                break;
            case 'class attribute':
            case 'classattr':
            case 'class':
                link = this.class_attribute_link;
                break;
            case 'hidden layers':
            case 'hiddenlayers':
            case 'hidden':
                link = this.hidden_layers_link;
                break;
            case 'load delay':
            case 'loaddelay':
            case 'load':
                link = this.load_delay_link;
                break;
            case 'ajax data':
            case 'ajaxdata':
            case 'ajax':
                link = this.ajax_data_link;
                break;
            case 'client delay':
            case 'clientdelay':
            case 'client':
            case 'client side delay':
            case 'clientsidedelay':
                link = this.client_delay_link;
                break;
            case 'click':
                link = this.click_link;
                break;
            case 'text input':
            case 'textinput':
            case 'text':
                link = this.text_input_link;
                break;
            case 'scrollbars':
                link = this.scrollbars_link;
                break;
            case 'dynamic table':
            case 'dynamictable':
            case 'table':
                link = this.dynamic_table_link;
                break;
            case 'verify text':
            case 'verifytext':
            case 'verify':
                link = this.verify_text_link;
                break;
            case 'progress bar':
            case 'progressbar':
            case 'progress':
                link = this.progress_bar_link;
                break;
            case 'visibility':
                link = this.visibility_link;
                break;
            case 'sample app':
            case 'sampleapp':
            case 'app':
                link = this.sample_app_link;
                break;
            case 'mouse over':
            case 'mouseover':
                link = this.mouse_over_link;
                break;
            case 'non breaking space':
            case 'nonbreaking':
            case 'space':
            case 'non-breaking space':
            case 'nonbreakingspace':
                link = this.non_breaking_space_link;
                break;
            case 'overlapped elements':
            case 'overlapped element':
            case 'overlappedelement':
            case 'overlapped':
                link = this.overlapped_elements_link;
                break;
            case 'shadow dom':
            case 'shadowdom':
            case 'shadow':
                link = this.shadow_dom_link;
                break;
            default:
                return;
        }
        await this.page.locator(link).click();
    }
}

export { HomePage };