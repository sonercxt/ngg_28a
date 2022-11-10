const fruitList = [
  {
    name: "Banana",
    isLike: true,
  },
  {
    name: "Apple",
    isLike: true,
  },
  {
    name: "Kiwi",
    isLike: true,
  },
  {
    name: "Avocado",
    isLike: true,
  },
  {
    name: "Ananas",
    isLike: true,
  },
];
const selectionList = [true, false];

for (let i = 0; i < fruitList.length; i++) {
  const randomNumberSelection = Math.floor(Math.random() * selectionList.length);
  fruitList[i].isLike = selectionList[randomNumberSelection];
}

for (let i = 0; i < fruitList.length; i++) {
  if (fruitList[i].isLike) {
    console.log(`i like ${fruitList[i].name} :)`);
  } else {
    console.log(`i don't like ${fruitList[i].name} :(`);
  }
}
