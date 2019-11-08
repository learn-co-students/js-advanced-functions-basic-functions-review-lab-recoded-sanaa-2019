// Your code here
function saturdayFun(a = "roller-skate"){
    return `This Saturday, I want to ${a}!`
}
saturdayFun()

function mondayWork(b = "go to the office"){
    return `This Monday, I will ${b}.`
}


function wrapAdjective(star = "*"){
    return function(a = "a special person MOLLY"){

        return `You are ${star}${a}${star}!`

    }
}



let Calculator = {
     add(){
        return 1 + 3
    },

    subtract() {
        return 1 - 3
    },

    multiply() {
        return 1 * 3
    },

    divide() {
        return 10 / 5
    }
}



function actionApplyer(a,b){

    if(b.length == 0){return a}
    b.forEach(element => {
        a = element(a)
    });
        return a


}



