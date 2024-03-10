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
test_setup_1.default.describe('Shadow DOM Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, shadowDOMPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Shadow DOM page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Shadow DOM');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield shadowDOMPage.get_title_label()).toBe('Shadow DOM');
            (0, test_1.expect)(yield shadowDOMPage.get_title_text()).toBe('This is a page with a Shadow DOM component guid-generator. Using it one can generate a guid and copy it to the clipboard.');
            (0, test_1.expect)(yield shadowDOMPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield shadowDOMPage.get_scenario_text()).toBe('Create a test that clicks on  and then on  buttons. This sequence of steps generates new guid and copies it to the clipboard.');
            (0, test_1.expect)(yield shadowDOMPage.get_scenario_2_text()).toBe('Add an assertion step to your test to compare the value from the clipboard with the value of the input field.');
            (0, test_1.expect)(yield shadowDOMPage.get_scenario_3_text()).toBe('Then execute the test to make sure that the assertion step is not failing.');
            (0, test_1.expect)(yield shadowDOMPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield shadowDOMPage.get_playground_text()).toBe('GUID Generator:');
        }));
    }));
    (0, test_setup_1.default)('Generate GUID', ({ page, homePage, shadowDOMPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Shadow DOM page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Shadow DOM');
        }));
        yield test_setup_1.default.step('Generate GUID', () => __awaiter(void 0, void 0, void 0, function* () {
            yield shadowDOMPage.click_generate_guid_btn();
            yield (0, test_1.expect)(page.locator('#editField')).toBeVisible();
        }));
    }));
});
