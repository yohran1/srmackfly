
let contador = 1

document.getElementById("radio1").ariaChecked = true

setInterval(()=>{
    nextImage()
}, 2000)

function nextImage(){
    contador++
    if(contador > 4){
        contador = 1
    }
    document.getElementById("radio1" + contador).ariaChecked = true
}