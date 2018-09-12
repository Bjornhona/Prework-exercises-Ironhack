var currentLargest = null;
var numbers = [10, 16, 99, 0, 52, 41, 7];

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > currentLargest ) {
     currentLargest = numbers[i];
  } 
}
     
console.log("The largest number is: " + currentLargest);