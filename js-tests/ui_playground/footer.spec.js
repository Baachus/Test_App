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
test_setup_1.default.describe('Footer Component Tests for UI Test Automation Playground', () => {
    (0, test_setup_1.default)('Verify Star Project Link on Footer Sends User to Right Page', ({ page, footerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the star project link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            // Listen for the popup event before clicking the link
            const newPagePromise = new Promise(resolve => page.once('popup', resolve));
            // Click the link that opens a new page
            yield footerComp.star_project();
            // Wait for the new page to open
            const newPage = yield newPagePromise;
            // Check the URL of the new page
            yield (0, test_1.expect)(newPage.url()).toBe('https://github.com/inflectra/ui-test-automation-playground');
        }));
    }));
    (0, test_setup_1.default)('Verify Fork Project Link on Footer Sends User to Right Page', ({ page, footerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the fork project link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield footerComp.click_fork_project();
            // Expect a title "to be" a string
            yield (0, test_1.expect)(page).toHaveURL('https://github.com/inflectra/ui-test-automation-playground');
        }));
    }));
    (0, test_setup_1.default)('Verify Rapise Link on Footer Sends User to Right Page', ({ page, footerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the Rapise link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield footerComp.click_rapise();
            // Expect a title "to be" a string
            yield (0, test_1.expect)(page).toHaveURL('https://www.inflectra.com/Rapise/');
        }));
    }));
    (0, test_setup_1.default)('Verify Inflectra Link on Footer Sends User to Right Page', ({ page, footerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the Inflectra link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield footerComp.click_inflectra();
            // Expect a title "to be" a string
            yield (0, test_1.expect)(page).toHaveURL('https://www.inflectra.com/');
        }));
    }));
    (0, test_setup_1.default)('Verify Apache License Link on Footer Sends User to Right Page', ({ page, footerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the Apache License link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield footerComp.click_apache();
            // Expect a title "to be" a string
            yield (0, test_1.expect)(page).toHaveURL('https://www.apache.org/licenses/LICENSE-2.0');
        }));
    }));
});
