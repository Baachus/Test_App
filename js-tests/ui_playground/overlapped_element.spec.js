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
test_setup_1.default.describe('Overlapped Element Data Tests', () => {
    (0, test_setup_1.default)('Verify Title, labels, and text', ({ page, homePage, overlappedElementPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Overlapped Element page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Overlapped Element');
        }));
        yield test_setup_1.default.step('Verify Labels and Text on Page', () => __awaiter(void 0, void 0, void 0, function* () {
            (0, test_1.expect)(yield overlappedElementPage.get_title_label()).toBe('Overlapped Element');
            (0, test_1.expect)(yield overlappedElementPage.get_title_text()).toBe('Entering text to a partially visible element may require scrolling it into view.');
            (0, test_1.expect)(yield overlappedElementPage.get_scenario_label()).toBe('Scenario');
            (0, test_1.expect)(yield overlappedElementPage.get_scenario_text()).toBe('Record setting text into the Name input field (scroll element before entering the text).');
            (0, test_1.expect)(yield overlappedElementPage.get_scenario_2_text()).toBe('Then execute your test to make sure that the text was entered correctly.');
            (0, test_1.expect)(yield overlappedElementPage.get_playground_label()).toBe('Playground');
            // Verify placeholder names
            const idPlaceholder = yield overlappedElementPage.get_playground_id_textBox();
            const namePlaceholder = yield overlappedElementPage.get_playground_name_textBox();
            (0, test_1.expect)(yield (idPlaceholder === null || idPlaceholder === void 0 ? void 0 : idPlaceholder.getAttribute('placeholder'))).toBe('Id');
            (0, test_1.expect)(yield (namePlaceholder === null || namePlaceholder === void 0 ? void 0 : namePlaceholder.getAttribute('placeholder'))).toBe('Name');
        }));
    }));
    (0, test_setup_1.default)('Enter and ID into Overlapped Elements', ({ page, homePage, overlappedElementPage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Navigate to the Overlapped Element page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_link('Overlapped Element');
        }));
        yield test_setup_1.default.step('Enter text into the ID input field', () => __awaiter(void 0, void 0, void 0, function* () {
            yield overlappedElementPage.set_playground_id_textBox('123');
            const idPlaceholder = yield overlappedElementPage.get_playground_id_textBox();
            (0, test_1.expect)(yield (idPlaceholder === null || idPlaceholder === void 0 ? void 0 : idPlaceholder.inputValue())).toBe('123');
        }));
        yield test_setup_1.default.step('Enter text into the Name input field', () => __awaiter(void 0, void 0, void 0, function* () {
            yield overlappedElementPage.set_playground_name_textBox('John Doe');
            const namePlaceholder = yield overlappedElementPage.get_playground_name_textBox();
            (0, test_1.expect)(yield (namePlaceholder === null || namePlaceholder === void 0 ? void 0 : namePlaceholder.inputValue())).toBe('John Doe');
        }));
    }));
});
