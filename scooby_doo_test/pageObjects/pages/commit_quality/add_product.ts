import { faker } from "@faker-js/faker";
import { Page } from "@playwright/test";

class AddProductPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    product_title = 'Add Product';
    name_title = 'Name';
    name_text_box = 'product-textbox';
    empty_name_error = 'Name must be at least 2 characters.';
    price_title = 'Price';
    price_text_box = 'price-textbox';
    empty_price_error = 'Price must not be empty';
    date_stocked_title = 'Date Stocked';
    date_stocked_text_box = 'date-stocked';
    empty_date_error = 'Date must not be empty.';
    future_date_error = 'Date must not be in the future.';
    fill_in_fields_error = 'Please fill in all fields';
    resolve_errors = 'Errors must be resolved before submitting';
    submit_button = 'submit-form';
    cancel_link = 'cancel-button';

    // Methods    
    async get_product_title(): Promise<string> {
        return await this.page.getByText(this.product_title).innerText();
    }

    async get_name_title(): Promise<string> {
        return await this.page.getByText(this.name_title).innerText();
    }

    async get_name_text_box(): Promise<string> {
        return await this.page.getByTestId(this.name_text_box).innerText();
    }

    async set_name_text_box(name: string): Promise<void> {
        await this.page.getByTestId(this.name_text_box).fill(name);
    }

    async get_price_title(): Promise<string> {
        return await this.page.getByText(this.price_title).innerText();
    }

    async get_price_text_box(): Promise<string> {
        return await this.page.getByTestId(this.price_text_box).innerText();
    }

    async set_price_text_box(price: string): Promise<void> {
        await this.page.getByTestId(this.price_text_box).fill(price);
    }

    async get_date_stocked_title(): Promise<string> {
        return await this.page.getByText(this.date_stocked_title).innerText();
    }

    async get_date_stocked_text_box(): Promise<string> {
        return await this.page.getByTestId(this.date_stocked_text_box).innerText();
    }

    async set_date_stocked_text_box(date: string): Promise<void> {
        const formattedDate = date.replace(/\//g, '');
        await this.page.getByTestId(this.date_stocked_text_box).type(formattedDate.toString());
    }

    async set_date_stocked_recent_date(): Promise<void> {
        const date = faker.date.recent();
        let formattedDate = date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
        formattedDate = formattedDate.toString().replace(/\//g, '');
        await this.page.getByTestId(this.date_stocked_text_box).type(formattedDate.toString());
    }

    async click_submit(): Promise<void> {
        await this.page.getByTestId(this.submit_button).click();
    }

    async get_submit_text(): Promise<string> {
        return await this.page.getByTestId(this.submit_button).innerText();
    }

    async click_cancel(): Promise<void> {
        await this.page.getByTestId(this.cancel_link).click();
    }

    async get_cancel_text(): Promise<string> {
        return await this.page.getByTestId(this.cancel_link).innerText();
    }

    // Error Messages
    async get_empty_name_error(): Promise<string> {
        return await this.page.getByText(this.empty_name_error).innerText();
    }

    async get_empty_price_error(): Promise<string> {
        return await this.page.getByText(this.empty_price_error).innerText();
    }

    async get_empty_date_error(): Promise<string> {
        return await this.page.getByText(this.empty_date_error).innerText();
    }

    async get_future_date_error(): Promise<string> {
        return await this.page.getByText(this.future_date_error).innerText();
    }

    async get_fill_in_fields_error(): Promise<string> {
        return await this.page.getByText(this.fill_in_fields_error).innerText();
    }

    async get_resolve_errors(): Promise<string> {
        return await this.page.getByText(this.resolve_errors).innerText();
    }

    // Error Handling
    async get_empty_name_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.empty_name_error).isVisible();
    }

    async get_empty_price_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.empty_price_error).isVisible();
    }

    async get_empty_date_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.empty_date_error).isVisible();
    }

    async get_future_date_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.future_date_error).isVisible();
    }s

    async get_fill_in_fields_error_visibility(): Promise<boolean> {
        return await this.page.getByText(this.fill_in_fields_error).isVisible();
    }

    async get_resolve_errors_visibility(): Promise<boolean> {
        return await this.page.getByText(this.resolve_errors).isVisible();
    }
}

export { AddProductPage };