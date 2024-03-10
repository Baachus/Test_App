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
exports.VisibilityPage = void 0;
class VisibilityPage {
    constructor(page) {
        // Selectors
        this.title_label = 'Visibility';
        this.title_txt = 'Checking if element is ';
        this.title_2_txt = 'An element may be ';
        this.title_3_txt = 'it may have zero height';
        this.title_4_txt = 'it may be covered by';
        this.title_5_txt = 'it may be hidden using styles';
        this.title_6_txt = 'or moved offscreen.';
        this.scenario_label = 'Scenario';
        this.scenario_text = 'Learn locators of all buttons.';
        this.scenario_2_text = 'In your testing scenario ';
        this.scenario_3_text = 'Determine if other buttons';
        this.playground_label = 'Playground';
        this.hide_btn = 'Hide';
        this.removed_btn = 'Removed';
        this.zero_width_btn = 'Zero Width';
        this.overlapped_btn = 'Overlapped';
        this.opacity_btn = 'Opacity';
        this.visibility_hidden_btn = 'Visibility Hidden';
        this.display_none_btn = 'Display None';
        this.offscreen_btn = 'Offscreen';
        this.page = page;
    }
    // Methods
    get_title_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.title_label }).textContent();
        });
    }
    get_title_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_txt).textContent();
        });
    }
    get_title_2_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_2_txt).textContent();
        });
    }
    get_title_3_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_3_txt).textContent();
        });
    }
    get_title_4_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_4_txt).textContent();
        });
    }
    get_title_5_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_5_txt).textContent();
        });
    }
    get_title_6_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.title_6_txt).textContent();
        });
    }
    get_scenario_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.scenario_label }).textContent();
        });
    }
    get_scenario_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.scenario_text).textContent();
        });
    }
    get_scenario_2_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.scenario_2_text).textContent();
        });
    }
    get_scenario_3_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByText(this.scenario_3_text).textContent();
        });
    }
    get_playground_label() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByRole('heading', { name: this.playground_label }).textContent();
        });
    }
    // Playground Buttons 
    click_hide_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator('button', { hasText: this.hide_btn }).click();
        });
    }
    get_hide_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.hide_btn });
        });
    }
    get_hide_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.hide_btn }).textContent();
        });
    }
    click_removed_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.removed_btn);
        });
    }
    get_removed_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.removed_btn });
        });
    }
    get_removed_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.removed_btn }).textContent();
        });
    }
    click_zero_width_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.zero_width_btn);
        });
    }
    get_zero_width_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.zero_width_btn });
        });
    }
    get_zero_width_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.zero_width_btn }).textContent();
        });
    }
    click_overlapped_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.overlapped_btn);
        });
    }
    get_overlapped_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.overlapped_btn });
        });
    }
    get_overlapped_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.overlapped_btn }).textContent();
        });
    }
    click_opacity_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.opacity_btn);
        });
    }
    get_opacity_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.opacity_btn });
        });
    }
    get_opacity_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.opacity_btn }).textContent();
        });
    }
    click_visibility_hidden_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.visibility_hidden_btn);
        });
    }
    get_visibility_hidden_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.visibility_hidden_btn });
        });
    }
    get_visibility_hidden_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.visibility_hidden_btn }).textContent();
        });
    }
    click_display_none_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.display_none_btn);
        });
    }
    get_display_none_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.display_none_btn });
        });
    }
    get_display_none_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.display_none_btn }).textContent();
        });
    }
    click_offscreen_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.offscreen_btn);
        });
    }
    get_offscreen_btn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.offscreen_btn });
        });
    }
    get_offscreen_btn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.locator('button', { hasText: this.offscreen_btn }).textContent();
        });
    }
}
exports.VisibilityPage = VisibilityPage;
