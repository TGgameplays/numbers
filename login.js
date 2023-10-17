// Crie a função login aqui.
function login() {

    player_name = document.getElementById("playername").Value;
    localStorage.setItem("player_name", player_name)

    window.location = "gamepage.hml";
}
function playAgain(){
    y = Math.floor(Math.random() * 10 + 1);
}