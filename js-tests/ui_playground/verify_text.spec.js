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
test_setup_1.default.describe('Verify Text Tests', () => {
    (0, test_setup_1.default)('Verify Title, Labels, and Text', ({ page, homePage, verifyTextPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Verify Text page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Verify Text');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield verifyTextPage.get_title_label()).toBe('Verify Text');
            (0, test_1.expect)(yield verifyTextPage.get_title_text()).toBe('In general inner text of a DOM element is different from displayed on screen. Browsers normalize text upon rendering, but DOM nodes contain text as it is in HTML markup. For example a browser may show the text as');
            (0, test_1.expect)(yield verifyTextPage.get_hello_txt()).toBe('Hello UserName!');
            (0, test_1.expect)(yield verifyTextPage.get_title_2_text()).toBe('and the text of the DOM element can be');
            // TODO: Fix this
            // expect(await verifyTextPage.get_dom_hello_txt()).toBe('Hello UserName!');
            (0, test_1.expect)(yield verifyTextPage.get_title_3_text()).toBe("Take this fact into account when searching for an element using it's text value. ");
            (0, test_1.expect)(yield verifyTextPage.get_does_not_work_txt()).toBe('Does not work');
            (0, test_1.expect)(yield verifyTextPage.get_does_not_work_example_txt()).toBe("//span[.='Welcome UserName!']");
            (0, test_1.expect)(yield verifyTextPage.get_works_txt()).toBe('Works');
            (0, test_1.expect)(yield verifyTextPage.get_works_example_txt()).toBe("//span[normalize-space(.)='Welcome UserName!']");
            (0, test_1.expect)(yield verifyTextPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield verifyTextPage.get_scenario_text()).toBe('Create a test that finds an element with Welcome... text.');
            (0, test_1.expect)(yield verifyTextPage.get_playground_label()).toBe('Playground');
            // TODO: Fix this
            // expect(await verifyTextPage.get_playground_txt()).toBe('Welcome UserName!');
        }));
    }));
});
