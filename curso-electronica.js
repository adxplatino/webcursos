function vmodal(e){
var video = ["/",
"https://drive.google.com/file/d/1a6ASsWBSl5PFlrESuGMyMf11dY_3MofJ/preview",
"https://drive.google.com/file/d/1We840Vgoz6zd2Fl1A3c0h-1GcNn7KlFt/preview",
               
"https://drive.google.com/file/d/1MAF1Uw60xm8sTJf7DFGvzvg3HFJKaCGf/preview",
"https://drive.google.com/file/d/189s96G7zTTO9Trdj6-WytZcGAPl7ZhK1/preview",
               
"https://drive.google.com/file/d/1E0AKERwonVnvcA2XAlNRjDGQcT6RGDMu/preview",
"https://drive.google.com/file/d/1YaUqjkp2ZkvwoSwpC2id9BrK4atk-OP7/preview",
"https://drive.google.com/file/d/1skYvT6WzrMzJIAgXJxBI8DNPE29oK9L7/preview",
"https://drive.google.com/file/d/1jFvkImFIQvA00TWPoMmuNxrA6yu0B3FY/preview",
"https://drive.google.com/file/d/1snK6Psue08NjSVWlRxX3dq8EgFbAgO32/preview",
               
"https://drive.google.com/file/d/1HIgSbbyOkABBsmJaeTPtJC7K5HRh_wTU/preview",
"https://drive.google.com/file/d/1POrJtTXzWH_peRgb_5WBJie5zyt2qcnV/preview",
               
"https://drive.google.com/file/d/1zUSl-VMx0k00z-wZd8Isw5XgUKgAndM8/preview",
"https://drive.google.com/file/d/1WWPXTtGZg5r-fLOhQVILQMpHuyfcRmUr/preview"];

var titulomodal = document.getElementById("titulomodal");
  titulomodal.innerHTML = "CURSO ELECTRONICA BASICA GRATIS</br>LECCIÓN " + [e];

var cuerpomodal = document.getElementById("cuerpomodal");
  cuerpomodal.innerHTML = "<div class='iframe-container'><iframe id='modalVideo' src="+video[e]+" width='100%' height='480' frameborder='0' allowfullscreen></iframe></div></br><div id='adsContenedor'></div></br>";
}
function cerrarmodal(){
  $("#modalVideo").attr('src', '');
}
