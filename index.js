// Your code here
function saturdayFun(string="roller-skate"){
    return `This Saturday, I want to ${string}!`;
}
console.log(saturdayFun("study"));
let mondayWork=function(string=`go to the office`){
    return `This Monday, I will ${string}.`;
}
console.log(mondayWork("Study"));

function wrapAdjective(string=`*`){
    return (function(special="special"){
        return `You are ${string}${special}${string}!`
    })
}
console.log(wrapAdjective("%")("a dedicated programmer"));

let Calculator={
    add:(function(a,b){
        return a+b;
    }),
    subtract:(function(a,b){
        return a-b;
    }),
    multiply:(function(a,b){
        return a*b;
    }),
    divide:(function(a,b){
        return a/b;
    })
    
}
console.log(calc.add(1,3));


function actionApplyer(num,arr){
    let a=num;
     
     arr.forEach(function(e){
         return num=e(num);
     })
     let message = `${a}, multiplied by 2, added to 1000 and then modulo 7 is ${num}. Apply each function in the Array of functions on the given base (${a}) OR on the result of the use of the previous function to get this result`
     
     if(arr[0]==undefined){
         return num
     }
     else {
         return num;
     }
 }