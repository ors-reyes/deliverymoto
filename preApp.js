let ubicionPrincipal = window.scrollY
let fnd = document.getElementById('fnd2')
let fndSvg = document.getElementById('fnd')
let alturaFnd = fnd.offsetTop
let preApp = document.getElementById('preApp')
let altPreApp = preApp.offsetTop
let appMap = document.querySelector('.contenedor2')
window.onscroll = () => {
    let altura = window.scrollY
    if(ubicionPrincipal >= altura){
        document.getElementById("scroll").className = "appWhatsapp ver"
    }else{
        document.getElementById("scroll").className = "appWhatsapp nover"}
    ubicionPrincipal=altura


    let ubiScroll = window.scrollY
        
    if(ubiScroll > alturaFnd){
        fndSvg.classList.add('fnd2')
    }else{
        fndSvg.classList.remove('fnd2')
    }    
    if(ubiScroll > altPreApp - 10){
        appMap.classList.add('contenedor2V')
    }
}