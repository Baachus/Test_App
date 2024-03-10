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
exports.ShadowDOMPage = void 0;
class ShadowDOMPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Shadow DOM';
        this.title_txt = 'This is a page with a Shadow DOM'; // Bug in the page, the text is not correct
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Create a test that clicks';
        this.scenario_2_text = 'Add an assertion step';
        this.scenario_3_text = 'Then execute the test';
        this.playground_label = 'Playground';
        this.playground_text = 'GUID Generator:';
        this.guid_text_field = '#editField';
        this.generate_guid_btn = '#buttonGenerate';
        this.copy_guid_btn = '#buttonCopy';
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
    get_playground_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.playground_text).textContent();
        });
    }
    get_guid_text_field() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.guid_text_field);
        });
    }
    get_guid_text_field_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.guid_text_field).textContent();
        });
    }
    get_generate_guid_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.generate_guid_btn);
        });
    }
    click_generate_guid_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.generate_guid_btn);
        });
    }
    get_generate_guid_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.generate_guid_btn).textContent();
        });
    }
    get_copy_guid_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.copy_guid_btn);
        });
    }
    click_copy_guid_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.copy_guid_btn);
        });
    }
    get_copy_guid_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(this.copy_guid_btn).textContent();
        });
    }
    generate_guid() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.generate_guid_btn);
            return this.page.locator(this.guid_text_field).textContent();
        });
    }
}
exports.ShadowDOMPage = ShadowDOMPage;
