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
exports.ClassAttributePage = void 0;
class ClassAttributePage {
    constructor(page) {
        // Selectors
        this.title_label = 'Class Attribute';
        this.one_class_txt = 'Class attribute of an element';
        this.one_class_example_txt = '<button class="btn btn-primary btn-test">';
        this.xpath_txt = 'XPath selector ';
        this.xpath_example_txt = "//button[@class='btn-primary']";
        this.correct_variant_txt = 'Correct variant';
        this.correct_variant_example_txt = '//button[contains(concat(';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Record primary (blue)';
        this.scenario_2_text = 'Then execute your test to make sure';
        this.playground_label = 'Playground';
        this.green_btn = 'btn-success';
        this.yellow_btn = 'btn-warning';
        this.blue_btn = 'btn-primary';
        this.page = page;
    }
    // Methods
    get_title_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.title_label }).textContent();
        });
    }
    get_one_class_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.one_class_txt).textContent();
        });
    }
    get_one_class_example_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.one_class_example_txt).textContent();
        });
    }
    get_xpath_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.xpath_txt).textContent();
        });
    }
    get_xpath_example_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.xpath_example_txt).textContent();
        });
    }
    get_correct_variant_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.correct_variant_txt).textContent();
        });
    }
    get_correct_variant_example_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.correct_variant_example_txt).textContent();
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
    // Playground Buttons
    get_green_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(`.${this.green_btn}`).textContent();
        });
    }
    get_yellow_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(`.${this.yellow_btn}`).textContent();
        });
    }
    get_blue_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(`.${this.blue_btn}`).textContent();
        });
    }
    get_green_btn_locator() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(`.${this.green_btn}`);
        });
    }
    get_yellow_btn_locator() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(`.${this.yellow_btn}`);
        });
    }
    get_blue_btn_locator() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator(`.${this.blue_btn}`);
        });
    }
    click_green_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(`.${this.green_btn}`).click();
        });
    }
    click_yellow_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(`.${this.yellow_btn}`).click();
        });
    }
    click_blue_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(`.${this.blue_btn}`).click();
        });
    }
}
exports.ClassAttributePage = ClassAttributePage;
