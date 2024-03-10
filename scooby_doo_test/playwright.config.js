"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test_1 = require("@playwright/test");
exports.default = (0, test_1.defineConfig)({
    testDir: './tests',
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    retries: process.env.CI ? 2 : 1,
    /* Opt out of parallel tests on CI. */
    workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: [
        ['html'],
        // MonoCart Reporter if wanted
        // ['monocart-reporter', {  
        //     name: "My Test Report",
        //     outputFile: './playwright-report/monocart-results/report.html'
        // }],
    ],
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: 'http://127.0.0.1:8000',
        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: 'on-first-retry',
        /* Color scheme for the report */
        colorScheme: 'dark',
        /* Creates a screenshot on failure. */
        screenshot: 'only-on-failure', // Slows down by 500ms
    },
    expect: {
        // Maximum time expect() should wait for the condition to be met.
        timeout: 5000,
        toHaveScreenshot: {
            // An acceptable amount of pixels that could be different, unset by default.
            maxDiffPixels: 10,
        },
        toMatchSnapshot: {
            // An acceptable ratio of pixels that are different to the
            // total amount of pixels, between 0 and 1.
            maxDiffPixelRatio: 0.1,
        },
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: 'chromium',
            use: Object.assign({}, test_1.devices['Desktop Chrome']),
        },
        {
            name: 'firefox',
            use: Object.assign({}, test_1.devices['Desktop Firefox']),
        },
        {
            name: 'webkit',
            use: Object.assign({}, test_1.devices['Desktop Safari']),
        },
        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },
        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ],
    /* Run your local dev server before starting the tests */
    // webServer: {
    //   command: 'npm run start',
    //   url: 'http://127.0.0.1:3000',
    //   reuseExistingServer: !process.env.CI,
    // },
});
