'usestrict';

//Imports
import { UI } from "./ui.js";
import { addCardlisteners } from "./games.js"

//HTML Elements
const displayed_games = document.getElementById("displayed_games");
const categories = document.querySelectorAll("#nav_item");
export const loader = document.getElementById("loader");

//The two Game sections
export const game_details = document.getElementById("game_details");
export const games = document.getElementById("games");

//Variables
let gamesData = [];
let category = "mmorpg";

//instanciated objects
const display = new UI();

//Adding listeners to nav categories filters
for (let i = 0; i < categories.length; i++) {
    categories[i].addEventListener("click", () => {

        //Removing the blue color from all of them
        for (let j = 0; j < categories.length; j++) {
            categories[j].classList.remove("active")
        }

        //Adding the blue color to the clicked one
        categories[i].classList.add("active")

        category = categories[i].getAttribute("data-category");

        getGamesData();
    })

}



// ========================= API part ==================================

// Games API
async function getGamesData() {

    display.displayLoader();

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

    display.removeLoader();

    display.display_data(gamesData, displayed_games);

    //this code here to select them when they appear
    const cards = document.querySelectorAll(".card");
    addCardlisteners(cards)


}


getGamesData();