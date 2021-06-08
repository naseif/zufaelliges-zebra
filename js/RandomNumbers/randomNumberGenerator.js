// /***
//  * RandomNumberGenerator - Generiert Zufallszahlen basierend auf naja, dem Üblichen
//  *
//  */
// function RandomNumberGenerator() {
//   let api = {};

//   api.lowestNumber = 0;
//   api.highestNumber = 0;

//   api.lowestNumberEntered = function (value) {
//     api.lowestNumber = parseInt(value);
//   };

//   api.highestNumberEntered = function (value) {
//     api.highestNumber = parseInt(value);
//   };

//   api.evaluation = function () {
//     let lowestNum = api.lowestNumber;
//     let highestNum = api.highestNumber;

//     if (lowestNum < highestNum) {
//       const randomNumber =
//         Math.floor(Math.random() * (highestNum - lowestNum + 1)) + lowestNum;
//       return `The random number between ${lowestNum} and ${highestNum} is ${randomNumber}`;
//     }

//     if (lowestNum === highestNum) {
//       return "You Provided the same Number for both fields!. Please type different Numbers!";
//     }

//     if (lowestNum > highestNum) {
//       return "You provided a higher low number! Please provide a low and high numbers correctly!";
//     }

//     if (isNaN(lowestNum) || isNaN(highestNum)) {
//       return "Both fields should be provided with numbers.Please try again.";
//     }

//     return "You entered a false number or value. Please try again.";
//   };

//   return api;
// }

function GenerateRandomNumbersInUi() {
  let lowestNum = Number($("#lowestNumber").val());
  let highestNum = Number($("#highestNumber").val());
  let randomTextArea = $("#randomNumberArea");

  if (lowestNum < highestNum) {
    const randomNumber =
      Math.floor(Math.random() * (highestNum - lowestNum + 1)) + lowestNum;
    return randomTextArea.text(
      `The random number between ${lowestNum} and ${highestNum} is ${randomNumber}`
    );
  }

  if (lowestNum === highestNum) {
    return randomTextArea.text(
      "You Provided the same Number for both fields!. Please type different Numbers!"
    );
  }

  if (lowestNum > highestNum) {
    return randomTextArea.text(
      "You provided a higher low number! Please provide a low and high numbers correctly!"
    );
  }

  if (isNaN(lowestNum) || isNaN(highestNum)) {
    return randomTextArea.text(
      "Both fields should be provided with numbers.Please try again."
    );
  }

  return randomTextArea.text(
    "You entered a false number or value. Please try again."
  );
}
