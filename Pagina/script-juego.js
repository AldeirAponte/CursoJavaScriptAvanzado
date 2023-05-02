//  ZONA SOLTAR IMAGENES
let img = document.getElementsByClassName("img-juego");
let zona = document.getElementsByClassName("zona-soltar");
let zona1 = document.getElementById("zona-soltar1");
let zona2 = document.getElementById("zona-soltar2");
let zona3 = document.getElementById("zona-soltar3");

// evento para tomar la imagenes
for(let i=0; i<img.length; i++) {
    img[i].addEventListener("dragstart",(event)=>{
        let ruta = event.target.src;
        event.dataTransfer.setData("Text",ruta);

    //  evento para el preventDefault
        for(let i=0; i<zona.length; i++) {
            zona[i].addEventListener("dragover",(event)=>{
                event.preventDefault();
            });
        }

    //  eventos para soltar las imagenes en las zonas
        zona1.addEventListener("drop",(event)=>{
            let clase = "imagen";
            let alt = "imagen-rompe-cabezas";
            let ruta = event.dataTransfer.getData("Text");
                
            zona1.innerHTML=`<img class="${clase}" src="${ruta}" alt="${alt}"/>`;
            img[i].style.display="none";
        });

        zona2.addEventListener("drop",(event)=>{
            let clase = "imagen";
            let alt = "imagen-rompe-cabezas";
            let ruta = event.dataTransfer.getData("Text");

            zona2.innerHTML=`<img class="${clase}" src="${ruta}" alt="${alt}"/>`;
            img[i].style.display="none";
        });

        zona3.addEventListener("drop",(event)=>{
            let clase = "imagen";
            let alt = "imagen-rompe-cabezas";
            let ruta = event.dataTransfer.getData("Text");

            zona3.innerHTML=`<img class="${clase}" src="${ruta}" alt="${alt}"/>`;
            img[i].style.display="none";
        });
    });
}


