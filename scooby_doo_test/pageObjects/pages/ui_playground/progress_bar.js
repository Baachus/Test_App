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
exports.ProgressBarPage = void 0;
class ProgressBarPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Progress Bar';
        this.title_txt = 'A web application may use a progress bar';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Create a test that clicks Start';
        this.start_btn = '#startButton';
        this.stop_btn = '#stopButton';
        this.progress_bar = '#progressBar';
        this.result = '#result';
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
    get_playground_heading() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.title_label }).textContent();
        });
    }
    click_on_start_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.start_btn).click();
        });
    }
    get_start_button_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.start_btn).textContent();
        });
    }
    click_on_stop_button() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.stop_btn).click();
        });
    }
    get_stop_button_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.stop_btn).textContent();
        });
    }
    get_progress_bar_value() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getAttribute(this.progress_bar, 'aria-valuenow');
        });
    }
    get_result_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.result).textContent();
        });
    }
    wait_for_progress_bar_to_reach(value) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.waitForFunction(`document.querySelector('${this.progress_bar}').getAttribute('aria-valuenow') === '${value}'`);
        });
    }
}
exports.ProgressBarPage = ProgressBarPage;
