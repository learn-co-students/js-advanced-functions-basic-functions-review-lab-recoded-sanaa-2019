// Your code here
function saturdayFun(act = "roller-skate") {
    return "This Saturday, I want to " + act + "!";
}
let mondayWork = function(act="go to the office"){
    return "This Monday, I will " + act+"."
}
function wrapAdjective(params ="*") {
    return function(arg1 = 'special'){
        return "You are " + params + arg1 + params+"!";
    }
}

let Calculator = {
    add:function(num1 , num2){return num1 + num2},
    subtract:function(num1 , num2){return num1 - num2},
    multiply:function(num1 , num2){return num1 * num2},
    divide:function(num1 , num2){return num1 / num2},
    
}
function actionApplyer (start , arr){
    if (arr.length == 0 ) {
        return 0 ; 
    }
    for (const iterator of arr) {
        start = iterator(start);
    }
    return start;

    
}