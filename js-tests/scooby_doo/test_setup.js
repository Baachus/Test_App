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
const test_1 = require("@playwright/test");
const pageFactory_1 = require("../../pageObjects/pageFactory");
const playwright_1 = require("@axe-core/playwright");
// Extend the base test to include page objects
const test = test_1.test.extend({
    factory: ({ page }, use) => __awaiter(void 0, void 0, void 0, function* () {
        const factory = new pageFactory_1.PageFactory(page);
        yield use(factory);
    }),
    loginPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getLoginPage());
    }),
    indexPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getIndexPage());
    }),
    headerComp: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getHeaderComp());
    }),
    addMemberPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getAddMemberPage());
    }),
    removeMemberPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getRemoveMemberPage());
    }),
    viewMemberPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getViewMemberPage());
    }),
    editMemberPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getEditMemberPage());
    }),
    familyTreePage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getFamilyTreePage());
    }),
    // Accessibility builder
    accessibilityBuilder: ({ page }, use) => __awaiter(void 0, void 0, void 0, function* () {
        const accessibilityBuilder = yield new playwright_1.default({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', "wcag21aa", "best-practice", "ACT", "section508"]);
        yield use(accessibilityBuilder);
    })
});
exports.default = test;
