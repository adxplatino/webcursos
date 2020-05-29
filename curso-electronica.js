function lecciones(e){
var leccion = ["/",
"https://drive.google.com/file/d/1a6ASsWBSl5PFlrESuGMyMf11dY_3MofJ/view",
"https://drive.google.com/file/d/1We840Vgoz6zd2Fl1A3c0h-1GcNn7KlFt/view",
               
"https://drive.google.com/file/d/1mx25EAHAY8m6qv0PLdi3pXWQlA3XU4P3/preview",
"https://drive.google.com/file/d/1guYT7_HN6A1wJqXTY-nGepops1_r7gli/preview",
               
"https://drive.google.com/file/d/1yOotv2R87iV98oICgxpylj5j6UR8EIjk/preview",
"https://drive.google.com/file/d/180ek83MPSc0LEKx056-sbUoPvyJNlfo7/preview",
"https://drive.google.com/file/d/1Kh46A7GxwOjnxge3t6V2XZDQBOmrxLaJ/preview",
"https://drive.google.com/file/d/1K2VtcviMA4wobjdKV4Zd4VCLOfyJwxLo/preview",
"https://drive.google.com/file/d/1Ktk1p3UugX2GiWJ0XxgOyZSkWWrbVyON/preview",
               
"https://drive.google.com/file/d/1p_L0311crnb15CwDrIO8ZuNLJJySLIYi/preview",
"https://drive.google.com/file/d/1kFjhdHjSsreopma3BW6YFfN-RhZNS4wb/preview",
               
"https://drive.google.com/file/d/1_CchNB8edy3lBP33lqr6CxUMNij9xoJj/preview",
"https://drive.google.com/file/d/153LtCVSZDwKZ2bMBw-P1efkzqbxfzj2Z/preview"];

function ads(){

var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);

var comment = document.createComment(" info-cursos 300x250 ");
document.getElementById('adsContenedor').appendChild(comment);

var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','4632773522');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
document.getElementById('adsContenedor').appendChild(ins);

var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 

}

Swal.fire({
title: '<strong>Leccion ' + e + '</strong>',
html:  'Disfruta nuestro fantástico Curso Electrónica Basica Gratis. Y si te gusta, ¡compártelo con tus amigos en las redes sociales!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + leccion[e] + ' width="100%" height="420" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>',
showCloseButton: true,
showConfirmButton: false,
focusCancel: false,
focusConfirm: false,
allowOutsideClick: false
})
ads();
}
