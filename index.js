function displayTime() {
    var dateTime = new Date();
    document.getElementById('hours').textContent = dateTime.getHours()+":"+dateTime.getMinutes()+":"+dateTime.getSeconds();
    setInterval(displayTime, 1000);
}
displayTime()

localStorage.setItem('theme', 'theme-dark');
    document.documentElement.className = 'theme-dark';

function setTheme(themeName){
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
function toggleTheme() {
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    }else{
        setTheme('theme-dark')
    }
}
(function () {
    if (localStorage.getItem('theme') === 'theme-dark') {
        setTheme('theme-dark');
    } else {
        setTheme('theme-light');
    }
})();