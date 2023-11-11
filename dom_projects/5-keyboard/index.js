const insrt = document.querySelector('#insert')

window.addEventListener('keydown',function (e){
    e.preventDefault()
    if (e.key === ' '){
        insrt.innerHTML='Space'
    }else {
        insrt.innerHTML=e.key
    }

})
