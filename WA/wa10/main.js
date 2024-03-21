const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a strol. When it past the :inserty:, it stood looking stoic for a while, deep in though, its face turned red. it looked like it was exerting some effort, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day."

const insertx = ["Willy the silly billy","biggie smols","Donald Trump"]
const inserty = ["the dispensory","Macdonalds playhouse","a long house"]
const insertz = ["dropped a dookie","turned into a tomato","screamed at the top of tier lungs and walked away"]

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



randomize.addEventListener('click', result);

function result() {

    let newStory = storyText;

    let xItem = randomValueFromArray(insertx);
    let yItem = randomValueFromArray(inserty);
    let zItem = randomValueFromArray(insertz);

    const rep1 = ":insertx:";
    newStory = newStory.replaceAll(rep1,xItem);

    const rep2 = ":inserty:";
    newStory = newStory.replace(rep2,yItem);

    const rep3 = ":insertz:";
    newStory = newStory.replace(rep3,zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob",name);
  }
  

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300/14);
    weight = weight + " Stones";

    let temperature =  Math.round((94 - 32) * (5/9));
    temperature = temperature + " Celcius";
 

    newStory = newStory.replace("300 pounds",weight);
    newStory = newStory.replace("94 fahrenheit",temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}