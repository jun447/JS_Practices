


// document.querySelectorAll('.button').forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//
//     })
// })
const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
let color;
// console.log(btn);
btn.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
      // console.log(e.currentTarget.id);
      color = e.currentTarget.id;
      body.style.backgroundColor = color;
  })
});
