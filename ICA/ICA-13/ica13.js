// setup canvas

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

// function to generate random number

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// function to generate random color

function randomRGB() {
  return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
}


const MAXVEL = 1;

class Ball {

    constructor(x,y,velx,vely,color,size){
        this.x = x;
        this.y = y;
        this.velx = velx;
        this.vely = vely;
        this.color = color;
        this.size = size;
    }

    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
        ctx.fill();
    }

    updatePos()
    {
        //this.x += this.velx;
        //this.y += this.vely;

        if ((this.x+this.size) >= width)
        {
            this.velx = -(this.velx);
        }
        else if ((this.x - this.size) <= 0)
        {
            this.velx = -(this.velx);
        }
        else if ((this.y + this.size) >= height)
        {
            this.vely = -(this.vely);
        }
        else if ((this.y - this.size) <= 0)
        {
            this.vely = -(this.vely);
        }
    
        this.x += this.velx;
        this.y += this.vely;

        if (this.x < 1 && this.x > -1)
        {
            this.velx+=1;

        }
        if (this.y < 1 && this.y > -1)
        {
            this.vely+=1;
        }
        
    }

    collisionDetect ()
    {
        for (const ball of balls)
        {
            if (this !== ball)
            {
                const dx = this.x - ball.x;
                const dy = this.y - ball.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance <= this.size + ball.size)
                {
                    ball.color = this.color = randomRGB();
                    const velOldx = this.velx + (random (-1,1));
                    const velOldy = this.vely + (random (-1,1));

                    
                    this.velx = ball.velx;
                    this.vely = ball.vely;

                    ball.velx = velOldx;
                    ball.vely = velOldy;
                    
                    //this.velx = -(this.velx);
                    //ball.velx = -(ball.velx);

                    //this.vely = -(this.vely);
                    //ball.vely = -(ball.vely);

                }

            }
        }
    }


}

const balls = [];

while(balls.length < 10)
{
    const size = random(3,20);
    const ball = new Ball (
        random(0+size,width-size),
        random(0+size,height-size),
        random(-10,10),
        random(-10,10),
        randomRGB(),
        size
    )

    balls.push(ball);
}

function loop (){
    ctx.fillStyle = "rgb(0 0 0 / 25%)";
    ctx.fillRect(0,0,width,height);
    for (const ball of balls)
    {
        ball.draw();
        ball.updatePos();
        ball.collisionDetect();
    }

    requestAnimationFrame(loop);
}

loop();