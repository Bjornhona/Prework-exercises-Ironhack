for (var i = 1; i <= 50; i++){
  if (i % 7 === 0) {
    console.log(i);
    i++;
    continue;
  } else if (i % 10 === 0 || i % 15 === 0) {
    console.log('Donkey');
  } else {
    console.log(i);
  }
}