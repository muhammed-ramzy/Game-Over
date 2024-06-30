//imports
import { loader } from "./index.js";

export class UI {

    //these 2 functions are related to the display of the sections of the games
    display_data(arr, htmlElement) {
        let blackBox = ``;

        for (let i = 0; i < arr.length; i++) {
            blackBox += `
                        <div class="col-sm-12 col-md-6 col-lg-4">
                        <div class="item">
                            <div class="card pb-0 bg-transparent" role="button" data-id = "${arr[i].id}" >
                                <div class="card-body p-3  pb-0 text-white">
                                <img src="${arr[i].thumbnail}" class="card-img-top" alt="...">
                                    <div class="d-flex justify-content-between pt-3">
                                        <h5 class="card-title my-14-font mb-0 fw-bold">${arr[i].title}</h5>
                                        <p id="price" class="my-12-font fw-bolder bg-primary py-1 px-2 rounded mb-1">
                                            Free
                                        </p>
                                    </div>
                                    <p title="${arr[i].short_description}" class="card-text my-14-font text-white opacity-50 text-center">${arr[i].short_description.split(" ", 10).join(" ")}
                                        </p>
                                </div>
                                <footer
                                    class="card-footer my-11-font d-flex justify-content-between border-top border-dark py-2 px-3 text-white">
                                    <p class="bg-secondary bg-opacity-25 fw-bolder px-2 rounded mb-0">${arr[i].genre}</p>
                                    <p class="bg-secondary bg-opacity-25 fw-bolder px-2 rounded mb-0">${arr[i].platform}</p>
                                </footer>
                            </div>
                        </div>
                    </div>
                    `;
        }

        htmlElement.innerHTML = blackBox;
    }

    display_details(gameObject, htmlElement) {
        let blackBox = `<div class="row justify-content-between text-white align-items-center py-4 px-2 px-md-0">
            <h2 class="col-11 sec-font-family">Details Game</h2>
            <button id="close_btn" class="col-1 btn-close btn-close-white">
            </button>
        </div>
        <div class="row px-2 px-md-0 border-bottom pb-4 border-dark-subtle">
            <div class="col-12 col-md-4">
                <img src="${gameObject.thumbnail}" class="img-fluid mb-3 mb-md-0" alt="">
            </div>
            <div class="col-12 col-md-8 text-white">
                <h3 class="sec-font-family">Title: <span>${gameObject.title}</span></h3>
                <ul class="list-unstyled main-font-family">
                    <li class="mb-3">Category: <span class="badge bg-info text-black">${gameObject.genre}</span></li>
                    <li class="mb-3">Platform: <span class="badge bg-info text-black">${gameObject.platform}</span></li>
                    <li class="mb-3">Status: <span class="badge bg-info text-black">${gameObject.status}</span></li>
                    </ul>

                <p class="main-font-family my-14-font fw-bold">${gameObject.description}</p>
                
                <a href="${gameObject.game_url}"><button class="btn btn-outline-warning text-white fw-bolder">Show Game</button></a>
            </div>
        </div>
        <!-- Requirements -->
        <section id="requirements" class=" px-2 px-md-0"> 
        <h3 class="text-center text-info p-2">Minimum System Requirements</h3>
        <ul class="list-unstyled main-font-family text-white">
                <li class="mb-3">Graphics: <span class="badge bg-info text-black">${(gameObject.minimum_system_requirements.graphics) == null ? "not found" : (gameObject.minimum_system_requirements.graphics)}</span></li>
                <li class="mb-3">Memory: <span class="badge bg-info text-black">${(gameObject.minimum_system_requirements.memory) == null ? "not found" : (gameObject.minimum_system_requirements.memory)}</span></li>
                <li class="mb-3">OS: <span class="badge bg-info text-black">${(gameObject.minimum_system_requirements.os) == null ? "not found" : (gameObject.minimum_system_requirements.os)}</span></li>
                <li class="mb-3">Processor: <span class="badge bg-info text-black">${(gameObject.minimum_system_requirements.processor) == null ? "not found" : (gameObject.minimum_system_requirements.processor)}</span></li>
                <li class="mb-3">Storage: <span class="badge bg-info text-black">${(gameObject.minimum_system_requirements.storage) == null ? "not found" : (gameObject.minimum_system_requirements.storage)}</span></li>
            </ul>
            </section>`;

        htmlElement.innerHTML = blackBox;

        const close_btn = document.getElementById("close_btn")

        close_btn.addEventListener("click", () => {
            game_details.classList.add("visually-hidden")
            games.classList.remove("visually-hidden")
        })
    }


    //Loader spinner related functions
    displayLoader() {
        loader.classList.remove("visually-hidden");
    }

    removeLoader() {
        loader.classList.add("visually-hidden");
    }
}