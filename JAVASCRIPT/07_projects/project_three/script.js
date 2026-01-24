const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock'); // Alternative way to select by ID


setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);