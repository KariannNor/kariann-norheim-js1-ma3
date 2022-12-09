// from RAWG: api-key: 407d68cef17d400cb9a917a17840c6f5

const url =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=407d68cef17d400cb9a917a17840c6f5";

const html = document.querySelector(".games-container");
const displayError = (message) => `<div class="error">${message}</div>`;

async function getGames() {

    try {
        const response = await fetch(url);
        const data = await response.json();
        const games = data.results;
              
      setTimeout(function(){
          html.innerHTML = "";
      
        
        for (let i = 0; i < games.length; i++) {
          if (i === 8) {
            break;
          }
      
          html.innerHTML += `<div class="games"> 
                              <h3> ${games[i].name} </h3> 
                              <p>Rating: ${games[i].rating}</p> 
                              <p>Tags: ${games[i].tags.length}</P> 
                              </div>`;
        }
        }, 1500);
    } 
    catch(error){
        html.innerHTML = displayError("An error has occurred when retrieving the API");
    }
}

getGames();