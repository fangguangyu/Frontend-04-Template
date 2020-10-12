// 思路1
// function findA(string) {
//   let result = false;
//   for(let i = 0; i < string.length; i++) {
//     if(string[i] == 'a') {
//       result = true;
//     }
//   }

//   return result
// }

// findA('name');

// 思路2
function match(string) {
  for(let c of string) {
    if(c == 'a')
      return true;
  }
  return false;
}

match('I am groot');
