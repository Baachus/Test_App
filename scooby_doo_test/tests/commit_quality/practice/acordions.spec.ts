import test from '../../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('@Commit_Quality Accordions Practice page', () => {
  test('Back to Practice', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Click Back to Practice and Verify Navigation', async () => {
            expect(await accordionsPage.getBackToPracticeLink()).toBe('back to practice');
            await accordionsPage.clickBackToPracticeLink();

            expect(await practicePage.getPracticeTitle()).toBe('Note to user: This page is likely to be updated - Things may move around and extra items will be added.');
        });
  });
});

test.describe('@Commit_Quality Accordions Practice page - Accordion 1', () => {
  test('Click Me Buttons Appear in Accordion 1', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 1 and Verify Click Me Buttons Appears', async () => {
            await accordionsPage.clickAccordion1();
            expect(await accordionsPage.getAccordion1Button()).toBe('Click me');
            expect(await accordionsPage.getAccordion1DoubleClickButton()).toBe('Double click me');
            expect(await accordionsPage.getAccordion1RightClickButton()).toBe('Right click me');
        });
  });

  test('Accordion 1 Results When Each Button Clicked', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 1 and Verify Click Me', async () => {
            await accordionsPage.clickAccordion1();
            await accordionsPage.clickAccordion1Button('click');
            expect(await accordionsPage.getAccordion1ButtonResult()).toBe('Button clicked');
        });

        await test.step('Verify Double Click Me', async () => {
            await accordionsPage.clickAccordion1DoubleClickButton('double');
            expect(await accordionsPage.getAccordion1DoubleClickButtonResult()).toBe('Button double clicked');
        });

        await test.step('Verify Right Click Me', async () => {
            await accordionsPage.clickAccordion1RightClickButton('right');
            expect(await accordionsPage.getAccordion1RightClickButtonResult()).toBe('Button right mouse clicked');
        }); 
  });

  test('Accordion 1 Results Clear When Accordion Closed', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 1 and Verify Click Me', async () => {
            await accordionsPage.clickAccordion1();
            await accordionsPage.clickAccordion1Button('click');
            expect(await accordionsPage.accordion1ButtonResultVisible()).toBe(true);
        });

        await test.step('Verify Double Click Me', async () => {
            await accordionsPage.clickAccordion1DoubleClickButton('double');
            expect(await accordionsPage.accordion1DoubleClickButtonResultVisible()).toBe(true);
        });

        await test.step('Verify Right Click Me', async () => {
            await accordionsPage.clickAccordion1RightClickButton('right');
            expect(await accordionsPage.accordion1RightClickButtonResultVisible()).toBe(true);
        }); 

        await test.step('Close Accordion 1 and Reopen and Verify Results Cleared', async () => {
            await accordionsPage.clickAccordion1();   // Close Accordion
            await accordionsPage.clickAccordion1();   // Open Accordion
            expect(await accordionsPage.accordion1ButtonResultVisible()).toBe(false);
            expect(await accordionsPage.accordion1DoubleClickButtonResultVisible()).toBe(false);
            expect(await accordionsPage.accordion1RightClickButtonResultVisible()).toBe(false);
        });
  });
});

