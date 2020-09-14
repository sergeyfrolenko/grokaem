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

// Just for rectangle
function countMatch(str1,str2) {
  const arr1 = str1.split('');
  const arr2 = str2.split('');
  let result = 0;
  if(arr1.length > arr2.length) {
    for(let i=0;i<arr2.length;i++) {
      if(arr1[i]==arr2[i]) {
        result++;
      }
    }
  } else {
    for(let i=0;i<arr1.length;i++) {
      if(arr1[i]==arr2[i]) {
        result++;
      }
    }
  }
  cl(result);
}
countMatch('hi', 'hik');
