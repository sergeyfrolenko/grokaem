///////// lib //////////
function cl(msg) {
  console.log(msg);
}
function createArray(n) {
  const result = [];
  let temp = 0;
  for(let i = 1; i < n; i++) {
    temp = Math.floor(Math.random()*100);
    result.push(temp);
  }
  return result;
}
function sortArray(arr) {
  return arr.sort((a,b)=>a-b);
}
///////// lib end //////////

function createTable(arr) {
  let result = [], arrCurrentNum = [];
  arr.forEach((i)=>{
    arrCurrentNum = [];
    arr.forEach((j)=>{
      arrCurrentNum.push(i*j)
    });
    result.push(arrCurrentNum);
  });
  cl(result);
}
// createTable([7,11,13]); // O=log(n*n)

function createTableRecursion(arr) {
  if (true) {
    
  } else {
    
  }
}
