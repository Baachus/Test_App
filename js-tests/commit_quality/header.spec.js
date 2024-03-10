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
const test_setup_1 = require("./test_setup");
const test_1 = require("@playwright/test");
test_setup_1.default.use({
    baseURL: 'https://commitquality.com/',
});
test_setup_1.default.describe('Header Tests', () => {
    (0, test_setup_1.default)('Navigation should land user on correct page', ({ page, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('');
        }));
        yield test_setup_1.default.step('Navigate to the practice page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_practice();
            (0, test_1.expect)(page.url()).toBe('https://commitquality.com/practice');
            yield page.goBack();
        }));
        yield test_setup_1.default.step('Navigate to the add product page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_add_product();
            (0, test_1.expect)(page.url()).toBe('https://commitquality.com/add-product');
            yield page.goBack();
        }));
        yield test_setup_1.default.step('Navigate to the products page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_products();
            (0, test_1.expect)(page.url()).toBe('https://commitquality.com/');
        }));
        yield test_setup_1.default.step('Navigate to the login page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_login();
            (0, test_1.expect)(page.url()).toBe('https://commitquality.com/login');
            yield page.goBack();
        }));
        yield test_setup_1.default.step('Navigate to the learn page', () => __awaiter(void 0, void 0, void 0, function* () {
            // Listen for the popup event
            const newPagePromise = new Promise(resolve => page.once('popup', resolve));
            // Trigger the action that opens the new tab
            // Replace this with your actual action
            yield headerComp.click_learn();
            // Wait for the new tab to open
            const newPage = yield newPagePromise;
            // Verify the new tab's URL
            const url = newPage.url();
            (0, test_1.expect)(url).toBe('https://www.youtube.com/@commitquality');
        }));
    }));
    (0, test_setup_1.default)('Verify Header Text', ({ page, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('');
        }));
        yield test_setup_1.default.step('Verify the products link text', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield headerComp.get_products_text()).toBe('Products');
        }));
        yield test_setup_1.default.step('Verify the add product link text', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield headerComp.get_add_product_text()).toBe('Add Product');
        }));
        yield test_setup_1.default.step('Verify the practice link text', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield headerComp.get_practice_text()).toBe('Practice');
        }));
        yield test_setup_1.default.step('Verify the learn link text', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield headerComp.get_learn_text()).toBe('Learn');
        }));
        yield test_setup_1.default.step('Verify the login link text', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield headerComp.get_login_text()).toBe('Login');
        }));
    }));
});
