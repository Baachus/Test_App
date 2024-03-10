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
exports.ScrollbarsPage = void 0;
class ScrollbarsPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Scrollbars';
        this.title_txt = 'An application may use'; // Bug in the page, the text is not correct
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Find a button in';
        this.scenario_2_text = 'Update your test to';
        this.scenario_3_text = 'Then execute your';
        this.playground_label = 'Playground';
        this.scrollbars_btn = 'Hiding Button';
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
    get_scenario_3_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.scenario_3_text).textContent();
        });
    }
    get_playground_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.playground_label }).textContent();
        });
    }
    click_scrollbars_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByRole('button', { name: this.scrollbars_btn }).click();
        });
    }
    get_scrollbars_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.scrollbars_btn }).textContent();
        });
    }
    get_scrollbars_btn_text_visible() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.scrollbars_btn }).isVisible();
        });
    }
}
exports.ScrollbarsPage = ScrollbarsPage;
