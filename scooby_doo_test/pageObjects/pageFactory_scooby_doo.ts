import { Page } from '@playwright/test';
import { IndexPage } from './pages/scooby_doo/index';
import { LoginPage } from './pages/scooby_doo/login';
import { HeaderComp } from './components/scooby_doo/header';
import { AddMemberPage } from './pages/scooby_doo/add_member';
import { AddMemberPageAssertion } from './pages/scooby_doo/add_member_assertions';
import { RemoveMemberPage } from './pages/scooby_doo/remove_member';
import { ViewMemberPage } from './pages/scooby_doo/view_member';
import { EditMemberPage } from './pages/scooby_doo/edit_member';
import { EditMemberPageAssertion } from './pages/scooby_doo/edit_member_assertions';
import { FamilyTreePage } from './pages/scooby_doo/family_tree';

class PageFactory {
    private indexPage?: IndexPage;
    private loginPage?: LoginPage;
    private headerComp?: HeaderComp;
    private addMemberPage?: AddMemberPage;
    private addMemberPageAssertion?: AddMemberPageAssertion;
    private removeMemberPage?: RemoveMemberPage;
    private viewMemberPage?: ViewMemberPage;
    private editMemberPage?: EditMemberPage;
    private editMemberPageAssertion?: EditMemberPageAssertion;
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

    getAddMemberPageAssertion(): AddMemberPageAssertion {
        if (!this.addMemberPageAssertion) {
            this.addMemberPageAssertion = new AddMemberPageAssertion(this.page);
        }
        return this.addMemberPageAssertion;
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

    getEditMemberPageAssertion(): EditMemberPageAssertion {
        if (!this.editMemberPageAssertion) {
            this.editMemberPageAssertion = new EditMemberPageAssertion(this.page);
        }
        return this.editMemberPageAssertion;
    }

    getFamilyTreePage(): FamilyTreePage {
        if (!this.familyTreePage) {
            this.familyTreePage = new FamilyTreePage(this.page);
        }
        return this.familyTreePage;
    }
}

export { PageFactory };
