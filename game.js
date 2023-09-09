const jugadores = ['X', 'O']
let jugadorActual = jugadores[0]
let finJuego = false
const tabla = document.getElementById('tablero')
const cajas = document.getElementsByClassName('caja')
const mensaje = document.createElement('h2')
mensaje.textContent = 'Turno de X'
mensaje.style.marginTop = '30px'
mensaje.style.textAlign='center'
tabla.after(mensaje)


const combinaciones = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

for(let i = 0; i < cajas.length; i++){
    cajas[i].addEventListener('click', () => {
        if(finJuego == true || cajas[i].textContent !== ''){
            return
        }
        if(cajas[i].textContent !== ''){
            return 
        } 
        if(cajas[i].textContent === ''){
            cajas[i].textContent = jugadorActual
        }
        jugadorActual = (jugadorActual === jugadores[0]) ? jugadores[1] : jugadores[0]
        if(jugadorActual == jugadores[0]) {
            mensaje.textContent= 'Turno de X'
        } else {
            mensaje.textContent= 'Turno de O'
        }
        if(ganador(jugadorActual)) {
            mensaje.textContent=`${jugadorActual} Es el ganador!`
            finJuego = true
            return
        }
        if (empate()){
            mensaje.textContent = 'Empate!'
            finJuego = true
        }
    }) 
}

function ganador(jugadorActual){
    for(let i = 0; i < combinaciones.length; i++){
        const [a, b, c] = combinaciones[i];
        if(cajas[a].textContent === jugadorActual && cajas[b].textContent === jugadorActual && cajas[c].textContent === jugadorActual){
            return true
        }
    }
    return false
}
function empate(){
    for(let i = 0; i < cajas.length; i++) {
        if(cajas[i].textContent === '') {
            return false;
        }
    }
    return true
}
function resetear() {
    for(let i = 0; i < cajas.length; i++) {
        cajas[i].textContent = ""
    }
    finJuego = false
    mensaje.textContent='Turno de X'
    jugadorActual = jugadores[0]
}