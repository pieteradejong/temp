function findDifference(arr1, arr2) {
  // arr1: store el's in set
  // check arr2 items againts that set, return missing
  var l1, l2;
  l1 = arr1.length;
  l2 = arr2.length;

  if (l1 < l2) {
    arr_long = arr2;
    arr_short = arr1;
  }
  else if (l1 > l2) {
    arr_long = arr1;
    arr_short = arr2;
  }
  else {
    // handle case: arrays eq length
  }

  var num_set, number;
  var num_set = {};

  for (var i = 0; i < arr_short.length; i++) {
      number = arr_short[i];
      num_set[number] = true;
  }
  for (var j = 0; j < arr_long.length; j++) {
    number = arr_long[j];
    if (!num_set.hasOwnProperty(number)) {
      return number;
    }
  }
  return false;
}

function findDifference2(arr1, arr2) {
   arr1.sort();
   arr2.sort();

   for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return arr1[i];
    }
   }

}


console.log(findDifference([3,6,8,12,4],[4,6,8,12])); // 3

console.log(findDifference2([3,6,8,12,4],[4,6,8,12])); // 3




