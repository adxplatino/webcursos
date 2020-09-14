function vmodal(e){
var video = ["/",
"https://player.vimeo.com/video/392892134?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392893056?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392898626?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392900221?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392901497?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392904146?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392905334?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392906674?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392907832?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392909060?title=0&byline=0&portrait=0&sidedock=0"];

function ads(){

var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);

var comment = document.createComment(" infocursos-300x250 ");
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
  titulomodal.innerHTML = "CURSO DE INGLES GRATIS</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
