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
test_setup_1.default.describe('Scrollbars Data Tests', () => {
    (0, test_setup_1.default)('Verify Title, labels, and text', ({ page, homePage, scrollbarsPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Scrollbars page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Scrollbars');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield scrollbarsPage.get_title_label()).toBe('Scrollbars');
            (0, test_1.expect)(yield scrollbarsPage.get_title_text()).toBe('An application may use native or custom scrollbars and some elements may be out of view. A test scenario may require to ensure that an element is visible on screen and this may require scrolling.');
            (0, test_1.expect)(yield scrollbarsPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield scrollbarsPage.get_scenario_text()).toBe('Find a button in the scroll view and record button click.');
            (0, test_1.expect)(yield scrollbarsPage.get_scenario_2_text()).toBe('Update your test to automatically scroll the button into a visible area.');
            (0, test_1.expect)(yield scrollbarsPage.get_scenario_3_text()).toBe('Then execute your test to make sure it works.');
            (0, test_1.expect)(yield scrollbarsPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield scrollbarsPage.get_scrollbars_btn_text()).toBe('Hiding Button');
        }));
    }));
    (0, test_setup_1.default)('Click a Hidden Button', ({ page, homePage, scrollbarsPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Scrollbars page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Scrollbars');
        }));
        yield test_setup_1.default.step('Click the Hiding Button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield scrollbarsPage.click_scrollbars_btn();
            (0, test_1.expect)(yield scrollbarsPage.get_scrollbars_btn_text_visible()).toBe(true);
        }));
    }));
});
