//mascotaJugadorObjeto
let startPress = document.getElementById('start-read')
//alturaQueBuscamos
let longMeasure
//anchoDelMapa
let latitude = window.innerWidth - 20
longMeasure = latitude * 555 / 999
//intervalo
let pieceTime
// ver-mapa
const boxLocate = document.getElementById('place-map')
// mapa
const framePoint = document.getElementById('mapper')
framePoint.width = latitude
framePoint.height = longMeasure
//ancho máximo del mapa
const maxTake = 350
if (latitude > maxTake){
    latitude = maxTake - 20
}
//lienzo
const artWork = framePoint.getContext('2d')
//mapaBackground
let spaceSee = new Image()
spaceSee.src='./actives/background.jpg'
//logo
let mainBrand = new Image()
mainBrand = './actives/logo.png'
//pintarPersonaje
function paintAnimal() {
    artWork.clearRect(0, 0, framePoint.width, framePoint.heigth)
    artWork.drawImage(
        spaceSee,
        0,
        0,
        framePoint.width,
        framePoint.height

    )
}
function placeFigure () {
    boxLocate.style.display = 'flex'
    initiateZone()
}
//iniciar mapa
function initiateZone() {
    boxLocate.style.display = 'flex'
    startPress.addEventListener('click', placeFigure)
    pieceTime = setInterval(paintAnimal, 50)
}
// 

window.addEventListener('load', initiateZone)