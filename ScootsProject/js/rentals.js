fetch()
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById("currentDay").innerHTML = list_of_days[date.getDay()];
        document.getElementById('currentCondition').innerHTML = jsObject.weather[0].main;
        document.getElementById('currentTemperature').innerHTML = Math.round(jsObject.main.temp);
        document.getElementById('currentHumidity').innerHTML = jsObject.main.humidity;
        document.getElementById('currentWindSpeed').innerHTML = Math.round(jsObject.wind.speed);
        let imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '@2x.png';
        document.getElementById("currentIcon").setAttribute('src', imagesrc);
    });