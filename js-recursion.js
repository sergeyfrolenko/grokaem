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

function recursion(n) {
  let i = n;
  if (i<1) {
    cl('done');
  } else {
    setTimeout(function() {
      cl(i);
      recursion(i-1);
    }, 1000);
  }
  cl('after all i equal ' + i);
}
// recursion(3)

const a = createArray(100);
function sumArray(arr) {
  let result = 0;
  function inside(arr) {
    if (arr.length > 0) {
      result += arr[arr.length-1];
      inside(arr.slice(0,-1));
    } 
  }
  inside(arr)
  cl(result);
}
//sumArray(a);

const arrN = sortArray(createArray(100));
function findNbinary(n,arr,low=0,high=arr.length-1) {
  let middle = Math.floor((low+high)/2);
  let goose = arr[middle];
  if(low<=high) {
    if(goose==n) cl(middle);
    if(goose<n) {
      low=middle+1;
      findNbinary(n,arr,low);
    }
    if(goose>n) {
      high=middle-1;
      findNbinary(n,arr,low,high);
    }
  } else {
    cl('Done, not found.');
  }
}
cl(a)
findNbinary(1,arrN);
