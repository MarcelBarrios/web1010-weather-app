const api_key = '65180f441b6371c9c76fd8cc06e5a6f2'

const api_url = 'http://api.openweathermap.org/data/2.5/weather?zip='

let isCelsius = true
let celsius;
let fahrenheit;

function getWeather(zip) {

$.get(`${api_url}${zip}&appid=${api_key}`).then(function(response) {
    console.log(response);
    console.log(response.name[0]);
    console.log(response.base);
    console.log(response.main.temp);
    console.log(response.weather[0].description);
    console.log(response.wind[1]);

    document.querySelector('.weather').textContent = response.weather[0].description
    //document.querySelector('.title').textContent = 'heuee'
    document.querySelector('.city').textContent = response.name

    celsius = Math.round(response.main.temp - 273.15) + ' °C'
    fahrenheit = Math.round(response.main.temp * 9 / 5 - 459.67) + ' °F'
    document.querySelector('.temp').textContent = celsius

    })
}
    getWeather(document.querySelector(".zip-code").value)


document.querySelector(".temp-btn").addEventListener('click', function(event) {
    if (isCelsius) {
        document.querySelector('.temp').textContent = fahrenheit
        document.querySelector('.temp-btn').textContent = 'Change to F'

        isCelsius = false
    } else {
        document.querySelector('.temp').textContent = celsius
        document.querySelector('.temp-btn').textContent = 'Change to C'

        isCelsius = true
    }
})

document.querySelector('.zip-code').addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        console.log( event.target.value );
        getWeather(event.target.value)
    }
})
