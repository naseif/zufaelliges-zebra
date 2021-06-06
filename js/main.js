function GeneratePasswordsInUi(){
    const passwordlength = Number($("#passwordlength").val());
    $("#passwordArea").val(GenerateABunchOfRandomPasswords(10, passwordlength));
}; 
$("#generatePasswords").on("click", GeneratePasswordsInUi);
GeneratePasswordsInUi();