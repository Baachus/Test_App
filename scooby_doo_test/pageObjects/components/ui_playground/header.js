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
        this.home_lnk = 'a:has-text("Home")';
        this.resources_lnk = 'a:has-text("Resources")';
        this.home_icon = 'a:has-text("UITAP")';
        this.page = page;
    }
    // Methods
    click_home() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.home_lnk);
        });
    }
    click_resources() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.resources_lnk);
        });
    }
    click_home_icon() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.home_icon);
        });
    }
}
exports.HeaderComp = HeaderComp;