test.describe('@Commit_Quality Accordions Practice page - Accordion 2', () => {
  test('Radio Buttons Appear in Accordion 2', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 2 and Verify Radio Buttons Appear', async () => {
            await accordionsPage.clickAccordion2();
            expect(await accordionsPage.getRadioButton1Visible()).toBe(true);
            expect(await accordionsPage.getRadioButton2Visible()).toBe(true);
        });
    });

    test('Radio Buttons Clickable in Accordion 2', async ({
      page,
      practicePage,
      accordionsPage,
      }) => {
          await test.step('Navigate to the accordions page', async () => {
              await page.goto('practice');
              await practicePage.clickAccordionLink();
          });
  
          await test.step('Open Accordion 2 and Click Radio Button 1', async () => {
              await accordionsPage.clickAccordion2();
              await accordionsPage.clickRadioButton1();
              expect(await accordionsPage.getRadioButton1Result()).toBe('option1 clicked');
          });
          
          await test.step('Click Radio Button 2', async () => {
            await accordionsPage.clickRadioButton2();
            expect(await accordionsPage.getRadioButton2Result()).toBe('option2 clicked');
        });
      });

  test('Radio Buttons Result Clear in Accordion 2 After Closing Accordion', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 2 and Click Radio Button 1', async () => {
            await accordionsPage.clickAccordion2();
            await accordionsPage.clickRadioButton1();
            expect(await accordionsPage.getRadioButton1Result()).toBe('option1 clicked');
        });
        
        await test.step('Close Accordion 2 and Reopen and Verify Results Cleared', async () => {
            await accordionsPage.clickAccordion2();   // Close Accordion
            await accordionsPage.clickAccordion2();   // Open Accordion
            expect(await accordionsPage.getRadioButton1ResultVisible()).toBe(false);
            expect(await accordionsPage.getRadioButton2ResultVisible()).toBe(false);
        });

        await test.step('Open Accordion 2 and Click Radio Button 1', async () => {
            await accordionsPage.clickRadioButton2();
            expect(await accordionsPage.getRadioButton2Result()).toBe('option2 clicked');
        });
        
        await test.step('Close Accordion 2 and Reopen and Verify Results Cleared', async () => {
            await accordionsPage.clickAccordion2();   // Close Accordion
            await accordionsPage.clickAccordion2();   // Open Accordion
            expect(await accordionsPage.getRadioButton1ResultVisible()).toBe(false);
            expect(await accordionsPage.getRadioButton2ResultVisible()).toBe(false);
        });
    });
});

test.describe('@Commit_Quality Accordions Practice page - Accordion 3', () => {
  test('Checkboxes Appear in Accordion 3', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 3 and Verify Checkboxes Appear', async () => {
            await accordionsPage.clickAccordion3();
            expect(await accordionsPage.getCheckbox1Visible()).toBe(true);
            expect(await accordionsPage.getCheckbox2Visible()).toBe(true);
            expect(await accordionsPage.getCheckbox3Visible()).toBe(true);
        });
    });
    
  test('Checkbox Results Appear in Accordion 3', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 3 and Verify Checkboxes 1 Works', async () => {
            await accordionsPage.clickAccordion3();
            await accordionsPage.clickCheckbox1();
            expect(await accordionsPage.getCheckbox1Result()).toBe('Checkbox 1 checked');
        });

        await test.step('Verify Checkboxes 2 Works', async () => {
            await accordionsPage.clickCheckbox2();
            expect(await accordionsPage.getCheckbox2Result()).toBe('Checkbox 2 checked');
        });

        await test.step('Verify Checkboxes 3 Works', async () => {
            await accordionsPage.clickCheckbox3();
            expect(await accordionsPage.getCheckbox3Result()).toBe('Checkbox 3 checked');
        });
    });
    
  test('Checkbox Results Clear in Accordion 3 After Closing Accordion', async ({
    page,
    practicePage,
    accordionsPage,
    }) => {
        await test.step('Navigate to the accordions page', async () => {
            await page.goto('practice');
            await practicePage.clickAccordionLink();
        });

        await test.step('Open Accordion 3 and Verify Checkboxes Results Works', async () => {
            await accordionsPage.clickAccordion3();
            await accordionsPage.clickCheckbox1();
            expect(await accordionsPage.getCheckbox1Result()).toBe('Checkbox 1 checked');
            await accordionsPage.clickCheckbox2();
            expect(await accordionsPage.getCheckbox2Result()).toBe('Checkbox 2 checked');
            await accordionsPage.clickCheckbox3();
            expect(await accordionsPage.getCheckbox3Result()).toBe('Checkbox 3 checked');
        });

        await test.step('Close Accordion 3 and Verify All Checkbox Results Cleared', async () => {
            await accordionsPage.clickAccordion3();   // Close Accordion
            await accordionsPage.clickAccordion3();   // Open Accordion
            expect(await accordionsPage.getCheckbox1ResultVisible()).toBe(false);
            expect(await accordionsPage.getCheckbox2ResultVisible()).toBe(false);
            expect(await accordionsPage.getCheckbox3ResultVisible()).toBe(false);
        });
    });
  });