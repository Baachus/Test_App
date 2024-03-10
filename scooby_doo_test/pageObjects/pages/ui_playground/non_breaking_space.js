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
exports.NonBreakingPage = void 0;
class NonBreakingPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Non-Breaking Space';
        this.title_txt = 'There are cases in test automation when';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Use the following xpath to find';
        this.scenario_2_text = 'Notice that the XPath';
        this.playground_label = 'Playground';
        this.click_button = 'My Button';
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
    click_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByRole('button', { name: this.click_button, includeHidden: false }).click();
        });
    }
    get_button() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.click_button });
        });
    }
    get_button_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.click_button }).textContent();
        });
    }
}
exports.NonBreakingPage = NonBreakingPage;
