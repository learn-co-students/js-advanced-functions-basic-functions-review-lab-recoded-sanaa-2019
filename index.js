// Your code here

function saturdayFun(string="roller-skate"){
    
    return "This Saturday, I want to " + string + "!"
}
saturdayFun('bathe my dog')
 
function mondayWork(string="go to the office"){
    
    return "This Monday, I will " + string + "."

}

mondayWork("work from home")


function wrapAdjective(parent="*"){

    return function(inner=" a special person"){
        return "You are " + parent + inner + parent +"!" 
        
    }

}
wrapAdjective("%")("a dedicated programmer")

let Calculator={

   add(x,y){
       return 1 +3 
   },

   subtract(x,y){
       return 1 -3
   },
   multiply(x,y){
    return 1 * 3
   },

   divide(x,y){
       return 10 / 5
   }

}

function actionApplyer(integer,array){

    if(array==0){
        return integer
    }
  array.forEach(element => {

    integer=element(integer)
      
  });
  return integer
}