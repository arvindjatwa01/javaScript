const myNums = [1, 2, 3];

// const myNumsTotal = myNums.reduce((acc, currVal) => {
//   console.log(`acc: ${acc} and currVal: ${currVal}`);
//   return acc + currVal;
// }, 0);
const myNumsTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);

console.log(myNumsTotal);

const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "Python course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const shoppingTotal = shoppingCart.reduce(
  (acc, item) => acc + item.price,
  0
);

console.log(shoppingTotal);
