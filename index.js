// Your code here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`
    
  }

  function wrapAdjective (t='*'){
      return function(n="special"){
          return   `You are ${t}${n}${t}!`
          
      }
     
  }

  let encouragingPromptFunction =wrapAdjective("%");

  const Calculator= {
      add:function(){return 1+3},
      subtract: function(){return 1-3},
      multiply: function(){return 1*3},
      divide: function(){return 10/5},
  }

  function actionApplyer(startingPoint,arr){
    if (arr.length === 0 ) {
        return startingPoint;
    }
  
    arr.forEach(element => {
        startingPoint = element(startingPoint)
    });
        return startingPoint;

}
