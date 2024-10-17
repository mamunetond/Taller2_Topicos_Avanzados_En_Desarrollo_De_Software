import { expect, Locator, Page } from "@playwright/test";
import * as teamData from '../data/teamData.json';

export class PokemonDetailList {
    readonly page: Page;
    private itemInput: Locator;
    private moveInputs: Locator[] = [];
    private backToTeamButton: Locator;
    private pokemonNameInput: Locator;
    private evsInputs: Locator[] = [];

    
    constructor(page: Page) {
        this.page = page;
        this.pokemonNameInput = page.locator(
            '//div[@class="teamchartbox individual"]//div[@class="setcell setcell-pokemon"]//input[@name="pokemon"]'
        );
        this.itemInput = this.page.locator(
            '//div[@class="setrow"]//div[@class="setcell setcell-item"]//input[@name="item"]'
        );
        this.moveInputs = [
            this.page.locator(
                '//div[@class="setcol setcol-moves"]//input[@name="move1"]'
            ),
            this.page.locator(
                '//div[@class="setcol setcol-moves"]//input[@name="move2"]'
            ),
            this.page.locator(
                '//div[@class="setcol setcol-moves"]//input[@name="move3"]'
            ),
            this.page.locator(
                '//div[@class="setcol setcol-moves"]//input[@name="move4"]'
            ),
        ];
        this.evsInputs = [
            this.page.locator(
                '//div[@class="col evcol"]//input[@name="stat-hp"]'
            ),
            this.page.locator(
                '//div[@class="col evcol"]//input[@name="stat-atk"]'
            ),
            this.page.locator(
                '//div[@class="col evcol"]//input[@name="stat-def"]'
            ),
            this.page.locator(
                '//div[@class="col evcol"]//input[@name="stat-spa"]'
            ),
            this.page.locator(
                '//div[@class="col evcol"]//input[@name="stat-spd"]'
            ),
            this.page.locator(
                '//div[@class="col evcol"]//input[@name="stat-spe"]'
            ),

        ];
        this.backToTeamButton = this.page.locator(
            '//div[@class="teamwrapper"]//div[@class="pad"]//button[@name="back"]'
        );
        let Pokemon = teamData.pokemon;
    }

    async addPokemon(pokemon: any) {
        // Ingresar el nombre del Pokémon
        await this.pokemonNameInput.pressSequentially(pokemon.name);
        await this.pokemonNameInput.press("Enter");

        // Ingresar el objeto (ítem)
        await this.itemInput.click();
        await this.itemInput.pressSequentially(pokemon.item);
        await this.itemInput.press("Enter");

        // Ingresar los movimientos
        await this.moveInputs[0].click();
        await this.moveInputs[0].pressSequentially(pokemon.moves.move1);
        await this.moveInputs[0].press("Enter");

        await this.moveInputs[1].click();
        await this.moveInputs[1].pressSequentially(pokemon.moves.move2);
        await this.moveInputs[1].press("Enter");

        await this.moveInputs[2].click();
        await this.moveInputs[2].pressSequentially(pokemon.moves.move3);
        await this.moveInputs[2].press("Enter");

        await this.moveInputs[3].click();
        await this.moveInputs[3].pressSequentially(pokemon.moves.move4);
        await this.moveInputs[3].press("Enter");

        // Ingresar los EVs
        await this.evsInputs[0].click();
        await this.evsInputs[0].pressSequentially(pokemon.evStats.hp);
        await this.evsInputs[0].press("Enter");

        await this.evsInputs[1].click();
        await this.evsInputs[1].pressSequentially(pokemon.evStats.atk);
        await this.evsInputs[1].press("Enter");

        await this.evsInputs[2].click();
        await this.evsInputs[2].pressSequentially(pokemon.evStats.def);
        await this.evsInputs[2].press("Enter");

        await this.evsInputs[3].click();
        await this.evsInputs[3].pressSequentially(pokemon.evStats.spa);
        await this.evsInputs[3].press("Enter");

        await this.evsInputs[4].click();
        await this.evsInputs[4].pressSequentially(pokemon.evStats.spd);
        await this.evsInputs[4].press("Enter");

        await this.evsInputs[5].click();
        await this.evsInputs[5].pressSequentially(pokemon.evStats.spe);
        await this.evsInputs[5].press("Enter");
    }

    async validateEvsInZero() {
        const totalEvText = this.page.locator('//div[@class="col evcol"]//div[@class="totalev"]//em');
        await expect(totalEvText).toHaveText('0');
    }

    async returnToTeam() {
        await this.backToTeamButton.click();
    }
}