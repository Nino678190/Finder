
const users= [ 
    {
        "gamertag":"BEHUJAN",
        "Pronomen":"Lorem ipsum",
        "alter":"12",
        "LieblingsGames":"Minecraft",
    },{
        "gamertag":"IsabelDochMal",
        "Pronomen":"Lorem ipsum",
        "alter":"28",
        "LieblingsGames":"Gartic Phone",
    },{
        "gamertag":"Tobi",
        "Pronomen":"Lorem ipsum",
        "alter":"16",
        "LieblingsGames":"FORTNITE",
    }
 ]

let index = 0

window.addEventListener("load",function(){ 
    document.getElementById("gamertag").value = users[index].gamertag
    document.getElementById("alter").value = users[index].alter
    document.getElementById("lieblingsgame").value = users[index].LieblingsGames
})

const onButtonClicked = function () {

    if(index < users.length - 1) {
        index++
    } else {
        index=0
    }
        

    document.getElementById("gamertag").value = users[index].gamertag
    document.getElementById("alter").value = users[index].alter
    document.getElementById("lieblingsgame").value = users[index].LieblingsGames
}