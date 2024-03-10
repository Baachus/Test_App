"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFactory = void 0;
// Components
const header_1 = require("./components/ui_playground/header");
const footer_1 = require("./components/ui_playground/footer");
// Pages
const home_1 = require("./pages/ui_playground/home");
const dynamic_id_1 = require("./pages/ui_playground/dynamic_id");
const ajax_data_1 = require("./pages/ui_playground/ajax_data");
const scrollbars_1 = require("./pages/ui_playground/scrollbars");
const overlapped_element_1 = require("./pages/ui_playground/overlapped_element");
const visibility_1 = require("./pages/ui_playground/visibility");
const class_attribute_1 = require("./pages/ui_playground/class_attribute");
const client_side_delay_1 = require("./pages/ui_playground/client_side_delay");
const shadow_dom_1 = require("./pages/ui_playground/shadow_dom");
const hidden_layers_1 = require("./pages/ui_playground/hidden_layers");
const click_1 = require("./pages/ui_playground/click");
const load_delay_1 = require("./pages/ui_playground/load_delay");
const mouse_over_1 = require("./pages/ui_playground/mouse_over");
const text_input_1 = require("./pages/ui_playground/text_input");
const verify_text_1 = require("./pages/ui_playground/verify_text");
const non_breaking_space_1 = require("./pages/ui_playground/non_breaking_space");
const progress_bar_1 = require("./pages/ui_playground/progress_bar");
class PageFactory {
    constructor(page) {
        this.page = page;
    }
    getHeaderComp() {
        if (!this.headerComp) {
            this.headerComp = new header_1.HeaderComp(this.page);
        }
        return this.headerComp;
    }
    getFooterComp() {
        if (!this.footerComp) {
            this.footerComp = new footer_1.FooterComp(this.page);
        }
        return this.footerComp;
    }
    getHomePage() {
        if (!this.homePage) {
            this.homePage = new home_1.HomePage(this.page);
        }
        return this.homePage;
    }
    getDynamicID() {
        if (!this.dynamicID) {
            this.dynamicID = new dynamic_id_1.DynamicIDPage(this.page);
        }
        return this.dynamicID;
    }
    getAJAXData() {
        if (!this.ajaxData) {
            this.ajaxData = new ajax_data_1.AJAXDataPage(this.page);
        }
        return this.ajaxData;
    }
    getScrollbarsPage() {
        if (!this.scrollbarsPage) {
            this.scrollbarsPage = new scrollbars_1.ScrollbarsPage(this.page);
        }
        return this.scrollbarsPage;
    }
    getOverlappedElementPage() {
        if (!this.overlappedElementPage) {
            this.overlappedElementPage = new overlapped_element_1.OverlappedElementPage(this.page);
        }
        return this.overlappedElementPage;
    }
    getVisibilityPage() {
        if (!this.visibilityPage) {
            this.visibilityPage = new visibility_1.VisibilityPage(this.page);
        }
        return this.visibilityPage;
    }
    getClassAttributePage() {
        if (!this.classAttributePage) {
            this.classAttributePage = new class_attribute_1.ClassAttributePage(this.page);
        }
        return this.classAttributePage;
    }
    getClientSideDelayPage() {
        if (!this.clientSideDelayPage) {
            this.clientSideDelayPage = new client_side_delay_1.ClientSideDelayPage(this.page);
        }
        return this.clientSideDelayPage;
    }
    getShadowDOMPage() {
        if (!this.shadowDOMPage) {
            this.shadowDOMPage = new shadow_dom_1.ShadowDOMPage(this.page);
        }
        return this.shadowDOMPage;
    }
    getHiddenLayersPage() {
        if (!this.hiddenLayersPage) {
            this.hiddenLayersPage = new hidden_layers_1.HiddenLayersPage(this.page);
        }
        return this.hiddenLayersPage;
    }
    getClickPage() {
        if (!this.clickPage) {
            this.clickPage = new click_1.ClickPage(this.page);
        }
        return this.clickPage;
    }
    getLoadDelayPage() {
        if (!this.loadDelayPage) {
            this.loadDelayPage = new load_delay_1.LoadDelayPage(this.page);
        }
        return this.loadDelayPage;
    }
    getMouseOverPage() {
        if (!this.mouseOverPage) {
            this.mouseOverPage = new mouse_over_1.MouseOverPage(this.page);
        }
        return this.mouseOverPage;
    }
    getTextInputPage() {
        if (!this.textInputPage) {
            this.textInputPage = new text_input_1.TextInputPage(this.page);
        }
        return this.textInputPage;
    }
    getVerifyTextPage() {
        if (!this.verifyTextPage) {
            this.verifyTextPage = new verify_text_1.VerifyTextPage(this.page);
        }
        return this.verifyTextPage;
    }
    getNonBreakingPage() {
        if (!this.nonBreakingPage) {
            this.nonBreakingPage = new non_breaking_space_1.NonBreakingPage(this.page);
        }
        return this.nonBreakingPage;
    }
    getProgressBarPage() {
        if (!this.progressBarPage) {
            this.progressBarPage = new progress_bar_1.ProgressBarPage(this.page);
        }
        return this.progressBarPage;
    }
}
exports.PageFactory = PageFactory;
