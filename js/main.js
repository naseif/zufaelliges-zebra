// document.getElementById("randomNumber").addEventListener("click", ExecuteRandomNumberGenerator);
// document.getElementById("randomPassword").addEventListener("click", function() {
//     const alleMoeglichenZeichen = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!$";
//     const maximalLength = 18;
//     let result = "";

//     for (let i = 0; i < maximalLength; i++) {
//         const randomNumber = Math.floor(Math.random() * alleMoeglichenZeichen.length)
//         result += alleMoeglichenZeichen[randomNumber]

//     }
//     navigator.clipboard.writeText(result);
//     vex.dialog.alert('Password has been copied to your clipboard')
// })

// $(document).ready(function(){
//    let randomPasswords = GenerateABunchOfRandomPasswords(10);
//     $("#passwordArea").val(randomPasswords);
// });

function GeneratePasswordsInUi(){
    const passwordlength = Number($("#passwordlength").val());
    $("#passwordArea").val(GenerateABunchOfRandomPasswords(10, passwordlength));
}; 
$("#generatePasswords").on("click", GeneratePasswordsInUi);
GeneratePasswordsInUi();