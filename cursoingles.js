function lecciones(e){
var leccion = ["/",
"https://player.vimeo.com/video/392892134?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392893056?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392898626?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392900221?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392901497?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392904146?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392905334?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392906674?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392907832?title=0&byline=0&portrait=0&sidedock=0",
"https://player.vimeo.com/video/392909060?title=0&byline=0&portrait=0&sidedock=0"];

Swal.fire({
title: '<strong>Leccion ' + e + '</strong>', 
html:  'Disfruta nuestro fantástico curso en vídeo completamente gratis (nivel básico). Y si te gusta, ¡compártelo con tus amigos en las redes sociales!' +
    '</br></br><div class="iframe-container"><iframe title="vimeo-player" src=' + leccion[e] + ' width="100%" height="420" frameborder="0" allowfullscreen></iframe></div></br><div id="adsContenedor"></div></br>',
showCloseButton: true,
showConfirmButton: false,
focusCancel: false,
focusConfirm: false,
allowOutsideClick: false
})

}
