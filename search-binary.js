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

function findNumber(n,arr) {
  let low=0, high=arr.length-1;
  while(low<=high) {
    let middle = (low+high) / 2; 
    middle = Math.ceil(middle);
    let guess = arr[middle];
    if(guess == n) return middle;
    if(guess < n) low=middle+1;
    if(guess > n) high=middle-1;
  }
  return 'none';
}
const a = sortArray(createArray(1000));
cl(a);
cl(findNumber(1,a));
