import { Page } from '@playwright/test';

// Components
import { HeaderComp } from './components/commit_quality/header';

// Pages
import { AddProductPage } from './pages/commit_quality/add_product';
import { PracticePage } from './pages/commit_quality/practice';

import { GeneralPracticePage } from './pages/commit_quality/practice/general_practice';
import { AccordionsPage } from './pages/commit_quality/practice/accordions';
import { DownloadPage } from './pages/commit_quality/practice/download';
import { PopupPage } from './pages/commit_quality/practice/popup';
import { TimeTestingPage } from './pages/commit_quality/practice/time_testing';

class PageFactory {
    // Components
    private headerComp?: HeaderComp;

    // Pages
    private addProductPage?: AddProductPage;
    private practicePage?: PracticePage;
    private generalPracticePage?: GeneralPracticePage;
    private accordionsPage?: AccordionsPage;
    private downloadPage?: DownloadPage;
    private popupPage?: PopupPage;
    private timeTestingPage?: TimeTestingPage;

    constructor(private page: Page) {}
    
    getHeaderComp(): HeaderComp {
        if (!this.headerComp) {
            this.headerComp = new HeaderComp(this.page);
        }
        return this.headerComp;
    }

    getAddProductPage(): AddProductPage {
        if (!this.addProductPage) {
            this.addProductPage = new AddProductPage(this.page);
        }
        return this.addProductPage;
    }

    getPracticePage(): PracticePage {
        if (!this.practicePage) {
            this.practicePage = new PracticePage(this.page);
        }
        return this.practicePage;
    }

    getGeneralPracticePage(): GeneralPracticePage {
        if (!this.generalPracticePage) {
            this.generalPracticePage = new GeneralPracticePage(this.page);
        }
        return this.generalPracticePage;
    }

    getAccordionsPage(): AccordionsPage {
        if (!this.accordionsPage) {
            this.accordionsPage = new AccordionsPage(this.page);
        }
        return this.accordionsPage;
    }

    getDownloadPage(): DownloadPage {
        if (!this.downloadPage) {
            this.downloadPage = new DownloadPage(this.page);
        }
        return this.downloadPage;
    }

    getPopupPage(): PopupPage {
        if (!this.popupPage) {
            this.popupPage = new PopupPage(this.page);
        }
        return this.popupPage;
    }

    getTimeTestingPage(): TimeTestingPage {
        if(!this.timeTestingPage) {
            this.timeTestingPage = new TimeTestingPage(this.page);
        }
        return this.timeTestingPage;
    }
}

export { PageFactory };