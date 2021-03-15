function vmodal(e){
 
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
  titulomodal.innerHTML = "Please check the captcha box to proceed to the destination page PDv";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Planos Gratis para Fabricar Muebles de Melamina</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-outline-primary btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Continuar →</button></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");
abrirurl.onclick = function(){
 
var linkplano = ["/",
"https://drive.google.com/file/d/1Lje9MW3k6RmMLkfUWaEZvIowNMkTdeaH/view",
"https://drive.google.com/file/d/19-NmbX-4o685z2xq7kNbl3cdXKQX-_9P/view",
"https://drive.google.com/file/d/1WhNPYhsVyVDPLt9J0znFlO8oTNvUgEW7/view",
"https://drive.google.com/file/d/1zYjb4HWt6v8iLLXHe3WPghcekYP0ptev/view",
"https://drive.google.com/file/d/1V0q7tcZTTbePR9EuZ4emc7VDlciOWIx5/view",
"https://drive.google.com/file/d/1A3_mjLwmzmjIHDWPYUseRz9oq05cqxMt/view",
"https://drive.google.com/file/d/1IE6Zt5SFmdbjiuXx08BJ9hkCYxPEnDuz/view"];
 
var abrirurl = window.opener.linkplano[e];
}
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
