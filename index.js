const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let a = document.getElementById("firstPassword")
let b = document.getElementById("secondPassword")
let x = ""
let y = ""
a.textContent = x
b.textContent = y


function buttonPressed() {
    
    helper1()
    helper2()
}

function helper1() {
    x = ""
    for (let i = 0; i < 15; i++) {
       x += getRandomChar() 
    }
    a.textContent = x
}

function helper2() {
    y = ""
    for (let i = 0; i < 15; i++) {
       y += getRandomChar() 
    }
    b.textContent = y
}
function getRandomChar() {
    let randomNumber = Math.floor( Math.random()* characters.length)
    return characters[randomNumber]
}