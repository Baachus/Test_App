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
test_setup_1.default.describe('Client Side Delay Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, clientSideDelayPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Client Side Delay page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Client Side Delay');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield clientSideDelayPage.get_title_label()).toBe('Client Side Delay');
            (0, test_1.expect)(yield clientSideDelayPage.get_title_text()).toBe('An element may appaear on a page after heavy JavaScript processing on a client side. A test should be able to wait for an element to show up.');
            (0, test_1.expect)(yield clientSideDelayPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield clientSideDelayPage.get_scenario_text()).toBe('Record the following steps. Press the button below and wait for data to appear (15 seconds), click on text of the loaded label.');
            (0, test_1.expect)(yield clientSideDelayPage.get_scenario_2_text()).toBe('Then execute your test to make sure it waits for label text to appear.');
            (0, test_1.expect)(yield clientSideDelayPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield clientSideDelayPage.get_client_side_btn()).toBe('Button Triggering Client Side Logic');
        }));
    }));
    (0, test_setup_1.default)('Verify Client Side Delay', ({ page, homePage, clientSideDelayPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Client Side Delay page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Client Side Delay');
        }));
        yield test_setup_1.default.step('Click on the Client Side Button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield clientSideDelayPage.click_on_client_side_btn();
        }));
        yield test_setup_1.default.step('Verify the Load Icon', () => __awaiter(void 0, void 0, void 0, function* () {
            const loadIcon = yield clientSideDelayPage.get_load_icon();
            (0, test_1.expect)(yield (loadIcon === null || loadIcon === void 0 ? void 0 : loadIcon.isVisible())).toBe(true);
        }));
        yield test_setup_1.default.step('Verify the Successful Load Text', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield clientSideDelayPage.get_successful_load_txt()).toBe('Data calculated on the client side.');
        }));
    }));
});
