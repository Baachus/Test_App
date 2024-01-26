import { test as baseTest } from '@playwright/test';
import { PageFactory } from '../pageObjects/pageFactory';

// Import pages
import { IndexPage } from '../pageObjects/pages/index';
import { LoginPage } from '../pageObjects/pages/login';
import { AddMemberPage } from '../pageObjects/pages/add_member';
import { RemoveMemberPage } from '../pageObjects/pages/remove_member';
import { ViewMemberPage } from '../pageObjects/pages/view_member';
import { EditMemberPage } from '../pageObjects/pages/edit_member';

// Import components
import { HeaderComp } from '../pageObjects/components/header';

// Extend the base test to include page objects
const test = baseTest.extend<{
    factory: PageFactory,
    loginPage: LoginPage,
    indexPage: IndexPage,
    headerComp: HeaderComp,
    addMemberPage: AddMemberPage,
    removeMemberPage: RemoveMemberPage,
    viewMemberPage: ViewMemberPage,
    editMemberPage: EditMemberPage,
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
    addMemberPage: async ({ factory }, use) => {
        await use(factory.getAddMemberPage());
    },
    removeMemberPage: async ({ factory }, use) => {
        await use(factory.getRemoveMemberPage());
    },
    viewMemberPage: async ({ factory }, use) => {
        await use(factory.getViewMemberPage());
    },
    editMemberPage: async ({ factory }, use) => {
        await use(factory.getEditMemberPage());
    },
});

export default test;
