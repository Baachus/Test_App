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
exports.HeaderComp = void 0;
class HeaderComp {
    constructor(page) {
        // Selectors
        this.products_link = 'navbar-products';
        this.add_product_link = 'navbar-addproduct';
        this.practice_link = 'navbar-practice';
        this.learn_link = 'navbar-learn';
        this.login_link = 'navbar-login';
        this.page = page;
    }
    // Methods
    click_products() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.products_link).click();
        });
    }
    get_products_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.products_link).innerText();
        });
    }
    click_add_product() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.add_product_link).click();
        });
    }
    get_add_product_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.add_product_link).innerText();
        });
    }
    click_practice() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.practice_link).click();
        });
    }
    get_practice_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.practice_link).innerText();
        });
    }
    click_learn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.learn_link).click();
        });
    }
    get_learn_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.learn_link).innerText();
        });
    }
    click_login() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(this.login_link).click();
        });
    }
    get_login_text() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.page.getByTestId(this.login_link).innerText();
        });
    }
}
exports.HeaderComp = HeaderComp;
