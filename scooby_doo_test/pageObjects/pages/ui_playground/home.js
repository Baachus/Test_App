"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomePage = void 0;
class HomePage {
    constructor(page) {
        // Selectors
        this.title_txt = '#title';
        this.quote_txt = '#citation';
        this.purpose_txt = 'div[role="alert"]';
        this.pitfall_txt = 'Different automation pitfalls';
        this.rubik_cube_img = 'img[alt="Responsive image"]';
        this.rubik_cube_license = 'small';
        this.rubik_cube_link = 'a[href="http://pngimg.com/download/46552"]';
        this.rubik_cube_cc_link = 'a[href="https://creativecommons.org/licenses/by-nc/4.0/"]';
        // Link Selectors
        this.dynamic_id_link = 'a[href="/dynamicid"]';
        this.dynamic_id_desc = 'Make sure you are not';
        this.class_attribute_link = 'a[href="/classattr"]';
        this.class_attribute_desc = 'Check that class attribute';
        this.hidden_layers_link = 'a[href="/hiddenlayers"]';
        this.hidden_layers_desc = 'Verify that your test does';
        this.load_delay_link = 'a[href="/loaddelay"]';
        this.load_delay_desc = 'Ensure that a test is capable';
        this.ajax_data_link = 'a[href="/ajax"]';
        this.ajax_data_desc = 'Some elements may appear on a';
        this.client_delay_link = 'a[href="/clientdelay"]';
        this.client_delay_desc = 'Some elements may appear after client-side time consuming JavaScript';
        this.click_link = 'a[href="/click"]';
        this.click_desc = 'Event based click on an';
        this.text_input_link = 'a[href="/textinput"]';
        this.text_input_desc = 'Entering text into an edit';
        this.scrollbars_link = 'a[href="/scrollbars"]';
        this.scrollbars_desc = 'Scrolling an element into';
        this.dynamic_table_link = 'a[href="/dynamictable"]';
        this.dynamic_table_desc = 'Verify cell value in a';
        this.verify_text_link = 'a[href="/verifytext"]';
        this.verify_text_desc = 'Finding an element by';
        this.progress_bar_link = 'a[href="/progressbar"]';
        this.progress_bar_desc = 'Follow the progress of a';
        this.visibility_link = 'a[href="/visibility"]';
        this.visibility_desc = 'Check if element is visible';
        this.sample_app_link = 'a[href="/sampleapp"]';
        this.sample_app_desc = 'Demo application with';
        this.mouse_over_link = 'a[href="/mouseover"]';
        this.mouse_over_desc = 'Placing mouse over an element';
        this.non_breaking_space_link = 'a[href="/nbsp"]';
        this.non_breaking_space_desc = 'Non-breaking space looks like';
        this.overlapped_elements_link = 'a[href="/overlapped"]';
        this.overlapped_elements_desc = 'Make element visible to enter';
        this.shadow_dom_link = 'a[href="/shadowdom"]';
        this.shadow_dom_desc = 'Look inside Shadow DOM';
        this.page = page;
    }
    // Methods
    get_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.title_txt).textContent();
        });
    }
    get_rubiks_cube_image() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.rubik_cube_img);
        });
    }
    get_quote() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.quote_txt).textContent();
        });
    }
    get_purpose_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.purpose_txt).textContent();
        });
    }
    get_purpose() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.purpose_txt);
        });
    }
    get_pitfall() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.pitfall_txt).textContent();
        });
    }
    get_rubiks_cube_license() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.rubik_cube_license).textContent();
        });
    }
    click_on_rubiks_cube_link() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.rubik_cube_link).click();
        });
    }
    click_on_rubiks_cube_cc_link() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.rubik_cube_cc_link).click();
        });
    }
    get_link_description(link) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (link.toLowerCase()) {
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
        });
    }
    click_on_link(link) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (link.toLowerCase()) {
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
            yield this.page.locator(link).click();
        });
    }
}
exports.HomePage = HomePage;
