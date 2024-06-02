import { test, expect } from '@playwright/test'
import path from 'path';
import fs from 'fs';
import pdfParse from 'pdf-parse';

test.use({
    ignoreHTTPSErrors: true,
    browserName: 'chromium',
});

test.describe('PDF Reader Tests', 
    {
        tag:['@PDF_Reader']
    },
    () => {
    test('Successful Read from PDF and Verify Data', async ({ page }) => {
        // the PDF URL and the file path to save the PDF
        const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
        const pdfPath = path.join(__dirname, 'downloaded_files/downloaded.pdf');

        // Intercept the request and save the PDF
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        await page.route(pdfUrl, async (route) => {
            const response = await page.request.get(pdfUrl);
            const buffer = await response.body();
            fs.writeFileSync(pdfPath, buffer);
        });

        // Read and parse the PDF
        const dataBuffer = fs.readFileSync(pdfPath);
        const data = await pdfParse(dataBuffer);

        // Verify the header
        const headerText = "Dummy PDF file"; 
        expect(data.text).toContain(headerText);
    });
});