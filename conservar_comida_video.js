function videos(e){
var video = ["/",
"https://drive.google.com/file/d/1qknvYXRYWFUQ9Xr6qYw3JtEgcGiT1pY2/preview"];

Swal.fire({
title: '<strong>Cómo conservar la comida por más tiempo</strong>', 
html:  '¿Te gustó?</br>¡compártelo con tus amigos y familiares!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + video[e] + ' width="100%" height="480" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>',
showCloseButton: true,
showConfirmButton: false,
focusCancel: false,
focusConfirm: false,
allowOutsideClick: false
})

}
