import { Page } from '@playwright/test';
import { IndexPage } from '../pageObjects/pages/index';
import { LoginPage } from '../pageObjects/pages/login';
import { HeaderComp } from '../pageObjects/components/header';
import { AddMemberPage } from '../pageObjects/pages/add_member';
import { RemoveMemberPage } from '../pageObjects/pages/remove_member';
import { ViewMemberPage } from '../pageObjects/pages/view_member';
import { EditMemberPage } from '../pageObjects/pages/edit_member';
import { FamilyTreePage } from '../pageObjects/pages/family_tree';

class PageFactory {
    private indexPage?: IndexPage;
    private loginPage?: LoginPage;
    private headerComp?: HeaderComp;
    private addMemberPage?: AddMemberPage;
    private removeMemberPage?: RemoveMemberPage;
    private viewMemberPage?: ViewMemberPage;
    private editMemberPage?: EditMemberPage;
    private familyTreePage?: FamilyTreePage;

    constructor(private page: Page) {}

    getIndexPage(): IndexPage {
        if (!this.indexPage) {
            this.indexPage = new IndexPage(this.page);
        }
        return this.indexPage;
    }

    getLoginPage(): LoginPage {
        if (!this.loginPage) {
            this.loginPage = new LoginPage(this.page);
        }
        return this.loginPage;
    }

    getHeaderComp(): HeaderComp {
        if (!this.headerComp) {
            this.headerComp = new HeaderComp(this.page);
        }
        return this.headerComp;
    }

    getAddMemberPage(): AddMemberPage {
        if (!this.addMemberPage) {
            this.addMemberPage = new AddMemberPage(this.page);
        }
        return this.addMemberPage;
    }

    getRemoveMemberPage(): RemoveMemberPage {
        if (!this.removeMemberPage) {
            this.removeMemberPage = new RemoveMemberPage(this.page);
        }
        return this.removeMemberPage;
    }

    getViewMemberPage(): ViewMemberPage {
        if (!this.viewMemberPage) {
            this.viewMemberPage = new ViewMemberPage(this.page);
        }
        return this.viewMemberPage;
    }

    getEditMemberPage(): EditMemberPage {
        if (!this.editMemberPage) {
            this.editMemberPage = new EditMemberPage(this.page);
        }
        return this.editMemberPage;
    }

    getFamilyTreePage(): FamilyTreePage {
        if (!this.familyTreePage) {
            this.familyTreePage = new FamilyTreePage(this.page);
        }
        return this.familyTreePage;
    }
}

export { PageFactory };
