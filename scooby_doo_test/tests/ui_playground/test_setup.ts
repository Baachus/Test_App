import { test as baseTest } from '@playwright/test';
import { PageFactory } from '../../pageObjects/pageFactory_playground';

// Import pages
import { HomePage } from '../../pageObjects/pages/ui_playground/home';
import { DynamicIDPage } from '../../pageObjects/pages/ui_playground/dynamic_id';
import { AJAXDataPage } from '../../pageObjects/pages/ui_playground/ajax_data';
import { ScrollbarsPage } from '../../pageObjects/pages/ui_playground/scrollbars';

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
});

export default test;
