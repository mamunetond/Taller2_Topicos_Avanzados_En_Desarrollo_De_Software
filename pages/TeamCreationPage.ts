import { Locator, Page } from "@playwright/test";

export class TeamCreationPage {
    readonly page: Page;
    private addFormatFolder: Locator;
    private searchFormats: Locator;
    private gen9UbersButton: Locator;
   
    constructor(page: Page) {
        this.page = page;
        this.addFormatFolder = this.page.locator(
            '//div[@class="folder"]//div[@class="selectFolder"]//em[text()="(add format folder)"]'
        );
        this.searchFormats = this.page.locator(
            '//ul[@class="popupmenu"]//li//input[@placeholder="Search formats"]'
        );
        this.gen9UbersButton = this.page.locator(
            '//button[@value="gen9ubers"]'
        );
    }

    private getCreateNewTeamButton() {
        return this.page.locator(
            '//div[@class="teampane"]//p//button[@value="team" and contains(text(), "New [Gen 9] Ubers Team")]'
        );
    }

    async selectFormat(format: string) {
        await this.addFormatFolder.click();
        await this.searchFormats.fill(format);
        await this.gen9UbersButton.click();
    }

    async createNewTeam() {
        await this.getCreateNewTeamButton().click();
    }
}