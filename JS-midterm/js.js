let draw = 0;
let points = 0;
let button = 0;
let lastVal = -1;
let lastVal2 = -2;
let poo = -1;
//let cardList = []

const cards = [
    {
        'value': 1,
        'src': '/JS-midterm/PNG-cards-1.3/ace_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 1,
        'src': '/JS-midterm/PNG-cards-1.3/ace_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 1,
        'src': '/JS-midterm/PNG-cards-1.3/ace_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 1,
        'src': '/JS-midterm/PNG-cards-1.3/ace_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
        
    },
    {
        'value': 2, 
        'src': '/JS-midterm/PNG-cards-1.3/2_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 2,
        'src': '/JS-midterm/PNG-cards-1.3/2_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 2, 
        'src': '/JS-midterm/PNG-cards-1.3/2_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 2,
        'src': '/JS-midterm/PNG-cards-1.3/2_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 3,
        'src': '/JS-midterm/PNG-cards-1.3/3_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 3,
        'src': '/JS-midterm/PNG-cards-1.3/3_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 3,
        'src': '/JS-midterm/PNG-cards-1.3/3_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 3,
        'src': '/JS-midterm/PNG-cards-1.3/3_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 4,
        'src': '/JS-midterm/PNG-cards-1.3/4_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 4,
        'src': '/JS-midterm/PNG-cards-1.3/4_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 4, 
        'src': '/JS-midterm/PNG-cards-1.3/4_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 4,
        'src': '/JS-midterm/PNG-cards-1.3/4_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
        
    },
    {
        'value': 5, 
        'src': '/JS-midterm/PNG-cards-1.3/5_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 5,
        'src': '/JS-midterm/PNG-cards-1.3/5_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 5,
        'src': '/JS-midterm/PNG-cards-1.3/5_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 5,
        'src': '/JS-midterm/PNG-cards-1.3/5_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 6,
        'src': '/JS-midterm/PNG-cards-1.3/6_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 6,
        'src': '/JS-midterm/PNG-cards-1.3/6_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 6,
        'src': '/JS-midterm/PNG-cards-1.3/6_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 6,
        'src': '/JS-midterm/PNG-cards-1.3/6_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 7, 
        'src': '/JS-midterm/PNG-cards-1.3/7_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 7,
        'src': '/JS-midterm/PNG-cards-1.3/7_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 7, 
        'src': '/JS-midterm/PNG-cards-1.3/7_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 7,
        'src': '/JS-midterm/PNG-cards-1.3/7_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 8,
        'src': '/JS-midterm/PNG-cards-1.3/8_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 8,
        'src': '/JS-midterm/PNG-cards-1.3/8_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 8,
        'src': '/JS-midterm/PNG-cards-1.3/8_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 8,
        'src': '/JS-midterm/PNG-cards-1.3/8_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 9,
        'src': '/JS-midterm/PNG-cards-1.3/9_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 9,
        'src': '/JS-midterm/PNG-cards-1.3/9_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 9, 
        'src': '/JS-midterm/PNG-cards-1.3/9_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 9,
        'src': '/JS-midterm/PNG-cards-1.3/9_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 10, 
        'src': '/JS-midterm/PNG-cards-1.3/10_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 10,
        'src': '/JS-midterm/PNG-cards-1.3/10_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 10,
        'src': '/JS-midterm/PNG-cards-1.3/10_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 10,
        'src': '/JS-midterm/PNG-cards-1.3/10_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 11,
        'src': '/JS-midterm/PNG-cards-1.3/jack_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 11,
        'src': '/JS-midterm/PNG-cards-1.3/jack_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 11,
        'src': '/JS-midterm/PNG-cards-1.3/jack_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 11,
        'src': '/JS-midterm/PNG-cards-1.3/jack_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 12,
        'src': '/JS-midterm/PNG-cards-1.3/queen_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 12,
        'src': '/JS-midterm/PNG-cards-1.3/queen_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 12,
        'src': '/JS-midterm/PNG-cards-1.3/queen_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 12,
        'src': '/JS-midterm/PNG-cards-1.3/queen_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
    },
    {
        'value': 13,
        'src': '/JS-midterm/PNG-cards-1.3/king_of_clubs.png'
        ,'color': 'black'
        ,'suit' : 'clubs'
    },
    {
        'value': 13,
        'src': '/JS-midterm/PNG-cards-1.3/king_of_diamonds.png'
        ,'color': 'red'
        ,'suit' : 'diamond'
    },
    {
        'value': 13,
        'src': '/JS-midterm/PNG-cards-1.3/king_of_hearts.png'
        ,'color': 'red'
        ,'suit' : 'heart'
    },
    {
        'value': 13,
        'src': '/JS-midterm/PNG-cards-1.3/king_of_spades.png'
        ,'color': 'black'
        ,'suit' : 'spade'
}]
/*

    Java adders

*/
const volume = document.querySelector("#speaker");

