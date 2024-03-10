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
test_setup_1.default.describe('Text Input Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, textInputPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Text Input page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Text Input');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield textInputPage.get_title_label()).toBe('Text Input');
            (0, test_1.expect)(yield textInputPage.get_title_text()).toBe('Entering text with physical keyboard can be different from sending DOM events to an element. This page is specifically desined to illustrate this problem. There are cases when attempts to set a text via DOM events lead to nowhere and the only way to proceed is to emulate real keyboard input at OS level.');
            (0, test_1.expect)(yield textInputPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield textInputPage.get_scenario_text()).toBe('Record setting text into the input field and pressing the button.');
            (0, test_1.expect)(yield textInputPage.get_scenario_2_text()).toBe('Then execute your test to make sure that the button name is changing.');
            (0, test_1.expect)(yield textInputPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield textInputPage.get_playground_text()).toBe('Set New Button Name');
            (0, test_1.expect)(yield textInputPage.get_input_value()).toBe('');
            (0, test_1.expect)(yield textInputPage.get_update_button_text()).toBe("Button That Should Change it's Name Based on Input Value");
        }));
    }));
    (0, test_setup_1.default)('Enter New Name and Verify No Button Name Change', ({ page, browserName, homePage, textInputPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        test_setup_1.default.skip(browserName === 'webkit' || browserName === 'firefox', 'This test is skipped in WebKit and Firefox because of a known issue with set input works as expected.');
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Text Input page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Text Input');
        }));
        yield test_setup_1.default.step('Enter New Button Value and Verify No Change', () => __awaiter(void 0, void 0, void 0, function* () {
            yield textInputPage.set_input_value('New Button Name');
            yield textInputPage.click_update();
            (0, test_1.expect)(yield textInputPage.get_update_button_text()).toBe("Button That Should Change it's Name Based on Input Value");
        }));
    }));
    (0, test_setup_1.default)('Type New Name and Verify Button Name Change', ({ page, homePage, textInputPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Text Input page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Text Input');
        }));
        yield test_setup_1.default.step('Type New Button Value and Verify Change', () => __awaiter(void 0, void 0, void 0, function* () {
            yield textInputPage.type_input_value('New Button Name');
            yield textInputPage.click_update();
            (0, test_1.expect)(yield textInputPage.get_update_button_text()).toBe('New Button Name');
        }));
    }));
});
