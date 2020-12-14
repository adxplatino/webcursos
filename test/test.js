function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1A3IsUeqz3H9KWC7qpGCG4MvK-25XeeL-/preview",
"https://drive.google.com/file/d/1A3IsUeqz3H9KWC7qpGCG4MvK-25XeeL-/preview"];
 
 
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Please check the captcha box to proceed to the destination page";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
