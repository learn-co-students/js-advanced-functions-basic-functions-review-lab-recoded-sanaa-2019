//one
function saturdayFun(target="roller-skate") {
  return(`This Saturday, I want to ${target}!`);
}
saturdayFun();
//two
function mondayWork(target="go to the office") {
  return(`This Monday, I will ${target}.`);
}
mondayWork();
//three
function wrapAdjective(arg="*") {
 return function(one="special"){
   return `You are ${arg}${one}${arg}!`
 }
}
 wrapAdjective();
 let Calculator={
   add:function(num1 , num2){
     return num1 + num2
     
   },
    subtract:function(num1 , num2){
      return num1 - num2
      
    },
    multiply:function(num1 , num2){
      return num1 * num2
      
    },
    divide:function(num1 , num2){
      return num1 / num2
      
    },
   
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
 
