import { Locator, Page, expect } from "@playwright/test";

export class TeamListPage {
    readonly page: Page;
    private addPokemonButton: Locator;
    private validateTeamButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.addPokemonButton = this.page.locator(
            '//ol[@class="teamchart"]//li//button[@name="addPokemon"]'
        );
        this.validateTeamButton = this.page.locator(
            '//ol[@class="teamchart"]//li//button[@name="validate"]'
        );
    }

    async addPokemon() {
        await this.addPokemonButton.click();
    }

    async validateTeam(gen: string, format: string) {
        await this.validateTeamButton.click();

        const validationText = this.page.locator(
            '(//div[@class="ps-overlay"]//div[@class="ps-popup"]//p)[1]'
        );
        await validationText.waitFor({state: "visible", timeout: 10000});
        await expect(validationText).toContainText(
            'Your team is valid for [Gen 9] Ubers.'
        );
    }
}