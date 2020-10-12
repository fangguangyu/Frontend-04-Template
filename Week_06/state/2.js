// 思路1
// function findAB(string) {
//   let result = false;

//   if(string.search('ab') !== -1) {
//     result = true;
//   }
//   console.log(result);
//   return result;
// }

// findAB('nabme');


// 思路2
function match(string) {
  let foundA = false;
  for(let c of string) {
    if(c == 'a') 
      foundA = true;
    else if(foundA && c == 'b') 
      return true;
    else 
      foundA = false;    
  }
  return false;
}

console.log(match('i abcm groot'));