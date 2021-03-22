function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1eYiSGVn1qyZQ-P-bG1JYt5CPsOLeF2nc/preview"];

var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "VER VIDEO LECCIÓN - ESTRATEGIA SECRETA - Curso Fabricar y Vender Muebles de Melamina Desde Casa";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
