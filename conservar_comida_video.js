$(document).ready(function(){
        $("#modalVideo").attr('src', '');
});

function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1qknvYXRYWFUQ9Xr6qYw3JtEgcGiT1pY2/preview"];

  var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Cómo conservar la comida por más tiempo";
  
  var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";
}
