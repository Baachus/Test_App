import { Page } from "@playwright/test";
import { AddMemberPage } from "./add_member";

class AddMemberPageAssertion {
    private page: Page;
    private addMemberPage: AddMemberPage;
    
    constructor(page: Page) {
        this.page = page;
        this.addMemberPage = new AddMemberPage(page);
    }

    // Methods
    
}

export { AddMemberPageAssertion };