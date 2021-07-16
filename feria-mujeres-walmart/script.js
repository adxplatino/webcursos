function vmodal(e){
 
function ads(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);
var comment = document.createComment(" infoproyectos_300x250 ");
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
  titulomodal.innerHTML = "Por favor complete el captcha para continuar";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Feria de Mujeres Walmart</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-outline-primary btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Continuar →</button></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");
abrirurl.onclick = function(){
var abrirurl = window.open('https://walmart-cam.talkpush.com/v3/pages/job/eyJzb3VyY2UiOiJGZXJpYSBNdWplcmVzIiwicmVmcmVzaF9yYXRlIjoiNjAiLCJyZWRpcmVjdF91cmwiOiJodHRwczovL3RhbGtwdS5zaC9LYVRySGk2bCIsIm1hbmFnZXIiOiJTdXNhbiBSb2RyaWd1ZXogU3VzYW4gUm9kcmlndWV6IiwibWFuYWdlcl9lbWFpbCI6InN1c2FuLnJvZHJpZ3VlekB3YWxtYXJ0LmNvbSIsImNyZWF0ZWRfYXQiOiIyMDIxLTA3LTEyVDIyOjU5OjI3LjQ5MiswMDowMCIsImFsZyI6IkhTNTEyIn0.eyJjb21wYW55X2lkIjoyNzUsImNhbXBhaWduX2lkIjozMjg5N30.o5g6C9bFpvvrHUArnKGtyYOEDfrwItMsCAZ-1IjwR3-ERjr-b5GoSiio5dGSl1MzT1TvkB33OKjfun8phtuJdg','_self');
}
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
