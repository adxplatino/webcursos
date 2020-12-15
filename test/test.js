function vmodal(e){
  
function ads(){
document.getElementById('adsContenedor1').innerHTML = 'ADS1!';
document.getElementById('adsContenedor2').innerHTML = 'ADS2!';
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
function miurl() {
  var abrirurl = window.open('https://www.w3schools.com','_self');
}
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Please check the captcha box to proceed to the destination page";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <center><div id='adsContenedor1'></div></center></br><div style='text-align: center;'><input class='btn btn-outline-primary btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled' type='button' value='Click here to continue' onClick='miurl()'></div></br>  <center><div id='adsContenedor2'></div></center></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() { 
  jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
}
