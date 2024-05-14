import test from '../../../fixtures/test_setup_commit_quality';
import { expect } from '@playwright/test';

test.use({
  baseURL: 'https://commitquality.com/',
});

test.describe('General Components Practice page', 
  {
    tag:['@Commit_Quality']
  },
  () => {
  test('Back to Practice', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
          await page.goto('practice');
          await practicePage.clickButtonsLink();
      });

      await test.step('Click Back to Practice and Verify Navigation', async () => {
          await generalPracticePage.clickBackToPracticeLink();

          expect(await practicePage.getPracticeTitle()).toBe('Note to user: This page is likely to be updated - Things may move around and extra items will be added.');
      });
  });
});

test.describe('General Components Practice page - Buttons', 
  {
      tag:['@Commit_Quality']
  },
  () => {
  test('Click Me Button Generates Success Message', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the Me Button', async () => {
          await generalPracticePage.clickClickMeButton("click");
          expect(await generalPracticePage.getClickMeResult()).toBe('Button clicked');
      });
  });

  test('Invalid Clicks on Click Me Button Generates No Message', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Right Click the Click Me Button', async () => {
          await generalPracticePage.clickClickMeButton("click");

          //TODO: This is always passing, need to fix
          const isVisible = await page.isVisible(generalPracticePage.click_me_result);
          console.log(isVisible);
          expect(isVisible).toBe(false);
      });
  });

  test('Double Click Me Button Generates Success Message', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Double Click Me Button', async () => {
          await generalPracticePage.clickDoubleClickMeButton("double");
          expect(await generalPracticePage.getDoubleClickMeResult()).toBe('Button double clicked');
      });
  });

  test('Invalid Clicks on Double Click Me Button Generates No Message', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Right Click the Double Click Me Button', async () => {
          await generalPracticePage.clickDoubleClickMeButton("right");

          //TODO: This is always passing, need to fix
          const isVisible = await page.isVisible(generalPracticePage.double_click_me_result);
          console.log(isVisible);
          expect(isVisible).toBe(false);
      });

      await test.step('Single Click the Double Click Me Button', async () => {
          await generalPracticePage.clickDoubleClickMeButton("click");

          //TODO: This is always passing, need to fix
          const isVisible = await page.isVisible(generalPracticePage.double_click_me_result);
          console.log(isVisible);
          expect(isVisible).toBe(false);
      });
  });

  test('Right Click Me Button Generates Success Message', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Right Click Me Button', async () => {
          await generalPracticePage.clickRightClickMeButton("right");
          expect(await generalPracticePage.getRightClickMeResult()).toBe('Button right mouse clicked');
      });
  });

  test('Invalid Clicks on Right Click Me Button Generates No Message', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Single Click the Right Click Me Button', async () => {
          await generalPracticePage.clickRightClickMeButton("click");

          //TODO: This is always passing, need to fix
          const isVisible = await page.isVisible(generalPracticePage.right_click_me_result);
          console.log(isVisible);
          expect(isVisible).toBe(false);
      });

      await test.step('Double Click the Right Click Me Button', async () => {
          await generalPracticePage.clickRightClickMeButton("double");

          //TODO: This is always passing, need to fix
          const isVisible = await page.isVisible(generalPracticePage.right_click_me_result);
          console.log(isVisible);
          expect(isVisible).toBe(false);
      });
  });
});

test.describe('General Components Practice page - Radio Buttons',
  {
      tag:['@Commit_Quality']
  },
  () => {
  test('Click First Radio Button', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the First Radio Button', async () => {
          await generalPracticePage.clickRadioButton1();
          expect(await generalPracticePage.getRadioButton1Result()).toBe('option1 clicked');
      });
  });

  test('Click Second Radio Button', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the Second Radio Button', async () => {
          await generalPracticePage.clickRadioButton2();
          expect(await generalPracticePage.getRadioButton2Result()).toBe('option2 clicked');
      });
  });

  test('Only One Result Shown Per Radio Button Selected', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the First Radio Button', async () => {
          await generalPracticePage.clickRadioButton1();
          expect(await generalPracticePage.getRadioButton1Result()).toBe('option1 clicked');

            //TODO: This is always passing, need to fix
            const isVisible = await page.isVisible(generalPracticePage.radio_button_2_selected);
            console.log(isVisible);
            expect(isVisible).toBe(false);
      });

      await test.step('Click the Second Radio Button', async () => {
          await generalPracticePage.clickRadioButton2();
          expect(await generalPracticePage.getRadioButton2Result()).toBe('option2 clicked');

          //TODO: This is always passing, need to fix
          const isVisible = await page.isVisible(generalPracticePage.radio_button_1_selected);
          console.log(isVisible);
          expect(isVisible).toBe(false);
      });
  });
});

