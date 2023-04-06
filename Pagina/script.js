// controles del video del video de historia
const videoPlay =()=> {
    let boton = document.getElementById("play");
    boton.addEventListener("click",()=>{
        let video = document.getElementById("video");
        video.play();
    });
}

videoPlay();

const videoPausa =()=> {
    let boton = document.getElementById("pause");
    boton.addEventListener("click",()=>{
        let video = document.getElementById("video");
        video.pause();
    });
}

videoPausa();

const duracionVideo =()=> {
    let video = document.getElementById("video");
    let duracion = document.getElementsByClassName("reloj")[0];
    duracion.textContent = "Duración Video: " + video.duration.toFixed(0);
}

duracionVideo();