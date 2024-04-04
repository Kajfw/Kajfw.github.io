const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



/* Declaring the array of image filenames */
const pics = ["./images/GPTempDownload.JPG","./images/IMG_0491.PNG","./images/IMG_4728.jpg","./images/IMG_4980.jpg","./images/IMG_6788.jpg"];

/* Declaring the alternative text for each image file */
const alt =["a human eye","maybe sand","flowers","egyptian glyphs","purple butterfly"]

/* Looping through images */

for (let i = 0; i < 5; i++)
{
    const newImage = document.createElement('img');
    newImage.setAttribute('src', pics[i]);
    newImage.setAttribute('alt', alt[i]);
    newImage.setAttribute('height','96px');
    newImage.setAttribute('width','128pz');

    
    
    newImage.addEventListener('click',()=>{
        displayedImage.setAttribute('src',pics[i]);
        displayedImage.setAttribute('alt',alt[i]);
        displayedImage.setAttribute('height','480px');
        displayedImage.setAttribute('width','640px');
    });
    thumbBar.appendChild(newImage);
}


btn.addEventListener('click',() => {
    if (btn.getAttribute("class") == "dark")
    {
        btn.setAttribute('class','light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else
    {
        btn.setAttribute('class','dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})


/* Wiring up the Darken/Lighten button */
