function vmodal(e){

var iraurl = ["/",
"https://www.instacredit.gt",
"https://micoopeguadalupana.com.gt/servicio/necesito-un-prestamo",
"https://finca.gt/solicitar-un-credito",
"https://www.multimoney.com/gt/solicita-tu-credito"];

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
  titulomodal.innerHTML = "Please complete the captcha to continue";
 
var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>APLICAR A UN PRESTAMO URGENTE</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><a class='btn btn-primary' href="+iraurl[e]+" role='button' style='width: 300px;' btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Continuar</a></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");
abrirurl.onclick = function(){
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
