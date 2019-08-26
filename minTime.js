



// SLOW VERSION

// function minTime(machines, goal) {
//   let counts = machines.reduce((accum, machine) => {
//       if (!accum[machine]) {
//           accum[machine] = 1;
//       } else {
//           accum[machine]++;
//       }
//       return accum;
//   }, {})

//   let day = 0;
//   let produced = 0;

//   while (produced < goal) {
//       day++;
//       let days = Object.keys(counts).sort((a,b) => a-b);
//       for (let i = 0; i < days.length; i++) {
//           if (day % days[i] === 0) {
//               produced += counts[days[i]];
//           }

//       }
//   }

//   return day;

// }

function minTime(machines, goal) {
    let min = Math.min([...machines]);
    let max = Math.max([...machines]);
    let mid = Math.floor(((max - min) / 2) + min);

    function calcProduced(machines, days) {
        let dict = {};
        let total = 0;

        machines.forEach(machine => {
            let produced = Math.floor(days / machine);
            
            if (!dict[machine]) {
                dict[machine] = produced;
            } 
            total += dict[machine];
        });
        return total;
    }

    if (calcProduced(machines, mid) < goal) {
        min = mid;
    }

}


minTime([1, 1, 2, 3, 4, 5, 5, 5], 10)