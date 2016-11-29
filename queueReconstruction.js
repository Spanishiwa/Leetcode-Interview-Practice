function reconstructQueue(people) {
  let queue = [];

  let sorted = people.sort(function(p, c) {
    return (c[0] - p[0]);
  });

  sorted.forEach(function(person){
    queue.splice(person[1], 0, person);
  });

  return queue;
}

let test1 = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
let result1 = [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]];
console.log(`result is ${reconstructQueue(test1)}, it should be ${result1}`);
