function findContiguouslyIncreasingSubsequences(arr) {
  // brute force: check every subseq, ignore repeated work
  // for every start i in (0...arr.length-1), and every j in (i+1...arr.lenth-1):
  //   check is increasing,
  //   if so, store (i,j) n set

  // finally, find longest (i,j) in set and return subarray
  var subseqs = {};
  for (var i = 0; i < arr.length-1; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (isIncreasing(arr, i, j)) {
        subseqs[String([i,j])] = j - i + 1;
      }
    }
  }
  // edge case: if no subseqs found: return false
  if (Object.keys(subseqs).length === 0) {
    return [];
  }

  // e.g. {"2,5": 3}
  var lengths = {};
  for (var ij in subseqs) {
    if (subseqs.hasOwnProperty(ij)) {
      lengths[subseqs[ij]] = ij;
    }
  }
  var pairs = Object.keys(lengths);
  var maxLength = Math.max.apply(null, pairs);

  var indices = lengths[String(maxLength)].split(',');
  var i = indices[0];
  var j = indices[1];
  return arr.slice(i,j+1);
}

function isIncreasing(arr, i, j) {
  for (; i < j; i++) {
    if (arr[i] >= arr[i+1]) {
        return false;
    }
  }
  return true;
}

console.log("expect false:  ", isIncreasing([9,8,7,6,5,4,3,2,1], 0, 8)); // false

var test1 = [1,2,3]
var test2 = [9,8,7,6,5,4,3,2,1]
console.log("expect 1,2,3: ", findContiguouslyIncreasingSubsequences(test1)); // [1,2,3]
console.log("expect []: ", findContiguouslyIncreasingSubsequences(test2)); // 