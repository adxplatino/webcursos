function vmodal(e){
var video = ["/",
"https://cdn11.capacitateparaelempleo.org/mobilified/r3vHWPRRTg8.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/LcJI2ZJnxdg.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/6iKJY2HGeVk.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/KkHO_HnJuBE.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/YZQG6coIiBw.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/3Mvz6ACdHUk.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/A0-GdQLJeEw.mp4",

"https://cdn11.capacitateparaelempleo.org/mobilified/nWxHKjlI4EU.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/A9ZrENNC1dw.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/ihOKOgD4MNk.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/JFdgKiG1J5E.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/Jk9TrqamdlE.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/9VCIO931VvY.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/JBmrnSe82NQ.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/Tzds-ODM4rs.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/jRlGA43W39M.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/Izigr6Cdvgg.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/PQHW7Gxrpec.mp4",

"https://cdn11.capacitateparaelempleo.org/mobilified/1uSOvfDS2Wo.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/Ea7DrDauBfU.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/cP9ZM1ZTreI.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/pf5PWZ5gFTU.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/CTWEGTQjc9I.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/AJSppBhlDe0.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/X2Efn067dxM.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/rhviLr5EwOk.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/uFY-Y0lUvYc.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/fN4-JUZ16gA.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/i0D1lhRHJ1U.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/qd9fe5fJy64.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/-g4KzBxX0Fs.mp4",

"https://cdn11.capacitateparaelempleo.org/mobilified/DRGweoyYjEg.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/X24OhGsmleg.mp4",
"https://cdn11.capacitateparaelempleo.org/mobilified/nBbfIZ3VUFs.mp4"];

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
titulomodal.innerHTML = "CURSO DE CARPINTERIA GRATIS</br>LECCIÓN " + [e];

var cuerpomodal = jwplayer("cuerpomodal").setup({ 
        "playlist": [{
                "file": "+video[e]+"
        }]
    });
  
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