test.describe('General Components Practice page - Select Option', 
  {
      tag:['@Commit_Quality']
  },
  () => {
  test.skip('Select All Options', async ({  // Skip for now because of the issue with the select element
    page,
    practicePage,
    generalPracticePage,
    }) => {
      //TODO: Fix this test
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Verify Default Option', async () => {
          expect(await generalPracticePage.getSelectOption()).toBe('Select an option');
      });

      await test.step('Select Option 1 and Verify Selection', async () => {
          await generalPracticePage.selectOption("Option 1");
          expect(await generalPracticePage.getSelectOption()).toBe('Option 1');
      });

      await test.step('Select Option 2 and Verify Selection', async () => {
          await generalPracticePage.selectOption("Option 2");
          expect(await generalPracticePage.getSelectOption()).toBe('Option 2');
      });

      await test.step('Select Option 3 and Verify Selection', async () => {
          await generalPracticePage.selectOption("Option 3");
          expect(await generalPracticePage.getSelectOption()).toBe('Option 3');
      });
  });
});

test.describe('General Components Practice page - Checkboxes', 
  {
      tag:['@Commit_Quality']
  },
  () => {
  test('Check Each Box', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click Checkbox 1 and Verify No Others Selected', async () => {
          await generalPracticePage.clickCheckbox1();
          expect(await generalPracticePage.getCheckbox1Result()).toBe('Checkbox 1 checked');
          expect(await generalPracticePage.getCheckbox2ResultVisible()).toBe(false);
          expect(await generalPracticePage.getCheckbox3ResultVisible()).toBe(false);
      });

      await test.step('Uncheck Checkbox 1', async () => {
          await generalPracticePage.clickCheckbox1();
          expect(await generalPracticePage.getCheckbox1ResultVisible()).toBe(false);
      });

      await test.step('Click Checkbox 2 and Verify No Others Selected', async () => {
          await generalPracticePage.clickCheckbox2();
          expect(await generalPracticePage.getCheckbox2Result()).toBe('Checkbox 2 checked');
          expect(await generalPracticePage.getCheckbox1ResultVisible()).toBe(false);
          expect(await generalPracticePage.getCheckbox3ResultVisible()).toBe(false);
      });

      await test.step('Uncheck Checkbox 2', async () => {
          await generalPracticePage.clickCheckbox2();
          expect(await generalPracticePage.getCheckbox2ResultVisible()).toBe(false);
      });

      await test.step('Click Checkbox 3 and Verify No Others Selected', async () => {
          await generalPracticePage.clickCheckbox3();
          expect(await generalPracticePage.getCheckbox3Result()).toBe('Checkbox 3 checked');
          expect(await generalPracticePage.getCheckbox1ResultVisible()).toBe(false);
          expect(await generalPracticePage.getCheckbox2ResultVisible()).toBe(false);
      });

      await test.step('Uncheck Checkbox 3', async () => {
          await generalPracticePage.clickCheckbox3();
          expect(await generalPracticePage.getCheckbox3ResultVisible()).toBe(false);
      });
  });
  
  test('Check Every Box', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click Every Checkbox and Verify All Selected', async () => {
          await generalPracticePage.clickCheckbox1();
          await generalPracticePage.clickCheckbox2();
          await generalPracticePage.clickCheckbox3();
          expect(await generalPracticePage.getCheckbox1Result()).toBe('Checkbox 1 checked');
          expect(await generalPracticePage.getCheckbox2Result()).toBe('Checkbox 2 checked');
          expect(await generalPracticePage.getCheckbox3Result()).toBe('Checkbox 3 checked');
      });
    });
});

test.describe('General Components Practice page - Links', 
  {
      tag:['@Commit_Quality']
  },
  () => {
  test('Click Youtube Link', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the Youtube Link', async () => {
          await generalPracticePage.clickYoutubeLink();
          expect(page.url()).toContain('https://www.youtube.com/');
      });
    });

  test('Click Youtube New Tab Link', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the Youtube New Tab Link', async () => {
        const [newTab] = await Promise.all([
          page.waitForEvent('popup'),
          generalPracticePage.clickNewTabYoutubeLink()
        ]);

        const newTabURL = newTab.url();
        expect(newTabURL).toContain('https://www.youtube.com/');
      });
    });

  test('Click Go to Practice Link', async ({
    page,
    practicePage,
    generalPracticePage,
    }) => {
      await test.step('Navigate to the general components page', async () => {
        await page.goto('practice');
        await practicePage.clickButtonsLink();
      });

      await test.step('Click the Go to Practice Page Link', async () => {
        const [newTab] = await Promise.all([
          page.waitForEvent('popup'),
          generalPracticePage.clickPracticePageLink()
        ]);

        const newTabURL = newTab.url();
        expect(newTabURL).toBe('https://commitquality.com/practice');
      });
    });
});