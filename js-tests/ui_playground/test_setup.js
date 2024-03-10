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
const pageFactory_ui_playground_1 = require("../../pageObjects/pageFactory_ui_playground");
const playwright_1 = require("@axe-core/playwright");
// Extend the base test to include page objects
const test = test_1.test.extend({
    factory: ({ page }, use) => __awaiter(void 0, void 0, void 0, function* () {
        const factory = new pageFactory_ui_playground_1.PageFactory(page);
        yield use(factory);
    }),
    headerComp: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getHeaderComp());
    }),
    footerComp: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getFooterComp());
    }),
    homePage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getHomePage());
    }),
    dynamicIDPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getDynamicID());
    }),
    ajaxDataPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getAJAXData());
    }),
    scrollbarsPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getScrollbarsPage());
    }),
    overlappedElementPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getOverlappedElementPage());
    }),
    visibilityPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getVisibilityPage());
    }),
    classAttributePage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getClassAttributePage());
    }),
    clientSideDelayPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getClientSideDelayPage());
    }),
    shadowDOMPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getShadowDOMPage());
    }),
    hiddenLayersPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getHiddenLayersPage());
    }),
    clickPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getClickPage());
    }),
    loadDelayPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getLoadDelayPage());
    }),
    mouseOverPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getMouseOverPage());
    }),
    textInputPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getTextInputPage());
    }),
    verifyTextPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getVerifyTextPage());
    }),
    nonBreakingPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getNonBreakingPage());
    }),
    progressBarPage: ({ factory }, use) => __awaiter(void 0, void 0, void 0, function* () {
        yield use(factory.getProgressBarPage());
    }),
    // Accessibility builder
    accessibilityBuilder: ({ page }, use) => __awaiter(void 0, void 0, void 0, function* () {
        const accessibilityBuilder = yield new playwright_1.default({ page })
            .withTags(['wcag2a', 'wcag2aa', 'wcag21a', "wcag21aa", "best-practice", "ACT", "section508"]);
        yield use(accessibilityBuilder);
    })
});
exports.default = test;
