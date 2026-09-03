
async function fetchData(city){
   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d7f15409d3dba225e69c91860805b48&units=metric`)
 
    .then(res=>res.json())
    .then(data=>renderInfo(data))
    .catch(err=>console.log(err))
}
function renderInfo(data) {

  const sunrise = new Date(data.sys.sunrise * 1000);

  const day = sunrise.toLocaleString("en-US",{weekday:"long"});
  const date = sunrise.toLocaleDateString("en-GB");
  const time = sunrise.toLocaleTimeString([],{
    hour:"2-digit",
    minute:"2-digit"
  });

  document.querySelector("#infoWeather").innerHTML = `
    <div class="text-center">
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">

      <h1 class="display-4 fw-bold">${Math.round(data.main.temp)}°C</h1>

      <h3>${data.name}, ${data.sys.country}</h3>

      <p class="text-capitalize">${data.weather[0].description}</p>

      <hr>

      <div class="row text-center">
        <div class="col-6">
          <h5>💧 ${data.main.humidity}%</h5>
          <small>Humidity</small>
        </div>

        <div class="col-6">
          <h5>🌅 ${time}</h5>
          <small>Sunrise</small>
        </div>
      </div>

      <p class="mt-3">📅 ${day}, ${date}</p>
    </div>
  `;
}
function displayInfo(){
    const city= document.querySelector("#cityName").value
    fetchData(city)

}
document.querySelector("#btnDisplay").addEventListener("click",displayInfo)