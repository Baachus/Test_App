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
exports.HiddenLayersPage = void 0;
class HiddenLayersPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Hidden Layers';
        this.title_txt = 'Some applications use DOM'; // Bug in the page, the text is not correct
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record button click and then';
        this.scenario_2_text = 'Execute the test to make';
        this.playground_label = 'Playground';
        this.green_btn = '#greenButton';
        this.blue_btn = '#blueButton';
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
    click_green_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.green_btn).click();
        });
    }
    get_green_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.green_btn).textContent();
        });
    }
    click_blue_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.blue_btn).click();
        });
    }
    get_blue_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.blue_btn).textContent();
        });
    }
    get_button_image() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.blue_btn);
        });
    }
}
exports.HiddenLayersPage = HiddenLayersPage;
