//1 uzduotis
function paspausk() {
    const h1Element = document.querySelector('h1');
    h1Element.style.fontSize = '4em';
    h1Element.style.color = 'red';
    h1Element.style.textAlign = 'center'; 
}

//2 Uzduotis

const mygtukas = document.getElementById("btn")

mygtukas.addEventListener("click", function(){
})

//3 Uzduotis
const nameInput = document.getElementById('nameInput');
const body = document.body;

nameInput.addEventListener("input", function() {
    if (nameInput.value.length <= 2) {
        body.style.backgroundColor = 'red';
    } else {
        body.style.backgroundColor = 'green';
    }
});


//4 Uzduotis
const colors = ["red", "green", "blue", "yellow"];
const btn4 = document.getElementById('mygtukas');

function changeColor() {
  const random = colors[Math.floor(Math.random() * colors.length)];
  btn4.style.backgroundColor = random;
}