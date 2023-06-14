function getLocationEn() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherEn);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}
function getLocationUa() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getWeatherUa);
  } else { 
    console.log("Geolocation is not supported by this browser.");
  }
}

let weather;
let languach = 1;
let dayDate = 0;
let dataPoint = 0;

function weatherDyspBott0(event){
  const weatherData = weather.list[dayDate*8+dataPoint];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText = Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf;  
  putPicture(weatherData);

} 

function weatherDyspBott1(event){
  const weatherData = weather.list[dayDate*8+dataPoint+1];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText = Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf; 
  putPicture(weatherData); 
} 

function weatherDyspBott2(event){
  const weatherData = weather.list[dayDate*8+dataPoint+2];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText = Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf;  
  putPicture(weatherData);
} 

function weatherDyspBott3(event){
  const weatherData = weather.list[dayDate*8+dataPoint+3];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText= Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf;  
  putPicture(weatherData);
} 

function weatherDyspBott4(event){
  const weatherData = weather.list[dayDate*8+dataPoint+4];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText= Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf; 
  putPicture(weatherData); 
} 

function weatherDyspBott5(event){
  const weatherData = weather.list[dayDate*8+dataPoint+5];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText= Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf;  
  putPicture(weatherData);
} 

function weatherDyspBott6(event){
  const weatherData = weather.list[dayDate*8+dataPoint+6];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText= Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf;  
  putPicture(weatherData);
} 

function weatherDyspBott7(event){
  const weatherData = weather.list[dayDate*8+dataPoint+7];
  document.getElementById("humidity").innerText = weatherData.main.humidity + "%";
  document.getElementById("wind").innerText= Math.floor(weatherData.wind.speed * 3.6) + " kmh";
  document.getElementById("pressure").innerText = weatherData.main.pressure + " hPa";  
  document.getElementById("temp_kf").innerHTML = weatherData.main.temp_kf;  
  putPicture(weatherData);
} 


function weatherDay0(){
    dayDate=0;
    dataPoint = 0;
    weatherDyspUp();
    if (languach == 1){
      putWeatherEn(weather);
      putNamesEN();
    }
    else{
    putWeatherUa(weather);
    putNamesUA();
    }
    weatherDyspBott0()
    document.getElementById("day-0").style.backgroundColor = '#ffee00';
}
function weatherDay1(){
  dataPoint = 0;
  dayDate=1;
  weatherDyspUp();
  if (languach == 1){
    putWeatherEn(weather);
    putNamesEN();
  }
  else{
  putWeatherUa(weather);
  putNamesUA();
  }
    weatherDyspBott0()
    document.getElementById("day-1").style.backgroundColor = '#ffee00';
}
function weatherDay2(){
  dataPoint = 0;
  dayDate=2;
  weatherDyspUp();
  if (languach == 1){
    putWeatherEn(weather);
    putNamesEN();
  }
  else{
  putWeatherUa(weather);
  putNamesUA();
  }
    weatherDyspBott0()
    document.getElementById("day-2").style.backgroundColor = '#ffee00';
}
function weatherDay3(){
  dataPoint = 0;
  dayDate=3;
  weatherDyspUp();
  if (languach == 1){
    putWeatherEn(weather);
    putNamesEN();
  }
  else{
  putWeatherUa(weather);
  putNamesUA();
  }
    weatherDyspBott0()
    document.getElementById("day-3").style.backgroundColor = '#ffee00';
}

function translateUA(){
  getLocationUa()
}
function translateEN(){
  getLocationEn()
}

function getWeatherUa(position) {
  const pass = "http://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude +"&lon="+ position.coords.longitude +"&appid=4e1df42578fe2cd24648cb4fca64bd17&cnt&lang=ua ";
  fetch(pass)
.then((response) => {
    return response.json();
  })
  .then((data) => {
    weather = data;
    languach = 2;
    weatherDyspUp();
    putWeatherUa(weather);
    weatherDyspBott0();
    putNamesUA();
  getDateUa();
  getCityUA(data);
  });
}

