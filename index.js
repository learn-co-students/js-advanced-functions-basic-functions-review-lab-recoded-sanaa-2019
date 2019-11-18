// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(str = "*"){
  return function(adj = "special"){
    return `You are ${str}${adj}${str}!`;
  }

}
let Calculator={
  add : function(num1 , num2){
    return num1+num2;
  },
  subtract : function(num1 , num2){
    return num1-num2;
  },
  multiply : function(num1 , num2){
    return num1*num2;
  },
  divide : function(num1 , num2){
    return num1/num2;
  }
}

function actionApplyer(intStart, array ){
  if (array.length===0)
  return intStart;
  
  else{
    array.forEach(e=>{
      intStart = e(intStart);
    })
    return intStart;
  }
  
  
}

let encouragingPromptFunction = wrapAdjective("!!!");
wrapAdjective("%")("a dedicated programmer") //=> "You are %a dedicated programmer%!"