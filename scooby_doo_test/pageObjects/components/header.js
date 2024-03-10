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
        this.logout_lnk = 'a:has-text("Logout")';
        this.home_lnk = 'a:has-text("home")';
        this.remove_family_member_lnk = 'a:has-text("Remove Family Member")';
        this.add_family_member_lnk = 'a:has-text("Add Family Member")';
        this.family_tree_lnk = 'a:has-text("View Family Tree")';
        this.page = page;
    }
    // Methods
    logout() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.logout_lnk);
        });
    }
    click_home() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.home_lnk);
        });
    }
    click_remove_family_member() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.remove_family_member_lnk);
        });
    }
    click_add_family_member() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.add_family_member_lnk);
        });
    }
    click_family_tree() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.family_tree_lnk);
        });
    }
}
exports.HeaderComp = HeaderComp;
