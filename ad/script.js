function vmodal(e){
  
 var iraurl = ["/",
"https://www.infoproyectos.com/p/stanford-university.html",
"https://www.infoproyectos.com/p/university-of-pennsylvania.html",
"https://www.infoproyectos.com/p/university-of-chicago.html",
               
"https://www.infoproyectos.com/p/northwestern-university.html",
"https://www.infoproyectos.com/p/harvard-university.html",
"https://www.infoproyectos.com/p/massachusetts-institute-of-technology.html",
 
"https://www.infoproyectos.com/p/usa-scholarships.html"];
  
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
  titulomodal.innerHTML = "Please complete the captcha to continue";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Top Business Schools</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><a href="+iraurl[e]+" class='btn btn-primary disabled' style='width: 300px;' role='button' id='enlacecaptcha'>Continuar</a></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");

jQuery('#enlacecaptcha').removeClass('disabled');
jQuery('#enlacecaptcha').addClass('active');
}
