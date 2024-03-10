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
exports.LoginPage = void 0;
class LoginPage {
    constructor(page) {
        // Selectors
        this.login_title = 'Login';
        this.username_title = 'Username';
        this.username_text_box = 'username-textbox';
        this.password_title = 'Password';
        this.password_text_box = 'password-textbox';
        this.login_button = 'submit-form';
        this.empty_username_or_password_error = 'Please enter a username and password';
        this.invalid_username_or_password_error = 'Invalid username or password';
        this.page = page;
    }
    // Methods    
    get_login_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.login_title).innerText();
        });
    }
    get_username_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.username_title).innerText();
        });
    }
    get_username_text_box() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.username_text_box).innerText();
        });
    }
    set_username_text_box(username) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.username_text_box).fill(username);
        });
    }
    get_password_title() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.password_title).innerText();
        });
    }
    get_password_text_box() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.password_text_box).innerText();
        });
    }
    set_password_text_box(password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.password_text_box).fill(password);
        });
    }
    click_login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.login_button).click();
        });
    }
    get_login_button() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.login_button).innerText();
        });
    }
    get_empty_username_or_password_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_username_or_password_error).innerText();
        });
    }
    get_invalid_username_or_password_error() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.invalid_username_or_password_error).innerText();
        });
    }
    get_empty_username_or_password_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.empty_username_or_password_error).isVisible();
        });
    }
    get_invalid_username_or_password_error_visibility() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByText(this.invalid_username_or_password_error).isVisible();
        });
    }
}
exports.LoginPage = LoginPage;
