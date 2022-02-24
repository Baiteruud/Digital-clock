const a = new Date();
let time =  a.getHours() + ":" + a.getMinutes();
console.log(time);
const clock = document.querySelector(".clock");
clock.textContent = time;