$(function () {
    // listen for clicks on search button
    $("#search-button").on("click", handleSearch);
  
    function handleSearch(event) {
      event.preventDefault();
      var city = $("#city-input").val();
  
      var apiKey = "166a433c57516f51dfab1f7edaed8413";
      var queryURL =
        "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city +
        "&appid=" +
        apiKey +
        "&units=imperial";
  
      $.ajax({
        url: queryURL,
        method: "GET",
      }).then(function (response) {
        console.log(response);
        var forecastDays = [];
        forecastDays.push(response.list[0]);
        forecastDays.push(response.list[8]);
        forecastDays.push(response.list[16]);
        forecastDays.push(response.list[24]);
        forecastDays.push(response.list[32]);
        
        
        // $("#history").append(forecastDays)
        // forecastDays = localStorage.getItem("forecastDays", JSON.parse);

        for (var i = 0; i < forecastDays.length; i += 1) {
            var forecastContainer = $("<div>").addClass("forecast-day");
            var dateEl = $("<div>").text(forecastDays[i].dt);
            var iconEl = $("<div>").text("icon id: " + forecastDays[i].weather[0].icon);
            var tempEl = $("<div>").text("Temp: " + forecastDays[i].main.temp + " °F");
            var humidityEl = $("<div>").text("Humidity: " + forecastDays[i].main.humidity + "%");
          
          localStorage.setItem("forecastDays", JSON.stringify(forecastDays));


          forecastContainer.append(dateEl, iconEl, tempEl, humidityEl);
          $("#forecast").append(forecastContainer);
        }
      });
    }

    // make a function render get info onLoad jquery

    // json.parse local sotrage get Items "forecastDays"

    // copy paste Render code from get Items to display local storage items

  });