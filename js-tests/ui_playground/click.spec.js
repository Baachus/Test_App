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
test_setup_1.default.describe('Click Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, clickPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Click page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Click');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield clickPage.get_title_label()).toBe('Click');
            (0, test_1.expect)(yield clickPage.get_title_text()).toBe('Physical mouse click and DOM event emulated click are differently handled by browsers. There are still cases, with sometimes hardly identifiable reasons, when an event based click does not work. The solution for this problem is emulating physical mouse click. This page is specifically designed to ignore event based click.');
            (0, test_1.expect)(yield clickPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield clickPage.get_scenario_text()).toBe('Record button click. The button becomes green after clicking.');
            (0, test_1.expect)(yield clickPage.get_scenario_2_text()).toBe('Then execute your test to make sure that it is able to click the button.');
            (0, test_1.expect)(yield clickPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield clickPage.get_click_btn_text()).toBe('Button That Ignores DOM Click Event');
        }));
    }));
    (0, test_setup_1.default)('Click Button and Verify Color Change', ({ page, homePage, clickPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Click page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Click');
        }));
        yield test_setup_1.default.step('Click Button Multiple Times and Verify Button is Blue', () => __awaiter(void 0, void 0, void 0, function* () {
            yield clickPage.click_btn();
            const btn = yield clickPage.get_click_btn();
            const color = yield (btn === null || btn === void 0 ? void 0 : btn.evaluate((el) => {
                return window.getComputedStyle(el).backgroundColor;
            }));
            // TODO: Verify color is within a range
        }));
    }));
});
