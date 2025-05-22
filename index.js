
var rendomnumber1 = Math.floor(Math.random()*6)+1;
var rendomnumber2 = Math.floor(Math.random()*6)+1;

console.log(rendomnumber1);
console.log(rendomnumber2);

// document.getElementsByClassName("dice")[0].querySelector("div").lastElementChild
document.getElementsByClassName("img1")[0].setAttribute("src",'./index/dice'+ rendomnumber1 +'.png');
document.getElementsByClassName("img2")[0].setAttribute("src",'./index/dice'+ rendomnumber2 +'.png');

var winner;
if(rendomnumber1===rendomnumber2){
    winner="Draw Match :)";
}
else if(rendomnumber1<rendomnumber2){
    winner="🚩 Player 2 Wins";
}
else if(rendomnumber1>rendomnumber2){
    winner="Player 1 Wins 🚩";
}

document.querySelector("h1").innerHTML=winner;
