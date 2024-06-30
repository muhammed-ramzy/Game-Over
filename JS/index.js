'usestrict';

//Imports
import { UI } from "./ui.js";
import { addCardlisteners } from "./games.js"

//HTML Elements
const displayed_games = document.getElementById("displayed_games");
export const game_details = document.getElementById("game_details");
export const games = document.getElementById("games");
const loader = document.getElementById("loader");
const categories = document.querySelectorAll("#nav_item");
let category = "mmorpg";

for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () =>{
        for (let j = 0; j < categories.length; j++) {
            categories[j].classList.remove("active")
        }
        categories[i].classList.add("active")

        category = categories[i].getAttribute("data-category");

        getGamesData();
    })
    
}

//instanciated objects
const display = new UI();


//Variables
let gamesData = [];

// ========================= API part ==================================

// Games API
async function getGamesData() {

    displayLoader();

    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;

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

    removeLoader()

    display.display_data(gamesData, displayed_games)
    const cards = document.querySelectorAll(".card")
    addCardlisteners(cards)


}


getGamesData()



// Loader functions
function displayLoader()
{
    loader.classList.remove("visually-hidden");
}
function removeLoader()
{
    loader.classList.add("visually-hidden");
}