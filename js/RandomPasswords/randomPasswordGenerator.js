/**
 * Generates random passwords.
 * These are like passwords - only random.
 * Thats amazing and adds a lot of security, unless you forget them, which is not a good idea.
 * Anyways, I forgot what I wanted to type ... and say ... amum aah, ok, line 7..
 */
function RandomPasswordGenerator(passwordlength) {
  const validCharacters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!$";
  const maximalLength = passwordlength;
  let result = "";

  for (let i = 0; i < maximalLength; i++) {
    const randomNumber = Math.floor(Math.random() * validCharacters.length);
    result += validCharacters[randomNumber];
  }

  return result;
}

function GenerateABunchOfRandomPasswords(howMany, passwordlength) {
  let result = "";

  for (let i = 0; i < howMany; i++) {
    result += RandomPasswordGenerator(passwordlength) + "\n\n";
  }

  return result.trim();
}
