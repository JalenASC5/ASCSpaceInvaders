function setup(){
    // Change canvas size and background color
    createCanvas(1350, 770);

    // Changes initial background color
    document.body.style.backgroundColor = "black"; 

}
let v = 650;
let w = 100;
let x = 600;
let y = 670;
let z = 35;
var x1 = 600 + 17 ;
var y1 = 650;
var x2 = 75 + 100;
var y2 = 50;

function enemyShip(){
    // Enemy's Spaceship is determined by how many times i is looped
    for( let i = 0; i < 13; i++ ){
    // enemy spaceship set 1
    fill("green");
    ellipse(75 + w * i, 150 , z, z);
    }
}

function keyPressed(){
    if (keyCode == UP_ARROW){
        v -= 20;
        }
    if (v == 150){
     v = 650;
    }
}

function userSpaceShip(){
    //stroke color white and weight = 1
    stroke("grey");
    strokeWeight(2);
    // person user ship canvas
    fill("black");
    rect(50, y - 30, 1250, 125);
    // user's blaster gun
    fill("red");
    rect(x + 25 + 17,v + 50, 15, 30);
    // users spaceShip
    fill(0,125,255);
    rect(x + 25, y + 10, 50, 50); 
}

function draw(){
    // if key is held down will move the arrow key based on position and how much it increments
    if (keyIsDown(LEFT_ARROW)){
        x -= 20;
    }
    if (keyIsDown(RIGHT_ARROW)){
        x += 20;
    }
    //temporary line to check distance between usership and enemys
    background("darkblue");
    // call to enemyShip
    enemyShip();
    // call to keyPressed
    keyPressed();
    // call to userSpaceShip
    userSpaceShip();
    stroke("black");
    strokeWeight(2);
    //line(x1,y1,x2,y2);

}