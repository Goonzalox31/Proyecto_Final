let hidetext = document.getElementById("hidetext");
let hidetext_btn = document.getElementById("hidetext_btn");

hidetext_btn.addEventListener('click' , toggleText);

function toggleText(){
    hidetext.classList.toggle('show');

    if(hidetext.classList.contains('show')) {
        hidetext_btn.innerHTML = 'Ver Menos' 
          
    }
    else {
        hidetext_btn.innerHTML = 'Ver Mas'
    }
}

document.body.style.backgroundImage = 'url("/Imagenes/Fondo3.jpg")'
document.getElementById('boton-fondo').addEventListener('click',function(){
    

    if (document.body.style.backgroundImage == 'url("/Imagenes/Fondo3.jpg")') {
        document.body.style.backgroundImage = 'url("/Imagenes/Fondo2.jpg")'
    }
    else {
        document.body.style.backgroundImage = 'url("/Imagenes/Fondo3.jpg")'
    }
 

}   )
