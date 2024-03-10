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
test_setup_1.default.describe('AJAX Data Tests', () => {
    (0, test_setup_1.default)('Verify Title, labels, and text', ({ page, homePage, ajaxDataPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the AJAX Data page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('AJAX Data');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield ajaxDataPage.get_title_label()).toBe('AJAX Data');
            // Bug in the page, the text is not correct
            (0, test_1.expect)(yield ajaxDataPage.get_title_text()).toBe('An element may appaear on a page after processing of an AJAX request to a web server. A test should be able to wait for an element to show up.');
            (0, test_1.expect)(yield ajaxDataPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield ajaxDataPage.get_scenario_text()).toBe('Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.');
            (0, test_1.expect)(yield ajaxDataPage.get_scenario_2_text()).toBe('Then execute your test to make sure it waits for label text to appear.');
            (0, test_1.expect)(yield ajaxDataPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield ajaxDataPage.get_ajax_btn()).toBe('Button Triggering AJAX Request');
        }));
    }));
    (0, test_setup_1.default)('Clicking the AJAX Button Changes the Button Text', ({ page, homePage, ajaxDataPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the AJAX Data page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('AJAX Data');
        }));
        yield test_setup_1.default.step('Click the AJAX Button and wait for data to appear', () => __awaiter(void 0, void 0, void 0, function* () {
            yield ajaxDataPage.click_ajax_btn();
            // The button text changes to "Data loaded" after a few seconds below the button
            (0, test_1.expect)(yield ajaxDataPage.get_ajax_load_text()).toBe('Data loaded with AJAX get request.');
        }));
    }));
    (0, test_setup_1.default)('Click the AJAX Button Displays Loading Icon', ({ page, homePage, ajaxDataPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the AJAX Data page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('AJAX Data');
        }));
        yield test_setup_1.default.step('Click the AJAX Button and Loading Icon Appears', () => __awaiter(void 0, void 0, void 0, function* () {
            yield ajaxDataPage.click_ajax_btn();
            // The loading icon appears below the button
            (0, test_1.expect)(yield ajaxDataPage.get_ajax_load_icon_locator()).not.toBeNull();
        }));
    }));
});
