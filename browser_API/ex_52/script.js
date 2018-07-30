window.onload = function() {
    const URL = 'https://swapi.co/api/films/';
    const div = document.querySelector('div');
    let episodes = '';

    fetch(URL)
        .then((res) => {
            return(res.json());
        })
        .then((data) => {
            for(i=0; i<= data.results.length-1; i++) {
                episodes +='Title: '+data.results[i].title+'\n'+
                    'episode id: '+data.results[i].episode_id+'\n'+
                    'release date: '+data.results[i].release_date+'\n\n';
            }
            div.innerText = episodes;
        })
}