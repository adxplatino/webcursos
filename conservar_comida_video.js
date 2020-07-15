function videos(e){
var video = ["/",
"https://drive.google.com/file/d/1qknvYXRYWFUQ9Xr6qYw3JtEgcGiT1pY2/preview"];

function ads(){

var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
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
title: '<strong>Cómo conservar la comida por más tiempo</strong>', 
html:  '¿Te gustó?</br>¡compártelo con tus amigos y familiares!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + video[e] + ' width="100%" height="480" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>',
showCloseButton: true,
showConfirmButton: false,
focusCancel: false,
focusConfirm: false,
allowOutsideClick: false
})
ads();
}
