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
      if (query[0] === '1') {
          inStack.push(query[1]);
      } else if (query[0] === '2') {
          transferStack(inStack, outStack);
          outStack.pop();
      } else if (query[0] === '3') {
          transferStack(inStack, outStack);
          console.log(outStack[outStack.length - 1]);
      }
  });
} 

function transferStack(inStack, outStack) {
  if (!outStack.length) {
      while (inStack.length) {
          outStack.push(inStack.pop());
      }
  }
}