animalArray = ["Dog", "Cat", "Fish", "Lizard", "Whale", "Cheetah"];
animalArray.push('Koala', 'Unicorn');
animalArray.splice(0,2);
animalArray[animalArray.length-1] = 'last';
console.log(animalArray);