function getWeatherEn(position) {
  const pass = "http://api.openweathermap.org/data/2.5/forecast?lat=" + position.coords.latitude +"&lon="+ position.coords.longitude +"&appid=4e1df42578fe2cd24648cb4fca64bd17&cnt&lang=en ";
  fetch(pass)
.then((response) => {
    return response.json();
  })
  .then((data) => {
    weather = data;
    languach = 1;
    weatherDyspUp();
    putWeatherEn(weather);
    weatherDyspBott0();
    putNamesEN();
  getDateEn();
  getCityEN(data);
  });
}

document.onload = getLocationUa();

    document.getElementById("square0").onclick = weatherDyspBott0;
    document.getElementById("square1").onclick = weatherDyspBott1;
    document.getElementById("square2").onclick = weatherDyspBott2;
    document.getElementById("square3").onclick = weatherDyspBott3;
    document.getElementById("square4").onclick = weatherDyspBott4;
    document.getElementById("square5").onclick = weatherDyspBott5;
    document.getElementById("square6").onclick = weatherDyspBott6;
    document.getElementById("square7").onclick = weatherDyspBott7;

    document.getElementById("day-0").onclick = weatherDay0;
    document.getElementById("day-1").onclick = weatherDay1;
    document.getElementById("day-2").onclick = weatherDay2;
    document.getElementById("day-3").onclick = weatherDay3;

    document.getElementById("UA").onclick = translateUA;
    document.getElementById("EN").onclick = translateEN;


