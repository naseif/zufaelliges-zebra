/***
 * RandomNumberGenerator - Generiert Zufallszahlen basierend auf naja, dem Üblichen
 *
 */

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
