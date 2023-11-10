setInterval(() => {
    const time = new Date().toLocaleTimeString();
    document.querySelector('#clock').textContent = time;
}, 1000);
