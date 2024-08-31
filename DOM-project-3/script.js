const barContent = document.querySelectorAll("#bar-content")
const barBtn = document.querySelectorAll("#bar-cover")

barBtn.forEach(function(e){
    e.addEventListener('click', hide(barContent))
})

console.log(barBtn)

function minPlus () {
    
}


function hide(elem){
        // elem.forEach(function (e) {
        //   e.classList.toggle("hide");
        // });


        for(let i = 0; i < elem.lenght; i++){
            elem[i].classList.toggle('hide')
        }
    }