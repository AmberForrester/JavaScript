function getCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const res = await fetch(
          `https://weatherapi-com.p.rapidapi.com/current.json?q=${latitude}%2C${longitude}`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
              "x-rapidapi-key": "a23e84db5dmsh74b15f12dc48aaep19a9b8jsn944b9357b4f2",
            },
          }
        );
        const data = await res.json();
        updateWeatherData(data);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
  
 
  function updateWeatherData(data) {
    console.log(data);
    document.getElementById("location").innerHTML = data.location.name;
    document.getElementById("locationParts").innerHTML =
      "<i class='bi bi-geo-alt'></i> " +
      data.location.region +
      " , " +
      data.location.country;
    document.getElementById("dateTime").innerHTML =
      "<i class='bi bi-calendar'></i> " + data.location.localtime.substr(0, 10);
    document.getElementById("txtWord").innerText = data.current.condition.text;
    document.getElementById("humidity").innerText =
      "Humidity: " + data.current.humidity + "%";
    document.getElementById("precipitation").innerText =
      "Precipitation: " + data.current.precip_mm + "%";
    document.getElementById("wind").innerText =
      "Wind: " + data.current.wind_kph + "km/h";
    document.getElementById("temperatureC").innerText =
      data.current.temp_c + " °C";
    document.getElementById("temperatureF").innerText =
      data.current.temp_f + " °F";
    document.getElementById("weatherIcon").src =
      "https:" + data.current.condition.icon;
  }
  
  
  function handleSearch() {
    let city = document.getElementById("searchTxt").value;
  
    if (city == "") {
      getCurrentLocation();
    } else {
      getWeatherData(city);
    }
  }
  

  async function getWeatherData(city) {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
      {
        method: "GET",
        headers: {
            'X-RapidAPI-Key': 'a23e84db5dmsh74b15f12dc48aaep19a9b8jsn944b9357b4f2',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        },
      }
    );
    const data = await res.json();
    updateWeatherData(data);
  }
  
 
  document.getElementById("searchBtn").addEventListener("click", handleSearch);