function weatherDyspUp()
{
  if (dayDate != 0){
  getDataPoint(weather);
  }
  putIcons(weather);
  console.log(weather);
  console.log(dayDate);
  console.log(dataPoint);
  
  document.getElementById("day-0").style.backgroundColor = '#41B83F';
  document.getElementById("day-1").style.backgroundColor = '#41B83F';
  document.getElementById("day-2").style.backgroundColor = '#41B83F';
  document.getElementById("day-3").style.backgroundColor = '#41B83F';
}

  function putWeatherEn(data){
    for (let i = 0; i<8; i++){
      const weatherData = data.list[dayDate*8+dataPoint+i];
        const weather = weatherData.weather;
        const temp = Math.floor(weatherData.main.temp - 275.15);
        document.getElementById(i).innerHTML = temp + "<sup>o</sup>";
        document.getElementById("w" + i).innerHTML = weather[0].main + ", " + weather[0].description;
      const hoursTime = weatherData.dt_txt.slice(11);
      document.getElementById("time" + i).innerText = hoursTime.slice(0, 5);
      }
  }
  function putWeatherUa(data){
    for (let i = 0; i<8; i++){
      const weatherData = data.list[dayDate*8+dataPoint+i];
        const weather = weatherData.weather;
        const temp = Math.floor(weatherData.main.temp - 275.15);
        document.getElementById(i).innerHTML = temp + "<sup>o</sup>";
        let mainWeather = weather[0].main;
        switch(mainWeather){
          case "Clear":
          mainWeather = "Чисте небо";
          break;
          case "Clouds":
          mainWeather = "Хмари";
          break;
          case "Snow":
          mainWeather = "Сніг";
          break;
          case "Rain":
          mainWeather = "Дощ";
          break;
        }
        document.getElementById("w" + i).innerHTML = mainWeather + ", " + weather[0].description;
      const hoursTime = weatherData.dt_txt.slice(11);
      document.getElementById("time" + i).innerText = hoursTime.slice(0, 5);
      }
  }

  function putNamesEN(){
    document.getElementById("wind_name").innerText = "Wind";
    document.getElementById("humidity_name").innerText = "Humidity";
    document.getElementById("temp_kf_name").innerText = "Temp KF";
    document.getElementById("pressure_name").innerText = "Pressure";
    document.getElementById("details").innerText = "Details";
  }

  function putNamesUA(){
    document.getElementById("wind_name").innerText = "Вітер";
    document.getElementById("humidity_name").innerText = "Волога";
    document.getElementById("temp_kf_name").innerText = "KF темп";
    document.getElementById("pressure_name").innerText = "Тиск";
    document.getElementById("details").innerText = "Деталі погоди";
  }

  function putIcons(data)
  {
    for(let i = 0; i<8; i++){
     const weatherData = data.list[dayDate*8+dataPoint+i];
     const weather = weatherData.weather;
      switch(weather[0].icon){
        case "01d":
        //document.getElementById("icon" + i).innerHTML = "<a><img src=" +"sun.png" + "></a> <p id = " +"time"+ i + " class = " + "time" + "></p>"
        document.getElementById("icon" + i).src = "sun.png";
        break;
        case "02d":
        document.getElementById("icon" + i).src = "sun_cloud.png";
        break;
        case "03d":
        document.getElementById("icon" + i).src = "clouds.png";
        break;
        case "04d":
        document.getElementById("icon" + i).src = "rain_clouds.png";
        break;
        case "09d":
        document.getElementById("icon" + i).src = "rain.png";
        break;
        case "10d":
          document.getElementById("icon" + i).src = "rain.png";
          break;
        case "11d":
        document.getElementById("icon" + i).src = "storm.png";
        break;
        case "13d":
          document.getElementById("icon" + i).src = "snow.png";
          break;
        case "01n":
        document.getElementById("icon" + i).src = "night.png";
        break;
        case "02n":
        document.getElementById("icon" + i).src = "cloud_night.png";
        break;
        case "03n":
        document.getElementById("icon" + i).src = "cloud_night.png";
        break;
        case "04n":
        document.getElementById("icon" + i).src = "cloud_night.png";
        break;
        case "09n":
        document.getElementById("icon" + i).src = "night_rain.png";
        break;
        case "10n":
        document.getElementById("icon" + i).src = "night_rain.png";
        break;
        case "11n":
        document.getElementById("icon" + i).src = "storm.png";
        break;
        case "13n":
          document.getElementById("icon" + i).src = "snow.png";
          break;
      }
    }
  }
  

  function putPicture(weatherData){
    const weather = weatherData.weather;
    switch(weather[0].icon){
      case "01d":
      document.getElementById("picture").src = "PhSky.jpg";
      break;
      case "02d":
      document.getElementById("picture").src = "PhSkyClouds2.jpg";
      break;
      case "03d":
      document.getElementById("picture").src = "PhClouds1.jpg";
      break;
      case "04d":
      document.getElementById("picture").src = "PhClouds2.jpg";
      break;
      case "09d":
      document.getElementById("picture").src = "PhRain.jpg";
      break;
      case "10d":
        document.getElementById("picture").src = "PhRain.jpg";
        break;
      case "11d":
      document.getElementById("picture").src = "PhStorm.jpg";
      break;
      case "13d":
        document.getElementById("picture").src = "PhSnow.jpg";
        break;
      case "01n":
      document.getElementById("picture").src = "PhNight.jpg";
      break;
      case "02n":
      document.getElementById("picture").src = "PhNight.jpg";
      break;
      case "03n":
      document.getElementById("picture").src = "PhNight.jpg";
      break;
      case "04n":
      document.getElementById("picture").src = "PhNight.jpg";
      break;
      case "09n":
      document.getElementById("picture").src = "PhNightRain.jpg";
      break;
      case "10n":
      document.getElementById("picture").src = "PhNightRain.jpg";
      break;
      case "11n":
      document.getElementById("picture").src = "PhNightStorm.jpg";
      break;
      case "13n":
      document.getElementById("picture").src = "PhNightSnow.jpg";
      break;
    }
  }

  function getDateUa(){
    let day = new Date().toDateString();
    // console.log(day)
    let cday = parseInt(day.slice(8, 10));
    // console.log(cday)
    let cmonth = day.slice(4,7)
    switch(cmonth){
      case "Jan":
        cmonth = 0;
      break;
      case "Feb":
        cmonth = 1;
      break;
      case "Mar":
        cmonth = 2;
      break;
      case "Apr":
        cmonth = 3;
      break;
      case "May":
        cmonth = 4;
      break;
      case "Jun":
        cmonth = 5;
      break;
      case "Jul":
        cmonth = 6;
      break;
      case "Aug":
        cmonth = 7;
      break;
      case "Sep":
        cmonth = 8;
      break;
      case "Oct":
        cmonth = 9;
      break;
      case "Nov":
        cmonth = 10;
      break;
      case "Dec":
        cmonth = 11;
      break;
    }
    for(let i = 0; i<4; i++){
    let currentday = new Date(2022, cmonth, cday + i).toDateString();
    let month = currentday.slice(4, 7);
    switch(month){
      case "Jan":
        month = "Січ";
      break;
      case "Feb":
        month = "Лют";
      break;
      case "Mar":
        month = "Бер";
      break;
      case "Apr":
        month = "Кві";
      break;
      case "May":
        month = "Тра";
      break;
      case "Jun":
        month = "Чер";
      break;
      case "Jul":
        month = "Лип";
      break;
      case "Aug":
        month = "Сер";
      break;
      case "Sep":
        month = "Вер";
      break;
      case "Oct":
        month = "Жов";
      break;
      case "Nov":
        month = "Лис";
      break;
      case "Dec":
        month = "Гру";
      break;
    }
    const date = month + currentday.slice(7, 10)
    // console.log(month)
    document.getElementById("day"+i).innerText = date;
  }
}

