const root = document.documentElement
const time = document.querySelector(".time")
const button = document.querySelector(".button")

function updateTime(){
    let date = new Date
    time.textContent = date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    setTimeout(updateTime, 500)
}
updateTime()

document.documentElement.className = "theme-classic"

function switchTheme(){
    let theme
    switch (document.documentElement.className) {
        case "theme-classic":
            theme = "theme-light"
            break;
        case "theme-light":
            theme = "theme-dark"
            break;
        default:
            theme = "theme-classic"
            break;
    }
    document.documentElement.className = theme
}