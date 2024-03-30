import { Page } from "@playwright/test";
import { EditMemberPage } from "./edit_member";

class EditMemberPageAssertion {
    private page: Page;
    private editMemberPage: EditMemberPage;
    
    constructor(page: Page) {
        this.page = page;
        this.editMemberPage = new EditMemberPage(page);
    }

    // Methods
        
}

export { EditMemberPageAssertion };