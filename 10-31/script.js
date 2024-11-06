// variables
let r = 50; // Radius of the circles
let spacing = 100; // Spacing between circle centers
let rows, cols; // Number of rows and columns

// Basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    console.log("Canvas created and parented.");
    outline();
    noLoop(); // Prevent draw from looping

    // Calculate rows and columns based on canvas size and spacing
    rows = height / spacing;
    cols = width / spacing;
}

// This will draw on canvas
function draw() {
    background(0); // Clear the background

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            let x = j * spacing + spacing / 2; // Calculate x position for the circle
            let y = i * spacing + spacing / 2; // Calculate y position for the circle
            stroke("white");
            fill(random(255), 180, 0);
            ellipse(x, y, r * 2, r * 2); // Draw the circle
        }
    }
}

function outline() {
    background("black");
    noFill();
    stroke("black");
    strokeWeight(5);
    rect(0, 0, width, height);
}

// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        console.log("Saved pattern as an image");
    }
    if (key === ' ') {
        background("black");
    }
}

// Change colors when the mouse is pressed
function mousePressed() {

    draw(); // Redraw the grid with new random colors
}
