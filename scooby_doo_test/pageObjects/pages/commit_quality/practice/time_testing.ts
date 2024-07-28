import { Locator, Page } from "@playwright/test";

class TimeTestingPage {
    private page: Page;
    
    constructor(page: Page) {
        this.page = page;
    }

    // Selectors
    back_to_practice_link = 'back-link'

    // * Current Time
    current_time_label = 'Current time'
    current_time_timer = 'clock'

    // * Countdown Timer
    countdown_label = 'COUNTDOWN TIMER TO WIN A SPECIAL PRIZE'
    countdown_timer = 'timer'
    countdown_message_label = 'message'

    // Methods
    async clickBackToPracticeLink() {
        await this.page.getByTestId(this.back_to_practice_link).click();
    }

    async getBackToPracticeLink(): Promise<string> {
        return await this.page.getByTestId(this.back_to_practice_link).innerText();
    }

    // * Current Time
    async getCurrentTimeLabel(): Promise<string> {
        return await this.page.getByText(this.current_time_label).innerText();
    }

    async getCurrentTime(): Promise<Locator> {
        return this.page.getByTestId(this.current_time_timer);
    }
    
    // * Countdown Timer
    async getCountdownLabel(): Promise<string> {
        return await this.page.getByText(this.countdown_label).innerText();
    }

    async getTimer(): Promise<Locator> {
        return this.page.getByTestId(this.countdown_timer);
    }

    async getMessage(): Promise<string> {
        return await this.page.getByTestId(this.countdown_message_label).innerText();
    }
}

export { TimeTestingPage };