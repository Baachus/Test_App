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
test_setup_1.default.describe('Mouse Over Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, mouseOverPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Mouse Over page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Mouse Over');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield mouseOverPage.get_title_label()).toBe('Mouse Over');
            (0, test_1.expect)(yield mouseOverPage.get_title_text()).toBe('Placing mouse over an element may lead to changes in the DOM tree. For example the  element may be modified or replaced. It means if you keep a reference to the original element and will try to click on it - it may not work.');
            (0, test_1.expect)(yield mouseOverPage.get_title_2_text()).toBe('This puzzle complicates both recording and playback of a test.');
            (0, test_1.expect)(yield mouseOverPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield mouseOverPage.get_scenario_text()).toBe('Record 2 consecutive link clicks.');
            (0, test_1.expect)(yield mouseOverPage.get_scenario_2_text()).toBe('Execute the test and make sure that click count is increasing by 2.');
            (0, test_1.expect)(yield mouseOverPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield mouseOverPage.get_click_result()).toBe('The link clicked 0 times.');
            (0, test_1.expect)(yield mouseOverPage.get_click_count()).toBe('0');
        }));
    }));
    (0, test_setup_1.default)('Click Button Multiple Times', ({ page, homePage, mouseOverPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Mouse Over page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Mouse Over');
        }));
        yield test_setup_1.default.step('Click Link Multiple Times and Verify Link Count Increased', () => __awaiter(void 0, void 0, void 0, function* () {
            yield mouseOverPage.click_link();
            yield mouseOverPage.click_link();
            (0, test_1.expect)(yield mouseOverPage.get_click_count()).toBe('2');
        }));
        yield test_setup_1.default.step('Click Link Multiple Times and Verify Link Count Increased', () => __awaiter(void 0, void 0, void 0, function* () {
            yield mouseOverPage.click_link();
            yield mouseOverPage.click_link();
            (0, test_1.expect)(yield mouseOverPage.get_click_count()).toBe('4');
        }));
        yield test_setup_1.default.step('Click Link Multiple Times and Verify Link Count Increased', () => __awaiter(void 0, void 0, void 0, function* () {
            yield mouseOverPage.click_link();
            yield mouseOverPage.click_link();
            (0, test_1.expect)(yield mouseOverPage.get_click_count()).toBe('6');
        }));
        yield test_setup_1.default.step('Click Link Multiple Times and Verify Link Count Increased', () => __awaiter(void 0, void 0, void 0, function* () {
            yield mouseOverPage.click_link();
            yield mouseOverPage.click_link();
            (0, test_1.expect)(yield mouseOverPage.get_click_count()).toBe('8');
        }));
    }));
});
