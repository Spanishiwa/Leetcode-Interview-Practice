function reconstructQueue(people) {
  let queue = [];

  let sorted = people.sort(function(p, c) {
    return (c[0] === p[0]) ? p[1] - c[1] : c[0] - p[0];
  });

  sorted.forEach(function(person){
    queue.splice(person[1], 0, person);
  });

  return queue;
}

let test1 = [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]];
let test2 = [[9,0],[7,0],[1,9],[3,0],[2,7],[5,3],[6,0],[3,4],[6,2],[5,2]];
let result1 = [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]];
let result2 = [[3,0],[6,0],[7,0],[5,2],[3,4],[5,3],[6,2],[2,7],[9,0],[1,9]];

console.log(`result 1 is ${reconstructQueue(test1)}, it should be ${result1}`);
console.log(`result 2 is ${reconstructQueue(test2)}, it should be ${result2}`);
