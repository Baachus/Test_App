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
test_setup_1.default.describe('Practice API page', () => {
    (0, test_setup_1.default)('should not have any automatically detectable accessibility issues', ({ page, accessibilityBuilder }) => __awaiter(void 0, void 0, void 0, function* () {
        yield page.goto('practice-api/');
        yield page.locator('.back-link').waitFor();
        const accessibilityScanResults = yield accessibilityBuilder
            .include('.back-link')
            .analyze();
        (0, test_1.expect)(accessibilityScanResults.violations).toEqual([]);
    }));
});