const soundLevel = document.querySelector("#points");

const cardBack = document.querySelector(".cardBack");
cardBack.style.visibility = "hidden";

const movecard = document.querySelector(".cardmove");
movecard.style.visibility = "hidden";

const cardfliped = document.querySelector(".cardfliped");
cardfliped.style.visibility = "hidden";

const cardflipedIMG = document.querySelector("#fIMG");
cardflipedIMG.style.visibility = "hidden";

const twobuttons = document.querySelector(".TwoButtons"); 
twobuttons.style.visibility = "hidden";

const twobuttonsTextOne = document.querySelector("#TwoButtonsTextOne");
const twobuttonsTextTwo = document.querySelector("#TwoButtonsTextTwo");

const bar = document.querySelector(".bar"); 
bar.style.visibility = "hidden";

const Suite = document.querySelector(".Suite");
Suite.style.visibility = "hidden";
const suiteH = document.querySelector("#heart");
const suiteS = document.querySelector("#spade");
const suiteD = document.querySelector("#diamond");
const suiteC = document.querySelector("#club");


const cardList = document.querySelector(".cardList");
const firstDrawn = document.querySelector("#firstDrawn");
const secondDrawn = document.querySelector("#secondDrawn");
const thirdDrawn = document.querySelector("#thirdDrawn");

    cardList.style.visibility = "hidden";
    soundLevel.style.visibility = "hidden";






/* 

    FUNCTION Descriptions

*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function displayCards (card)
{
    /*
    if (card == 0)
    {
        firstDrawn.textContent = "none";
        secondDrawn.textContent = "none";
        thirdDrawn.textContent = "none";
    }
    else
    {
        const string = card.value + " of " + card.suit;
        switch (draw) {
            case 1:
                firstDrawn.textContent = string;
                break;
            case 2:
                secondDrawn.textContent = string;
                break;
            case 3:
                thirdDrawn.textContent = string;
                break;
        
            default:
                break;
        }
    }
    */

    
}


function addScore (score)
{
    points+= score;
    points = (points % 101);

    const string = "VOLUME: " + points;
    soundLevel.textContent = string;

}

function vicotry ()
{
    alert("Congradulations, you have riden the bus. Your volume is set to: " + points + ".");
    cardBack.style.visibility = "visible";
    movecard.style.visibility = "visible";
    cardfliped.style.visibility = "visible";
    //cardList.style.visibility = "visible";
    soundLevel.style.visibility = "visible";
    //cardflipedIMG.style.visibility = "visible";
    twobuttonsTextOne.textContent = "red";
    twobuttonsTextTwo.textContent = "black";
    
    twobuttons.style.visibility = "visible";
    //bar.style.visibility = "visible";
    //Suite.style.visibility = "visible";
    volume.style.visibility = "hidden";

    draw = 0;
    button = 0;
    lastVal = -1;
    lastVal2 = -2;

}
  
