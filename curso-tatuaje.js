function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1UUrqUZ7akoZ9pABbl-z6dmm8WLwnbf0C/preview",
"https://drive.google.com/file/d/1Wl6pFOHv-CUH_KvG0krkHnrVmxbbRjY_/preview",
               
"https://drive.google.com/file/d/1jFxNhaoIjjzu4UYFOf-IfrM7Q3BJvxs_/preview",
"https://drive.google.com/file/d/1UOw4-d8y-YgwBnuhPPd0U1V5mFfcmsxK/preview",
"https://drive.google.com/file/d/1YLTqaJwVxYMSZ4osFevnvBC7dnh_QRZ0/preview",
               
"https://drive.google.com/file/d/1dXX4z-YchjhPTey7YfwMKZt0CAB5YO9s/preview",
"https://drive.google.com/file/d/1hoh1ig_LZq-5pHIC-cgZfPyl8TlcjveA/preview",
"https://drive.google.com/file/d/19EE8VZDOy1JS0fbJYGYRwQ0upUstpGtl/preview",
"https://drive.google.com/file/d/1dlIb8SIZvlaPirnXAmBkx3sljCL6T7ap/preview",
"https://drive.google.com/file/d/1sp5PyyTeDwwRCgIBbkxPJTb_8Nw-Dz2c/preview",
               
"https://drive.google.com/file/d/1NvUEsL7uTCN5BGNenOHW9p4nYqYNqmLd/preview",
"https://drive.google.com/file/d/1CcwF9tpKN9fzbIQKfKLbEKyFnGF70gUR/preview",
"https://drive.google.com/file/d/1Sb5sEuN4vgnI4rfDxGQBV6TCUw5F1tU5/preview",
          
"https://drive.google.com/file/d/1GmxFFYXtVRNbFDZxvvUH5zNTxFRo827W/preview"];

function ads(){

var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
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
titulomodal.innerHTML = "CURSO DE TATUAJES GRATIS</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";
ads();
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
