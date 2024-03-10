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
test_setup_1.default.describe('Header Component Tests for UI Test Automation Playground', () => {
    (0, test_setup_1.default)('Verify Home Link on Header Sends User to Right Page', ({ page, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the home link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_home();
            // Expect a title "to contain" a string
            yield (0, test_1.expect)(page).toHaveURL(/home/);
        }));
    }));
    (0, test_setup_1.default)('Verify Resources Link on Header Sends User to Right Page', ({ page, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the resources link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_resources();
            // Expect a url "to contain" a substring.
            yield (0, test_1.expect)(page).toHaveURL(/resources/);
        }));
    }));
    (0, test_setup_1.default)('Verify Home Icon on Header Sends User to Right Page', ({ page, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the home icon and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield headerComp.click_home_icon();
            // Expect a title "to be" a string
            yield (0, test_1.expect)(page).toHaveURL('https://www.uitestingplayground.com');
        }));
    }));
});
