// Pour réaliser cet exercice, vous utiliserez l'api d'openweather.
// Ici l'end point à utiliser --> https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// Remplacez lat et lon par les coordonnées de votre choix.
// Remplacez API key par votre clé d'API. ( s'inscrire sur le site d'openweather pour obtenir une clé d'API)

//fetch("https://api.openweathermap.org/data/3.0/onecall?lat=50°40'58.7&lon=2°53'14.1&exclude={part}&appid=d6b2eae6117ae51cdcacc0d685ea757e")
if("geolocation" in navigator){
navigator.geolocation.getCurrentPosition((position) =>{
    
    fetch("https://api.openweathermap.org/data/2.5/weather?lat="+position.coords.latitude+"&lon="+position.coords.longitude+"&appid=d6b2eae6117ae51cdcacc0d685ea757e&units=metric")
    .then(response => response.json())
    .then(data =>{
        console.log(data)
        let temp = data.main.temp
        let ville = data.name
        document.querySelector(".temperature").textContent = temp
        document.querySelector(".ville").textContent = ville
    })
})}


const changerVille = document.querySelector(".change");
changerVille.addEventListener("click", ()=>{
    let ville  = prompt("Choisir une ville")
    recevoirTemp(ville);

})



function recevoirTemp(city){
   fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d6b2eae6117ae51cdcacc0d685ea757e&units=metric") 
    .then(response => response.json())
    .then(data =>{
        let temp = data.main.temp
        let ville = data.name
        document.querySelector(".temperature").textContent = temp
        document.querySelector(".ville").textContent = ville
        
        })
        .catch(function(error) { return console.log(error)})
}
