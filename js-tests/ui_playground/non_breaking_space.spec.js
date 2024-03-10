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
test_setup_1.default.describe('Non-Breaking Space Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, nonBreakingPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Non-Breaking Space page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Non-Breaking Space');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield nonBreakingPage.get_title_label()).toBe('Non-Breaking Space');
            (0, test_1.expect)(yield nonBreakingPage.get_title_text()).toBe('There are cases in test automation when something should obviously work but for some reason it does not. Searching for an element by its text is one of those cases. Text caption may contain non-breaking spaces that have no visual difference from generic spaces.');
            (0, test_1.expect)(yield nonBreakingPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield nonBreakingPage.get_scenario_text()).toBe("Use the following xpath to find the button in your test://button[text()='My Button']");
            (0, test_1.expect)(yield nonBreakingPage.get_scenario_2_text()).toBe("Notice that the XPath does not work. Change the space between 'My' and 'Button' to a non-breaking space. This time the XPath should be valid.");
            (0, test_1.expect)(yield nonBreakingPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield nonBreakingPage.get_button_text()).toContain('My');
            (0, test_1.expect)(yield nonBreakingPage.get_button_text()).toContain('Button');
        }));
    }));
    (0, test_setup_1.default)('Verify My Button has no Space', ({ page, homePage, nonBreakingPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Non-Breaking Space page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Non-Breaking Space');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield nonBreakingPage.get_button_text()).not.toContain('My Button');
        }));
    }));
    (0, test_setup_1.default)('Click Button Multiple Times', ({ page, homePage, nonBreakingPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Non-Breaking Space page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Non-Breaking Space');
        }));
        yield test_setup_1.default.step('Click Button Verify Button is Present', () => __awaiter(void 0, void 0, void 0, function* () {
            yield nonBreakingPage.click_btn();
            (0, test_1.expect)(yield nonBreakingPage.get_button_text()).toContain('Button');
        }));
    }));
});
