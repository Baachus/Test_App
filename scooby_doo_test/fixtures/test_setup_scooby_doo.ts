import { test as baseTest } from '@playwright/test';
import { PageFactory } from '../pageObjects/pageFactory_scooby_doo';
import AxeBuilder from '@axe-core/playwright';

// Import pages
import { IndexPage } from '../pageObjects/pages/scooby_doo/index';
import { LoginPage } from '../pageObjects/pages/scooby_doo/login';
import { EditMemberPage } from '../pageObjects/pages/scooby_doo/edit_member';
import { RemoveMemberPage } from '../pageObjects/pages/scooby_doo/remove_member';
import { ViewMemberPage } from '../pageObjects/pages/scooby_doo/view_member';
import { FamilyTreePage } from '../pageObjects/pages/scooby_doo/family_tree';

// Import components
import { HeaderComp } from '../pageObjects/components/scooby_doo/header';
import { AddMemberPage } from '../pageObjects/pages/scooby_doo/add_member';
import { AddMemberPageAssertion } from '../pageObjects/pages/scooby_doo/add_member_assertions';

// Extend the base test to include page objects
const test = baseTest.extend<{
    factory: PageFactory,
    loginPage: LoginPage,
    indexPage: IndexPage,
    headerComp: HeaderComp,
    removeMemberPage: RemoveMemberPage,
    viewMemberPage: ViewMemberPage,
    familyTreePage: FamilyTreePage,
    accessibilityBuilder: AxeBuilder,
    editMemberPage: EditMemberPage,
    addMemberPage: AddMemberPage,
    addMemberPageAssertion: AddMemberPageAssertion
}>({
    factory: async ({ page }, use) => {
        const factory = new PageFactory(page);
        await use(factory);
    },
    loginPage: async ({ factory }, use) => {
        await use(factory.getLoginPage());
    },
    indexPage: async ({ factory }, use) => {
        await use(factory.getIndexPage());
    },
    headerComp: async ({ factory }, use) => {
        await use(factory.getHeaderComp());
    },
    removeMemberPage: async ({ factory }, use) => {
        await use(factory.getRemoveMemberPage());
    },
    viewMemberPage: async ({ factory }, use) => {
        await use(factory.getViewMemberPage());
    },
    familyTreePage: async ({ factory }, use) => {
        await use(factory.getFamilyTreePage());
    },
    editMemberPage: async ({ factory }, use) => {
        await use(factory.getEditMemberPage());
    },
    addMemberPage: async ({ factory }, use) => {
        await use(factory.getAddMemberPage());
    },
    addMemberPageAssertion: async ({ factory }, use) => {
        await use(factory.getAddMemberPageAssertion());
    },

    // Accessibility builder
    accessibilityBuilder: async ({ page }, use)=>{
        const accessibilityBuilder = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', "wcag21aa"]);
        
        await use(accessibilityBuilder);
    }
});

export default test;
