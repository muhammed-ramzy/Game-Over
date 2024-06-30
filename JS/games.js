//imports

import {UI} from "./ui.js"
import { game_details, games, displayLoader, removeLoader } from "./index.js";
const display = new UI();


export function addCardlisteners(cards) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", function (eventInfo) {
            let id = cards[i].getAttribute("data-id");
            getGameDetail(id)
            game_details.classList.remove("visually-hidden")
            games.classList.add("visually-hidden")

            displayLoader()
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

    removeLoader()

    display.display_details(response, game_details)

    
    console.log(response);
}