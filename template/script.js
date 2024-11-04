// variables

// goal: 

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("black");
    color1 = color(random(255), random(255), random(255));
    console.log("Canvas created and parented."); // Check if this message appears

}

// this will draw on canvas
function draw() {

}


// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        console.log("working");
    }
    if (key === ' ') {
        background("black");
    }
}


// Change colors when the mouse is pressed
function mousePressed() {
    r = (random(20));
    color1 = color(random(50, 255), random(100, 255), random(150, 255));
}


