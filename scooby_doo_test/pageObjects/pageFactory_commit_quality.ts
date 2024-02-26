import { Page } from '@playwright/test';

// Components
import { HeaderComp } from './components/commit_quality/header';

// Pages
import { AddProductPage } from './pages/commit_quality/add_product';

class PageFactory {
    // Components
    private headerComp?: HeaderComp;

    // Pages
    private addProductPage?: AddProductPage;

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
}

export { PageFactory };