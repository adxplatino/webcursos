function vmodal(e){
var video = ["/",
"https://www.youtube.com/embed/aLyWMVwnSJc?controls=0"];

var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Curso Instagram GRATIS";
    
var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
