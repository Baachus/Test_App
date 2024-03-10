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
test_setup_1.default.describe('Class Attribute Tests', () => {
    (0, test_setup_1.default)('Verify Title, labels, and text', ({ page, homePage, classAttributePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Class Attribute page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Class Attribute');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield classAttributePage.get_title_label()).toBe('Class Attribute');
            (0, test_1.expect)(yield classAttributePage.get_one_class_text()).toBe('Class attribute of an element may contain more than one class reference. E.g. ');
            (0, test_1.expect)(yield classAttributePage.get_one_class_example_text()).toBe('<button class="btn btn-primary btn-test">');
            (0, test_1.expect)(yield classAttributePage.get_xpath_text()).toBe('XPath selector relying on a class must be well formed. For example, the following will not work: ');
            (0, test_1.expect)(yield classAttributePage.get_xpath_example_text()).toBe("//button[@class='btn-primary']");
            (0, test_1.expect)(yield classAttributePage.get_correct_variant_text()).toBe('Correct variant is');
            (0, test_1.expect)(yield classAttributePage.get_correct_variant_example_text()).toBe("//button[contains(concat(' ', normalize-space(@class), ' '), ' btn-primary ')]");
            (0, test_1.expect)(yield classAttributePage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield classAttributePage.get_scenario_text()).toBe('Record primary (blue) button click and press ok in alert popup.');
            (0, test_1.expect)(yield classAttributePage.get_scenario_2_text()).toBe('Then execute your test to make sure that it can identify the button using btn-primary class.');
            (0, test_1.expect)(yield classAttributePage.get_playground_label()).toBe('Playground');
            // Verify button text
            (0, test_1.expect)(yield classAttributePage.get_green_btn()).toContain('Button'); // Using toContain because the button text contains extra whitespace
            (0, test_1.expect)(yield classAttributePage.get_yellow_btn()).toContain('Button');
            (0, test_1.expect)(yield classAttributePage.get_blue_btn()).toContain('Button');
        }));
    }));
    (0, test_setup_1.default)('Verify Colors on Buttons', ({ page, browserName, homePage, classAttributePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        test_setup_1.default.skip(browserName === 'webkit' || browserName === 'firefox', 'This test is skipped in WebKit and Firefox because of a known issue with getComputedStyle.');
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Class Attribute page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Class Attribute');
        }));
        yield test_setup_1.default.step('Verify Colors on Buttons', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify the colors
            const greenBtn = yield classAttributePage.get_green_btn_locator();
            const yellowBtn = yield classAttributePage.get_yellow_btn_locator();
            const blueBtn = yield classAttributePage.get_blue_btn_locator();
            // eslint-disable-next-line playwright/no-conditional-in-test
            if (greenBtn && yellowBtn && blueBtn) {
                const greenBtnComputedStyle = yield greenBtn.evaluate(node => getComputedStyle(node));
                const yellowBtnComputedStyle = yield yellowBtn.evaluate(node => getComputedStyle(node));
                const blueBtnComputedStyle = yield blueBtn.evaluate(node => getComputedStyle(node));
                (0, test_1.expect)(greenBtnComputedStyle.backgroundColor).toBe('rgb(40, 167, 69)'); // Green
                (0, test_1.expect)(yellowBtnComputedStyle.backgroundColor).toBe('rgb(255, 193, 7)'); // Yellow
                (0, test_1.expect)(blueBtnComputedStyle.backgroundColor).toBe('rgb(0, 123, 255)'); // Blue
            }
            else {
                yield (0, test_1.expect)(false).toBe(true);
            }
        }));
    }));
    // This test is skipped due to the applications pop-up alert not being handled consistently
    test_setup_1.default.skip('Verify Button Click and Alert Popup', ({ page, homePage, classAttributePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Class Attribute page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Class Attribute');
        }));
        yield test_setup_1.default.step('Click on the blue button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield classAttributePage.click_blue_btn();
        }));
        yield test_setup_1.default.step('Verify Alert Popup', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify the alert popup
            const alert = page.locator('text=Primary button pressed').isVisible();
            (0, test_1.expect)(alert).toBe(true);
        }));
        yield test_setup_1.default.step('Close the Alert Popup', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.locator('text=OK').click();
        }));
        yield test_setup_1.default.step('Click on the green button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield classAttributePage.click_blue_btn();
        }));
        yield test_setup_1.default.step('Verify Alert Popup Does Not Appear', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify the alert popup
            const alert = page.locator('text=Primary button pressed').isVisible();
            (0, test_1.expect)(alert).toBe(false);
        }));
        yield test_setup_1.default.step('Click on the yellow button', () => __awaiter(void 0, void 0, void 0, function* () {
            yield classAttributePage.click_yellow_btn();
        }));
        yield test_setup_1.default.step('Verify Alert Popup', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify the alert popup
            const alert = page.locator('text=Primary button pressed').isVisible();
            (0, test_1.expect)(alert).toBe(false);
        }));
    }));
});
