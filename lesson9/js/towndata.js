const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];


    for (let i = 0; i < towns.length; i++) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
        let card = document.createElement('div');
        let imagen = document.createElement('div');
        let finalcard = document.createElement('section')
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
          image.setAttribute('alt', 'Image of a wood in Preston');
        } else if (towns[i].name == "Fish Haven") {
          image.setAttribute('src', src = "images/fish-image.jpg");
          image.setAttribute('alt', 'Image of a house in Fish Haven');
        } else {
          image.setAttribute('src', src = "images/soda-image.jpg");
          image.setAttribute('alt', 'Image of a mountain in Soda Springs');
        }

        card.appendChild(h2);
        card.appendChild(motto);
        card.appendChild(yearFounded);
        card.appendChild(population);
        card.appendChild(averageRainfall);
        imagen.appendChild(image);
        card.setAttribute('class', 'information');
        imagen.setAttribute('class', 'imagen');
        finalcard.appendChild(card);
        finalcard.appendChild(imagen);

        document.querySelector('div.cards').appendChild(finalcard);
        finalcard.setAttribute('class', 'smallcard');

      }
    }

  });
