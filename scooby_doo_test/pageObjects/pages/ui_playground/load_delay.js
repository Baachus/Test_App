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
exports.LoadDelayPage = void 0;
class LoadDelayPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Load Delays';
        this.title_txt = 'Server response may often come';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Navigate to Home page and';
        this.scenario_2_text = 'Then play the test';
        this.playground_label = 'Playground';
        this.delay_btn = 'Button Appearing After Delay';
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
            yield this.page.getByRole('button', { name: this.delay_btn, includeHidden: false }).click();
        });
    }
    get_delay_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.delay_btn });
        });
    }
    get_delay_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.delay_btn }).textContent();
        });
    }
}
exports.LoadDelayPage = LoadDelayPage;
