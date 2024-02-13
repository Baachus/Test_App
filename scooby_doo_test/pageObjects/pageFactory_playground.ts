import { Page } from '@playwright/test';

// Components
import { HeaderComp } from '../pageObjects/components/ui_playground/header';
import { FooterComp } from '../pageObjects/components/ui_playground/footer';

// Pages
import { HomePage } from '../pageObjects/pages/ui_playground/home'; 
import { DynamicIDPage } from '../pageObjects/pages/ui_playground/dynamic_id';
import { AJAXDataPage } from '../pageObjects/pages/ui_playground/ajax_data';
import { ScrollbarsPage } from '../pageObjects/pages/ui_playground/scrollbars';
import { OverlappedElementPage } from '../pageObjects/pages/ui_playground/overlapped_element';
import { VisibilityPage } from './pages/ui_playground/visibility';
import { ClassAttributePage } from './pages/ui_playground/class_attribute';
import { ClientSideDelayPage } from './pages/ui_playground/client_side_delay';

class PageFactory {
    // Components
    private headerComp?: HeaderComp;
    private footerComp?: FooterComp;

    // Pages
    private homePage?: HomePage;
    private dynamicID?: DynamicIDPage;
    private ajaxData?: AJAXDataPage;
    private scrollbarsPage?: ScrollbarsPage;
    private overlappedElementPage?: OverlappedElementPage;
    private visibilityPage?: VisibilityPage;
    private classAttributePage?: ClassAttributePage;
    private clientSideDelayPage?: ClientSideDelayPage;

    constructor(private page: Page) {}

    getHeaderComp(): HeaderComp {
        if (!this.headerComp) {
            this.headerComp = new HeaderComp(this.page);
        }
        return this.headerComp;
    }
    
    getFooterComp(): FooterComp {
        if (!this.footerComp) {
            this.footerComp = new FooterComp(this.page);
        }
        return this.footerComp;
    }

    getHomePage(): HomePage {
        if (!this.homePage) {
            this.homePage = new HomePage(this.page);
        }
        return this.homePage;
    }

    getDynamicID(): DynamicIDPage {
        if (!this.dynamicID) {
            this.dynamicID = new DynamicIDPage(this.page);
        }
        return this.dynamicID;
    }

    getAJAXData(): AJAXDataPage {
        if (!this.ajaxData) {
            this.ajaxData = new AJAXDataPage(this.page);
        }
        return this.ajaxData;
    }

    getScrollbarsPage(): ScrollbarsPage {
        if (!this.scrollbarsPage) {
            this.scrollbarsPage = new ScrollbarsPage(this.page);
        }
        return this.scrollbarsPage;
    }

    getOverlappedElementPage(): OverlappedElementPage {
        if (!this.overlappedElementPage) {
            this.overlappedElementPage = new OverlappedElementPage(this.page);
        }
        return this.overlappedElementPage;
    }

    getVisibilityPage(): VisibilityPage {
        if (!this.visibilityPage) {
            this.visibilityPage = new VisibilityPage(this.page);
        }
        return this.visibilityPage;
    }

    getClassAttributePage(): ClassAttributePage {
        if (!this.classAttributePage) {
            this.classAttributePage = new ClassAttributePage(this.page);
        }
        return this.classAttributePage;
    }

    getClientSideDelayPage(): ClientSideDelayPage {
        if (!this.clientSideDelayPage) {
            this.clientSideDelayPage = new ClientSideDelayPage(this.page);
        }
        return this.clientSideDelayPage;
    }
}

export { PageFactory };
