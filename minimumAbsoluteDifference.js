
function minimumAbsoluteDifference(arr) {

  //sort array in ascending order
  arr.sort((a,b) => a-b);
  let min;

  //loop through sorted array
  for (let i = 0; i < arr.length - 1; i++) {
    //calc diff for adjacent int pairs
    let diff = Math.abs(arr[i] - arr[i+1]);
    //if a 0 diff is found, immediately return 0 (prevent unnecessary tasks)
    if (diff === 0) {
      return 0;
    }
    //if no min (first diff calculated) or diff is less than min
    if (!min || diff < min) {
      //update min
      min = diff;
    }
  }

  return min;
}

let arr = [5, 2, 4, 3, 1, -1];
console.log(minimumAbsoluteDifference(arr))