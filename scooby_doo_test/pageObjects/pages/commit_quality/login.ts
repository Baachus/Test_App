import { Page } from "@playwright/test";

class LoginPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    login_title = 'Login';
    username_title = 'Username';
    username_text_box = 'username-textbox';
    password_title = 'Password';
    password_text_box = 'password-textbox';
    login_button = 'submit-form';
    empty_username_or_password_error = 'Please enter a username and password';
    invalid_username_or_password_error = 'Invalid username or password';

    // Methods    
    async get_login_title(): Promise<string> {
        return await this.page.getByText(this.login_title).innerText();
    }

    async get_username_title(): Promise<string> {
        return await this.page.getByText(this.username_title).innerText();
    }

    async get_username_text_box(): Promise<string> {
        return await this.page.getByTestId(this.username_text_box).innerText();
    }

    async set_username_text_box(username: string): Promise<void> {
        await this.page.getByTestId(this.username_text_box).fill(username);
    }

    async get_password_title(): Promise<string> {
        return await this.page.getByText(this.password_title).innerText();
    }

    async get_password_text_box(): Promise<string> {
        return await this.page.getByTestId(this.password_text_box).innerText();
    }

    async set_password_text_box(password: string): Promise<void> {
        await this.page.getByTestId(this.password_text_box).fill(password);
    }

    async click_login(): Promise<void> {
        await this.page.getByTestId(this.login_button).click();
    }

    async get_login_button(): Promise<string> {
        return await this.page.getByTestId(this.login_button).innerText();
    }

    async get_empty_username_or_password_error(): Promise<string> {
        return await this.page.getByText(this.empty_username_or_password_error).innerText();
    }

    async get_invalid_username_or_password_error(): Promise<string> {
        return await this.page.getByText(this.invalid_username_or_password_error).innerText();
    }

    async get_empty_username_or_password_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.empty_username_or_password_error).isVisible();
    }

    async get_invalid_username_or_password_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.invalid_username_or_password_error).isVisible();
    }
}

export { LoginPage };