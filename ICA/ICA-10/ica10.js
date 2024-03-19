const button = document.querySelector(".button1");
button.addEventListener('click',crazyButton);
var count = 1;

function crazyButton()
{
    if (count == 1)
    {
        alert("you cant see me");
        button.style.backgroundColor = "#000000";
        count = 0;
        
    }
    else
    {
        alert("peekAboo")
        button.style.backgroundColor = "#ff78ff";
        count = 1;
    }
}

const button2 = document.querySelector("#button2");
button2.addEventListener('click',changeText);

const h1 = document.querySelector("h1")

function changeText(){
    const name = prompt("Tpye something silly");
    const myName = "NOT";
    const newName = myName.concat(name);
    h1.textContent = newName; 
}