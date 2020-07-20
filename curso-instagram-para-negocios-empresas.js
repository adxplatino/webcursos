$(document).ready(function(){
    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#modalVideo").attr('src');
    
    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#mimodal").on('hide.bs.modal', function(){
        $("#modalVideo").attr('src', '');
    });
    
    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#mimodal").on('show.bs.modal', function(){
        $("#modalVideo").attr('src', url);
    });
});


function vmodal(e){
var video = ["/",
"https://www.youtube.com/embed/aLyWMVwnSJc?controls=0"];

  var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "Curso Instagram GRATIS";

  var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div id='modalVideo' class='iframe-container'><iframe src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";
}
