function vmodal(e){
 
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
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LesNvAbAAAAAE7B7H0K7qkhvofZlBkD-8_V3IX2' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Manual Básico Excel</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-primary disabled' style='width: 300px;' id='enlacecaptcha'><i class='fas fa-cloud-download-alt'></i> Download</button></div></br><div id='captchascript'></div>";
ads();
captcha();
}
  
function CaptchaChecked() {
var abrirurl = document.getElementById('enlacecaptcha');
abrirurl.onclick = function(){
var abrirurl = window.open('https://drive.google.com/file/d/1RY8SzQovsIOY4yzxi2q6n6ttAB93oneR','_self');
}

var element = document.getElementById('enlacecaptcha');
element.classList.remove('disabled');

}