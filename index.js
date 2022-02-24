function updateTime() {
      let date = new Date();
      document.getElementById("tsag").innerHTML = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      setTimeout(updateTime, 500);
}
updateTime();

function setTheme(themeName) {
      localStorage.setItem('theme', themeName);
      document.documentElement.className = themeName;
}
function switcher() {
      if (localStorage.getItem('theme') === 'theme-dark') {
          setTheme('theme-light');
      } else {
          setTheme('theme-dark');
      }
}
(function () {
      if (localStorage.getItem('theme') === 'theme-dark') {
          setTheme('theme-dark');
      } else {
          setTheme('theme-light');
      }
})();