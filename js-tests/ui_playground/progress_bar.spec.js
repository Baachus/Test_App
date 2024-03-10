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
test_setup_1.default.describe('Progress Bar Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, progressBarPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Progress Bar page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Progress Bar');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield progressBarPage.get_title_label()).toBe('Progress Bar');
            (0, test_1.expect)(yield progressBarPage.get_title_text()).toBe('A web application may use a progress bar to reflect state of some lengthy process. Thus a test may need to read the value of a progress bar to determine if it is time to proceed or not.');
            (0, test_1.expect)(yield progressBarPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield progressBarPage.get_scenario_text()).toBe('Create a test that clicks Start button and then waits for the progress bar to reach 75%. Then the test should click Stop. The less the differnce between value of the stopped progress bar and 75% the better your result.');
            (0, test_1.expect)(yield progressBarPage.get_playground_heading()).toBe('Progress Bar');
            (0, test_1.expect)(yield progressBarPage.get_start_button_text()).toBe('Start');
            (0, test_1.expect)(yield progressBarPage.get_stop_button_text()).toBe('Stop                ');
            (0, test_1.expect)(yield progressBarPage.get_progress_bar_value()).toBe('25');
            (0, test_1.expect)(yield progressBarPage.get_result_text()).toBe('Result: n/a');
        }));
    }));
    (0, test_setup_1.default)('Progress to 75% and Stop', ({ page, homePage, progressBarPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Progress Bar page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Progress Bar');
        }));
        // TODO: Change this to verify difference between progress bar and result (this is currently within 3 from 75% but sometimes it goes so fast it cant stop that quickly)
        yield test_setup_1.default.step('Click Start and wait for 75%', () => __awaiter(void 0, void 0, void 0, function* () {
            yield progressBarPage.click_on_start_button();
            yield progressBarPage.wait_for_progress_bar_to_reach(75);
            yield progressBarPage.click_on_stop_button();
            const validResultRegex = /Result: (-?[0-5]), duration: ([1-9]\d*|\d*[1-9]\d*)$/;
            (0, test_1.expect)(validResultRegex.test((yield progressBarPage.get_result_text()) || '')).toBe(true);
        }));
    }));
});
