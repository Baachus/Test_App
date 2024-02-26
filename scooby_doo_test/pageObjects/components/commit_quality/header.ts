import { Page } from "@playwright/test";

class HeaderComp {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }
    
    // Selectors
    products_link = 'navbar-products';
    add_product_link = 'navbar-addproduct';
    practice_link = 'navbar-practice';
    learn_link = 'navbar-learn';
    login_link = 'navbar-login';
    
    // Methods
    async click_products(): Promise<void> {
        await this.page.getByTestId(this.products_link).click();
    }

    async get_products_text(): Promise<string> {
        return await this.page.getByTestId(this.products_link).innerText();
    }

    async click_add_product(): Promise<void> {
        await this.page.getByTestId(this.add_product_link).click();
    }

    async get_add_product_text(): Promise<string> {
        return await this.page.getByTestId(this.add_product_link).innerText();
    }

    async click_practice(): Promise<void> {
        await this.page.getByTestId(this.practice_link).click();
    }

    async get_practice_text(): Promise<string> {
        return await this.page.getByTestId(this.practice_link).innerText();
    }

    async click_learn(): Promise<void> {
        await this.page.getByTestId(this.learn_link).click();
    }

    async get_learn_text(): Promise<string> {
        return await this.page.getByTestId(this.learn_link).innerText();
    }

    async click_login(): Promise<void> {
        await this.page.getByTestId(this.login_link).click();
    }

    async get_login_text(): Promise<string> {
        return await this.page.getByTestId(this.login_link).innerText();
    }
}

export { HeaderComp };