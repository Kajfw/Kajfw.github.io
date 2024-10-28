const btn = document.querySelector("#js-new-quote");

const btn2 = document.querySelector("#js-tweet");


addEventListener("load",getQuote);

btn.addEventListener("click", getQuote);

btn2.addEventListener("click",getAnswer);
const answerText = document.querySelector("#js-answer-text");

let answer = "";

const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion";

async function getQuote (){
    //alert("SUP! LOSER!");
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();
        console.log(json);
        displayQuote(json['question']);
        console.log(json['answer']);
        answer = json['answer'];
        answerText.textContent = "";

    } catch (err) {
        console.log(err);
        alert("major malfunction");
    }

    function displayQuote (quote)
    {
        const quoteText = document.querySelector("#js-quote-text");
        quoteText.textContent = quote;
    }

    
   
}

function getAnswer (){
    answerText.textContent = answer;
}
