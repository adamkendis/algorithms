/**

  Inputs: 2-d array (queries - tuples)
          operation 1: Insert value to data structure
                    2: Delete one instance of value from data structure
                    3: Check if any item occurs exactly value times
                          YES: push 1 to result arr
                          NO:  push 0 to result arr    
                    [
                      [int operation, int value],
                      [int operation, int value]
                    ]

  Output: Array (ints - results of "3" operations)

  Example: 
  
  Input: [[1, 2], [1, 2], [3, 2], [2, 2], [3, 2]]

   - Push 2 to storage
   - Push 2 to storage
   - Push 1 to result
   - Delete 2 from storage
   - Push 0 to result

  End storage: [2]
  Result: [1, 0]

 */

function freqQuery(queries) {
  let storage = {};
  let counts = [];
  let result = [];

  queries.forEach(query => {
    let value = query[1];

    if (query[0] === 1) {
      if (!storage[value]) {
        storage[value] = 1;
        if (!counts[1]) {
          counts[1] = 1;
        } else {
          counts[1]++;
        }
      } else {
        counts[storage[value]]--;
        storage[value]++;
        if (!counts[storage[value]]) {
          counts[storage[value]] = 1;
        } else {
          counts[storage[value]]++;
        }
      }
    }

    if (query[0] === 2) {
      if (storage[value]) {
        counts[storage[value]]--;
        storage[value]--;
        counts[storage[value]]++;
      }
    }

    if (query[0] === 3) {
      if (counts[value]) {
        result.push(1);
      } else {
        result.push(0);
      }
    }

  });

  return result;
  
}
