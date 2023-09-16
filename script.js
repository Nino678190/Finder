function ansValidation() {
    var passValue = document.getElementById("password").value
    var confpassValue = document.getElementById("confirmPassword").value
    }if(passValue === confpassValue) {
       window.alert("Passwords do not match!")
    }else if (passValue !== confpassValue) {
        window.alert("Passwort stimmt nicht überein")
    }

var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);
db.transaction(function (tx, gametag, email, geburtsdatum, pronomen, spiele, alpakaavatar, password) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USER(' +
    '"id" INTEGER NOT NULL UNIQUE PRIMARY KEY ,' +
    '"gametag" TEXT NOT NULL,' +
    '"pronomen" TEXT,' +
    '"geburtsdatum" Text NOT NULL,' +
    '"spiele" Text NOT NULL,' +
    '"avatar" INTEGER, ' +
    '"email" text NOT NULL,' +
    '"password" text NOT NULL)')
    });