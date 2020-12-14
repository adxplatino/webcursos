function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1A3IsUeqz3H9KWC7qpGCG4MvK-25XeeL-/preview",
"https://drive.google.com/file/d/1A3IsUeqz3H9KWC7qpGCG4MvK-25XeeL-/preview"];
 
 
var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Please check the captcha box to proceed to the destination page";

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div style='margin: 10px 0 10px 0;position: relative;'><div style='text-align: center;'><div class='g-recaptcha m-2' style='display: inline-block;' data-sitekey='6LeYowYaAAAAAB97jxMiic4E6kwBWjD3_Zvxdmin' data-callback='CaptchaChecked'></div></div></div> </br> <center><div id='adsContenedor'></div></center></br> <div style='text-align: center;'><button class='btn btn-outline-primary btn-captcha m-2 disabled' id='botoncaptcha' onclick='window.open('https://www.infoproyectos.com/p/000002.html','_self')'  type='submit' disabled='disabled'>Click here to continue</button></div></br> <center><div id='adsContenedor'></div></center></br>";
ads();
}

function CaptchaChecked() { 
  jQuery('#botoncaptcha').removeClass('disabled').removeAttr('disabled');
}
