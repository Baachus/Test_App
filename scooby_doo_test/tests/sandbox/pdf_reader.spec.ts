import { test, chromium, expect } from '@playwright/test'
import path from 'path';
import fs from 'fs';
import pdfParse from 'pdf-parse';

test.use({
    ignoreHTTPSErrors: true,
    browserName: 'chromium',
});

test.describe('sandbox tests', 
    {
        tag:['@PDF Reader']
    },
    () => {
    test('Successful Read from PDF and Verify Data', async ({ }) => {
         // Launch the browser
        const browser = await chromium.launch();
        const context = await browser.newContext();
        const page = await context.newPage();

        // the PDF URL and the file path to save the PDF
        const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';
        const pdfPath = path.join(__dirname, 'downloaded_files/downloaded.pdf');

        // Intercept the request and save the PDF
        await page.route(pdfUrl, async (route) => {
            const response = await page.request.get(pdfUrl);
            const buffer = await response.body();
            fs.writeFileSync(pdfPath, buffer);
            await route.continue();
        });

        // Navigate to the PDF URL
        await page.goto(pdfUrl);

        // Close the browser
        await browser.close();

        // Read and parse the PDF
        const dataBuffer = fs.readFileSync(pdfPath);
        const data = await pdfParse(dataBuffer);

        // Verify the header
        const headerText = "Dummy PDF file"; 
        expect(data.text).toContain(headerText);
    });
});