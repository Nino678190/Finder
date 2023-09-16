function ansValidation() {
    var passValue = document.getElementById("password").value
    var confpassValue = document.getElementById("confirmPassword").value
    }if(passValue === confpassValue) {
       window.alert("Passwords do not match!")
    }else if (passValue !== confpassValue) {
        window.alert("Passwort stimmt nicht überein")
    }
