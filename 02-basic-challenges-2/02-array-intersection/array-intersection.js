// function arrayIntersection(arr1, arr2) {
//   const set1 = new Set(arr1);

//   return arr2.filter(x => set1.has(x));
// }

function arrayIntersection(arr1, arr2) {
  const solution = [];
  for(let i =0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])){
      solution.push(arr1[i]);
    }
  }

  return solution
}

module.exports = arrayIntersection;
