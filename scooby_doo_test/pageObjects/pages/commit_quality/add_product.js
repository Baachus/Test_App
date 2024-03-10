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
exports.AddProductPage = void 0;
const faker_1 = require("@faker-js/faker");
class AddProductPage {
    constructor(page) {
        // Selectors
        this.product_title = 'Add Product';
        this.name_title = 'Name';
        this.name_text_box = 'product-textbox';
        this.empty_name_error = 'Name must be at least 2 characters.';
        this.price_title = 'Price';
        this.price_text_box = 'price-textbox';
        this.empty_price_error = 'Price must not be empty';
        this.date_stocked_title = 'Date Stocked';
        this.date_stocked_text_box = 'date-stocked';
        this.empty_date_error = 'Date must not be empty.';
        this.future_date_error = 'Date must not be in the future.';
        this.fill_in_fields_error = 'Please fill in all fields';
        this.resolve_errors = 'Errors must be resolved before submitting';
        this.submit_button = 'submit-form';
        this.cancel_link = 'cancel-button';
        this.page = page;
    }
    // Methods    
    get_product_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.product_title).innerText();
        });
    }
    get_name_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.name_title).innerText();
        });
    }
    get_name_text_box() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.name_text_box).innerText();
        });
    }
    set_name_text_box(name) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.name_text_box).fill(name);
        });
    }
    get_price_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.price_title).innerText();
        });
    }
    get_price_text_box() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.price_text_box).innerText();
        });
    }
    set_price_text_box(price) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.price_text_box).fill(price);
        });
    }
    get_date_stocked_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.date_stocked_title).innerText();
        });
    }
    get_date_stocked_text_box() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.date_stocked_text_box).innerText();
        });
    }
    set_date_stocked_text_box(date) {
        return __awaiter(this, void 0, void 0, function* () {
            const formattedDate = date.replace(/\//g, '');
            yield this.page.getByTestId(this.date_stocked_text_box).type(formattedDate.toString());
        });
    }
    set_date_stocked_recent_date() {
        return __awaiter(this, void 0, void 0, function* () {
            const date = faker_1.faker.date.recent();
            let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
            formattedDate = formattedDate.toString().replace(/\//g, '');
            yield this.page.getByTestId(this.date_stocked_text_box).type(formattedDate.toString());
        });
    }
    click_submit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.submit_button).click();
        });
    }
    get_submit_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.submit_button).innerText();
        });
    }
    click_cancel() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.cancel_link).click();
        });
    }
    get_cancel_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.cancel_link).innerText();
        });
    }
    // Error Messages
    get_empty_name_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_name_error).innerText();
        });
    }
    get_empty_price_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_price_error).innerText();
        });
    }
    get_empty_date_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_date_error).innerText();
        });
    }
    get_future_date_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.future_date_error).innerText();
        });
    }
    get_fill_in_fields_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.fill_in_fields_error).innerText();
        });
    }
    get_resolve_errors() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.resolve_errors).innerText();
        });
    }
    // Error Handling
    get_empty_name_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_name_error).isVisible();
        });
    }
    get_empty_price_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_price_error).isVisible();
        });
    }
    get_empty_date_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_date_error).isVisible();
        });
    }
    get_future_date_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.future_date_error).isVisible();
        });
    }
    get_fill_in_fields_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.fill_in_fields_error).isVisible();
        });
    }
    get_resolve_errors_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.resolve_errors).isVisible();
        });
    }
}
exports.AddProductPage = AddProductPage;
