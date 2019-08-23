/*
Implement queue using two stacks.
Implement 'put', 'pop', 'peek' methods.
put = enqueue
pop = dequeue
peek = print element at front of queue

*/


function processData(input) {
  input = input.split('\n').slice(1);
  let inStack = [];
  let outStack = [];

  input.forEach(query => {
      if (query.length > 1) {
          query = query.split(' ');
      }
      // enqueue - push to inStack
      if (query[0] === '1') {
          inStack.push(query[1]);
      // dequeue - emtpy inStack to outStack
      } else if (query[0] === '2') {
          if (!outStack.length) {
              while (inStack.length) {
                  outStack.push(inStack.pop());
              }
          }
          outStack.pop();
      // peek - empty inStack to outStack 
      } else if (query[0] === '3') {
          if (!outStack.length) {
              while (inStack.length) {
                  outStack.push(inStack.pop());
              }
          }
          console.log(outStack[outStack.length - 1]);
      }
  })
} 