import { test as baseTest } from '@playwright/test';
import { PageFactory } from '../../pageObjects/pageFactory_commit_quality';
import AxeBuilder from '@axe-core/playwright';

// Import components
import { HeaderComp } from '../../pageObjects/components/commit_quality/header';

// Import pages
import { AddProductPage } from '../../pageObjects/pages/commit_quality/add_product';

// Extend the base test to include page objects
const test = baseTest.extend<{
    factory: PageFactory,
    headerComp: HeaderComp,
    addProductPage: AddProductPage,
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

    // Accessibility builder
    accessibilityBuilder: async ({ page }, use)=>{
        const accessibilityBuilder = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', "wcag21aa", "best-practice", "ACT", "section508"]);
        
        await use(accessibilityBuilder);
    }
});

export default test;
