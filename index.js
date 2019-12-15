// Your code here
 function saturdayFun(act ="roller-skate") {
            return `This Saturday, I want to ${act}!`
        }
        let mondayWork = function(act="go to the office"){
            return `This Monday, I will ${act}.`
        }
        function wrapAdjective(p="*") {
          if (p =="*")
            return function(arg = 'idiot'){
                return `You are ${p}${arg}${p}!`;
            }
            else if (p =="||")
            return function(arg = 'idiot'){
                return `You are ${p}${arg}${p}!`;
            }
        }
        
        let Calculator = {
            add:function(n1 , n2){return n1 + n2},
            subtract:function(n1 , n2){return n1 - n2},
            multiply:function(n1 , n2){return n1 * n2},
            divide:function(n1 , n2){return n1 / n2},
            
        }
        function actionApplyer (strint , arr){
            if (arr.length == 0 ) {
                return 0 ; 
            }
            for (const array of arr) {
                strint = array(strint);
            }
            return strint;
        
            
        }