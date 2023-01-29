let hidetext = document.getElementById("hidetext");
let hidetext_btn = document.getElementById("hidetext_btn")

hidetext_btn.addEventListener('click' , function(){
    toggleText(hidetext, hidetext_btn)
});

let hidetext_2 = document.getElementById("hidetext-2");
let hidetext_btn_2 = document.getElementById("hidetext_btn-2")

hidetext_btn_2.addEventListener('click', function() {
    toggleText(hidetext_2, hidetext_btn_2);
  });


function toggleText(var1 , var2){
    var1.classList.toggle('show');

    if(var1.classList.contains('show')) {
        var2.innerHTML = 'Ver Menos' 
          
    }
    else {
        var2.innerHTML = 'Ver Mas'
    }
}





const changeBgButton = document.getElementById("boton-fondo");
changeBgButton.addEventListener("click", changeBackground);

const backgrounds = [
    "url('/Imagenes/fondos/Fondo1.jpg')",
    "url('/Imagenes/fondos/Fondo2.jpg')",
    "url('/Imagenes/fondos/Fondo3.jpg')",
    "url('/Imagenes/fondos/Fondo4.jpg')"
];
let index = 0;

function changeBackground() {
    document.body.style.backgroundImage = backgrounds[index];
    index++;
    if (index >= backgrounds.length) {
        index = 0;
    }
}



