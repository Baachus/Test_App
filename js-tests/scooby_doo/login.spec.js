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
test_setup_1.default.describe('Scooby-Doo Family Tree Application Login Tests', () => {
    (0, test_setup_1.default)('Login Title Verification', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.goto('/family_tree');
        // Expect a title "to contain" a substring.
        yield (0, test_1.expect)(page).toHaveTitle(/Scooby-Doo Family Tree/);
    }));
    (0, test_setup_1.default)('Successful Login to Scooby-Doo Family Tree Application', ({ page, loginPage, headerComp }) => __awaiter(void 0, void 0, void 0, function* () {
        // Log into the family tree application
        yield loginPage.family_tree_login();
        // Verify user is logged in successfully
        yield (0, test_1.expect)(page.getByText("Logout")).toBeVisible();
        // Log out and verify logged out successfully
        yield headerComp.logout();
        yield (0, test_1.expect)(page.getByTestId("login")).toBeVisible();
    }));
    (0, test_setup_1.default)('Invalid Login to Scooby-Doo Family Tree Application', ({ page, loginPage }) => __awaiter(void 0, void 0, void 0, function* () {
        // Attempt to log into the family tree application with fake username
        yield loginPage.family_tree_login('FakeUser', 'Password$1');
        // Verify user is not logged in
        yield (0, test_1.expect)(page.getByText("Invalid Login Credentials")).toBeVisible();
    }));
    (0, test_setup_1.default)('Verify Login Page Accessibility', ({ page, accessibilityBuilder }) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.goto('/family_tree');
        yield test_setup_1.default.step('Verify login page accessibility', () => __awaiter(void 0, void 0, void 0, function* () {
            const accessibilityScanResults = yield accessibilityBuilder.analyze();
            (0, test_1.expect)(accessibilityScanResults.violations).toEqual([]);
        }));
    }));
});
