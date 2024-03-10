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
// Import the JSON file
const scooby_doo_familyTree_json_1 = require("..//..//.auth//scooby_doo_familyTree.json");
class LoginPage {
    constructor(page) {
        // Selectors
        this.login_btn = 'input:has-text("Login")';
        this.username_txt = 'input[name="username"]';
        this.password_txt = 'input[name="password"]';
        this.invalid_login_msg = 'text=Invalid Login Credentials';
        this.page = page;
    }
    family_tree_login(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto('/family_tree');
            if (username && password) {
                yield this.page.fill(this.username_txt, username);
                yield this.page.fill(this.password_txt, password);
            }
            else {
                yield this.page.fill(this.username_txt, scooby_doo_familyTree_json_1.default.username);
                yield this.page.fill(this.password_txt, scooby_doo_familyTree_json_1.default.password);
            }
            yield this.page.click(this.login_btn);
        });
    }
}
exports.LoginPage = LoginPage;
