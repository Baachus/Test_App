import { test as baseTest } from '@playwright/test';
import { PageFactory } from '../pageObjects/pageFactory_commit_quality';
import AxeBuilder from '@axe-core/playwright';

// Import components
import { HeaderComp } from '../pageObjects/components/commit_quality/header';

// Import pages
import { AddProductPage } from '../pageObjects/pages/commit_quality/add_product';
import { PracticePage } from '../pageObjects/pages/commit_quality/practice';
import { GeneralPracticePage } from '../pageObjects/pages/commit_quality/practice/general_practice';
import { AccordionsPage } from '../pageObjects/pages/commit_quality/practice/accordions';
import { DownloadPage } from '../pageObjects/pages/commit_quality/practice/download';
import { PopupPage } from '../pageObjects/pages/commit_quality/practice/popup';
import { TimeTestingPage } from '../pageObjects/pages/commit_quality/practice/time_testing';

// Extend the base test to include page objects
const test = baseTest.extend<{
    factory: PageFactory,
    headerComp: HeaderComp,
    addProductPage: AddProductPage,
    practicePage: PracticePage,
    generalPracticePage: GeneralPracticePage,
    accordionsPage: AccordionsPage,
    downloadPage: DownloadPage,
    popupPage: PopupPage,
    timeTestingPage: TimeTestingPage,
    accessibilityBuilder: AxeBuilder
}>({
    factory: async ({ page }, use) => {
        const factory = new PageFactory(page);
        await use(factory);
    },
    headerComp: async ({ factory }, use) => {
        await use(factory.getHeaderComp());
    },
    addProductPage: async ({ factory }, use) => {
        await use(factory.getAddProductPage());
    },
    practicePage: async ({ factory }, use) => {
        await use(factory.getPracticePage());
    },
    generalPracticePage: async ({ factory }, use) => {
        await use(factory.getGeneralPracticePage());
    },
    accordionsPage: async ({ factory }, use) => {
        await use(factory.getAccordionsPage());
    },
    downloadPage: async ({ factory}, use) => {
        await use(factory.getDownloadPage());
    },
    popupPage: async ({ factory }, use) => {
        await use(factory.getPopupPage());
    },
    timeTestingPage: async ({ factory }, use) => {
        await use(factory.getTimeTestingPage());
    },

    // Accessibility builder
    accessibilityBuilder: async ({ page }, use)=>{
        const accessibilityBuilder = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', "wcag21aa"]);
        
        await use(accessibilityBuilder);
    }
});

export default test;
