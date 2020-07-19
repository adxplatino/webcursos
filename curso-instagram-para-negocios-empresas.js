function videos(e){
var video = ["/",
"https://www.youtube.com/embed/aLyWMVwnSJc?controls=0"];

function titulomodal(){
  document.body.innerHTML += "<strong>Curso Instagram GRATIS para negocios y empresas</strong>";
}
    
function cuerpomodal(){
  document.body.innerHTML += "¿Te gustó?</br>¡compártelo con tus amigos y familiares!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + video[e] + ' width="100%" height="480" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>";
}

}
