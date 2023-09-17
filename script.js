function ansValidation() {
    var passValue = document.getElementById("password").value
    var confpassValue = document.getElementById("confirmPassword").value
    if (passValue === confpassValue) {
        return true;
    } else {
        window.alert("Passwort stimmt nicht überein");
        return false;
    }
}

let gametag = ""
let avatar = ""
let pronomen = ""
let spiele = ""

function createUserTable(){
    var id1 = crypto.randomUUID()
    var id2 = crypto.randomUUID()
    var id3 = crypto.randomUUID()
    var id4 = crypto.randomUUID()
    var id5 = crypto.randomUUID()
    var id6 = crypto.randomUUID()
}

const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('FinderDB.db', (err) => {
if (err) {
return console.error(err.message);
}
console.log("Connected to the FinderDB SQLite database.");
});

db.all("SELECT * FROM User Order By random() Limit 1", [], (err, rows) => {
if (err) {
throw err;
}
rows.forEach((row) => {
    gametag = row.gametag
    avatar = row.avatar
    pronomen = row.pronomen
    spiele = row.Spiele
console.log(row);
});
});

db.close((err) => {
if (err) {
return console.error(err.message);
}
console.log("Close the database connection.");
});

GLOBAL.document = new JSDOM("index.html").window.document;
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

//document.getElementById("avatar").value = avatar
//document.getElementById("gametag").value = gametag
//document.getElementById("pronomen").value = pronomen
//document.getElementById("Spiele").value = spiele

/* db.transaction(function (tx) {
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

*/
