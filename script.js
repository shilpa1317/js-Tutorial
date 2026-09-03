
async function fetchData(city){
   await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3d7f15409d3dba225e69c91860805b48&units=metric`)
 
    .then(res=>res.json())
    .then(data=>renderInfo(data))
    .catch(err=>console.log(err))
}
function renderInfo(data){
const sunrise = new Date(data.sys.sunrise * 1000);

const day = sunrise.toLocaleString("en-US", { weekday: "long" });
const date = sunrise.toLocaleDateString("en-GB");
const time = sunrise.toLocaleTimeString([], {
  hour: "2-digit",
  minute: "2-digit"
});
    document.querySelector("#infoWeather").innerHTML=`
     <p><b>${data.name}</b> <i>${data.sys.country}</i></p>
                <p>Temp : ${data.main.temp} <sup>0</sup>C</p>
                <p><span>${data.weather[0].main}</span>
                :
                <span>${data.weather[0].description}</span></p>
                    <p>Day : ${day}</p>
                    <p>Date : ${date}</p>
                    <p>Sunrise : ${time}</p>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="img" />
    `
}
function displayInfo(){
    const city= document.querySelector("#cityName").value
    fetchData(city)

}
document.querySelector("#btnDisplay").addEventListener("click",displayInfo)