function getDateEn(){
    let day = new Date().toDateString();
    // console.log(day)
    let cday = parseInt(day.slice(8, 10));
    // console.log(cday)
    let cmonth = day.slice(4,7)
    
    switch(cmonth){
      case "Jan":
        cmonth = 0;
      break;
      case "Feb":
        cmonth = 1;
      break;
      case "Mar":
        cmonth = 2;
      break;
      case "Apr":
        cmonth = 3;
      break;
      case "May":
        cmonth = 4;
      break;
      case "Jun":
        cmonth = 5;
      break;
      case "Jul":
        cmonth = 6;
      break;
      case "Aug":
        cmonth = 7;
      break;
      case "Sep":
        cmonth = 8;
      break;
      case "Oct":
        cmonth = 9;
      break;
      case "Nov":
        cmonth = 10;
      break;
      case "Dec":
        cmonth = 11;
      break;
    }
    for(let i = 0; i<4; i++){
    let currentday = new Date(2023, cmonth, cday + i).toDateString(); 
    // console.log(cmonth)
    let month = currentday.slice(4, 7);
    const date = month + currentday.slice(7, 10)
    // console.log(date)
    document.getElementById("day"+i).innerText = date;
  }
}

function getDataPoint(data){
  let i = 0;
  let midlenight = 0;
  
  
  for(let n=0; n < 1;){
    const weatherData = data.list[i];
    time = parseInt(weatherData.dt_txt.slice(-8));
    console.log(time)
    i++;
    if(time == midlenight){
      n++;
    }
  }
  dataPoint = i -1;
}

function getCityEN(data){
  const city = data.city;
  const country = city.country;
  const name = city.name;
  console.log(city)
  const yourPoint = "Country: "+ country + ", city: " + name;
  document.getElementById("town").innerText = yourPoint;
}

function getCityUA(data){
  const city = data.city;
  const country = city.country;
  const name = city.name;
  console.log(city)
  const yourPoint = "Країна: "+ country + ", місто: " + name;
  document.getElementById("town").innerText = yourPoint;
}
