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
exports.ViewMemberPage = void 0;
class ViewMemberPage {
    constructor(page) {
        // Selectors
        this.name_txt = 'name';
        this.gang_txt = 'gang';
        this.relationship_txt = 'relationship';
        this.appearance_txt = 'appearance';
        this.image = 'image';
        this.page = page;
    }
    // Methods
    get_name() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByTestId(this.name_txt);
        });
    }
    get_name_text() {
        return __awaiter(this, void 0, void 0, function* () {
            const name = yield this.get_name();
            return yield name.innerText();
        });
    }
    get_gang() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByTestId(this.gang_txt);
        });
    }
    get_gang_text() {
        return __awaiter(this, void 0, void 0, function* () {
            const gang = yield this.get_gang();
            return yield gang.innerText();
        });
    }
    get_relationship() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByTestId(this.relationship_txt);
        });
    }
    get_relationship_text() {
        return __awaiter(this, void 0, void 0, function* () {
            const relationship = yield this.get_relationship();
            return yield relationship.innerText();
        });
    }
    get_appearance() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByTestId(this.appearance_txt);
        });
    }
    get_appearance_text() {
        return __awaiter(this, void 0, void 0, function* () {
            const appearance = yield this.get_appearance();
            return yield appearance.innerText();
        });
    }
    get_image() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.page.getByTestId(this.image);
        });
    }
}
exports.ViewMemberPage = ViewMemberPage;
