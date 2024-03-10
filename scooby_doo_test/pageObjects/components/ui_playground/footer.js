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
exports.FooterComp = void 0;
class FooterComp {
    constructor(page) {
        // Selectors
        this.star_project_btn = '#github span';
        this.fork_project_lnk = 'a:has-text("Fork the website on GitHub")';
        this.rapise_lnk = 'a:has-text("Rapise")';
        this.inflectra_lnk = 'a:has-text("Inflectra Corporation")';
        this.apache_lnk = 'a:has-text("Apache")';
        this.page = page;
    }
    // Methods
    star_project() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.locator(this.star_project_btn).click();
        });
    }
    click_fork_project() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.fork_project_lnk);
        });
    }
    click_rapise() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.rapise_lnk);
        });
    }
    click_inflectra() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.inflectra_lnk);
        });
    }
    click_apache() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.apache_lnk);
        });
    }
}
exports.FooterComp = FooterComp;
