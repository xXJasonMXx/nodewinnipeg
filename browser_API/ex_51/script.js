window.onload = function () {
    let response = {
        "title": "A New Hope", 
        "episode_id": 4, 
        "species": [
          "https://swapi.co/api/species/5/", 
          "https://swapi.co/api/species/3/", 
          "https://swapi.co/api/species/2/", 
          "https://swapi.co/api/species/1/", 
          "https://swapi.co/api/species/4/"
        ]
      }
    const div = document.getElementById('jsonresponse');
    let header = '<h1>'+response.title+'</h1>';
    let episode = '<p>'+response.episode_id+'</p>'
    let links = '';

    for (i=0; i<response.species.length; i++) {
        links += '<a href='+response.species[i]+'>'+'link: '+i+'</a> \n'
    }

    response = JSON.stringify(response);
    response = JSON.parse(response);

    console.log(response.species.length)
    
    div.innerHTML = header+'\n'+
                    'episode: '+episode+'\n'+
                    links;
}