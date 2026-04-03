
var valPlayer1 = Math.floor(Math.random() * 6) + 1
document.querySelector(".player1 img").setAttribute("src","./assets/images/dice" + valPlayer1 + ".png");
var valPlayer2 = Math.floor(Math.random() * 6) + 1
document.querySelector(".player2 img").setAttribute("src","./assets/images/dice" + valPlayer2 + ".png");

if(valPlayer1 > valPlayer2) {
    document.querySelector("h1").innerHTML = "Player 1 won !";
}
else if (valPlayer2 > valPlayer1) {
    document.querySelector("h1").innerHTML = "Player 2 won !";
}
else {
    document.querySelector("h1").innerHTML = "Match drawn!";
}

