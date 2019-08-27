function convertFahrenheit(value) {
    var fahrenheit = 1.8*(value - 273.15) + 32 ;	
  	return Math.round(fahrenheit);
}

function convertCelcius(value) {
    var celcius = value - 273.15;
  	return Math.round(celcius);	
}

$("#send").click(function () {
	event.preventDefault();
	var cities = $('#cities').val();
	var country = $('#country').val();

 	$.ajax({url:"http://api.openweathermap.org/data/2.5/weather?q=" + cities + "," + country +"&appid=1136291543d398fff86ff109cf09ce1f", 
 		success:function(dados) {
	 		if ($("#celcius").prop("checked") === true) {
	    		$("#result").html("A temperatura de " + cities + " é: " + convertCelcius(dados.main.temp) + " &deg;C" + "</br> Temp. Máxima: " + convertCelcius(dados.main.temp_max) + " &deg;C" + "</br> Temp. Mínima: " + convertCelcius(dados.main.temp_min) + " &deg;C" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
	  		}else {
	    		$("#result").html("A temperatura de " + cities + " é: " + convertFahrenheit(dados.main.temp) + " &deg;F" + "</br> Temp. Máxima: " + convertFahrenheit(dados.main.temp_max) + " &deg;F" + "</br> Temp. Mínima: " + convertFahrenheit(dados.main.temp_min) + " &deg;F" + "</br>Umidade: " + dados.main.humidity + "%" + "</br>Pressão Atmosférica: " + dados.main.pressure + " hPa");
	    	}
        }, error: function() {
               $("#result").html("A cidade não foi encontrada");
   		}
	});
});