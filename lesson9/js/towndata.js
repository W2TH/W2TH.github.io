const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const oldtowns = jsonObject['towns'];

    /*towns.splice(6,1);    
    towns.splice(2,2);    
    towns.splice(0,1);*/
    towns = [oldtowns[1],oldtowns[4],oldtowns[5]];
    for (let i = 0; i < towns.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let averageRainfall = document.createElement('p');
        let image = document.createElement('img');
        let motto = document.createElement('h3');

        h2.textContent = towns[i].name;
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        averageRainfall.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
        motto.textContent = towns[i].motto;
        
        if (towns[i].name == "Preston") {
          image.setAttribute('src', src = "images/preston-image.jpg");
          image.setAttribute('alt', 'Image of Preston');
      } else if (towns[i].name == "Fish Haven") {
          image.setAttribute('src', src = "images/fish-image.jpg");
          image.setAttribute('alt', 'Image of Fish Haven');
      } else {
          image.setAttribute('src', src = "images/soda-image.jpg");
          image.setAttribute('alt', 'Image of Soda Springs');
      }

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(averageRainfall);
        card.appendChild(image);
  
        document.querySelector('div.cards').appendChild(card);

      }

  });
