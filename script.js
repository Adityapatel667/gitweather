console.log("hello  world");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e59a77a3acmshd69dd837b6dfe64p1b05bejsn59d2d22d42b2",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getweather = (city) => {
//   city.toUpperCase();
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
     
      cloud_pact.innerHTML = response.temp + "°C";
      //    feels_like.innerHTML =response.feels_like;
      humidity.innerHTML = response.humidity;
      max_temp.innerHTML = response.max_temp;
      min_temp.innerHTML = response.min_temp;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      temp.innerHTML = response.cloud_pct +  "°C";
      wind_degrees.innerHTML = response.wind_degrees;
      wind_speed.innerHTML = response.wind_speed + "Km/hr";
      console.log(response);
    })
    .catch((err) => console.error(err));
};

search.addEventListener("click", (e) => {
  e.preventDefault();
  //   console.log(city.value);
  getweather(city.value);
});

getweather("delhi");

const array = ['mumbai' , 'delhi' , 'lucknow' ] ;

array.forEach(e => {
    fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + e,
        options
      )
        .then((response) => response.json())
        .then((response) =>  console.log(response)) ;
   
    
});















