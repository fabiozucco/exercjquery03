var APIKEY = "1136291543d398fff86ff109cf09ce1f";
var ENDPOINT = "http://api.openweathermap.org/data/2.5/weather";

function convertFahrenheit(value) {
    var fahrenheit = 1.8*(value - 273.15) + 32 ;	
  	return Math.round(fahrenheit);
}

function convertCelcius(value) {
    var celcius = value - 273.15;
  	return Math.round(celcius);	
}

function getLocation() {
  if (navigator.geolocation) {
  	navigator.geolocation.getCurrentPosition(function(position) {
    getWeatherByPosition(position.coords.latitude, position.coords.longitude);
  	});
  } else {
    $("#result").html("Geolocation não está suportado em seu navegador.");
  }
}

function getWeatherByName (cities, country) {
  $.ajax({
    dataType: "json",
    url: ENDPOINT + "?q=" + cities + "," + country.toLowerCase() + "&appid=" + APIKEY,
    success: onReturnSuccess,
    error: onError
  });
}

function getWeatherByPosition (lat, lon) {
  $.ajax({
    dataType: "json",
    url: ENDPOINT + "?lat=" + lat + "&lon=" + lon + "&appid=" + APIKEY,
    success: onReturnSuccess,
    error: onError
  });
}

function onReturnSuccess (dados) {
	var cities = dados.name
	if ($("#celcius").prop("checked") === true) {
	    $("#result").html("A temperatura de " + cities + " é: " + convertCelcius(dados.main.temp) + " &deg;C" + "</br> Temp. Máxima: " + convertCelcius(dados.main.temp_max) + " &deg;C" + "</br> Temp. Mínima: " + convertCelcius(dados.main.temp_min) + " &deg;C" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
	}else {
	    $("#result").html("A temperatura de " + cities + " é: " + convertFahrenheit(dados.main.temp) + " &deg;F" + "</br> Temp. Máxima: " + convertFahrenheit(dados.main.temp_max) + " &deg;F" + "</br> Temp. Mínima: " + convertFahrenheit(dados.main.temp_min) + " &deg;F" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
	}
}

function onError (dados) {
	$("#result").html("Cidade não encontrada");
}

$("#send").click(function () {
	event.preventDefault();
	getWeatherByName($("#cities").val(),$("#country").val());
});

$("#geo").click(function () {
	event.preventDefault();
	getLocation();
});




//  	$.ajax({url:"http://api.openweathermap.org/data/2.5/weather?q=" + cities + "," + country +"&appid=1136291543d398fff86ff109cf09ce1f", 
//  		success:function(dados) {
// 	 		if ($("#celcius").prop("checked") === true) {
// 	    		$("#result").html("A temperatura de " + cities + " é: " + convertCelcius(dados.main.temp) + " &deg;C" + "</br> Temp. Máxima: " + convertCelcius(dados.main.temp_max) + " &deg;C" + "</br> Temp. Mínima: " + convertCelcius(dados.main.temp_min) + " &deg;C" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
// 	  		}else {
// 	    		$("#result").html("A temperatura de " + cities + " é: " + convertFahrenheit(dados.main.temp) + " &deg;F" + "</br> Temp. Máxima: " + convertFahrenheit(dados.main.temp_max) + " &deg;F" + "</br> Temp. Mínima: " + convertFahrenheit(dados.main.temp_min) + " &deg;F" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
// 	    	}
//         }, error: function() {
//                $("#result").html("A cidade não foi encontrada");
//    		}
// 	});
// });




// function showPosition(position) {
//     var lat = position.coords.latitude
//     var lon =  position.coords.longitude
// 	$.ajax({url:"http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon +"&appid=1136291543d398fff86ff109cf09ce1f", 
//  		success:function(dados) {
// 	 		if ($("#celcius").prop("checked") === true) {
// 	    		$("#result").html("A temperatura de " + dados.name + " é: " + convertCelcius(dados.main.temp) + " &deg;C" + "</br> Temp. Máxima: " + convertCelcius(dados.main.temp_max) + " &deg;C" + "</br> Temp. Mínima: " + convertCelcius(dados.main.temp_min) + " &deg;C" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
// 	  		}else {
// 	    		$("#result").html("A temperatura de " + cities + " é: " + convertFahrenheit(dados.main.temp) + " &deg;F" + "</br> Temp. Máxima: " + convertFahrenheit(dados.main.temp_max) + " &deg;F" + "</br> Temp. Mínima: " + convertFahrenheit(dados.main.temp_min) + " &deg;F" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
// 	    	}
//         }, error: function() {
//                $("#result").html("A cidade não foi encontrada");
//    		}
// 	});
// }


