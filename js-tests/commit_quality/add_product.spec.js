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
const faker_1 = require("@faker-js/faker");
const test_1 = require("@playwright/test");
test_setup_1.default.use({
    baseURL: 'https://commitquality.com/',
});
test_setup_1.default.describe('Add Product Tests', () => {
    (0, test_setup_1.default)('Adding Product Redirects Back to Product Page', ({ page, addProductPage }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('add-product');
        }));
        yield test_setup_1.default.step('Enter Valid Product', () => __awaiter(void 0, void 0, void 0, function* () {
            yield addProductPage.set_name_text_box(faker_1.faker.lorem.words({ min: 2, max: 4 }));
            yield addProductPage.set_price_text_box(faker_1.faker.commerce.price());
            yield addProductPage.set_date_stocked_recent_date();
            yield addProductPage.click_submit();
        }));
        yield test_setup_1.default.step('User is redirected back to Product Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(page.url()).toBe('https://commitquality.com/');
        }));
    }));
    (0, test_setup_1.default)('Empty Fields', ({ page, addProductPage }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('add-product');
        }));
        yield test_setup_1.default.step('Enter Empty Product', () => __awaiter(void 0, void 0, void 0, function* () {
            yield addProductPage.set_name_text_box('');
            yield addProductPage.set_price_text_box('');
            yield addProductPage.set_date_stocked_text_box('');
            yield addProductPage.click_submit();
            yield addProductPage.click_submit(); // Must click twice as first doesn't let Please fill in all fields appear
        }));
        yield test_setup_1.default.step('All Empty Field Errors Appear', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify error messages
            (0, test_1.expect)(yield addProductPage.get_empty_name_error()).toBe('Name must be at least 2 characters.');
            (0, test_1.expect)(yield addProductPage.get_empty_price_error()).toBe('Price must not be empty and within 10 digits');
            (0, test_1.expect)(yield addProductPage.get_empty_date_error()).toBe('Date must not be empty.');
            (0, test_1.expect)(yield addProductPage.get_fill_in_fields_error()).toBe('Please fill in all fields');
            (0, test_1.expect)(yield addProductPage.get_resolve_errors()).toBe('Errors must be resolved before submitting');
            // Verify message visibility
            (0, test_1.expect)(yield addProductPage.get_empty_name_error_visibility()).toBe(true);
            (0, test_1.expect)(yield addProductPage.get_empty_price_error_visibility()).toBe(true);
            (0, test_1.expect)(yield addProductPage.get_empty_date_error_visibility()).toBe(true);
            (0, test_1.expect)(yield addProductPage.get_fill_in_fields_error_visibility()).toBe(true);
            (0, test_1.expect)(yield addProductPage.get_resolve_errors_visibility()).toBe(true);
            // Verify User not Redirected URL
            (0, test_1.expect)(page.url()).toBe('https://commitquality.com/add-product');
        }));
    }));
    (0, test_setup_1.default)('Fill in All Fields Does Not Appear on One Click', ({ page, addProductPage }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('add-product');
        }));
        yield test_setup_1.default.step('Enter Empty Product', () => __awaiter(void 0, void 0, void 0, function* () {
            yield addProductPage.set_name_text_box('');
            yield addProductPage.set_price_text_box('');
            yield addProductPage.set_date_stocked_text_box('');
            yield addProductPage.click_submit();
        }));
        yield test_setup_1.default.step('Fill in All Fields Not Visible', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify message visibility
            (0, test_1.expect)(yield addProductPage.get_fill_in_fields_error_visibility()).toBe(false);
        }));
    }));
    (0, test_setup_1.default)('One Character Product Name', ({ page, addProductPage }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('add-product');
        }));
        yield test_setup_1.default.step('Enter Valid Product', () => __awaiter(void 0, void 0, void 0, function* () {
            yield addProductPage.set_name_text_box(faker_1.faker.string.alpha({ length: 1 }));
            yield addProductPage.set_price_text_box(faker_1.faker.commerce.price());
            yield addProductPage.set_date_stocked_recent_date();
            yield addProductPage.click_submit();
        }));
        yield test_setup_1.default.step('Name Must Be Over One Character', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify error messages
            (0, test_1.expect)(yield addProductPage.get_empty_name_error()).toBe('Name must be at least 2 characters.');
        }));
    }));
    (0, test_setup_1.default)('Eleven Digit Price', ({ page, addProductPage }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('add-product');
        }));
        yield test_setup_1.default.step('Enter Valid Product', () => __awaiter(void 0, void 0, void 0, function* () {
            yield addProductPage.set_name_text_box(faker_1.faker.lorem.words({ min: 2, max: 4 }));
            yield addProductPage.set_price_text_box(faker_1.faker.string.numeric({ length: 11 }));
            yield addProductPage.set_date_stocked_recent_date();
            yield addProductPage.click_submit();
        }));
        yield test_setup_1.default.step('Prices Must Be Under Ten Digits', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify error messages
            (0, test_1.expect)(yield addProductPage.get_empty_price_error()).toBe('Price must not be empty and within 10 digits');
        }));
    }));
    (0, test_setup_1.default)('Future Date', ({ page, addProductPage }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the commit quality page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('add-product');
        }));
        yield test_setup_1.default.step('Enter Valid Product', () => __awaiter(void 0, void 0, void 0, function* () {
            const date = faker_1.faker.date.future();
            const formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
            yield addProductPage.set_name_text_box(faker_1.faker.lorem.words({ min: 2, max: 4 }));
            yield addProductPage.set_price_text_box(faker_1.faker.commerce.price());
            yield addProductPage.set_date_stocked_text_box(formattedDate);
            yield addProductPage.click_submit();
        }));
        yield test_setup_1.default.step('Date Stocked Must Be Present or Past', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify error messages
            (0, test_1.expect)(yield addProductPage.get_future_date_error()).toBe('Date must not be in the future.');
            (0, test_1.expect)(yield addProductPage.get_future_date_error_visibility()).toBe(true);
        }));
    }));
});
