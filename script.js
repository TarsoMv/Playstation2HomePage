document.querySelector('#search').addEventListener('submit', async (event) =>{
        event.preventDefault();
        const nomeJogo = document.querySelector('#game_name').value;

        if(!nomeJogo){
            return console.log("Not Poggers");
        }

        const apiKey = 'SuaApiKey';

        // Encontrar o Slug do game pelo nome do game
        const searchUrl = `https://api.rawg.io/api/games?search=${nomeJogo}&key=${apiKey}`;

        const searchResponse = await fetch(searchUrl);
        const searchJson = await searchResponse.json();

        if (!searchJson.results || searchJson.results.length === 0) {
            console.log("Nenhum jogo encontrado.");
            return;
        }

        const slug = searchJson.results[0].slug;
        console.log("Slug encontrado:", slug);

        const gameUrl = `https://api.rawg.io/api/games/${slug}?key=${apiKey}`;
        const gameResponse = await fetch(gameUrl);
        const gameJson = await gameResponse.json();
        console.log(gameJson);

        let temPS2 = false;

        for(let i = 0; i < gameJson.platforms.length; i++){
            let a = gameJson.platforms[i]; 
            if(a.platform.id === 15){
                console.log("Tem para PS2");
                temPS2 = true;
                document.getElementById("visibilidadeGames").style.display = "flex";
                showInfo({
                    name: gameJson.name,
                    score: gameJson.metacritic,
                    launchYear: gameJson.released.split("-")[0],
                    gameGenre: gameJson.genres.map(g => g.name).join(', '),
                    backgroundImage: gameJson.background_image
                }); 
                break; 
            }
        }

        if(!temPS2){
           document.getElementById("visibilidadeGames").style.display = "none"; 
            showInfo({
                    name: "",
                    score: "",
                    launchYear: "",
                    gameGenre: "",
                    backgroundImage: "https://i.makeagif.com/media/11-02-2015/s5_fgM.gif"
            });
        }


});

function showInfo(json){
    document.querySelector("#gameName").innerHTML = json.name || "Não disponível";
    document.querySelector("#gameScore").innerHTML = `Nota: ${json.score}` ?? "Sem nota";
    document.querySelector("#gameLaunchYear").innerHTML = json.launchYear || "Data não disponível";
     document.querySelector("#gameGenre").innerHTML = json.gameGenre || "Gênero não encontrado"
    document.getElementById("fundoGame").style.backgroundImage = "url(" + json.backgroundImage + ")"; 
};

