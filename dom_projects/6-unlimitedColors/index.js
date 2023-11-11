
const btn_strt = document.querySelector('#start')
const btn_stop = document.querySelector('#stop')

let intervalId = null
btn_strt.addEventListener('click',function () {
    intervalId = setInterval(function () {
        // random color generator
        const randomColor = Math.floor(Math.random()*16777215).toString(16)
        document.body.style.backgroundColor = '#'+randomColor
        console.log('start Clicked')
    },1000)
})

btn_stop.addEventListener('click',function () {
    clearInterval(intervalId)
    intervalId = null
    console.log('stop Clicked')
})

