function vmodal(e){
var video = ["/",
"https://www.instacredit.gt",
"https://micoopeguadalupana.com.gt/servicio/necesito-un-prestamo",
"https://finca.gt/solicitar-un-credito",
"https://www.multimoney.com/gt/solicita-tu-credito"];
 
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
 
var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Ver videos online</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-primary' style='width: 300px;' btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Préstamos Urgentes en Guatemala</button></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");
abrirurl.onclick = function(){
var abrirurl = window.open('video[e]','_self');
}
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
