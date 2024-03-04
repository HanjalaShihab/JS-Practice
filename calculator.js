let display = document.getElementById("input");

function mybtn(value) {
    display.value += value;
}

function submit() {
    try{
        display.value = eval(display.value);
    }
    catch(err) {
        display.value = "Error";
    }
}

function clearAll() {
    display.value = "";
}