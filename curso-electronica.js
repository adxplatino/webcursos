function lecciones(e){
var leccion = ["/",
"https://drive.google.com/file/d/1a6ASsWBSl5PFlrESuGMyMf11dY_3MofJ/view",
"https://drive.google.com/file/d/1We840Vgoz6zd2Fl1A3c0h-1GcNn7KlFt/view",
               
"https://drive.google.com/file/d/1MAF1Uw60xm8sTJf7DFGvzvg3HFJKaCGf/view",
"https://drive.google.com/file/d/189s96G7zTTO9Trdj6-WytZcGAPl7ZhK1/view",
               
"https://drive.google.com/file/d/1E0AKERwonVnvcA2XAlNRjDGQcT6RGDMu/view",
"https://drive.google.com/file/d/1YaUqjkp2ZkvwoSwpC2id9BrK4atk-OP7/view",
"https://drive.google.com/file/d/1skYvT6WzrMzJIAgXJxBI8DNPE29oK9L7/view",
"https://drive.google.com/file/d/1jFvkImFIQvA00TWPoMmuNxrA6yu0B3FY/view",
"https://drive.google.com/file/d/1snK6Psue08NjSVWlRxX3dq8EgFbAgO32/view",
               
"https://drive.google.com/file/d/1HIgSbbyOkABBsmJaeTPtJC7K5HRh_wTU/view",
"https://drive.google.com/file/d/1POrJtTXzWH_peRgb_5WBJie5zyt2qcnV/view",
               
"https://drive.google.com/file/d/1zUSl-VMx0k00z-wZd8Isw5XgUKgAndM8/view",
"https://drive.google.com/file/d/1WWPXTtGZg5r-fLOhQVILQMpHuyfcRmUr/view"];

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
