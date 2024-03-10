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
exports.VerifyTextPage = void 0;
class VerifyTextPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Verify Text';
        this.title_txt = 'In general inner text of a DOM element';
        this.hello_txt = /^Hello UserName!$/;
        this.title_2_txt = 'and the text of the DOM';
        this.dom_hello_txt = 'Hello UserName!';
        this.title_3_txt = 'Take this fact into account';
        this.does_not_work_txt = 'Does not work';
        this.does_not_work_example_txt = '//span[.=\'Welcome UserName!\']';
        this.works_txt = 'Works';
        this.works_example_txt = '//span[normalize-space(.)=\'';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Create a test that finds';
        this.playground_label = 'Playground';
        this.playground_txt = 'Welcome UserName!';
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
    get_hello_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.hello_txt).textContent();
        });
    }
    get_title_2_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_2_txt).textContent();
        });
    }
    get_dom_hello_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.dom_hello_txt).textContent();
        });
    }
    get_title_3_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_3_txt).textContent();
        });
    }
    get_does_not_work_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.does_not_work_txt).textContent();
        });
    }
    get_does_not_work_example_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.does_not_work_example_txt).textContent();
        });
    }
    get_works_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.works_txt).textContent();
        });
    }
    get_works_example_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.works_example_txt).textContent();
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
    get_playground_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.playground_label }).textContent();
        });
    }
    get_playground_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.playground_txt).textContent();
        });
    }
}
exports.VerifyTextPage = VerifyTextPage;
