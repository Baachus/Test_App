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
exports.IndexPage = void 0;
class IndexPage {
    constructor(page) {
        this.page = page;
    }
    // Selectors
    // Methods
    getIndex(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const testId = yield this.page.getAttribute(`text=${name}`, "data-testid");
            const index = testId === null || testId === void 0 ? void 0 : testId.split("_")[1];
            if (index === undefined) {
                throw new Error("Index not found");
            }
            return index;
        });
    }
    view_family_member(new_member_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(`view_button_${new_member_id}`).click();
        });
    }
    edit_family_member(new_member_id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.getByTestId(`edit_button_${new_member_id}`).click();
        });
    }
}
exports.IndexPage = IndexPage;
