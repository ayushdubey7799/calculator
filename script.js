let display = document.getElementById("display");
let buttons = document.querySelectorAll('.button');
let stringToEvaluate = "";
buttons.forEach(element => {
    element.addEventListener('click',(e) => evaluate(e));
});
console.log()
const evaluate = (e) => {
    let x = e.target.innerHTML;
    console.log(x);
    console.log(y);

    if(x=="="){
        stringToEvaluate = "" + eval(stringToEvaluate)
        console.log("x");
    }
    else if(x=="DEL"){
        stringToEvaluate = stringToEvaluate.slice(0,-1);
    }
    else if(x=="RESET"){
        stringToEvaluate = "";
    }
    else if(x=="X"){
        x = "*";
        stringToEvaluate+=x;
    }
    else{
        stringToEvaluate+=x;
    }
   displayString();
}

function displayString(){
    display.innerHTML = stringToEvaluate;
    console.log(stringToEvaluate);
}

