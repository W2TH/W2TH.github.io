const cityId = 5604473;
const apiKey = "7947d641816320463b620644081ccc3f";
const cityForecastUrl = "https://api.openweathermap.org/data/2.5/weather?units=imperial&id=" + cityId + "&appid=" + apiKey;
const cityFiveDayForecastUrl = "https://api.openweathermap.org/data/2.5/forecast?units=imperial&id=" + cityId + "&appid=" + apiKey;
const list_of_days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


fetch(cityForecastUrl)
    .then((response) => response.json())
    .then((jsObject) => {
        document.getElementById('currentCondition').innerHTML = jsObject.weather[0].main;
        document.getElementById('currentTemperature').innerHTML = Math.round(jsObject.main.temp);
        document.getElementById('currentHumidity').innerHTML = jsObject.main.humidity;
        document.getElementById('currentWindSpeed').innerHTML = Math.round(jsObject.wind.speed);
    });


fetch(cityFiveDayForecastUrl)
    .then((response) => response.json())
    .then((jsObject) => {

        var forecast_div = document.getElementById('forecast');

        for (let index = 0; index < jsObject.list.length; index++) {

            if (jsObject.list[index].dt_txt.substring(11) == "18:00:00") {

                let imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.list[index].weather[0].icon + '@2x.png';
                let date = new Date(jsObject.list[index].dt_txt);
                let day = date.getDay();
                let day_container = document.createElement('div');
                let day_name = document.createElement('p');
                let day_icon = document.createElement('img');
                let day_temp = document.createElement('p');

                day_name.innerHTML = list_of_days[day];
                day_icon.setAttribute('src', imagesrc);
                day_temp.innerHTML = Math.round(jsObject.list[index].main.temp) + '&deg; F';
                day_container.appendChild(day_name);
                day_container.appendChild(day_icon);
                day_container.appendChild(day_temp);
                forecast_div.appendChild(day_container);

            }

        }

    });
