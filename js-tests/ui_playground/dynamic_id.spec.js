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
const test_1 = require("@playwright/test");
const test_setup_1 = require("./test_setup");
test_setup_1.default.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
});
test_setup_1.default.describe('Dynamic ID Tests', () => {
    (0, test_setup_1.default)('Verify Title, labels, and text', ({ page, homePage, dynamicIDPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Dynamic ID page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Dynamic ID');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield dynamicIDPage.get_title_label()).toBe('Dynamic ID');
            (0, test_1.expect)(yield dynamicIDPage.get_title_text()).toBe('Modern applications often generate dynamic IDs for elements. In this case ID is not a reliable attribute for using in element selector. By default many UI automation tools record IDs and this results in tests broken from the very beginning. An automation tool needs a way to instruct it to skip dynamic IDs when XPath is generated for an element.');
            (0, test_1.expect)(yield dynamicIDPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield dynamicIDPage.get_scenario_text()).toBe('Record button click.');
            (0, test_1.expect)(yield dynamicIDPage.get_scenario_2_text()).toBe('Then execute your test to make sure that ID is not used for button identification.');
            (0, test_1.expect)(yield dynamicIDPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield dynamicIDPage.get_dynamic_id_btn_text()).toBe('Button with Dynamic ID');
        }));
    }));
    (0, test_setup_1.default)('Clicking the Dynamic ID Button Changes the Button Text', ({ page, homePage, dynamicIDPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Dynamic ID page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Dynamic ID');
        }));
        yield test_setup_1.default.step('Click the Dynamic ID Button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield dynamicIDPage.click_dynamic_id_btn();
            // Nothing changes on page so nothing to verify except things don't change.
            (0, test_1.expect)(yield dynamicIDPage.get_dynamic_id_btn_text()).toBe('Button with Dynamic ID');
        }));
    }));
});
