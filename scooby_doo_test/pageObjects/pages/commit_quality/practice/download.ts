import { Page } from "@playwright/test";
import { TextFileReader } from "../../../../utils/text_file_reader";

class DownloadPage {
    private page: Page;

    private fileLocation = "./scooby_doo_test/test-results/downloaded/";
    private downloadedFile;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    back_to_practice_link = 'back-link'
    download_button = 'Download File'

    // Methods
    async clickBackToPracticeLink() {
        await this.page.getByTestId(this.back_to_practice_link).click();
    }

    async getBackToPracticeLink(): Promise<string> {
        return await this.page.getByTestId(this.back_to_practice_link).innerText();
    }

    async getDownloadButton(): Promise<string> {
        return await this.page.innerText(`text=${this.download_button}`);
    }

    async clickDownloadButton() {
        await this.page.click(`text=${this.download_button}`);
    }

    async downloadAndSave() {
        
        const waitForDownloadEvent = this.page.waitForEvent("download");

        await this.page.getByRole("button", {name: "Download File"}).click();

        const download = await waitForDownloadEvent;

        await download.saveAs(this.fileLocation + download.suggestedFilename());
        this.downloadedFile = this.fileLocation + download.suggestedFilename();
    }

    async verifyDownloadedText(expectedText: string): Promise<boolean> {
        return TextFileReader.readTextFile(this.downloadedFile)
            .then((text) => {        
                return text === expectedText;
            });
    }    
}

export { DownloadPage };