
const API_KEY = 'api_key=44975c4ef9a06eaac7c3f859384e1981&language=es-US&page=1';
const URLBASE = 'https://api.themoviedb.org/3';
const URLAPI =  URLBASE + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
const buscarURL = URLBASE + '/search/movie?' + API_KEY;


const main = document.getElementById('main')
const form = document.getElementById('form')
const buscar = document.getElementById('Buscar')


getMovies(URLAPI);

function getMovies(url){
    fetch(url).then(res => res.json()).then(data =>{
        console.log(data.results)
        showMovies(data.results);
    })
}

function showMovies(data){
    main.innerHTML = '';
   

    data.forEach(movie =>{
        const{title, poster_path, vote_average, overview} = movie;
        const movieEL = document.createElement('div');
        movieEL.classList.add('movie');
        movieEL.innerHTML = `
        <img src="${IMG_URL + poster_path}" alt="${title}">


        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getcolor(vote_average)}">${vote_average}</span>

        </div>
        <div class="overview">
            <h3>Vista General</h3>
            ${overview};
        </div>
        
        
        `
        main.appendChild(movieEL);
 

    })
}

function getcolor(vote){
    if(vote>8){
        return 'green'
    }

}


form.addEventListener('submit', (e) =>{
    e.preventDefault();

    const buscarpeli = buscar.value;


    if(buscarpeli) {
        getMovies(buscarURL + '&query='+buscarpeli)
    }

})



// let url = 'https://rickandmortyapi.com/api/character/1';
// let personaje;
// axios.get(url).then((response) => console.log(response.data));
// console.log(personaje);
// let API_KEY = "75acb12ddb0f5d4962f65b4a16f0583d";

// async function obtenerPersonaje(id) {
//   let url = `https://rickandmortyapi.com/api/character/${id}`;
//   try {
//     let response = await axios.get(url)
//     return response.data
//   } catch (e) {
//     console.log(e)
//     return null
//   }
// }

// async function getLatestMovies() {
//     let moviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`;

//     try {
//         let response = await axios.get(moviesUrl);
//         return response.data.results
//     } catch (e) {
//         return []
//     }
// }

// obtenerPersonaje(4).then((personaje) => console.log(personaje.origin.name))
// getLatestMovies().then((movies) => {
//     for (let movie of movies) {
//         console.log(movie)
//     }
// })