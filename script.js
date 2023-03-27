
const Play = document.querySelector('.play')
const Stop = document.querySelector('.stop')

const minute = document.querySelector('.minutos')
const second = document.querySelector('.segundos')

const botaoAumentar = document.querySelector('.mais')
const botaoDiminuir = document.querySelector('.menos')

const lareira = document.querySelector('.figura04')
const audio = document.querySelector('.lareira')

const cafeteria = document.querySelector('.figura03')
const audio03 = document.querySelector('.cafe')
const chuva = document.querySelector('.figura02')
const audio02 = document.querySelector('.chuva')
const floresta = document.querySelector('.figura01')
const audio01 = document.querySelector('.floresta')

const btnDark = document.querySelector('#light')

btnDark.addEventListener('click', (event) => {
    const body = document.body
    const BtnTarget = event.target

    console.log(body)

    if(body.getAttribute('theme')){
        body.removeAttribute('theme')
        BtnTarget.style.backgroundImage = "url(./dark-ou-light/sol.png)"
    } else {
        body.setAttribute('theme', 'dark')
        BtnTarget.style.backgroundImage = "url(./dark-ou-light/lua.svg)"
    }
})


let pararCronometro
let minutes

function cronometroGeral() {
    pararCronometro = setTimeout(function(){
         minutes = Number(minute.innerHTML)
         let seconds = Number(second.innerHTML)
        
         
         if(seconds <= 0) {
            seconds = 60
 
            minute.innerHTML = String(minutes - 1 ).padStart(2,'0')
 
        }
        
        
        if(minutes <= 0 ){
                  
            return
         }
       
        
        second.innerHTML = String(seconds - 1).padStart(2,'0')
         
        cronometroGeral()
       },1000)
}

function aumentar() {
    minutes += 5
    minute.innerHTML = minutes;
    
}

function diminuir() {
    minutes -= 5
    minute.innerHTML = minutes;
   
}


Play.addEventListener('click', function() {
 cronometroGeral()
})

Stop.addEventListener('click', function() {
   clearInterval(pararCronometro)
} )

botaoAumentar.addEventListener('click', function(){
    aumentar()
})

botaoDiminuir.addEventListener('click', function() {
    diminuir()
})

const btnsAction = document.querySelectorAll('.figura button')

lareira.addEventListener('click', function() {
    
    btnsAction.forEach(ele => {
        ele.classList.remove('btnActive')
    })
    lareira.classList.add('btnActive')

    audio01.pause()
    audio02.pause()
    audio03.pause()
    audio.play()
    
})

cafeteria.addEventListener('click', function(){

    btnsAction.forEach(ele => {
        ele.classList.remove('btnActive')
    })

    cafeteria.classList.add('btnActive')
    audio01.pause()
    audio02.pause()
    audio.pause()
    audio03.play()
})

chuva.addEventListener('click', function() {

    btnsAction.forEach(ele => {
        ele.classList.remove('btnActive')
    })

    chuva.classList.add('btnActive')
    audio01.pause()
    audio.pause()
    audio03.pause()
    audio02.play()
})

floresta.addEventListener('click', function( ){

    btnsAction.forEach(ele => {
        ele.classList.remove('btnActive')
    })

    floresta.classList.add('btnActive')

    audio02.pause()
    audio.pause()
    audio03.pause()
    audio01.play()
})

