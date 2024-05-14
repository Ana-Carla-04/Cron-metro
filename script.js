const minutosEL = document.querySelector('#minutos')
const segundosEL = document.querySelector('#segundos')
const milisegundosEL = document.querySelector('#milisegundos')

const iniciarBTN = document.querySelector('#iniciar')
const pausarBTN = document.querySelector('#pausar')
const continuarBTN = document.querySelector('#continuar')
const resetarBTN = document.querySelector('#resetar')

let minutos = 0
let segundos = 0
let milisegundos = 0

let interval

iniciarBTN.addEventListener('click', ComecaCronometrar)
pausarBTN.addEventListener('click', pausadinho)
continuarBTN.addEventListener('click', continuar)
resetarBTN.addEventListener('click', resetadin)

let pausado = false

function ComecaCronometrar() {

    interval = setInterval(() => {

        if(!pausado){
            milisegundos += 10

            if(milisegundos === 1000){
                segundos++
                milisegundos = 0
            }

            if(segundos == 60){
                minutos++
                segundos = 0
            }
        }

        milisegundosEL.textContent = formataMILI(milisegundos)
        segundosEL.textContent = formatacao(segundos)
        minutosEL.textContent = formatacao(minutos)


    }, 10)
    iniciarBTN.style.display = "none"
    pausarBTN.style.display = "block"
}


function pausadinho(){
    pausado = true
    pausarBTN.style.display = "none"
    continuarBTN.style.display = "block"
}


function continuar(){
    pausado = false
    continuarBTN.style.display = "none"
    pausarBTN.style.display = "block"
}



function resetadin(){
    clearInterval(interval)
    pausado = false
    
    minutos = 0
    segundos = 0
    milisegundos = 0

    minutosEL.textContent = "00"
    segundosEL.textContent = "00"
    milisegundosEL.textContent = "000"

    iniciarBTN.style.display = "block"
    continuarBTN.style.display = "none"
    pausarBTN.style.display= "none"
}


function formatacao(time) {
    return time < 10 ? `0${time}`: time
}

function formataMILI(time) {
    return time <100 ? `${time}`.padStart(4, "0"): time
}