let btnComenzar = document.querySelector(".btn-comenzar");
btnComenzar.addEventListener("click", () => {
    let logo = document.querySelector(".logo");
    let imgs = {
        "paperairplane": "./public/img/avion-de-papel.png",
        "airplane":      "./public/img/avion.png",
    };
    if( logo.src.includes('avion-de-papel.png') ){
        logo.src = imgs["airplane"];   
    }else{
        logo.src = imgs["paperairplane"];
    }
});