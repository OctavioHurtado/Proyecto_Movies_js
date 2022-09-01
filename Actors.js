const API_KEY = 'api_key=44975c4ef9a06eaac7c3f859384e1981&language=es-US';
const URLBASE = 'https://api.themoviedb.org/3';
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
let URLactual = window.location.href
URLactual = URLactual.split("?")
// console.log (URLactual);

const movie_id = URLactual[1]
console.log (movie_id);
const URLCREDITS = URLBASE + `/movie/${movie_id}/credits?` + API_KEY;
const URLMOVIE = URLBASE + `/movie/${movie_id}?` + API_KEY;
console.log (URLCREDITS)
console.log (URLMOVIE)
const main = document.getElementById('main')
// const form = document.getElementById('form')
// const buscar = document.getElementById('Buscar')

getCredits(URLCREDITS);

function getCredits(url){
    fetch(url).then(res => res.json()).then(data =>{
        // console.log(data.results)
        //  showCredits(data.results);
    })
    
}

// getMovie(URLMOVIE);

// function getMovie(url){
//     fetch(url).then(res => res.json()).then(data =>{
//         // console.log(data.results)
//          showMovie(data.results);
//     })
// }


function showCredits(data){
    main.innerHTML = '';

   

    data.forEach(movie =>{
        const{name} = movie;
        const creditsEL = document.createElement('div');
        creditsEL.classList.add('movie');
        creditsEL.innerHTML = `
        <img src="${URLCREDITS + name}" alt="${name}">


        <div class="actors-info">
            <h3>${naem}</h3>
            <span class="${getcolor(name)}">${name}</span>
        </div>
        
        <div class="credits-info">
            <h3>Actores</h3>
            ${name};
           
        </div>
                
        `
        main.appendChild(creditsEL);
 

    })
}

function showCredits(data){
    main.innerHTML = '';

}

function getcolor(vote){
    if(vote>0){
        return 'green'
    }

}