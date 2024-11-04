// variables
let r = 50; // Radius of the circles
let h = 100; // y-coordinate for circles
let count = 0; // To keep track of how many circles have been drawn

// goal: 

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    console.log("Canvas created and parented."); // Check if this message appears
    outline();
    noLoop(); // Prevent draw from looping


}

// this will draw on canvas
function draw() {
    // outline();
    background(0); // Clear the background
    for (let i = 0; i <= 100; i++) {
        // Draw 5 circles for each iteration of i
        for (let j = 0; j < 5; j++) {
            let x = (i * 10) + (j * 50); // Calculate x position
            let = (i * 10) + (j * 50); // Calculate x position
            stroke("white");
            fill(random(255), 0, 255);
            ellipse(x, h, r * 2, r * 2); // Draw the circle
        }
    }



}

function outline() {
    background("black");
    noFill(); // No fill for the rectangle
    stroke("black"); // Outline color
    strokeWeight(5); // Width of the outline
    rect(0, 0, width, height); // Draw rectangle covering the canvas
}

function randomized() {
    r = random(1, 800);
    h = random(1, 800);

    for (let i = 0; i <= 60; i++) {
        circle(r, h, 100);
        stroke("white");
        fill(random(255), 0, 255);
    }
    console.log("hey");

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
    randomized();
}


