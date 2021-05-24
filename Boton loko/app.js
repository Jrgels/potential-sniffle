let contador=0
let message= "Ya no le piques, le duele :c"

const countingClicks = () => {
    document.getElementById("counting").innerHTML = ++contador
    if(contador > 10){
        document.getElementById("warning").innerHTML = message
    }

}