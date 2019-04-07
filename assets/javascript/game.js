var randomTarget= findRandom(19, 120); 
var randomCrystalValues = [];
var allImages = ["assets/images/bluecrop.png", "assets/images/blueoval.png", "assets/images/pink.png", "assets/images/purple.png"];
var score = 0;
var wins = 0;
var losses = 0;
var values = [findRandom(1, 12), findRandom(1, 12), findRandom(1, 12), findRandom(1, 12)];


function findRandom(min, max){
    return Math.floor(Math.random()*(max-min)) + min;
}

for (let i = 0; i < 4; i++) {
    
    var x = $("<img>");
    x.addClass("crystal-images");
    x.attr("src", allImages[i]);
    x.attr("value-this", values[i]);
    $("#crystalPics").append(x);
}

$(".crystal-images").on("click", function(){
    var theValue = ($(this).attr("value-this"));
    score += parseInt(theValue);
    if(score > randomTarget){
        losses++;
        resetGame();
    }else if(randomTarget == score){
        wins++;
        resetGame();
    }

    $("#scoreCount").text(score);

});

function resetGame(){
    randomTarget = findRandom(19, 120);

    values = [findRandom(1, 12), findRandom(1, 12), findRandom(1, 12), findRandom(1, 12)];
    score = 0;
    
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#numToMatch").text("Target Number : " + randomTarget);
    $("#scoreCount").text("Score : " + score);
}
resetGame();
