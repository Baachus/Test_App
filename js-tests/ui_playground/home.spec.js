"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
const test_setup_1 = require("./test_setup");
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
];
test_setup_1.default.use({
    baseURL: 'https://www.uitestingplayground.com',
    ignoreHTTPSErrors: true,
});
test_setup_1.default.describe('Home Page Tests for UI Test Automation Playground', () => {
    (0, test_setup_1.default)('Verify Title on Home Page', ({ page, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Verify the title of the page', () => __awaiter(void 0, void 0, void 0, function* () {
            const title = yield homePage.get_title();
            yield (0, test_1.expect)(title).toBe('UI Test AutomationPlayground');
        }));
    }));
    (0, test_setup_1.default)('Verify Quote on Home Page', ({ page, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Verify the quote on the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            const quote = yield homePage.get_quote();
            yield (0, test_1.expect)(quote).toContain('Quality is not an act, it is a habit.');
            yield (0, test_1.expect)(quote).toContain('Aristotle');
        }));
    }));
    (0, test_setup_1.default)('Verify Image on Home Page', ({ page, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Verify the Rubik\'s Cube image is displayed', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify the Rubik's Cube image is displayed
            const image = yield homePage.get_rubiks_cube_image();
            yield (0, test_1.expect)(image).toBeTruthy();
            yield (0, test_1.expect)(image).toHaveScreenshot();
        }));
    }));
    (0, test_setup_1.default)('Verify Purpose Text and Color on Home Page', ({ page, browserName, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Verify the purpose of the website', () => __awaiter(void 0, void 0, void 0, function* () {
            // Verify the purpose of the website
            const purpose = yield homePage.get_purpose_text();
            yield (0, test_1.expect)(purpose).toContain('The purpose of this website is to provide a platform for sharpening UI test automation skills.');
            yield (0, test_1.expect)(purpose).toContain('Use it to practice with your test automation tool. Use it to learn test automation techniques.');
        }));
        yield test_setup_1.default.step('Verify the colors of the purpose text', () => __awaiter(void 0, void 0, void 0, function* () {
            // eslint-disable-next-line playwright/no-skipped-test
            test_setup_1.default.skip(browserName === 'webkit' || browserName === 'firefox', 'This test is skipped in WebKit and Firefox because of a known issue with getComputedStyle.');
            // Verify the colors
            const purposeElement = yield homePage.get_purpose(); // Get the purpose element
            // eslint-disable-next-line playwright/no-conditional-in-test
            if (purposeElement) {
                const computedStyle = yield purposeElement.evaluate(node => getComputedStyle(node));
                (0, test_1.expect)(computedStyle.color).toBe('rgb(133, 100, 4)'); // #856404 in rgb
                (0, test_1.expect)(computedStyle.backgroundColor).toBe('rgb(255, 243, 205)'); // #fff3cd in rgb
                (0, test_1.expect)(computedStyle.borderColor).toBe('rgb(255, 238, 186)'); // #ffeeba in rgb
            }
            else {
                yield (0, test_1.expect)(false).toBe(true);
            }
        }));
    }));
    (0, test_setup_1.default)('Verify Pitfall on Home Page', ({ page, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Verify the pitfall of the website', () => __awaiter(void 0, void 0, void 0, function* () {
            const pitfall = yield homePage.get_pitfall();
            yield (0, test_1.expect)(pitfall).toContain('Different automation pitfalls appearing in modern web applications are described and emulated below.');
        }));
    }));
    (0, test_setup_1.default)('Verify Rubik\'s Cube License on Home Page', ({ page, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the Rubik\'s Cube link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_rubiks_cube_link();
            yield (0, test_1.expect)(yield page).toHaveURL('http://pngimg.com/image/46552');
        }));
    }));
    (0, test_setup_1.default)('Verify Rubik\'s Cube Creative Commons License on Home Page', ({ page, homePage, }) => __awaiter(void 0, void 0, void 0, function* () {
        yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield page.goto('/');
        }));
        yield test_setup_1.default.step('Click the Rubik\'s Cube Creative Commons link and verify it directs to the right page', () => __awaiter(void 0, void 0, void 0, function* () {
            yield homePage.click_on_rubiks_cube_cc_link();
            yield (0, test_1.expect)(page).toHaveURL('https://creativecommons.org/licenses/by-nc/4.0/');
        }));
    }));
    for (const link of links) {
        (0, test_setup_1.default)(`Verify Description for Link: ${link}`, ({ page, homePage }) => __awaiter(void 0, void 0, void 0, function* () {
            yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
                yield page.goto('/');
            }));
            yield test_setup_1.default.step(`Verify the description for the link: ${link}`, () => __awaiter(void 0, void 0, void 0, function* () {
                // Verify the text on the home page
                const linkText = yield homePage.get_link_description(link);
                // eslint-disable-next-line playwright/no-conditional-in-test
                switch (link) {
                    case 'Dynamic ID':
                        yield (0, test_1.expect)(linkText).toContain('Make sure you are not recording dynamic IDs of elements');
                        break;
                    case 'Class Attribute':
                        yield (0, test_1.expect)(linkText).toContain('Check that class attribute based XPath is well formed');
                        break;
                    case 'Hidden Layers':
                        yield (0, test_1.expect)(linkText).toContain('Verify that your test does not interact with elements invisible because of z-order');
                        break;
                    case 'Load Delay':
                        yield (0, test_1.expect)(linkText).toContain('Ensure that a test is capable of waiting for a page to load');
                        break;
                    case 'Ajax Data':
                        yield (0, test_1.expect)(linkText).toContain('Some elements may appear on a page after loading data with AJAX request');
                        break;
                    case 'Client Side Delay':
                        yield (0, test_1.expect)(linkText).toContain('Some elements may appear after client-side time consuming JavaScript calculations');
                        break;
                    case 'Click':
                        yield (0, test_1.expect)(linkText).toContain('Event based click on an element may not always work');
                        break;
                    case 'Text Input':
                        yield (0, test_1.expect)(linkText).toContain('Entering text into an edit field may not have effect');
                        break;
                    case 'Scrollbars':
                        yield (0, test_1.expect)(linkText).toContain('Scrolling an element into view may be a tricky task');
                        break;
                    case 'Dynamic Table':
                        yield (0, test_1.expect)(linkText).toContain('Verify cell value in a dynamic table ');
                        break;
                    case 'Verify Text':
                        yield (0, test_1.expect)(linkText).toContain('Finding an element by displayed text has nuances');
                        break;
                    case 'Progress Bar':
                        yield (0, test_1.expect)(linkText).toContain('Follow the progress of a lengthy process and continue upon completion ');
                        break;
                    case 'Visibility':
                        yield (0, test_1.expect)(linkText).toContain('Check if element is visible on screen');
                        break;
                    case 'Sample App':
                        yield (0, test_1.expect)(linkText).toContain('Demo application with dynamically generated element attributes');
                        break;
                    case 'Mouse Over':
                        yield (0, test_1.expect)(linkText).toContain('Placing mouse over an element may change DOM and make the element unavailable');
                        break;
                    case 'Non-Breaking Space':
                        yield (0, test_1.expect)(linkText).toContain('Non-breaking space looks like a normal one on screen. It may lead to confusion when building XPath');
                        break;
                    case 'Overlapped Element':
                        yield (0, test_1.expect)(linkText).toContain('Make element visible to enter text ');
                        break;
                    case 'Shadow DOM':
                        yield (0, test_1.expect)(linkText).toContain('Look inside Shadow DOM component ');
                        break;
                    default:
                        yield (0, test_1.expect)(false).toBe(true);
                        break;
                }
            }));
        }));
    }
    for (const link of links) {
        (0, test_setup_1.default)(`Verify Link Navigates to the Correct Page: ${link}`, ({ page, homePage }) => __awaiter(void 0, void 0, void 0, function* () {
            yield test_setup_1.default.step('Navigate to the home page', () => __awaiter(void 0, void 0, void 0, function* () {
                yield page.goto('/');
            }));
            yield test_setup_1.default.step('Verify the link navigates to the correct page', () => __awaiter(void 0, void 0, void 0, function* () {
                // Verify the text on the home page
                yield homePage.click_on_link(link);
                // eslint-disable-next-line playwright/no-conditional-in-test
                switch (link) {
                    case 'Dynamic ID':
                        yield (0, test_1.expect)(page).toHaveURL(/dynamicid/);
                        break;
                    case 'Class Attribute':
                        yield (0, test_1.expect)(page).toHaveURL(/classattr/);
                        break;
                    case 'Hidden Layers':
                        yield (0, test_1.expect)(page).toHaveURL(/hiddenlayers/);
                        break;
                    case 'Load Delay':
                        yield (0, test_1.expect)(page).toHaveURL(/loaddelay/);
                        break;
                    case 'Ajax Data':
                        yield (0, test_1.expect)(page).toHaveURL(/ajax/);
                        break;
                    case 'Client Side Delay':
                        yield (0, test_1.expect)(page).toHaveURL(/clientdelay/);
                        break;
                    case 'Click':
                        yield (0, test_1.expect)(page).toHaveURL(/click/);
                        break;
                    case 'Text Input':
                        yield (0, test_1.expect)(page).toHaveURL(/textinput/);
                        break;
                    case 'Scrollbars':
                        yield (0, test_1.expect)(page).toHaveURL(/scrollbars/);
                        break;
                    case 'Dynamic Table':
                        yield (0, test_1.expect)(page).toHaveURL(/dynamictable/);
                        break;
                    case 'Verify Text':
                        yield (0, test_1.expect)(page).toHaveURL(/verifytext/);
                        break;
                    case 'Progress Bar':
                        yield (0, test_1.expect)(page).toHaveURL(/progressbar/);
                        break;
                    case 'Visibility':
                        yield (0, test_1.expect)(page).toHaveURL(/visibility/);
                        break;
                    case 'Sample App':
                        yield (0, test_1.expect)(page).toHaveURL(/sampleapp/);
                        break;
                    case 'Mouse Over':
                        yield (0, test_1.expect)(page).toHaveURL(/mouseover/);
                        break;
                    case 'Non-Breaking Space':
                        yield (0, test_1.expect)(page).toHaveURL(/nbsp/);
                        break;
                    case 'Overlapped Element':
                        yield (0, test_1.expect)(page).toHaveURL(/overlapped/);
                        break;
                    case 'Shadow DOM':
                        yield (0, test_1.expect)(page).toHaveURL(/shadowdom/);
                        break;
                    default:
                        yield (0, test_1.expect)(false).toBe(true);
                        break;
                }
            }));
        }));
    }
});
