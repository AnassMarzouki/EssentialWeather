fetch('https://api.weatherapi.com/v1/current.json?key=6b572875ffc0415fb20141806241902&q=Oujda&aqi=no', {method:'GET', headers: {'X-RapidAPI-Key': '6b572875ffc0415fb20141806241902',
'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'}})
.then(res => res.json())
.then(newWeather => console.log(newWeather))