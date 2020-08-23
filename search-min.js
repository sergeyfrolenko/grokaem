// modern, with check uncorrect data

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

const a = sortArray(createArray(10));
cl(a);

function min(arr) {
  if(Object.keys(arr).length < 1) 
    return 'empty';
  if(Object.keys(arr).length == 1) 
    return arr[Object.keys(arr)[0]];
  let t = arr[Object.keys(arr)[0]];
  for (var i = 1; i < Object.keys(arr).length; i++) {
    if(arr[Object.keys(arr)[i]] < t) {
      t = arr[Object.keys(arr)[i]];
    }
  }
  return t;
}
a[109] = -3;
cl(min(a));
