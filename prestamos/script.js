function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1bFOpc6dLzaIqNIIb8ke8SXIR0_RpC91l/preview",
"https://drive.google.com/file/d/1_nS9NFiesso7uOnPCiZlM_EXss-p7hxx/preview",
"https://drive.google.com/file/d/1mx25EAHAY8m6qv0PLdi3pXWQlA3XU4P3/preview",
"https://drive.google.com/file/d/153LtCVSZDwKZ2bMBw-P1efkzqbxfzj2Z/preview"];
 
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
  titulomodal.innerHTML = "CURSO EXCEL</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
