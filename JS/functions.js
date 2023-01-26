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

