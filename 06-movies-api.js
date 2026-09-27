const API_URL = "https://api.tvmaze.com/shows";

const seriesList = document.querySelector("#movies-list");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#movie-search");
const resultsCount = document.querySelector("#results-count");
const emptyMessage = document.querySelector("#empty-message");
const errorMessage = document.querySelector("#error-message");

let series = [];


async function getMovies() {

    try {

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Erro ao comunicar com a API.");
        }

        const data = await response.json();        

        console.log("Dados recebidos da API:", data);        

        const seriesJSON = JSON.stringify(data);

        console.log("JSON:", seriesJSON);        

        series = JSON.parse(seriesJSON);

        console.log("Objeto JavaScript:", series);

        displayMovies(series);

    } catch (error) {

        console.error("Erro:", error);

        showError();

    }
}

function displayMovies(movieList) {

    seriesList.innerHTML = "";

    emptyMessage.hidden = movieList.length > 0;

    resultsCount.textContent =
        `${movieList.length} série${movieList.length !== 1 ? "s" : ""} encontrada${movieList.length !== 1 ? "s" : ""}.`;

    movieList.slice(0, 10).forEach(movie => {

        const article = document.createElement("article");

        article.classList.add("movie-card");

        article.innerHTML = `
            <img
                src="${movie.image?.medium || "https://placehold.co/300x450?text=Sem+imagem"}"
                alt="Capa da série ${movie.name}"
                loading="lazy"
            >

            <div class="movie-card-content">

                <h3>${movie.name}</h3>

                <p class="movie-card-details">

                    <span>
                        ${movie.premiered
                            ? new Date(movie.premiered).getFullYear()
                            : "Ano desconhecido"}
                    </span>

                    <span
                        class="movie-rating"
                        aria-label="Classificação ${movie.rating?.average ?? "não disponível"} de 10"
                    >
                        ★ ${movie.rating?.average ?? "N/A"}
                    </span>

                </p>

            </div>
        `;

        seriesList.appendChild(article);

    });

    seriesList.setAttribute("aria-busy", "false");
}

function searchMovies(event) {

    event.preventDefault();

    const searchTerm =
        searchInput.value.trim().toLowerCase();

    const filteredMovies = series.filter(movie =>
        movie.name.toLowerCase().includes(searchTerm)
    );

    displayMovies(filteredMovies);
}


function showError() {

    seriesList.innerHTML = "";

    errorMessage.hidden = false;

    resultsCount.textContent =
        "Não foi possível carregar as séries.";

    seriesList.setAttribute("aria-busy", "false");
}



searchForm.addEventListener("submit", searchMovies);

getMovies();