function game (button,card){
    

        switch(draw) {
            case 0:
                if(card.color == button){ // win case
                    
                    document.body.style.backgroundColor = "#7CFC00";
                    setTimeout(() => { 
                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                    }, 2000);
                    
                    draw++;
                    twobuttonsTextOne.textContent = "High";
                    twobuttonsTextTwo.textContent = "Low";
                    lastVal = card.value;
                    
                    displayCards (card);

                    
                    
                }
                else // Loss case
                {
        
                    document.body.style.backgroundColor = "#C41E3A";
                    setTimeout(() => { 
                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                    }, 2000);
                    draw = 0;
                    twobuttonsTextOne.textContent = "red";
                    twobuttonsTextTwo.textContent = "black";
                    addScore(card.value);
                    displayCards (0);
                    
                    
                }
              break;
            case 1:
                // console.log("lastCard" + lastVal);
                // console.log("currcard" + card.value);
                // console.log("button" + button)
                if((card.value <= lastVal && button == "black") || (card.value >= lastVal && button == "red")){ // win case
                    
                    document.body.style.backgroundColor = "#7CFC00";
                    setTimeout(() => { 
                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                    }, 2000);
                    draw++;
                    twobuttonsTextOne.textContent = "Outside";
                    twobuttonsTextTwo.textContent = "Inbetween";
                    displayCards (card);

                    
                    
                }
                else
                {
                    
                    document.body.style.backgroundColor = "#C41E3A";
                    setTimeout(() => { 
                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                    }, 2000);

                    draw = 0;
                    lastVal = -1;
                    twobuttonsTextOne.textContent = "red";
                    twobuttonsTextTwo.textContent = "black";
                    addScore(card.value);
                    displayCards (0);
                    
                    
                }
              break;
            case 2:
                // console.log("lastCard + 1" + lastVal);
                // console.log("lastCard" + lastVal2);
                // console.log("currcard" + card.value);
                if( ((( lastVal >= card.value && card.value >= lastVal2) || ( lastVal <= card.value && card.value <= lastVal2)) && button == "black") ||
                    (((lastVal <= card.value && card.value >= lastVal2) || (card.value >= lastVal2 && card.value >= lastVal)) && button == "red")){ // win case
                    
                    document.body.style.backgroundColor = "#7CFC00";
                    setTimeout(() => { 
                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                    }, 2000);
                    draw++;
                    twobuttons.style.visibility = "hidden";
                    Suite.style.visibility = "visible";
                    displayCards (card);

                    
                    
                }
                else
                {
                    
                    document.body.style.backgroundColor = "#C41E3A";
                    setTimeout(() => { 
                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                    }, 2000);

                    draw = 0;
                    lastVal = -1;
                    lastVal2 = -2;
                    twobuttonsTextOne.textContent = "red";
                    twobuttonsTextTwo.textContent = "black";
                    twobuttons.style.visibility = "visible";
                    
                    addScore(card.value);
                    displayCards (0);
                    
                }
                
                break;
            case 3: 
                
                console.log("buttton " + button);
                console.log("suit: " + card.suit);

                switch (button) {
                    case 1:
                        if (card.Suite == "heart")
                        {
                            document.body.style.backgroundColor = "#7CFC00";
                            setTimeout(() => { 
                                document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                vicotry();
                            }, 2000);
                            draw++;
                            twobuttons.style.visibility = "hidden";
                            Suite.style.visibility = "visible";
                            
                        }
                        else
                        {
                            document.body.style.backgroundColor = "#C41E3A";
                            setTimeout(() => { 
                                document.body.style.backgroundColor = "rgb(14, 69, 179)";
                            }, 2000);

                            draw = 0;
                            lastVal = -1;
                            lastVal2 = -2;
                            twobuttonsTextOne.textContent = "red";
                            twobuttonsTextTwo.textContent = "black";
                            twobuttons.style.visibility = "visible";
                            Suite.style.visibility =  "hidden";
                            
                            addScore(card.value);
                        }


                        break;

                        case 2:
                            if (card.Suite == "spade")
                            {
                                document.body.style.backgroundColor = "#7CFC00";
                                setTimeout(() => { 
                                    document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                    vicotry();
                                }, 2000);
                                draw++;
                                twobuttons.style.visibility = "hidden";
                                Suite.style.visibility = "visible";
                                
                            }
                            else
                            {
                                document.body.style.backgroundColor = "#C41E3A";
                                setTimeout(() => { 
                                    document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                }, 2000);
    
                                draw = 0;
                                lastVal = -1;
                                lastVal2 = -2;
                                twobuttonsTextOne.textContent = "red";
                                twobuttonsTextTwo.textContent = "black";
                                twobuttons.style.visibility = "visible";
                                Suite.style.visibility =  "hidden";
                                
                                addScore(card.value);
                            }
    
    
                            break;

                        
                            case 3:
                                if (card.Suite == "diamond")
                                {
                                    document.body.style.backgroundColor = "#7CFC00";
                                    setTimeout(() => { 
                                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                        vicotry();
                                    }, 2000);
                                    draw++;
                                    twobuttons.style.visibility = "hidden";
                                    Suite.style.visibility = "visible";
                                   
                                }
                                else
                                {
                                    document.body.style.backgroundColor = "#C41E3A";
                                    setTimeout(() => { 
                                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                    }, 2000);
        
                                    draw = 0;
                                    lastVal = -1;
                                    lastVal2 = -2;
                                    twobuttonsTextOne.textContent = "red";
                                    twobuttonsTextTwo.textContent = "black";
                                    twobuttons.style.visibility = "visible";
                                    Suite.style.visibility =  "hidden";
                                    
                                    addScore(card.value);
                                }
        
        
                                break;


                            case 4:
                                if (card.Suite == "clubs")
                                {
                                    document.body.style.backgroundColor = "#7CFC00";
                                    setTimeout(() => { 
                                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                        vicotry();
                                    }, 2000);
                                    draw++;
                                    twobuttons.style.visibility = "hidden";
                                    Suite.style.visibility = "visible";
                                    
                                }
                                else
                                {
                                    document.body.style.backgroundColor = "#C41E3A";
                                    setTimeout(() => { 
                                        document.body.style.backgroundColor = "rgb(14, 69, 179)";
                                    }, 2000);
        
                                    draw = 0;
                                    lastVal = -1;
                                    lastVal2 = -2;
                                    twobuttonsTextOne.textContent = "red";
                                    twobuttonsTextTwo.textContent = "black";
                                    twobuttons.style.visibility = "visible";
                                    Suite.style.visibility =  "hidden";
                                    
                                    addScore(card.value);
                                }
        
        
                                break;
                    

                
                    default:
                        break;
                }

                break;
            default:
                console.log("global var draw is not a value 0 - 4");
        }

            return;
}


