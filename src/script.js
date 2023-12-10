const resposta = document.getElementById('resposta');
const genresSelect = document.getElementById('genres');
const selectCountry = document.getElementById('pais');
const selectOscar = document.getElementById('oscar');
const actorInput = document.getElementById('ator');

const apiKey = "https://api.themoviedb.org/3/";
const apiKeyParam = "api_key=6b20fc50dab85187157b138eeaf7d305";

function recomendar() {
    const selectedGenre = genresSelect.value;
    const countrySelect = selectCountry.value;
    const oscarSelect = selectOscar.value;

    const actorName = actorInput.value.trim(); // Remover espaços em branco no início e no final

    const actorSearchUrl = `${apiKey}search/person?${apiKeyParam}&query=${actorName}&language=pt-BR`;

    fetch(actorSearchUrl)
        .then(res => res.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const actorId = data.results[0].id;

                const url = `${apiKey}discover/movie?${apiKeyParam}&with_genres=${selectedGenre}&with_original_language=${countrySelect}&oscar=${oscarSelect}&with_cast=${actorId}&language=pt-BR`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        if (data.results && data.results.length > 0) {
                            resposta.innerHTML = "";

                            const filmes = data.results;
                            const filmesEmbaralhados = shuffle(filmes);
                            const primeiros8Filmes = filmesEmbaralhados.slice(0, 8);

                            primeiros8Filmes.forEach(movie => {
                                const filme = movie.title;
                                const posterPath = movie.poster_path;
                                const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

                                resposta.innerHTML +=
                                    `
                                <div class="col-sm-12 col-md-3"> 
                                <div class="p-2"><h6>${filme}</h6></div>
                                <div  class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
                                    <img src="${posterUrl}" class="img-fluid pt-2" alt=""  >
                                </div>
                            </div>
                                `;
                            });
                        } else {
                            resposta.innerHTML = "Nenhum filme encontrado para os critérios selecionados.";
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao obter filmes:', error.message);
                    });
            } else {
                resposta.innerHTML = "Nenhum ator encontrado. A busca será feita sem considerar o ator.";
                
                // Continue com a busca sem considerar o ator
                const url = `${apiKey}discover/movie?${apiKeyParam}&with_genres=${selectedGenre}&with_original_language=${countrySelect}&oscar=${oscarSelect}&language=pt-BR`;

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        if (data.results && data.results.length > 0) {
                            resposta.innerHTML = "";

                            const filmes = data.results;
                            const filmesEmbaralhados = shuffle(filmes);
                            const primeiros8Filmes = filmesEmbaralhados.slice(0, 8);

                            primeiros8Filmes.forEach(movie => {
                                const filme = movie.title;
                                const posterPath = movie.poster_path;
                                const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;

                                resposta.innerHTML +=
                                    `
                                <div class="col-sm-12 col-md-3"> 
                                <div class="p-2"><h6>${filme}</h6></div>
                                <div  class="d-inline-flex focus-ring focus-ring-info py-1 px-2 text-decoration-none border rounded-2">
                                    <img src="${posterUrl}" class="img-fluid pt-2" alt=""  >
                                </div>
                            </div>
                                `;
                            });
                        } else {
                            resposta.innerHTML = "Nenhum filme encontrado para os critérios selecionados.";
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao obter filmes:', error.message);
                    });
            }
        })
        .catch(error => {
            console.error('Erro ao obter informações do ator:', error.message);
        });
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}