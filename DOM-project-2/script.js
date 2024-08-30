// Variables
const btn = document.querySelector("#btn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#closeBtn");

const modalContainer = document.querySelector("#modal-container");
// Function

function show(){
    // modal.classList.add('show')
    // modal.classList.remove("blocked");
    modalContainer.style.display = "block";
}

function hide() {
    
    // modal.classList.remove("show");
    // modal.classList.add("hide");
    modalContainer.style.display = "none";
}

// EventListener

btn.addEventListener('click', show);

closeBtn.addEventListener("click", hide);

// fix code

window.addEventListener('click', function(e){
    if (e.target === modalContainer) {
      modalContainer.style.display = "none";
    }
})
