import { expect } from '@playwright/test';
import test from './test_setup';

// Links on home page for use
const links = [
    'Dynamic ID',
    'Class Attribute',
    'Hidden Layers',
    'Load Delay',
    'Ajax Data',
    'Client Side Delay',
    'Click',
    'Text Input',
    'Scrollbars',
    'Dynamic Table',
    'Verify Text',
    'Progress Bar',
    'Visibility',
    'Sample App',
    'Mouse Over',
    'Non-Breaking Space',
    'Overlapped Element',
    'Shadow DOM'
]

test.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
  });


test.describe('Home Page Tests for UI Test Automation Playground', () => {
    test('Verify Title on Home Page', async ({ 
        page,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Verify the title of the page', async () => {
            const title = await homePage.get_title();
            await expect(title).toBe('UI Test AutomationPlayground');
        });
    });

    test('Verify Quote on Home Page', async ({ 
        page,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Verify the quote on the home page', async () => {
            const quote = await homePage.get_quote();
            await expect(quote).toContain('Quality is not an act, it is a habit.');
            await expect(quote).toContain('Aristotle');
        });
    });

    test('Verify Image on Home Page', async ({ 
        page,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Verify the Rubik\'s Cube image is displayed', async () => {
            // Verify the Rubik's Cube image is displayed
            const image = await homePage.get_rubiks_cube_image();
            await expect(image).toBeTruthy();
            await expect(image).toHaveScreenshot();
        });
    });

    test('Verify Purpose Text and Color on Home Page', async ({
        page,
        browserName,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Verify the purpose of the website', async () => {
            // Verify the purpose of the website
            const purpose = await homePage.get_purpose_text();
            await expect(purpose).toContain('The purpose of this website is to provide a platform for sharpening UI test automation skills.');
            await expect(purpose).toContain('Use it to practice with your test automation tool. Use it to learn test automation techniques.');
        });

        await test.step('Verify the colors of the purpose text', async () => {
            // eslint-disable-next-line playwright/no-skipped-test
            test.skip(browserName === 'webkit' || browserName === 'firefox', 'This test is skipped in WebKit and Firefox because of a known issue with getComputedStyle.');
            // Verify the colors
            const purposeElement = await homePage.get_purpose(); // Get the purpose element

            // eslint-disable-next-line playwright/no-conditional-in-test
            if (purposeElement) {
                const computedStyle = await purposeElement.evaluate(node => getComputedStyle(node));
                expect(computedStyle.color).toBe('rgb(133, 100, 4)'); // #856404 in rgb
                expect(computedStyle.backgroundColor).toBe('rgb(255, 243, 205)'); // #fff3cd in rgb
                expect(computedStyle.borderColor).toBe('rgb(255, 238, 186)'); // #ffeeba in rgb
            }
            else{
                await expect(false).toBe(true);
            }
        });
    });

    test('Verify Pitfall on Home Page', async ({
        page,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Verify the pitfall of the website', async () => {
            const pitfall = await homePage.get_pitfall();
            await expect(pitfall).toContain('Different automation pitfalls appearing in modern web applications are described and emulated below.');
        });
    });

    test('Verify Rubik\'s Cube License on Home Page', async ({
        page,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the Rubik\'s Cube link and verify it directs to the right page', async () => {
            await homePage.click_on_rubiks_cube_link();
            await expect(await page).toHaveURL('http://pngimg.com/image/46552');
        });
    });

    test('Verify Rubik\'s Cube Creative Commons License on Home Page', async ({
        page,
        homePage,
    }) => {
        await test.step('Navigate to the home page', async () => {
            await page.goto('/');
        });

        await test.step('Click the Rubik\'s Cube Creative Commons link and verify it directs to the right page', async () => {
            await homePage.click_on_rubiks_cube_cc_link();
            await expect(page).toHaveURL('https://creativecommons.org/licenses/by-nc/4.0/');
        });
    });

    for (const link of links) {
        test(`Verify Description for Link: ${link}`, async ({ 
            page, 
            homePage 
        }) => {
            await test.step('Navigate to the home page', async () => {
                await page.goto('/');
            });

            await test.step(`Verify the description for the link: ${link}`, async () => {
                // Verify the text on the home page
                const linkText = await homePage.get_link_description(link);

                // eslint-disable-next-line playwright/no-conditional-in-test
                switch(link){
                    case 'Dynamic ID':
                        await expect(linkText).toContain('Make sure you are not recording dynamic IDs of elements');
                        break;
                    case 'Class Attribute':
                        await expect(linkText).toContain('Check that class attribute based XPath is well formed');
                        break;
                    case 'Hidden Layers':
                        await expect(linkText).toContain('Verify that your test does not interact with elements invisible because of z-order');
                        break;
                    case 'Load Delay':
                        await expect(linkText).toContain('Ensure that a test is capable of waiting for a page to load');
                        break;
                    case 'Ajax Data':
                        await expect(linkText).toContain('Some elements may appear on a page after loading data with AJAX request');
                        break;
                    case 'Client Side Delay':
                        await expect(linkText).toContain('Some elements may appear after client-side time consuming JavaScript calculations');
                        break;
                    case 'Click':
                        await expect(linkText).toContain('Event based click on an element may not always work');
                        break;
                    case 'Text Input':
                        await expect(linkText).toContain('Entering text into an edit field may not have effect');
                        break;
                    case 'Scrollbars':
                        await expect(linkText).toContain('Scrolling an element into view may be a tricky task');
                        break;
                    case 'Dynamic Table':
                        await expect(linkText).toContain('Verify cell value in a dynamic table ');
                        break;
                    case 'Verify Text':
                        await expect(linkText).toContain('Finding an element by displayed text has nuances');
                        break;
                    case 'Progress Bar':
                        await expect(linkText).toContain('Follow the progress of a lengthy process and continue upon completion ');
                        break;
                    case 'Visibility':
                        await expect(linkText).toContain('Check if element is visible on screen');
                        break;
                    case 'Sample App':
                        await expect(linkText).toContain('Demo application with dynamically generated element attributes');
                        break;
                    case 'Mouse Over':
                        await expect(linkText).toContain('Placing mouse over an element may change DOM and make the element unavailable');
                        break;
                    case 'Non-Breaking Space':
                        await expect(linkText).toContain('Non-breaking space looks like a normal one on screen. It may lead to confusion when building XPath');
                        break;
                    case 'Overlapped Element':
                        await expect(linkText).toContain('Make element visible to enter text ');
                        break;
                    case 'Shadow DOM':
                        await expect(linkText).toContain('Look inside Shadow DOM component ');
                        break;
                    default:
                        await expect(false).toBe(true);
                        break;
                }
            });
        });
    }

    for (const link of links) {
        test(`Verify Link Navigates to the Correct Page: ${link}`, async ({ 
            page, 
            homePage 
        }) => {
            await test.step('Navigate to the home page', async () => {
                await page.goto('/');
            });

            await test.step('Verify the link navigates to the correct page', async () => {
                // Verify the text on the home page
                await homePage.click_on_link(link);

                // eslint-disable-next-line playwright/no-conditional-in-test
                switch(link){
                    case 'Dynamic ID':
                        await expect(page).toHaveURL(/dynamicid/);
                        break;
                    case 'Class Attribute':
                        await expect(page).toHaveURL(/classattr/);
                        break;
                    case 'Hidden Layers':
                        await expect(page).toHaveURL(/hiddenlayers/);
                        break;
                    case 'Load Delay':
                        await expect(page).toHaveURL(/loaddelay/);
                        break;
                    case 'Ajax Data':
                        await expect(page).toHaveURL(/ajax/);
                        break;
                    case 'Client Side Delay':
                        await expect(page).toHaveURL(/clientdelay/);
                        break;
                    case 'Click':
                        await expect(page).toHaveURL(/click/);
                        break;
                    case 'Text Input':
                        await expect(page).toHaveURL(/textinput/);
                        break;
                    case 'Scrollbars':
                        await expect(page).toHaveURL(/scrollbars/);
                        break;
                    case 'Dynamic Table':
                        await expect(page).toHaveURL(/dynamictable/);
                        break;
                    case 'Verify Text':
                        await expect(page).toHaveURL(/verifytext/);
                        break;
                    case 'Progress Bar':
                        await expect(page).toHaveURL(/progressbar/);
                        break;
                    case 'Visibility':
                        await expect(page).toHaveURL(/visibility/);
                        break;
                    case 'Sample App':
                        await expect(page).toHaveURL(/sampleapp/);
                        break;
                    case 'Mouse Over':
                        await expect(page).toHaveURL(/mouseover/);
                        break;
                    case 'Non-Breaking Space':
                        await expect(page).toHaveURL(/nbsp/);
                        break;
                    case 'Overlapped Element':
                        await expect(page).toHaveURL(/overlapped/);
                        break;
                    case 'Shadow DOM':
                        await expect(page).toHaveURL(/shadowdom/);
                        break;
                    default:
                        await expect(false).toBe(true);
                        break;
                }
            });
        });
    }
});