function admodal(e){
  
 var iraurl = ["/",
"https://www.usnews.com/best-graduate-schools/top-business-schools/stanford-university-01028",
"https://www.usnews.com/best-graduate-schools/top-business-schools/university-of-pennsylvania-01194",
"https://www.usnews.com/best-graduate-schools/top-business-schools/university-of-chicago-01073",
               
"https://www.usnews.com/best-graduate-schools/top-business-schools/northwestern-university-01071",
"https://www.usnews.com/best-graduate-schools/top-business-schools/harvard-university-01110",
"https://www.usnews.com/best-graduate-schools/top-business-schools/massachusetts-institute-of-technology-01111",
 
"https://www.usnews.com/education/best-colleges/paying-for-college/articles/a-guide-to-scholarships-for-international-students"];
  
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
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Top Business Schools</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><a href="+iraurl[e]+" target='_blank' rel='nofollow' class='btn btn-primary disabled' style='width: 300px;' role='button' id='enlacecaptcha'>Continuar</a></div></br><div id='captchascript'></div>";
ads();
captcha();
}

function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");

jQuery('#enlacecaptcha').removeClass('disabled');
jQuery('#enlacecaptcha').addClass('active');
}
