var currentNumber = document.getElementById('currentNumber');
var counter = 0;
const buttonSomar = document.getElementById('somar');
const buttonSubtrair = document.getElementById('subtrair');

buttonSomar.addEventListener("click", increment, false);
buttonSubtrair.addEventListener("click", decrement, false);

function increment(){
    if(counter < 10){
        counter += 1;
    }    

    if(counter > 0){
        currentNumber.style.color = "green";
    }
    currentNumber.innerHTML = counter;
}

function decrement(){
    if(counter > -10){
        counter -= 1;
    }

    if(counter < 0){
        currentNumber.style.color = "red";
    }
    currentNumber.innerHTML = counter;
}

