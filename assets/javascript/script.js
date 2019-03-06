// VARIABLES
var wins = 0;
var losses = 0;
var target = 0;
var yourScore = 0;
var crystals = [{image: "assets/images/crystal1.png", score: 0}, {image: "assets/images/crystal2.png", score: 0}, {image: "assets/images/crystal3.png", score: 0}, {image: "assets/images/crystal4.png", score: 0}];


//FUNCTIONS
function mathRandom(min, max) {
    return Math.floor(Math.random () * max)+ min;
}

function crystalGeneration() {
for (var i=0; i<crystals.length; i++) {
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal-image");
    imageCrystal.attr("src", crystals[i].image);
   
    crystals[i].score = mathRandom(1, 12);
    imageCrystal.attr("data-crystalvalue", crystals[i].score);
    $("#crystalsPage").append(imageCrystal);
}
target = mathRandom(19, 120);
$("#target-Score").text(target);
}

// reset all variables/clear
function resetGame() {
    target = 0;
    yourScore = 0;
    $("#target-Score, #crystalsPage, #your-Score").text("");
}


//MAIN PROCESS
crystalGeneration();

$("#crystalsPage").on("click", ".crystal-image", function() {
    var crystalValue = ($(this).attr("data-crystalvalue"));
    yourScore += parseInt(crystalValue);
    $("#your-Score").text(yourScore)

if (yourScore === target) {
    alert("YOU WON!!");
    wins++
    $("#winsScore").text(wins);
    resetGame();
    crystalGeneration();
}
else if (yourScore > target) {
    alert("You lost. Bummer.");
    losses++
    $("#lossesScore").text(losses);
    resetGame();
    crystalGeneration();
}
// jquery event delegation: allows me to hook an event to current elements and future elements


})