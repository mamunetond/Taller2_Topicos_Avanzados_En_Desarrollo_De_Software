import { test } from '@playwright/test';
import * as teamData from '../data/teamData.json';
import { HomePage } from '../pages/HomePage';
import { PokemonDetailList } from '../pages/PokemonDetailList';
import { TeamCreationPage } from '../pages/TeamCreationPage';
import { TeamListPage } from '../pages/TeamListPage';

test('Create and validate new Team', async ({ page }) => {
    test.slow()
    const homePage = new HomePage(page)
    const teamListPage = new TeamListPage(page)
    const teamCreationPage = new TeamCreationPage(page)
    const pokemonDetailList = new PokemonDetailList(page)

    await homePage.navigate()
    await homePage.goToTeamBuilder()
    await teamCreationPage.selectFormat(teamData.format)
    await teamCreationPage.createNewTeam();
    for (const pokemon of teamData.pokemon) {
        await teamListPage.addPokemon();
        await pokemonDetailList.addPokemon(pokemon);
        await pokemonDetailList.validateEvsInZero();
        // Usar backticks para interpolar el nombre del Pokémon
        await page.screenshot({ path: `${pokemon.name}.png` });
        await pokemonDetailList.returnToTeam();
    }

    await page.screenshot({ path: 'team.png' });
    await teamListPage.validateTeam(teamData.gen, teamData.format);
});



