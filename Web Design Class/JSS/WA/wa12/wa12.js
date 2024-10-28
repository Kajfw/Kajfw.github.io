const btn = document.querySelector("#js-new-quote");

const btn2 = document.querySelector("#js-tweet");

const image = document.querySelector("img");


addEventListener("load",getQuote);

btn.addEventListener("click", getQuote);

//btn2.addEventListener("click",getAnswer);
const author = document.querySelector("#js-answer-text");

let answer = "";

const endpoint = "https://api.quotable.io/quotes/random";
const Iendpoint = "https://api.thecatapi.com/v1/images/search";

async function getQuote (){
    //alert("SUP! LOSER!");
    try{
        const response = await fetch(endpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();
        const rand = Math.floor(Math.random()*50);
        console.log(rand);
        console.log(json);

        displayQuote(json[0]['content']);
        console.log(json[0]['content']);

        console.log(json[0]['author']);
        answer = json[0]['author'];

    } catch (err) {
        console.log(err);
        //alert("major malfunction");
    }

    function displayQuote (quote)
    {
        const quoteText = document.querySelector("#js-quote-text");
        quoteText.textContent = quote;
        getImg();
        //image.src = "https://picsum.photos/400/400";

        
    }

    function displayAuthor (){
        author.textContent = answer;
    }
   displayAuthor();
   
}

async function getImg (){
    //alert("SUP! LOSER!");
    try{
        const response = await fetch(Iendpoint);
        if(!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();
        //const rand = Math.floor(Math.random()*50);
        //console.log(rand);

        console.log(json);
        console.log(json[0]['url']);

        image.src = json[0]['url'];

    } catch (err) {
        console.log(err);
        //alert("major malfunction");
    }

}


