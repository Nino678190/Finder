function ansValidation() {
    var passValue = document.getElementById("password").value
    var confpassValue = document.getElementById("confirmPassword").value
    }if(passValue === confpassValue) {
       window.alert("Passwords do not match!")
    }else if (passValue !== confpassValue) {
        window.alert("Passwort stimmt nicht überein")
    }

var db = openDatabase('mydb', '1.0', 'my first database', 2 * 1024 * 1024);

function createUserTable(){
    var id1 = crypto.randomUUID()
    var id2 = crypto.randomUUID()
    var id3 = crypto.randomUUID()
    var id4 = crypto.randomUUID()
    var id5 = crypto.randomUUID()
    var id6 = crypto.randomUUID()


db.transaction(function (tx) {
    tx.executeSql('CREATE TABLE IF NOT EXISTS USER(' +
    '"id" INTEGER NOT NULL UNIQUE PRIMARY KEY,' +
    '"gametag" TEXT NOT NULL,' +
    '"pronomen" TEXT,' +
    '"geburtsdatum" Text NOT NULL,' +
    '"spiele" Text NOT NULL,' +
    '"avatar" INTEGER, ' +
    '"email" text NOT NULL,' +
    '"password" text NOT NULL)')
    
    tx.executeSql('INSERT INTO USER' +
    'VALUES (?, "owlym0wly", "sie/ihr", "06.03.2008, "Ark", "3", "email@email.de", "Password1"), ' +
    '(?, "xXelefantenbaendiger297581Xx", "er/ihm", "12.12.2007", "Minecraft", "0", "elfenbein@turm.de", "Rüssel"), ' +
    '(?, "gronkh187", "they/them", "30.04.2010", "Tic Tac Toe", "5", "email1@posteo.de", "12345678"), ' +
    '(?, "ApacheFan107", "", "01.01.2005", "cs:go", "4", "hallo@apache.de", "qwertz"), ' +
    '(?, "MysterioesesAlpaka", "alpaka/alpaka", "16.05.2005", "GTA 6", "alpkaka@alpakamail.de", "alpaka")' +
    '(?, "DrDoubleNo76", "er/ihm", "06.07.2008", "Foundation", "warumbinichhierangemeldet@weissichnicht.com", "Why16Zeichen"' 
    [id1, id2, id3, id4, id5, id6])
    })

};


