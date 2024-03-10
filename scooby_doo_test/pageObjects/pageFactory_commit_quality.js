"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PageFactory = void 0;
// Components
const header_1 = require("./components/commit_quality/header");
// Pages
const add_product_1 = require("./pages/commit_quality/add_product");
class PageFactory {
    constructor(page) {
        this.page = page;
    }
    getHeaderComp() {
        if (!this.headerComp) {
            this.headerComp = new header_1.HeaderComp(this.page);
        }
        return this.headerComp;
    }
    getAddProductPage() {
        if (!this.addProductPage) {
            this.addProductPage = new add_product_1.AddProductPage(this.page);
        }
        return this.addProductPage;
    }
}
exports.PageFactory = PageFactory;
