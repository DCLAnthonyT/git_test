//Calculator Program

const display = document.getElementById("display");

display.value= 0
let selected = false
let operated = false
function appendToDisplay(num){
    if(num == "+" || num == "-" || num == "*" ||  num == "/"){
        if(selected == false){
            display.value+= num
            console.log(selected)
            selected = true
            operated = false
        }
        
        
    }
    else if(display.value == 0){
        display.value = num
    }
    else if(operated == false){
        display.value+= num
    }
}
function operate(){
    let arrOfNum = display.value.split("")
    let num1 = ""
    let operator = ""
    let num2 = ""
    while (arrOfNum.length > 0){
        if (arrOfNum[0] == "+" || arrOfNum[0] == "-" || arrOfNum[0] == "*" ||  arrOfNum[0] == "/" ){
            operator = arrOfNum[0]
        }
        else if(operator == ""){
            num1 += arrOfNum[0]
        }
        else{
            num2 += arrOfNum[0]
        }

        arrOfNum.shift()
    }

    if(operator == "+"){
        display.value = Number(num1) + Number(num2)
    }
    else if(operator == "-"){
        display.value = Number(num1) - Number(num2)
    }
    else if(operator == "*"){
        display.value = Number(num1) * Number(num2)
    }
    else{
        display.value = Number(num1) / Number(num2)
    }
    selected = false
    operated = true
    
    
}

function clearDisplay(){
    display.value = 0
    selected = false
    operated = false
}