function lecciones(e){
var leccion = ["/",
"https://drive.google.com/file/d/192HJ7GfcwQWoGEyU6fCDeJGULND4hKTu/preview",
"https://drive.google.com/file/d/1Qe2RBLZj3EiNlr64Os0WrxCArHBCbBZ-/preview",
"https://drive.google.com/file/d/17XxSjI0Q64pPwuMjoROPWqP_JXuWBplK/preview",
               
"https://drive.google.com/file/d/1dw-skxlWAvtyY6UMjh7XkZSPRTaEElz2/preview",
"https://drive.google.com/file/d/1Qzw3ieccSJPq0GZ6dvjkNEMoEq-LqKIH/preview",
"https://drive.google.com/file/d/1-kN9xzJwRrJZ3OvnAANLI7EEBQMu3AQM/preview",
"https://drive.google.com/file/d/10dZN9fC0thSLr93OjRCJdrM9-maslS9V/preview",
               
"https://drive.google.com/file/d/1QVg2FEom-WILbm7Jt7pMBrn7rPqmkYDP/preview",
"https://drive.google.com/file/d/1K8hbtN22_puC8LmhlPZjwOrpeL3gReV9/preview",
"https://drive.google.com/file/d/1M5ITRbuzOZPqTIw_iBS5BoGw5IPPenyn/preview",
"https://drive.google.com/file/d/1JAc7u04HfNDX12RZNvl_RfQjkwcManG4/preview",
"https://drive.google.com/file/d/16M7yNcAdk_N2HPY4I85r9A82aQgjqVua/preview",
"https://drive.google.com/file/d/1KxXYgXXbxHie5RBs3j-lzMI_4kcySeAm/preview",
               
"https://drive.google.com/file/d/1dDmAuSbHqjEShH4X3K_gxnnUBmTt8sYg/preview",
"https://drive.google.com/file/d/1OeA3O5M8jWq4Aw4y2RuYqckj2i_FaSR-/preview",
"https://drive.google.com/file/d/1-LEZPLKWugYMB7ignVpzWkqCRlzIqeDi/preview",
"https://drive.google.com/file/d/1GUvMcxky-oT01MG0BFK-sfLwmipDpCOP/preview",
"https://drive.google.com/file/d/1q7nB9Kne2KRvXTsS8udbhzt-biRCXKWx/preview",
"https://drive.google.com/file/d/1XcUppcq1Qo9d4KMxFHVUEIMoRKpfvOWg/preview",
               
"https://drive.google.com/file/d/1um5YPs4F2WKF9AXgTG-9w1-VxtSSsslS/preview",
"https://drive.google.com/file/d/1jBdtaGrOEgfVaQJ0fwBGhkEZJvE80pNf/preview",
"https://drive.google.com/file/d/1vSnzMN9iRpZeH0WYcSnpNholX3I_FEDy/preview",

"https://drive.google.com/file/d/1BayklCErlWJ7y9ZEoTrUKscbRoHEppYQ/preview",
"https://drive.google.com/file/d/1OK5EhpQNHCILwj7lTEvlQB_PTAYtdBYU/preview",
"https://drive.google.com/file/d/1eqEJakARkslJrLurKNVgRw4iKs3fQsd6/preview",
"https://drive.google.com/file/d/1pRpx_DVtXi80AW2j45o2U77zyos8D89w/preview", 
               
"https://drive.google.com/file/d/1-uzglDsSKetWayMXjLnqqR6qCnRwe_OD/preview"];

function ads(){

var externalScript   = document.createElement("script");
externalScript.type  = "text/javascript";
externalScript.setAttribute('async',"");
externalScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
document.getElementById('adsContenedor').appendChild(externalScript);

var comment = document.createComment(" infocursos_adap_jul ");
document.getElementById('adsContenedor').appendChild(comment);

var ins   = document.createElement("ins");
ins.setAttribute('class','adsbygoogle');
ins.setAttribute('style','display:block');
ins.setAttribute('data-ad-client','ca-pub-6278983531888232');
ins.setAttribute('data-ad-slot','9303445348');
ins.setAttribute('data-ad-format','auto');
ins.setAttribute('data-full-width-responsive','true');
document.getElementById('adsContenedor').appendChild(ins);

var inlineScript   = document.createElement("script");
inlineScript.type  = "text/javascript";
inlineScript.text  = '(adsbygoogle = window.adsbygoogle || []).push({});'  
document.getElementById('adsContenedor').appendChild(inlineScript); 

}

Swal.fire({
title: '<strong>Leccion ' + e + '</strong>',
html:  'Disfruta nuestro fantástico Curso de Carpinteria Gratis. Y si te gusta, ¡compártelo con tus amigos en las redes sociales!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + leccion[e] + ' width="100%" height="420" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>',
showCloseButton: true,
showConfirmButton: false,
focusCancel: false,
focusConfirm: false,
allowOutsideClick: false
})
ads();
}
