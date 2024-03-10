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
exports.TextInputPage = void 0;
class TextInputPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Text Input';
        this.title_txt = 'Entering text with physical keyboard';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record setting text into the';
        this.scenario_2_text = 'Then execute your test';
        this.playground_label = 'Playground';
        this.playground_text = 'Set New Button Name';
        this.input_value_text_box = '#newButtonName';
        this.update_button = '#updatingButton';
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
    get_playground_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.playground_text).textContent();
        });
    }
    set_input_value(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.input_value_text_box).fill(value);
        });
    }
    type_input_value(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.input_value_text_box).type(value);
        });
    }
    get_input_value() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.input_value_text_box).inputValue();
        });
    }
    click_update() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.update_button).click();
        });
    }
    get_click_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.update_button);
        });
    }
    get_update_button_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.update_button).textContent();
        });
    }
}
exports.TextInputPage = TextInputPage;
