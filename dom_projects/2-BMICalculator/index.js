// const height = document.querySelector('#height')
// const weight = document.querySelector('#weight')
//
//
// const btn = document.querySelector('#btn')
// const bmi = height.value / weight.value ** 2
// btn.addEventListener('click', function (e) {
//
//     const result = document.querySelector('#results')
//     result.innerHTML = bmi
// })

const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const height = document.querySelector('#height')
    const weight = document.querySelector('#weight')
    const bmi = (weight.value / ((height.value*height.value)/10000)).toFixed(2)
    const result = document.querySelector('#results')
    result.innerHTML = `Your BMI is : ${bmi}`
    if (bmi<18.6){
        result.innerHTML += '<br>You are underweight'
    }else if (bmi>18.6 && bmi<24.9){
        result.innerHTML += '<br>You are healthy'
    }
    else if (bmi>24.9 && bmi<29.9){
        result.innerHTML += '<br>You are overweight'
    }
    else if (bmi>29.9){
        result.innerHTML += '<br>You are obese'
    }
})