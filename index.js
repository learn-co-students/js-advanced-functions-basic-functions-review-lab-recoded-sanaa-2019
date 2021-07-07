// Your code here
function saturdayFun(activity='roller-skate'){
  return `This Saturday, I want to ${activity}!`;
}
function mondayWork(activity='go to the office'){
  return `This Monday, I will ${activity}.`
}
function wrapAdjective(str="*"){
  return function(param="special"){
    return `You are ${str}${param}${str}!`;
  }
  return wrapAdjective;
}
let  encouragingPromptFunction =wrapAdjective("%");

let Calculator={
  add:function(num1=1,num2=3){
    return num1+num2;
  },
  subtract:function(num1=1,num2=3){
    return num1-num2;
  },
  multiply:function(num1=1,num2=3){
    return num1*num2;
  },
  divide:function(num1=10,num2=5){
    return num1/num2;
  }
}
function actionApplyer(arr,startingPoint=0){
  if (arr.length==0)
  {
    return startingPoint;
  }
else{
startingPoint.map(e=>{arr=e(arr)});
}
return arr;
  
}

