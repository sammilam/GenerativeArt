// variables
let c; // canvas variable
let colors = ['red', 'navy', 'yellow']; // Array of colors to use
let lineLength = 40; // Length of each line segment
let spacing = 2; // Spacing between zigzag lines
let zigzagCount = 10; // Number of zigzag segments


// goal: create zig zag lines

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

}

// drawing border around canvas
function drawOutline() {
}


function zig() {
    let r = random(2, 35);
    let startX = random(width); // Random starting X position
    let startY = random(height); // Random starting Y position
    let colorIndex = floor(random(colors.length)); // Choose a random color from the array

    stroke(colors[colorIndex]); // Set the stroke color
    strokeWeight(r);

    // Loop to create zigzag pattern
    for (let i = 0; i < zigzagCount; i++) {
        line(startX, startY, startX + lineLength, startY + lineLength); // Draw a line segment
        startX += lineLength; // Move start position for next segment
        startY += (i % 2 === 0) ? -lineLength : lineLength; // Alternate direction
    }
}


// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        console.log("working4");
    }
    if (key === ' ') {
        background("white");
    }
}


// Change colors when the mouse is pressed
function mousePressed() {
    zig(); // Call function to draw zigzag pattern
    console.log("clicks");
}


