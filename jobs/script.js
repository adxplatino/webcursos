function admodal(e){
  
 var iraurlads = ["/",
"https://www.whatjobs.com/jobs/Maintenance-Tech-1/Klingerstown/917438657",            
"https://us.thebigjobsite.com/redirectfeedjob?jobid=BE9ABAF94E4602D07668F729EF5BB5BE&source=jobomas&utm_source=jobomas",
"https://www.jobvertise.com/job?jobid=33870749&referer=mercado-us-cpc&utm_source=mercado-us-cpc&utm_campaign=mercado-us-cpc&utm_medium=organic&c=0",
"https://www.jobvertise.com/job?jobid=33870749&referer=mercado-us-cpc&utm_source=mercado-us-cpc&utm_campaign=mercado-us-cpc&utm_medium=organic&c=0",
"https://us.mercadojobs.com/ad/director_of_special_education_camden/3351330974?prevSearch=education",
                  
"https://us.mercadojobs.com/ad/education_social_media_writer/3351063203?prevSearch=education",
"https://us.mercadojobs.com/ad/director_of_special_education/3354488148?prevSearch=education",            
"https://us.mercadojobs.com/ad/dean_of_special_education/3354498717?prevSearch=education",
"https://us.mercadojobs.com/ad/campus_bridge_special_education_coordinator_immediate_start_sy_21_22/3354368557?prevSearch=education",
"https://us.mercadojobs.com/ad/director_education_amp_talent/3354498371?prevSearch=education"];
  
function adsCon(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedorModal').appendChild(externalScript);
var comment = document.createComment(" infoproyectos_300x250 ");
document.getElementById('adsContenedorModal').appendChild(comment);
var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9029296375');
ins.setAttribute('style','display:inline-block;width:300px;height:250px');
document.getElementById('adsContenedorModal').appendChild(ins);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedorModal').appendChild(inlineScript); 
}  
  
function captchaAds(){
var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://www.google.com/recaptcha/api.js?hl=es";
document.getElementById('captchascript').appendChild(externalScript);
var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";  
document.getElementById('captchascript').appendChild(inlineScript); 
}

var titulomodalAds = document.getElementById("titulomodalAds");
  titulomodalAds.innerHTML = "Please complete the captcha to continue";

var cuerpomodalAds = document.getElementById("cuerpomodalAds");
  cuerpomodalAds.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaCheckedAds'></div></div></div> </br> <p style='text-align: center'>Related Jobs</p> <center><div id='adsContenedorModal'></div></center></br> <div style='text-align: center;'><a href="+iraurlads[e]+" target='_blank' rel='nofollow' class='btn btn-primary disabled' style='width: 300px;' role='button' id='enlacecaptchaAds'>Continuar</a></div></br><div id='captchascript'></div>";
adsCon();
captchaAds();
}

function CaptchaCheckedAds() {
var abrirurlAds = document.getElementById("enlacecaptchaAds");

jQuery('#enlacecaptchaAds').removeClass('disabled');
jQuery('#enlacecaptchaAds').addClass('active');
}