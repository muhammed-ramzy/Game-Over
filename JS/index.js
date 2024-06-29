'usestrict';

//Imports
import { UI } from "./ui.js";
import { addCardlisteners } from "./games.js"
//HTML Elements
const displayed_games = document.getElementById("displayed_games");
export const game_details = document.getElementById("game_details")
export const games = document.getElementById("games")
const close_btn = document.getElementById("close_btn")

//instanciated objects
const display = new UI();


//Variables
let gamesData = [];

// ========================= API part ==================================

// Games API
async function getGamesData() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter';

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4add8266f5msh17d866cd228e1e3p16f69fjsn415f23b76e5d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(url, options);
    const response = await api.json();

    gamesData = response;
    display.display_data(gamesData, displayed_games)
    const cards = document.querySelectorAll(".card")
    addCardlisteners(cards)


}

if (close_btn) {

    

}
getGamesData()
