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
exports.MouseOverPage = void 0;
class MouseOverPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Mouse Over';
        this.title_txt = 'Placing mouse over an element may lead';
        this.title_2_text = 'This puzzle complicates';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record 2 consecutive';
        this.scenario_2_text = 'Execute the test and make';
        this.playground_label = 'Playground';
        this.click_lnk = 'Click me';
        this.click_link_result_label = 'The link clicked';
        this.click_count_label = '#clickCount';
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
    get_title_2_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_2_text).textContent();
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
    get_click_result() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.click_link_result_label).textContent();
        });
    }
    get_click_count() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.textContent(this.click_count_label);
        });
    }
    click_link() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByText(this.click_lnk).click();
        });
    }
}
exports.MouseOverPage = MouseOverPage;
