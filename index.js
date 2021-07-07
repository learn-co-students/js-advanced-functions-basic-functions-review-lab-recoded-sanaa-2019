// Your code here
function saturdayFun(x = "roller-skate") {

    return `This Saturday, I want to ${x}!`
}

function mondayWork(y = 'go to the office') {
    return `This Monday, I will ${y}.`
}

function wrapAdjective(x = "*") {
    return function (y = "special") { return `You are ${x}${y}${x}!` }
}

let Calculator = {

    add(x = 1, y = 3) {
        return x + y
    },

    subtract(x = 1, y = 3) {
        return x - y
    },

    multiply(x = 1, y = 3) {
        return x * y
    },

    divide(x = 10, y = 5) {
        return x / y
    }

}

function actionApplyer(x, y) {//x= starting integer and y= is array of functions

    if (y.length == 0) { return x } //if no array return x

    y.forEach(element => { x = element(x) }) // if array .. go inside each function in array and change x
    return x;
}

