function vmodal(e){
var video = ["/",
"https://www.youtube.com/embed/aLyWMVwnSJc?controls=0"];
  
document.getElementById("titulomodal").innerHTML += "<strong>Curso Instagram GRATIS para negocios y empresas</strong>";

document.getElementById("cuerpomodal").innerHTML += "<p>¿Te gustó?</br>¡compártelo con tus amigos y familiares!</p><div class='iframe-container'><iframe title='vimeo-player' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";

}

