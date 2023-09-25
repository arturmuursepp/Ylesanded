let buffer = 2
const button = document.getElementById("btn-1")
function clickDetector() {
    if (buffer % 2 == 0){
        button.value = "Enable white mode"
        document.body.classList.toggle("dark");
    }else{
        button.value = "Enable dark mode"
        document.body.classList.toggle("dark");
    }
    buffer++
}