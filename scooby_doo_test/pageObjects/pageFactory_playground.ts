import { Page } from '@playwright/test';
import { HeaderComp } from '../pageObjects/components/ui_playground/header';
import { FooterComp } from '../pageObjects/components/ui_playground/footer';
import { HomePage } from '../pageObjects/pages/ui_playground/home'; 
import { DynamicIDPage } from '../pageObjects/pages/ui_playground/dynamic_id';
import { AJAXDataPage } from '../pageObjects/pages/ui_playground/ajax_data';
import { ScrollbarsPage } from '../pageObjects/pages/ui_playground/scrollbars';

class PageFactory {
    private headerComp?: HeaderComp;
    private footerComp?: FooterComp;
    private homePage?: HomePage;
    private dynamicID?: DynamicIDPage;
    private ajaxData?: AJAXDataPage;
    private scrollbarsPage?: ScrollbarsPage;

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
}

export { PageFactory };
