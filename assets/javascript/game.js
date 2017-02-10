
//Generate random number between 19-120 for user to match
var randomNum = Math.floor(Math.random() * 102 + 19);

//Variables for your total score and wins and losses 
var scoreTotal = 0;
var wins = 0;
var losses= 0;

//Assign crystals random numbers from their specific array
//Crystal values don't match eachother
var redBtn = [1, 3, 7][Math.floor(Math.random() * 3)]; 
var blueBtn = [2, 4, 12][Math.floor(Math.random() * 3)]; 
var yellowBtn = [6, 9, 11][Math.floor(Math.random() * 3)]; 
var greenBtn = [5, 8, 10][Math.floor(Math.random() * 3)];



//Load script when ready
$(document).ready(function(){
  
 //Show user the random number to match
$(".random-number").text(randomNum);
 //Show user their adding total
$(".total-score").text(scoreTotal);



//Compare user score to random number and let them know win or loss
function compareTotRand(){
  if (scoreTotal === randomNum){
      wins++;
      $(".wins").text("Wins: " + wins);
      $(".you-won-lost").text("You Won!");
      reset();
  }

  else if (scoreTotal > randomNum){
      losses++;
      $(".losses").text("Losses: " + losses);
      $(".you-won-lost").text("You Lost!");
      reset();
  }
}
    
    //Crystal buttons for adding to user total score
    $("#red-btn").on("click", function(){
          scoreTotal = scoreTotal + redBtn;
          $(".total-score").text(scoreTotal);
          compareTotRand();
    });

    $("#blue-btn").on("click", function(){
          scoreTotal = scoreTotal + blueBtn;
          $(".total-score").text(scoreTotal);
          compareTotRand();
    });

    $("#yellow-btn").on("click", function(){
          scoreTotal = scoreTotal + yellowBtn;
          $(".total-score").text(scoreTotal); 
          compareTotRand();
    });

    $("#green-btn").on("click", function(){
          scoreTotal = scoreTotal + greenBtn;
          $(".total-score").text(scoreTotal); 
          compareTotRand();
    });

  //Reset game after a win or loss
  function reset(){
      scoreTotal = 0;
      $(".total-score").text(scoreTotal); 
      randomNum = Math.floor(Math.random() * (102)) + 19;
      $(".random-number").text(randomNum);
      redBtn = [1, 3, 7][Math.floor(Math.random() * 3)]; 
      blueBtn = [2, 4, 12][Math.floor(Math.random() * 3)]; 
      yellowBtn = [6, 9, 11][Math.floor(Math.random() * 3)]; 
      greenBtn = [5, 8, 10][Math.floor(Math.random() * 3)];
  }
});