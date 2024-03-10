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
exports.OverlappedElementPage = void 0;
class OverlappedElementPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Overlapped Element';
        this.title_txt = 'Entering text to a partially'; // Bug in the page, the text is not correct
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record setting text into';
        this.scenario_2_text = 'Then execute your test';
        this.playground_label = 'Playground';
        this.playground_id_textBox = '#id';
        this.playground_name_textBox = '#name';
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
    get_playground_id_textBox() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.playground_id_textBox);
        });
    }
    set_playground_id_textBox(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.evaluate((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.scrollIntoView();
                }
            }, this.playground_id_textBox);
            yield this.page.fill(this.playground_id_textBox, value);
        });
    }
    get_playground_name_textBox() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.playground_name_textBox);
        });
    }
    set_playground_name_textBox(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.evaluate((selector) => {
                const element = document.querySelector(selector);
                if (element) {
                    element.scrollIntoView();
                }
            }, this.playground_name_textBox);
            yield this.page.fill(this.playground_name_textBox, value);
        });
    }
}
exports.OverlappedElementPage = OverlappedElementPage;