function drawCard()
{
    const rand = Math.ceil(Math.random() * 52);

    movecard.classList.add("cardBack-animate");

    const myTimeout = setTimeout(myStopFunction, 1000);
    //sleep (6000)

    function myStopFunction() {
        clearTimeout(myTimeout);
        cardflipedIMG.src = cards[rand].src;
        movecard.style.visibility = "hidden";
        movecard.classList.remove("cardBack-animate");
        movecard.classList.add("cardmove");
        cardflipedIMG.style.visibility = "visible";
        //const myTimeout = setTimeout(() => {movecard.style.visibility = "block"}, 3000);
    }


    //movecard.style.visibility = "block";
    
    return(cards[rand]);
}


/*

    End of function definitions

*/


let bool = true;


volume.addEventListener("click",() => { 
    alert("To effect the volume on this device you will have to 'ride the bus'. Click okay when you are prepared to proceed");
    bool = true;
    console.log(bool)

    cardBack.style.visibility = "visible";
    movecard.style.visibility = "visible";
    cardfliped.style.visibility = "visible";
    //cardList.style.visibility = "visible";
    soundLevel.style.visibility = "visible";
    //cardflipedIMG.style.visibility = "visible";
    twobuttonsTextOne.textContent = "red";
    twobuttonsTextTwo.textContent = "black";
    
    twobuttons.style.visibility = "visible";
    //bar.style.visibility = "visible";
    //Suite.style.visibility = "visible";
    volume.style.visibility = "hidden";
})
console.log(bool)

twobuttonsTextOne.addEventListener("click", () => {
    let card = drawCard();
    sleep(5000);
    game("red",card);
    

});
twobuttonsTextTwo.addEventListener("click", () => {
    
    let card = drawCard();
    sleep(5000);
    game("black",card);
    
});


suiteH.addEventListener("click", () => {
    let card = drawCard();
    sleep(5000);
    game(1,card);
});

suiteS.addEventListener("click", () => {
    let card = drawCard();
    sleep(5000);
    game(2,card);
});

suiteD.addEventListener("click", () => {
    let card = drawCard();
    sleep(5000);
    game(3,card);
});

suiteC.addEventListener("click", () => {
    let card = drawCard();
    sleep(5000);
    game(4,card);
});





/*

const docBody = document.querySelector("body")

class cardBack{

    constructor(value,src,xpos,ypos){
        this.value = value;
        this.src = src;
        this.xpos = xpos;
        this.ypos = ypos;
    }

    

    make() {
        const cardBody = document.createElement("div"); // creates a new card div
        docBody.appendChild(cardBody);

        cardBody.classList.add("cardBack"); // applys cardback to element

        const img = document.createElement("img"); // creates an image with src
        img.style.display = "none";
        img.src = this.src;
    
        console.log(img.src);

        img.alt = "cardback";
        img.style.width = "auto";
        img.style.height = "auto";

        cardBody.appendChild(img);

        //console.log(cardBody.img.src)

        cardBody.style.top = (this.ypos.string + " px");
        cardBody.style.left = (this.xpos.string + " px");
        console.log(cardBody.style.top)

        
        cardBody.addEventListener("click",(this.flip(cardBody)))


    }

    flip(cardBody)
    {
        cardBody.className = "cardBack-animate";
        cardBody.addEventListener("animationend", () => {
            cardBody.style.top = "45vh";
            cardBody.style.left = "45vw";
            cardBody.img.display = "block";
        });
        
        draw++;
        

        switch(draw) {
            case 1:
              this.color();
              break;
            case 2:
              this.highLow();
              break;
            case 3:
                this.outsideInbetween();
                break;
            case 4: 
                this.suit();
                break;
            case 5:
                this.vicotry();
                return 1;
            default:
                console.log("global var draw is not a value 1 - 5");
        }
    }

    color()
    {

    }

    highLow()
    {

    }

    outsideInbetween()
    {

    }

    suit()
    {

    }

    vicotry()
    {

    }


}

const card = new cardBack(1,"/css-midterm/2023.03.31_Colorado-Symphony-Orchestra-Promo-Photo.webp",100,100);
console.log(card);
card.make();
*/