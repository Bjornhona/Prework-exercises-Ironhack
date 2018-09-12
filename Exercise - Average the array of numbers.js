var sum = 0;
var numbers = [1, 7, 4, 11, 16, 10];

for(var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

var average = sum / numbers.length;
console.log(average);