/* onst a = new Date();
let time =  a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
const clock = document.querySelector("#clock");
clock.textContent = time; 
setTimeout(time, 1000); */
function tsag() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    const time = h + ":" + m + ":" + s;
    const clock = document.querySelector("#clock");
    clock.textContent = time;
    setTimeout(tsag, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
}
