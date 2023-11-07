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
    const bmi = weight.value / height.value ** 2
    const result = document.querySelector('#results')
    result.innerHTML = bmi
})