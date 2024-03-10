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
exports.testLogout = exports.testLogin = void 0;
const test_1 = require("@playwright/test");
function testLogin(page) {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.goto('http://127.0.0.1:8000/family_tree/login/?next=/family_tree/');
        yield page.getByTestId('username').fill('AutomationUser');
        yield page.getByTestId('password').fill('Password$1');
        yield page.getByTestId('login').click();
        yield (0, test_1.expect)(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    });
}
exports.testLogin = testLogin;
function testLogout(page) {
    return __awaiter(this, void 0, void 0, function* () {
        yield page.goto('http://127.0.0.1:8000/family_tree/login/?next=/family_tree/');
        yield page.getByTestId('username').fill('AutomationUser');
        yield page.getByTestId('password').fill('Password$1');
        yield page.getByTestId('login').click();
        yield page.locator('a:has-text("Logout")').click();
        yield (0, test_1.expect)(page.getByTestId('username')).toBeVisible();
    });
}
exports.testLogout = testLogout;
