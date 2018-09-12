var board = [
  [null, null, null, "S", null],
  [null, "S", null, "S", null ],
  ["S", null, null, null, null ],
  [null, "S", null, null, null],
  [null, null, null, null, "S"],
];

function randomIndex () {
  return Math.floor(Math.random() * 5);
}

for (var i = 0; i < 10; i++) {
  var row = randomIndex();
  var column = randomIndex();
  if (board[row][column] === 'S') {
    console.log('Yuppieee! I sank a boat on ' + row + ', ' + 'column');
    board[row][column] = null;
  } else console.log('Nope, you missed it this time.')
}