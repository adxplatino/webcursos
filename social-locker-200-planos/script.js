function vmodal(e){
 
function ads(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);
var comment = document.createComment(" infoproyectos_300x250 ");
document.getElementById('adsContenedor').appendChild(comment);
var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9029296375');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
document.getElementById('adsContenedor').appendChild(ins);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 
}
  
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Por favor comparte la publicacion para continuar";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div id='chest' data-seri='contenido_bloqueado'><h2 class='content-hint'>Compartir para desbloquear la descarga</h2><div style='text-align: center;'><a class='btn btn-outline-secondary' href='https://drive.google.com/file/d/1nIqExY9VXxB8_oE_T5Zad6_Xb40wlOJo/view' target='_blank'>DESCARGAR</a></div></br></div></br> <p style='text-align: center'>200 Planos y Proyectos Carpinteria Gratis – PDF | Planos de carpintería.</p> <center><div id='adsContenedor'></div></center></br> ";
ads();
}
