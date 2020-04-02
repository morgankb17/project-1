//jshint esversion: 6

// Step 3B - average of array function
let avgArr = arr => {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};
