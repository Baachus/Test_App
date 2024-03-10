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
exports.AJAXDataPage = void 0;
class AJAXDataPage {
    constructor(page) {
        // Selectors
        this.title_label = 'AJAX Data';
        this.title_txt = 'An element may appaear'; // Bug in the page, the text is not correct
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record the following steps';
        this.scenario_2_text = 'Then execute your test';
        this.playground_label = 'Playground';
        this.ajax_btn = 'Button Triggering AJAX Request';
        this.ajax_load_icon = '#spinner';
        this.ajax_load_text = 'Data loaded';
        this.page = page;
    }
    // Methods
    get_title_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.title_label }).textContent();
        });
    }
    get_title_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_txt).textContent();
        });
    }
    get_scenario_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.scenario_label }).textContent();
        });
    }
    get_scenario_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.scenario_text).textContent();
        });
    }
    get_scenario_2_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.scenario_2_text).textContent();
        });
    }
    get_playground_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.playground_label }).textContent();
        });
    }
    click_ajax_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByRole('button', { name: this.ajax_btn }).click();
        });
    }
    get_ajax_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.ajax_btn }).textContent();
        });
    }
    get_ajax_load_icon_locator() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.ajax_load_icon);
        });
    }
    get_ajax_load_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.ajax_load_text).textContent();
        });
    }
    get_ajax_load_text_locator() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.ajax_load_text);
        });
    }
}
exports.AJAXDataPage = AJAXDataPage;
