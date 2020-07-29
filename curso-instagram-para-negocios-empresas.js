function vmodal(e){

function ads(){

var externalScript   = document.createElement("script");
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
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 

}

var video = ["/",
"https://www.youtube.com/embed/aLyWMVwnSJc?controls=0"];

var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Curso Instagram GRATIS";
    
var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";
ads();
}

function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
