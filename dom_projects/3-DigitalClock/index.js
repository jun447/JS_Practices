// get local time here
const time = new Date().toLocaleString();
console.log(time);
document.querySelector('#clock').textContent = time;