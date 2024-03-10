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
exports.RemoveMemberPage = void 0;
class RemoveMemberPage {
    constructor(page) {
        // Selectors
        this.id_to_remove_txt = '#id_id';
        this.remove_member_btn = '#removeMember';
        this.page = page;
    }
    // Methods
    remove_family_member(idToRemove) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.fill(this.id_to_remove_txt, idToRemove);
            yield this.page.locator(this.remove_member_btn).click();
        });
    }
}
exports.RemoveMemberPage = RemoveMemberPage;
