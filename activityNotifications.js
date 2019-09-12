/*

Inputs: Arr ints (daily expenditures)
        Int d (number of trailing days)

Output: Int (Number of fraud notifications sent in expenditures period)

Fraud notification sent if daily expenditures >= median of n trailing days' expenditures


Notes:

- If arr.length < d  -> 0 notifications
- 



*/


function activityNotifications(expenditure, d) {
  let notifications = 0;

  for (let i = d; i < expenditure.length; i++) {
    // **** SLOW CODE ****
    // let trailingDays = expenditure.slice(i-d, i).sort((a,b) => a-b);
    // let findMedian = (days) => {
    //   if (days.length % 2 === 0) {
    //     return (trailingDays[trailingDays.length / 2 - 1] + trailingDays[trailingDays.length / 2]) / 2
    //   } else {
    //     return trailingDays[Math.floor(trailingDays.length / 2)]
    //   }
    // }

    let trailingDays = expenditure.slice(i-d, i);

    let findMedian = days => {
      let mid = days.length % 2 === 0 ? (days.length / 2) + 1 : Math.ceil(days.length / 2)
      let count = new Array(200).fill(0);

      // if (days.length % 2 === 0) {
      //   mid = (days.length / 2) + 1;
      // } else {
      //   mid = Math.ceil(days.length / 2);
      // }

      days.forEach(day => count[day]++);


      for (let i = 0; i < count.length; i++) {
        while (count[i] > 0 && mid > 0) {
          count[i]--;
          mid--;
        }
      }

      // while (mid > 0) {
      //   // find even length median
      //   if (days.length % 2 === 0) {
      //     let last;
      //     while (count[i] > 0) {
      //       count[i]--;
      //       mid--;
      //       last = i;
      //       if (mid === 1) {
      //         last = i;
      //       }
      //     } 
      //   }
      // }


    if (expenditure[i] >= 2 * findMedian(trailingDays)) {
      notifications++;
    }
  }

  return notifications;

}

let expenditures1 = [2,3,4,2,3,6,8,4,5]
let d1 = 5

let expenditures2 = [1,2,3,4,4]
let d2 = 4

console.log(activityNotifications(expenditures1, d1));
console.log(activityNotifications(expenditures2, d2));