import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly page: Page;
    private teambuilderButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.teambuilderButton = this.page.locator(
            '//div[@class="menugroup"]//button[@name="joinRoom" and @value="teambuilder"]'
        );
    }

    async navigate() {
        await this.page.goto("https://play.pokemonshowdown.com/");
    }

    async goToTeamBuilder() {
        await this.teambuilderButton.click();
    }
}