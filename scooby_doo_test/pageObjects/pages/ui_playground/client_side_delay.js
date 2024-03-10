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
exports.ClientSideDelayPage = void 0;
class ClientSideDelayPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Client Side Delay';
        this.title_text = 'An element may appaear on a ';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record the following steps. Press';
        this.scenario_2_text = 'Then execute your test to make';
        this.playground_label = 'Playground';
        this.client_side_btn = 'Button Triggering Client Side Logic';
        this.load_icon = '#spinner';
        this.successful_load_txt = 'Data calculated on the client side';
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
            return this.page.getByText(this.title_text).textContent();
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
    click_on_client_side_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByText(this.client_side_btn).click();
        });
    }
    get_client_side_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('button', { name: this.client_side_btn }).textContent();
        });
    }
    get_load_icon() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.load_icon);
        });
    }
    get_successful_load_txt() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.successful_load_txt).textContent();
        });
    }
}
exports.ClientSideDelayPage = ClientSideDelayPage;
