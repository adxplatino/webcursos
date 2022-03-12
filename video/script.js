function vmodal(urlVideo){
  
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
  titulomodal.innerHTML = "<img class='mx-auto d-block mr-3' src='https://blogger.googleusercontent.com/img/a/AVvXsEgP7uV95Q8ISOdvjP4rc5ZPv7NQTmDT6bTEHjdI1TonUzI62CFeD3RiWdyQRy_XnFKuu7uQEI0jR0B0HHaOJa-N1WngBg7nE8KOoWrdWzePZHm_LiPDfmCCg-kI4sV4UZmPQC6J4tfD-maY2V8Rev2IFtkRsdfzFP-OzQ4iManY4hK8-VEKquP_hrGAVw' style='height: 30px;'/>";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <p style='text-align: center'>Por favor complete el captcha para continuar...</p> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-primary' style='width: 300px;' btn-captcha m-2 disabled' id='enlacecaptcha' disabled='disabled'>Continuar</button></div></br><div id='captchascript'></div>";
ads();
captcha();
getVid(urlVideo);
}
  
function getVid(urlVideo){
resultadoUrl = urlVideo;
}
  
function CaptchaChecked() {
var abrirurl = document.getElementById("enlacecaptcha");
jQuery('#enlacecaptcha').removeClass('disabled').removeAttr('disabled');
  
abrirurl.onclick = function(){
 
function ads2(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor2').appendChild(externalScript);
var comment = document.createComment(" infoproyectos_300x250 ");
document.getElementById('adsContenedor2').appendChild(comment);
var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9029296375');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
document.getElementById('adsContenedor2').appendChild(ins);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor2').appendChild(inlineScript); 
}
 
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "<img class='mx-auto d-block mr-3' src='https://blogger.googleusercontent.com/img/a/AVvXsEgP7uV95Q8ISOdvjP4rc5ZPv7NQTmDT6bTEHjdI1TonUzI62CFeD3RiWdyQRy_XnFKuu7uQEI0jR0B0HHaOJa-N1WngBg7nE8KOoWrdWzePZHm_LiPDfmCCg-kI4sV4UZmPQC6J4tfD-maY2V8Rev2IFtkRsdfzFP-OzQ4iManY4hK8-VEKquP_hrGAVw' style='height: 30px;'/>";
  
var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='link-area'><div class='container'><div class='row'><div class='col-md-12 col-sm-12'><div class='contents text-center animated fadeIn' id='continue_wrapper'></br> <p style='text-align: center'>Por favor espere un momento...</p> <center><div id='adsContenedor2'></div></center></br> <div style='text-align: center;'><span class='btn btn-primary' style='width: 300px;' id='link_button'></span></div></div></br> </div></div></div></div>";

ads2();
  
let time_out = 1000; // 1 seconds
let counter_id;
let seconds = 15;
      
counter_id = setInterval(update_counter_link, time_out);

function update_counter_link() {
document.getElementById('link_button').innerHTML = 'Video en: ' + (--seconds);
            if (!seconds) {
                clearInterval(counter_id);
                document.getElementById("link_button").innerHTML = '<div class="imps"><a rel="nofollow noreferrer" target="_blank" style="color: white;" href='+resultadoUrl+'>VER VIDEO</a></div>';
                document.getElementById("link_button").style.cursor = 'default';
            }
        }
        document.getElementById('link_button').innerHTML = 'Video en: ' + seconds;
}

}
