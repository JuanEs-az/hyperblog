let btnComenzar = document.querySelector(".btn-comenzar");
btnComenzar.addEventListener("click", () => {
    let logo = document.querySelector(".logo");
    let imgs = {
        "paperairplane": "https://res.cloudinary.com/dvaqrycs1/image/upload/v1674066798/avion-de-papel_nefure.png",
        "airplane":      "https://res.cloudinary.com/dvaqrycs1/image/upload/v1674066798/avion_nhvkbz.png",
    };
    if( logo.src.includes('papel_nefure') ){
        logo.src = imgs["airplane"];   
    }else{
        logo.src = imgs["paperairplane"];
    }
});