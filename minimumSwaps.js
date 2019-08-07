/**
 
I: Unsorted array of consecutive integers (1 to n)
O: Number of minimum swaps necessary to sort array in ascending order


 */


 function minimumSwaps(arr) {
   let pointer1 = 0;
   let pointer2 = arr.length - 1;
   let swaps = 0;

   while (pointer1 < pointer2) {
     if (arr[pointer1] === pointer1 + 1) {
       pointer1++;
     } else {
      let temp = arr[arr[pointer1] - 1];
      arr[arr[pointer1] - 1] = arr[pointer1];
      arr[pointer1] = temp;
      swaps++;
     }
   }
   return swaps;
 }


 let test1 = console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); // 5
 let test2 = console.log(minimumSwaps([4, 3, 1, 2])); // 3
 let test3 = console.log(minimumSwaps([2, 3, 4, 1, 5])); // 3