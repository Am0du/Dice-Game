
document.querySelectorAll("button")[0].addEventListener("click", startGame);
function startGame(){
          var randomNumber1 = Math.floor (Math.random() * 6) + 1;

          var randomDiceImage = "dice"+randomNumber1+".png";

          var randomImageSrc = "images/"+randomDiceImage;

          var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImageSrc);

          var randomNumber2 = Math.floor(Math.random() * 6) + 1;

          var randomDiceImage2 = "dice"+randomNumber2+".png";
          var randomImageSrc2 = "images/" + randomDiceImage2;
          var  image2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSrc2);


          if(randomNumber1 > randomNumber2){
            document.querySelector("h1").textContent = "Player 1 wins";
          }else if (randomNumber1 < randomNumber2) {
            document.querySelector("h1").textContent = "Player 2 wins";
          }else if(randomNumber1 === randomNumber2){
            document.querySelector("h1").textContent = "It's a Draw";
          }else{
            document.querySelector("h1").textContent = "Refresh Me";
          }
          
          var diceRoll = new Audio('sound/rollling.mp3');
          diceRoll.play();

}


document.querySelectorAll("button")[1].addEventListener("click", resetGame);

function resetGame(){
    document.querySelector("h1").textContent = "Throw Dice game";
  var resetimg = "images/dice6.png";
        document.querySelectorAll("img")[0].setAttribute("src", resetimg);
        document.querySelectorAll("img")[1].setAttribute("src", resetimg);



}
