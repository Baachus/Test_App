import { test as baseTest } from '@playwright/test';
import { PageFactory } from '../../pageObjects/pageFactory_playground';

// Import pages
import { HomePage } from '../../pageObjects/pages/ui_playground/home';
import { DynamicIDPage } from '../../pageObjects/pages/ui_playground/dynamic_id';
import { AJAXDataPage } from '../../pageObjects/pages/ui_playground/ajax_data';
import { ScrollbarsPage } from '../../pageObjects/pages/ui_playground/scrollbars';
import { OverlappedElementPage } from '../../pageObjects/pages/ui_playground/overlapped_element';
import { VisibilityPage } from '../../pageObjects/pages/ui_playground/visibility';
import { ClassAttributePage } from '../../pageObjects/pages/ui_playground/class_attribute';
import { ClientSideDelayPage } from '../../pageObjects/pages/ui_playground/client_side_delay';
import { ShadowDOMPage } from '../../pageObjects/pages/ui_playground/shadow_dom';
import { HiddenLayersPage } from '../../pageObjects/pages/ui_playground/hidden_layers';
import { ClickPage } from '../../pageObjects/pages/ui_playground/click';
import { LoadDelayPage } from '../../pageObjects/pages/ui_playground/load_delay';
import { MouseOverPage } from '../../pageObjects/pages/ui_playground/mouse_over';
import { TextInputPage } from '../../pageObjects/pages/ui_playground/text_input';
import { VerifyTextPage } from '../../pageObjects/pages/ui_playground/verify_text';
import { NonBreakingPage } from '../../pageObjects/pages/ui_playground/non_breaking_space';
import { ProgressBarPage } from '../../pageObjects/pages/ui_playground/progress_bar';

// Import components
import { HeaderComp } from '../../pageObjects/components/ui_playground/header';
import { FooterComp } from '../../pageObjects/components/ui_playground/footer';

// Extend the base test to include page objects
const test = baseTest.extend<{
    factory: PageFactory,
    headerComp: HeaderComp,
    footerComp: FooterComp,
    homePage: HomePage,
    dynamicIDPage: DynamicIDPage
    ajaxDataPage: AJAXDataPage
    scrollbarsPage: ScrollbarsPage
    overlappedElementPage: OverlappedElementPage
    visibilityPage: VisibilityPage
    classAttributePage: ClassAttributePage
    clientSideDelayPage: ClientSideDelayPage
    shadowDOMPage: ShadowDOMPage
    hiddenLayersPage: HiddenLayersPage
    clickPage: ClickPage
    loadDelayPage: LoadDelayPage
    mouseOverPage: MouseOverPage
    textInputPage: TextInputPage
    verifyTextPage: VerifyTextPage
    nonBreakingPage: NonBreakingPage
    progressBarPage: ProgressBarPage
}>({
    factory: async ({ page }, use) => {
        const factory = new PageFactory(page);
        await use(factory);
    },
    headerComp: async ({ factory }, use) => {
        await use(factory.getHeaderComp());
    },
    footerComp: async ({ factory }, use) => {
        await use(factory.getFooterComp());
    },
    homePage: async ({ factory }, use) => {
        await use(factory.getHomePage());
    },
    dynamicIDPage: async ({ factory }, use) => {
        await use(factory.getDynamicID());
    },
    ajaxDataPage: async ({ factory }, use) => {
        await use(factory.getAJAXData());
    },
    scrollbarsPage: async ({ factory }, use) => {
        await use(factory.getScrollbarsPage());
    },
    overlappedElementPage: async ({ factory }, use) => {
        await use(factory.getOverlappedElementPage());
    },
    visibilityPage: async ({ factory }, use) => {
        await use(factory.getVisibilityPage());
    },
    classAttributePage: async ({ factory }, use) => {
        await use(factory.getClassAttributePage());
    },
    clientSideDelayPage: async ({ factory }, use) => {
        await use(factory.getClientSideDelayPage());
    },
    shadowDOMPage: async ({ factory }, use) => {
        await use(factory.getShadowDOMPage());
    },
    hiddenLayersPage: async ({ factory }, use) => {
        await use(factory.getHiddenLayersPage());
    },
    clickPage: async ({ factory }, use) => {
        await use(factory.getClickPage());
    },
    loadDelayPage: async ({ factory }, use) => {
        await use(factory.getLoadDelayPage());
    },
    mouseOverPage: async ({ factory }, use) => {
        await use(factory.getMouseOverPage());
    },
    textInputPage: async ({ factory }, use) => {
        await use(factory.getTextInputPage());
    },
    verifyTextPage: async ({ factory }, use) => {
        await use(factory.getVerifyTextPage());
    },
    nonBreakingPage: async ({ factory }, use) => {
        await use(factory.getNonBreakingPage());
    },
    progressBarPage: async ({ factory }, use) => {
        await use(factory.getProgressBarPage());
    }
});

export default test;
