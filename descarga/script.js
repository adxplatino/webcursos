function getLink(e){
var resultadoLink = e;

  
let time_out = 1000;
let counter_id;
let seconds = 15;
      
counter_id = setInterval(update_counter_link, time_out);

function update_counter_link() {
document.getElementById('link_button').innerHTML = (--seconds);
document.getElementById("conteo").style.display = "block";
document.getElementById("segundos").style.display = "block";
if (!seconds) {
clearInterval(counter_id);
document.getElementById("link_button").innerHTML = '<a rel="nofollow noreferrer" target="_blank" href='+resultadoLink+'>DESCARGAR</a></div>';
document.getElementById("link_button").style.cursor = 'default';
document.getElementById("conteo").style.display = "none";
document.getElementById("segundos").style.display = "none";
            }
        }

}
