import { Page } from '@playwright/test';

// Components
import { HeaderComp } from './components/commit_quality/header';

// Pages
import { AddProductPage } from './pages/commit_quality/add_product';
import { PracticePage } from './pages/commit_quality/practice';
import { GeneralPracticePage } from './pages/commit_quality/practice/general_practice';
import { AccordionsPage } from './pages/commit_quality/practice/accordions';
import { PopupPage } from './pages/commit_quality/practice/popup';

class PageFactory {
    // Components
    private headerComp?: HeaderComp;

    // Pages
    private addProductPage?: AddProductPage;
    private practicePage?: PracticePage;
    private generalPracticePage?: GeneralPracticePage;
    private accordionsPage?: AccordionsPage;
    private popupPage?: PopupPage;

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

    getPopupPage(): PopupPage {
        if (!this.popupPage) {
            this.popupPage = new PopupPage(this.page);
        }
        return this.popupPage;
    }
}

export { PageFactory };