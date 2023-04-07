
let randomNumber1 = Math.floor( Math.random() * 6) +1
let randomNumber2 = Math.floor( Math.random() * 6) +1

document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png")
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png")
document.querySelector("h1").innerHTML = wonLost(randomNumber1, randomNumber2)

function wonLost(x, y) {
    if (x > y){
        return "🚩Plaryer1 won"
    }else if(x < y){
        return "Plaryer2 won🚩"
    }
    else{
        return "Draw!"
    }
}