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
test_setup_1.default.describe('Visibility Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, visibilityPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Visibility page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Visibility');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield visibilityPage.get_title_label()).toBe('Visibility');
            (0, test_1.expect)(yield visibilityPage.get_title_text()).toBe('Checking if element is visible on screen may be a non trivial task. ');
            (0, test_1.expect)(yield visibilityPage.get_title_2_text()).toBe('An element may be removed (simplest case),');
            (0, test_1.expect)(yield visibilityPage.get_title_3_text()).toBe('it may have zero height or width,');
            (0, test_1.expect)(yield visibilityPage.get_title_4_text()).toBe('it may be covered by another element,');
            (0, test_1.expect)(yield visibilityPage.get_title_5_text()).toBe('it may be hidden using styles: opacity: 0, visibility: hidden, display: none,');
            (0, test_1.expect)(yield visibilityPage.get_title_6_text()).toBe('or moved offscreen.');
            (0, test_1.expect)(yield visibilityPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield visibilityPage.get_scenario_text()).toBe('Learn locators of all buttons.');
            (0, test_1.expect)(yield visibilityPage.get_scenario_2_text()).toBe('In your testing scenario press Hide button.');
            (0, test_1.expect)(yield visibilityPage.get_scenario_3_text()).toBe('Determine if other buttons visible or not.');
            (0, test_1.expect)(yield visibilityPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield visibilityPage.get_hide_btn_text()).toBe('Hide');
            (0, test_1.expect)(yield visibilityPage.get_removed_btn_text()).toBe('Removed');
            (0, test_1.expect)(yield visibilityPage.get_zero_width_btn_text()).toBe('Zero Width');
            (0, test_1.expect)(yield visibilityPage.get_overlapped_btn_text()).toBe('Overlapped');
            (0, test_1.expect)(yield visibilityPage.get_opacity_btn_text()).toBe('Opacity 0');
            (0, test_1.expect)(yield visibilityPage.get_visibility_hidden_btn_text()).toBe('Visibility Hidden');
            (0, test_1.expect)(yield visibilityPage.get_display_none_btn_text()).toBe('Display None');
            (0, test_1.expect)(yield visibilityPage.get_offscreen_btn_text()).toBe('Offscreen');
        }));
    }));
    (0, test_setup_1.default)('Click the Hide Button and Verify Hidden Buttons', ({ page, homePage, visibilityPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Visibility page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Visibility');
        }));
        yield test_setup_1.default.step('Visibility of Buttons', () => __awaiter(void 0, void 0, void 0, function* () {
            let buttonToCheck = yield visibilityPage.get_removed_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_zero_width_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_overlapped_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_opacity_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_visibility_hidden_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_display_none_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_offscreen_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
        }));
        yield test_setup_1.default.step('Click the Hide Button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield visibilityPage.click_hide_btn();
            let buttonToCheck = yield visibilityPage.get_removed_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(false);
            buttonToCheck = yield visibilityPage.get_zero_width_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(false);
            buttonToCheck = yield visibilityPage.get_overlapped_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_opacity_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
            buttonToCheck = yield visibilityPage.get_visibility_hidden_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(false);
            buttonToCheck = yield visibilityPage.get_display_none_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(false);
            buttonToCheck = yield visibilityPage.get_offscreen_btn();
            (0, test_1.expect)(yield (buttonToCheck === null || buttonToCheck === void 0 ? void 0 : buttonToCheck.isVisible())).toBe(true);
        }));
    }));
});
