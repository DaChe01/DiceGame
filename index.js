var randomNumber1 = Math.floor(Math.random()*6)+1; // to generate random number from 1-6

var imgLeft = document.querySelector(".img1"); // select img1 and assign it to imgLerft

// set the source attribute of imgLeft to a random dice image 
// (dice1.png to dice6.png) based on the random number generated (randomNumber1) 
imgLeft.setAttribute("src", `images/dice${randomNumber1}.png`); 

// updated dice image filename to the console for debugging and confirmation
console.log(`Dice image updated to: dice${randomNumber1}.png`);


var randomNumber2 = Math.floor(Math.random()*6)+1; // to generate random number from 1-6

var imgRight = document.querySelector(".img2"); // select img1 and assign it to imgLerft

// set the source attribute of imgLeft to a random dice image 
// (dice1.png to dice6.png) based on the random number generated (randomNumber2) 
imgRight.setAttribute("src", `images/dice${randomNumber2}.png`);


// updated dice image filename to the console for debugging and confirmation
console.log(`Dice image updated to: dice${randomNumber2}.png`);


// compare the random dice rolls of Player 1 and Player 2 to determine the winner
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 Wins!!!";
} else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!!!"

}else{
    document.querySelector("h1").innerHTML="Draw!!"
}