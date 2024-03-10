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
test_setup_1.default.describe('Load Delay Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, loadDelayPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Load Delay page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Load Delay');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield loadDelayPage.get_title_label()).toBe('Load Delays');
            (0, test_1.expect)(yield loadDelayPage.get_title_text()).toBe('Server response may often come with an unpredictable delay. So a test must be able to patiently wait for page loaded event from a browser.');
            (0, test_1.expect)(yield loadDelayPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield loadDelayPage.get_scenario_text()).toBe('Navigate to Home page and record Load Delays link click and button click on this page.');
            (0, test_1.expect)(yield loadDelayPage.get_scenario_2_text()).toBe('Then play the test. It should wait until page is loaded.');
            (0, test_1.expect)(yield loadDelayPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield loadDelayPage.get_delay_btn_text()).toBe('Button Appearing After Delay');
        }));
    }));
    (0, test_setup_1.default)('Click Button Multiple Times', ({ page, homePage, loadDelayPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Load Delay page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Load Delay');
        }));
        yield test_setup_1.default.step('Verify Button is Present After Load Delay Navigation', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield loadDelayPage.get_delay_btn_text()).toBe('Button Appearing After Delay');
        }));
    }));
});
