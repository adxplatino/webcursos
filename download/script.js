function getLink(){
let time_out = 1000;
let counter_id;
let seconds = 15;
counter_id = setInterval(update_counter_link, time_out);
function update_counter_link() {
document.getElementById('link_button').innerHTML = (--seconds);
if (!seconds) {
clearInterval(counter_id);
document.getElementById("contador").style.display = "none";
document.getElementById("linkDownload").style.display = "inline";
            }
        }

}


function getResultado(){
var resultadoBuscar = document.getElementById("resultadosBusqueda");
resultadoBuscar.innerHTML = "Please complete the captcha to continue";
}
