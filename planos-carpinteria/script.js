function vmodal(e){
 
var linkplano = ["/",
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
  
  
function captcha(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://www.google.com/recaptcha/api.js?hl=es";
document.getElementById('captchascript').appendChild(externalScript);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";  
document.getElementById('captchascript').appendChild(inlineScript); 
}

var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Please check the captcha box to proceed to the destination page";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Planos para Fabricar Muebles de Melamina – PDF | Planos de carpintería.</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-outline-primary btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Continuar →</button></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");
abrirurl.onclick = function(){
var abrirurl = window.open('+linkplano[e]+','_self');
}
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
