import { Page } from "@playwright/test";

// Import the JSON file
import auth from '..//..//.auth//scooby_doo_familyTree.json';

class LoginPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    login_btn = 'input:has-text("Login")';
    username_txt = 'input[name="username"]';
    password_txt = 'input[name="password"]';
    invalid_login_msg = 'text=Invalid Login Credentials';

    // Methods
    async family_tree_login(): Promise<void>;
    async family_tree_login(username: string, password: string): Promise<void>;
    async family_tree_login(username?: string, password?: string): Promise<void> {
        await this.page.goto('/family_tree');
        if (username && password) {
            await this.page.fill(this.username_txt, username);
            await this.page.fill(this.password_txt, password);
        } else {
            await this.page.fill(this.username_txt, auth.username);
            await this.page.fill(this.password_txt, auth.password);
        }
        await this.page.click(this.login_btn);
    }
}

export { LoginPage };