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
test_setup_1.default.describe('Hidden Layers Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, hiddenLayersPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Hidden Layers page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Hidden Layers');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield hiddenLayersPage.get_title_label()).toBe('Hidden Layers');
            (0, test_1.expect)(yield hiddenLayersPage.get_title_text()).toBe('Some applications use DOM caching techniques. For example, if a user follows a multi step process and each step requires filling data into a form then forms may be cached at the client side along the way. It allows to quickly navigate back and forward through the steps without requesting data from a server. When form is cached it just pushed on-top of z-order stack. It means that an element may be still present in the DOM tree but overlapped with another layer of elements. In this case it is important that a test does not interact with inactive elements becasue they are invisible to a user.');
            (0, test_1.expect)(yield hiddenLayersPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield hiddenLayersPage.get_scenario_text()).toBe('Record button click and then duplicate the button click step in your test.');
            (0, test_1.expect)(yield hiddenLayersPage.get_scenario_2_text()).toBe('Execute the test to make sure that green button can not be hit twice.');
            (0, test_1.expect)(yield hiddenLayersPage.get_playground_label()).toBe('Playground');
            (0, test_1.expect)(yield hiddenLayersPage.get_green_btn_text()).toBe('Button');
        }));
    }));
    (0, test_setup_1.default)('Click Button Multiple Times', ({ page, homePage, hiddenLayersPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Hidden Layers page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Hidden Layers');
        }));
        yield test_setup_1.default.step('Click Button Multiple Times and Verify Button is Blue', () => __awaiter(void 0, void 0, void 0, function* () {
            yield hiddenLayersPage.click_green_btn();
            yield hiddenLayersPage.click_blue_btn();
            //  Screenshot compare
            const image = yield hiddenLayersPage.get_button_image();
            yield (0, test_1.expect)(image).toBeTruthy();
            yield (0, test_1.expect)(image).toHaveScreenshot();
        }));
    }));
});
