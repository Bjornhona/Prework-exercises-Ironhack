var myFavouriteFood = ['Caviar', 'Guacamole', 'Fajitas', 'Ceviche', 'Sirloin steak', 'Shrimps'];

for (var i = 0; i < myFavouriteFood.length; i++) {
  if (i % 2 === 0) {
    console.log(myFavouriteFood[i]);
  }
}

var index = 0;
while (index < myFavouriteFood.length) {
    console.log(myFavouriteFood[index]);
    index = index + 2;
}