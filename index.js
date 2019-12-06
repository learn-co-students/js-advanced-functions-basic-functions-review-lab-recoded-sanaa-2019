// Your code here
function saturdayFun(u="roller-skate"){
 return `This Saturday, I want to ${u}!`

}
function mondayWork(go='go to the office'){
  return `This Monday, I will ${go}.`
}
function wrapAdjective(u="*",word){
  
  return function mo(word){
    let wo=`You are`+` ${u}${word}${u}!`;
    return wo;
  }
}
const Calculator={add:
  function add(a,b){
  return a+b;
},subtract:function subtract(a,b){return a-b}
  ,multiply:function multiply(a,b){return a*b}
  ,divide:function divide(a,b){return a/b}
};

function actionApplyer(n=0,h=[]){
  let all=n;
  if(h.length){
      for(let i=0;i<h.length;i++){
        let u=h[i];
        all=u(all)
      }
      return all
    }else{
        return n;
    }
}