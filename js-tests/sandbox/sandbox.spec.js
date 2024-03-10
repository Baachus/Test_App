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
test_1.test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
    browserName: 'chromium',
});
test_1.test.describe('sandbox tests', () => {
    (0, test_1.test)('Successful Mock', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        // Open the page
        yield page.goto('');
        // Assert that the title is correct
        const title = page.locator('h1');
        yield (0, test_1.expect)(title).toHaveText('UI Test AutomationPlayground');
        yield page.route('**/hiddenlayers', (route) => __awaiter(void 0, void 0, void 0, function* () {
            const request = route.request();
            const postData = yield request.postDataJSON();
            yield route.fulfill({
                status: 200,
                contentType: "application/json",
                body: JSON.stringify(Object.assign({ id: 1 }, postData)),
            });
        }));
        yield page.getByText('Hidden Layers').click();
        yield (0, test_1.expect)(page.getByText('1')).toBeVisible();
    }));
    (0, test_1.test)('API Failure - 500', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        // Open the page
        yield page.goto('');
        // Assert that the title is correct
        const title = page.locator('h1');
        yield (0, test_1.expect)(title).toHaveText('UI Test AutomationPlayground');
        yield page.route('**/hiddenlayers', (route) => __awaiter(void 0, void 0, void 0, function* () {
            yield route.fulfill({
                status: 500,
            });
        }));
        yield page.getByText('Hidden Layers').click();
        yield (0, test_1.expect)(page.getByText('HTTP ERROR 500')).toBeVisible();
    }));
    (0, test_1.test)('API Failure - 429', ({ page }) => __awaiter(void 0, void 0, void 0, function* () {
        // Open the page
        yield page.goto('');
        // Assert that the title is correct
        const title = page.locator('h1');
        yield (0, test_1.expect)(title).toHaveText('UI Test AutomationPlayground');
        yield page.route('**/hiddenlayers', (route) => __awaiter(void 0, void 0, void 0, function* () {
            yield route.fulfill({
                status: 429,
            });
        }));
        yield page.getByText('Hidden Layers').click();
        yield (0, test_1.expect)(page.getByText('HTTP ERROR 429')).toBeVisible();
    }));
});
