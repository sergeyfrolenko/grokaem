///////// lib //////////
function cl(msg) {
  console.log(msg);
}
function createArray(n) {
  const result = [];
  let temp = 0;
  for(let i = 1; i < n; i++) {
    temp = Math.floor(Math.random()*100)
    result.push(temp);
  }
  return result;
}
function sortArray(arr) {
  return arr.sort((a,b)=>a-b)
}
///////// lib end //////////

function justFunction(msg) {
  return msg;
}
cl(justFunction(123)) // => 123
cl(typeof justFunction) // => function

function Clas() {
  
}
cl(typeof Clas) // => function
let clasExample = new Clas();
cl(clasExample) // {}
cl(typeof clasExample) // 

cl('======')
function Clas2(msg) {
  this.msg = msg;
}
cl(typeof Clas2) // => function
cl(Clas2()) // => undefined
