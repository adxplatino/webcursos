function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1UUrqUZ7akoZ9pABbl-z6dmm8WLwnbf0C/preview",
"https://drive.google.com/file/d/1Wl6pFOHv-CUH_KvG0krkHnrVmxbbRjY_/preview",
               
"https://drive.google.com/file/d/1jFxNhaoIjjzu4UYFOf-IfrM7Q3BJvxs_/preview",
"https://drive.google.com/file/d/1UOw4-d8y-YgwBnuhPPd0U1V5mFfcmsxK/preview",
"https://drive.google.com/file/d/1YLTqaJwVxYMSZ4osFevnvBC7dnh_QRZ0/preview",
               
"https://drive.google.com/file/d/1dXX4z-YchjhPTey7YfwMKZt0CAB5YO9s/preview",
"https://drive.google.com/file/d/1hoh1ig_LZq-5pHIC-cgZfPyl8TlcjveA/preview",
"https://drive.google.com/file/d/19EE8VZDOy1JS0fbJYGYRwQ0upUstpGtl/preview",
"https://drive.google.com/file/d/1dlIb8SIZvlaPirnXAmBkx3sljCL6T7ap/preview",
"https://drive.google.com/file/d/1sp5PyyTeDwwRCgIBbkxPJTb_8Nw-Dz2c/preview",
               
"https://drive.google.com/file/d/1NvUEsL7uTCN5BGNenOHW9p4nYqYNqmLd/preview",
"https://drive.google.com/file/d/1CcwF9tpKN9fzbIQKfKLbEKyFnGF70gUR/preview",
"https://drive.google.com/file/d/1Sb5sEuN4vgnI4rfDxGQBV6TCUw5F1tU5/preview",
          
"https://drive.google.com/file/d/1GmxFFYXtVRNbFDZxvvUH5zNTxFRo827W/preview"];


var titulomodal = document.getElementById("titulomodal");
titulomodal.innerHTML = "CURSO DE TATUAJES GRATIS</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><center><div id='adsContenedor'></div></center></br>";

}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
