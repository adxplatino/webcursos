function lecciones(e){
var leccion = ["/",
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

var comment = document.createComment(" infocursos_adap_jul ");
document.getElementById('adsContenedor').appendChild(comment);

var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('style','display:block');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9303445348');
ins.setAttribute('data-ad-format','auto');
ins.setAttribute('data-full-width-responsive','true');
document.getElementById('adsContenedor').appendChild(ins);

var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 

}

Swal.fire({
title: '<strong>Leccion ' + e + '</strong>', 
html:  'Disfruta nuestro fantástico curso en vídeo completamente gratis (nivel básico). Y si te gusta, ¡compártelo con tus amigos en las redes sociales!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + leccion[e] + ' width="100%" height="420" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>',
showCloseButton: true,
showConfirmButton: false,
focusCancel: false,
focusConfirm: false,
allowOutsideClick: false
})
ads();
}
