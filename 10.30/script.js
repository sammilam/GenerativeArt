// variables
let size;

// goal: create circles from https://p5js.org/tutorials/setting-up-your-environment/ 

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("white");
    console.log("Canvas created and parented."); // Check if this message appears
    noFill(); // No fill for the rectangle
    stroke("black"); // Outline color
    strokeWeight(5); // Width of the outline
    rect(0, 0, width, height); // Draw rectangle covering the canvas



}

// this will draw on canvas
function draw() {
    size = random(100);

    if (mouseIsPressed === true) {

        fill(getRandomColor());
        stroke("black");

    } else {
        fill("yellow");
        c
    }
    circle(mouseX, mouseY, size);



}

// red-purple
function getRandomColor() {
    let r = floor(random(256)); // Random red value (0-255)
    let g = floor(random(0)); // Random green value (0-255)
    let b = floor(random(100)); // Random blue value (0-255)
    return color(r, g, b); // Return the color object
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
}


