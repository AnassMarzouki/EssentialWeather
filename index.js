//Oujda
fetch('https://api.weatherapi.com/v1/current.json?key=6b572875ffc0415fb20141806241902&q=Oujda&aqi=no', {method:'GET', headers: {'X-RapidAPI-Key': '6b572875ffc0415fb20141806241902',
'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'}})
.then(res => res.json())
.then(data => {
    const cityName = data.location['name']
    const OujdaTemperature = data.current['temp_c']
    const OujdaWindSpeed = data.current['wind_kph']
    const OujdaWindDirection = data.current['wind_dir']

    const OujdaText = data.current.condition['text']
    const OujdaIcon = data.current.condition['icon']

    document.getElementById('meteo-oujda').innerHTML = `
        <h3>📌  ${cityName}</h3>
        <p>${OujdaText}</p>
        <h3>🌡️  ${OujdaTemperature}°C</h3>
        <h3>🌬️  ${OujdaWindDirection} @ ${OujdaWindSpeed}m/s</h3>
       
    `
    document.getElementById('oujda-icon').innerHTML= `
    <img src='${OujdaIcon}' class="icons">
    `
})

//Figuig
fetch('https://api.weatherapi.com/v1/current.json?key=6b572875ffc0415fb20141806241902&q=Figuig&aqi=no', {method:'GET', headers: {'X-RapidAPI-Key': '6b572875ffc0415fb20141806241902',
'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'}})
.then(res => res.json())
.then(datafg => {
    const fgName = datafg.location['name']
    const figuigTemperature = datafg.current['temp_c']
    const figuigWindSpeed = datafg.current['wind_kph']
    const figuigWindDirection = datafg.current['wind_dir']
    const figuigText = datafg.current.condition['text']
    const figuigIcon = datafg.current.condition['icon']

    document.getElementById('meteo-figuig').innerHTML = `
        <h3>📌  ${fgName}</h3>
        <p>${figuigText}</p>
        <h3>🌡️  ${figuigTemperature}°C</h3>
        <h3>🌬️  ${figuigWindDirection} @ ${figuigWindSpeed}m/s</h3>
        
    `

    document.getElementById('figuig-icon').innerHTML= `
    <img src='${figuigIcon}' class="icons">
    `
})