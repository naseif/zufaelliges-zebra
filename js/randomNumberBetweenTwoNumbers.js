
// A Simple Random Number Generator

function generator() {
  vex.dialog.prompt({
    message: 'Please provide your lowest Number?',
    placeholder: 'Type a Number',
    callback: function (value) {

      const valueconv = parseInt(value)  // Converted the value string into a number

      vex.dialog.prompt({
        message: 'Please provide your highest Number?',
        placeholder: 'Type a Number',
        callback: function (value2) {

          const value2conv = parseInt(value2)  // // Converted the value string into a number

          if (valueconv < value2conv) {

            const randomNumber = Math.floor(Math.random() * (value2conv - valueconv + 1)) + valueconv;
            vex.dialog.alert(`The random number between ${valueconv} and ${value2conv} is ${randomNumber}`);

          } else if (valueconv === value2conv) {

            vex.dialog.alert("You Provided the same Number for both fields!. Please type different Numbers!");

          } else if (valueconv > value2conv) {

            vex.dialog.alert("You provided a higher low number! Please provide a low and high numbers correctly!");
          } else {

            vex.dialog.alert("You provided a wrong Number! Please try again.");
          }
        }
      });
    }
  });
}

vex.dialog.alert({
  message: "Welcome to the Random Number Generator",
  callback: generator
});


