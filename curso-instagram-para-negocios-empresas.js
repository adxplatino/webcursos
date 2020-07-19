function vmodal(e){
var video = ["/",
"https://www.youtube.com/embed/aLyWMVwnSJc?controls=0"];

  var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "<h3 class='text-center'>Curso Instagram GRATIS para negocios y empresas</h3>";

  var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<p>¿Te gustó?</br>¡compártelo con tus amigos y familiares!</p></br><div class='iframe-container'><iframe title='vimeo-player' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";
}
