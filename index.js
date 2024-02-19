fetch('https://my.meteoblue.com/packages/current?apikey=2SHnK4B0jfvPVzXC&lat=34.6805&lon=-1.91781&asl=279&format=json'
, {method:"GET"})
.then(res => res.json())
.then(data => {
    const cityName = 'Oujda'
    const OujdaTemperature = data.data_current['temperature']
    const OujdaWindSpeed = data.data_current['windspeed']

    document.getElementById('meteo-oujda').innerHTML = `
        <h3>📌  ${cityName}</h3>
        <h3>🌡️  ${OujdaTemperature}°C</h3>
        <h3>🌬️  ${OujdaWindSpeed}m/s</h3>
    `
})

fetch('https://my.meteoblue.com/packages/current?apikey=2SHnK4B0jfvPVzXC&lat=32.1054749&lon=-1.2465837&asl=279&format=json', {method:"GET"})
.then(ans => ans.json())
.then(weather => {
    console.log(weather)
    const fgName = 'Figuig'
    const figuigTemperature = weather.data_current['temperature']
    const figuigWindSpeed = weather.data_current['windspeed']

    document.getElementById('meteo-figuig').innerHTML = `
    <h3>📌  ${fgName}</h3>
    <h3>🌡️  ${figuigTemperature}°C</h3>
    <h3>🌬️  ${figuigWindSpeed}m/s</h3>
`
})