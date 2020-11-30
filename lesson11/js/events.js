function getTownEvents(city) {
    let url = "https://byui-cit230.github.io/weather/data/towndata.json";
    fetch(url)
        .then((response) => response.json())
        .then((jsonObject) => {

            const towns = jsonObject['towns'];
            for (let i = 0; i < towns.length; i++) {

                if (towns[i].name == city) {

                    for (let e = 0; e < towns[i].events.length; e++) {


                        console.log(towns[i].events[e])

                        let eventCard = document.createElement('div');
                        eventCard.setAttribute('class', 'event-card');

                        eventCard.textContent = towns[i].events[e];
                        document.getElementById('events').appendChild(eventCard);
                    }

                }


            }
        });
}