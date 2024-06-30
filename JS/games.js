//imports
import {UI} from "./ui.js"
import { game_details, games} from "./index.js";

//instanciated objects
const display = new UI();


export function addCardlisteners(cards) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function () {

            //Getting the id of the card clicked
            let id = cards[i].getAttribute("data-id");
            getGameDetail(id)

            //Hiding the games section and showing the detail section
            game_details.classList.remove("visually-hidden")
            games.classList.add("visually-hidden")

            display.displayLoader()
        }
        )
    }
}

// API for game details
async function getGameDetail(id) {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '4add8266f5msh17d866cd228e1e3p16f69fjsn415f23b76e5d',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };

    const api = await fetch(url, options);
    const response = await api.json();

    display.removeLoader()

    display.display_details(response, game_details)
}