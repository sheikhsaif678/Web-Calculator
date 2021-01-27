
function getResult(num){
    var input = document.getElementById("get-input")
    
    input.value += num
}

function calculation(num){
    var calculator = document.getElementById("get-input")
    calculator.value = eval(calculator.value);
}

function clearResult(){
    var clear = document.getElementById("get-input")
    clear.value = ""
}
