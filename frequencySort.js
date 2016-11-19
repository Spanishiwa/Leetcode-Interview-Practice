function frequencySort(str) {
  let freqObj = {};
  for (let i = 0; i < str.length; i += 1) {
    let chr = str[i];
    freqObj[chr] ? freqObj[chr] += 1 : freqObj[chr] = 1;
  }
  let keys = Object.keys(freqObj);
  let vals = keys.map(k => freqObj[k]);
  let buckets = [];

  for (let i = 0; i < keys.length; i += 1) {
    buckets.push(keys[i].repeat(vals[i]));
  }

  buckets.sort(function(p, c) {
    return (c.length - p.length);
  });

  return buckets.join('');
}

// console.log(frequencySort("tree"));
console.log(frequencySort("loveleetcode"));
