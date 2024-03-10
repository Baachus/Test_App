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
test_setup_1.default.describe('Scooby-Doo Family Tree Application Tests', () => {
    (0, test_setup_1.default)('Verify Family Tree', ({ page, loginPage, headerComp, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Log into the family tree application', () => __awaiter(void 0, void 0, void 0, function* () {
            yield loginPage.family_tree_login();
        }));
        yield test_setup_1.default.step('Navigate to the Family Tree and Verify URL', () => __awaiter(void 0, void 0, void 0, function* () {
            // Navigate to the family tree page
            yield headerComp.click_family_tree();
            // Verify the family tree page is displayed
            yield (0, test_1.expect)(page).toHaveURL(/view_gang_tree/);
        }));
    }));
    (0, test_setup_1.default)('Verify Login Page Accessibility', ({ loginPage, accessibilityBuilder }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Log into the family tree application', () => __awaiter(void 0, void 0, void 0, function* () {
            yield loginPage.family_tree_login();
        }));
        yield test_setup_1.default.step('Verify login page accessibility', () => __awaiter(void 0, void 0, void 0, function* () {
            const accessibilityScanResults = yield accessibilityBuilder.analyze();
            (0, test_1.expect)(accessibilityScanResults.violations).toEqual([]);
        }));
    }));
});
