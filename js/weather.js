const API_KEY = "b2e0b2e4f397ad4341c322584930a6c7";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child");
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    }); //js가 대신 해당 url로 접속해서 응답을 받은 객체를 저장해놓음
}
function onGeoError(){
    alert("Can't find you. No weather for you.");
}

//지역이 왜 koryong으로 나오는지 모르겠네.. 대구로 나와야하는데.. 할튼 안됨

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);