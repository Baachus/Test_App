import test from '../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('Practice page', 
    {
        tag:['@Commit_Quality']
    },
    () => {
    test('Verify Titles', async ({
      page,
      practicePage,
      }) => {
  
        await test.step('Navigate to the commit quality page', async () => {
            await page.goto('practice');
        });

        await test.step('Verify Titles', async () => {
            expect(await practicePage.getPracticeTitle()).toBe('Note to user: This page is likely to be updated - Things may move around and extra items will be added.');
            expect(await practicePage.getGeneralComponentsTitle()).toBe('General Components');
            expect(await practicePage.getAccordionsTitle()).toBe('Accordions');
            expect(await practicePage.getPopupsTitle()).toBe('Popups');
            expect(await practicePage.getIframeTitle()).toBe('Iframes');
            expect(await practicePage.getApisTitle()).toBe('Apis');
            expect(await practicePage.getDynamicTextTitle()).toBe('Dynamic Text');
            expect(await practicePage.getFileUploadTitle()).toBe('File Upload');
            expect(await practicePage.getDragAndDropTitle()).toBe('Drag and drop');
            expect(await practicePage.getContactUsFormTitle()).toBe('Contact Us Form');
            expect(await practicePage.getMockDataLayerTitle()).toBe('Mock Datalayer');
        });
    });

    test('Verify Link Text and Instructions', async ({
        page,
        practicePage,
        }) => {
    
        await test.step('Navigate to the commit quality page', async () => {
            await page.goto('practice');
        });

        await test.step('Verify Link Text', async () => {
            expect(await practicePage.getButtonsLink()).toBe('- Buttons');
            expect(await practicePage.getRadioButtonsLink()).toBe('- Radio Buttons');
            expect(await practicePage.getDropdownsLink()).toBe('- Dropdowns');
            expect(await practicePage.getCheckboxesLink()).toBe('- Checkboxes');
            expect(await practicePage.getLinksLink()).toBe('- Links');
        });

        await test.step('Verify Instruction', async () => {
            expect(await practicePage.getGeneralComponentsInstructions()).toBe('Click here to practice working with:');
            expect(await practicePage.getAccordionLink()).toBe('Click here to practice working with accordions');
            expect(await practicePage.getPopupsLink()).toBe('Click here to practice working with random popups');
            expect(await practicePage.getIframeLink()).toBe('Click here to practice Iframes');
            expect(await practicePage.getApiLink()).toBe('Click here to practice Api requests');
            expect(await practicePage.getDynamicTextLink()).toBe('Click here to practice Dynamic Text');
            expect(await practicePage.getFileUploadLink()).toBe('Click here to practice Uploading files');
            expect(await practicePage.getDragAndDropLink()).toBe('Click here to practice Dragging and dropping');
            expect(await practicePage.getContactUsFormLink()).toBe('Click here to practice filling out forms');
            expect(await practicePage.getMockDataLayerLink()).toBe('Click here to practice testing a mocked version of a datalayer');
        });
      });

      for(const link of ['Buttons', 'Radio Buttons', 'Dropdowns', 'Checkboxes', 'Links', 'Accordions', 'Popups', 'Iframes', 'Apis', 'Dynamic Text', 'File Upload', 'Drag and drop', 'Contact Us Form', 'Mock Datalayer']){
        test(`Verify Navigation for ${link}`, async ({
            page,
            practicePage,
            }) => {
                await test.step('Navigate to the commit quality page', async () => {
                    await page.goto('practice');
                });

                await test.step(`Navigate to ${link} and verify navigation`, async () => {
                    await practicePage.clickLink(link);

                    // eslint-disable-next-line playwright/no-conditional-in-test
                    switch(link){
                        case 'Buttons':
                        case 'Radio Buttons':
                        case 'Dropdowns':
                        case 'Checkboxes':
                        case 'Links':
                            expect(page.url()).toContain('practice-general-components');
                            break;
                        case 'Accordions':
                            expect(page.url()).toContain('practice-accordions');
                            break;
                        case 'Popups':
                            expect(page.url()).toContain('practice-random-popup');
                            break;
                        case 'Iframes':
                            expect(page.url()).toContain('practice-iframe');
                            break;
                        case 'Apis':
                            expect(page.url()).toContain('practice-api');
                            break;
                        case 'Dynamic Text':
                            expect(page.url()).toContain('practice-dyanmic-text');      // Application has typo
                            break;
                        case 'File Upload':
                            expect(page.url()).toContain('practice-file-upload');
                            break;
                        case 'Drag and drop':
                            expect(page.url()).toContain('practice-drag-and-drop');
                            break;
                        case 'Contact Us Form':
                            expect(page.url()).toContain('practice-contact-form');
                            break;
                        case 'Mock Datalayer':
                            expect(page.url()).toContain('practice-mock-data-layer');
                            break;
                    }
                });

            });
    }
});