const number = 3;
let isGreaterThanZero = "";
let isEven = "";

const evaluateNumber = () => {
  if (number % 2 === 0) {
    isEven = "even";
  } else {
    isEven = "uneven";
  }

  if (number < 0) {
    isGreaterThanZero = "smaller than 0";
  } else {
    isGreaterThanZero = "greater than 0";
  }
};

evaluateNumber();

const showResult = () => {
  if (number === 0) {
    console.log("It's a 0");
  } else {
    console.log(`${number} is ${isEven} and ${isGreaterThanZero}`);
  }
};

showResult();
