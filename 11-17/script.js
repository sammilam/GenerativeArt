// variables
let table;
let r;
let h, s, b;  // Store HSB values for color

// goal: Today, I am stressed/anxious and scared.

function preload() {
    table = loadTable("/colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("blue");
    colorMode(HSB, 360, 100, 100, 255);
    noLoop(); // stops drawing from running

    // grabbing palette within my csv
    palette = 5; // which row of palette I want to use
    getColor(floor(random(5))); //random colours from the palette

    console.log("Canvas created and parented."); // Check if this message appears

}

// this will draw on canvas
function draw() {

    let rows = 20;  // Number of rows
    let cols = 15;  // Number of columns
    let spacing = width / cols;  // Spacing between grid points
    let radius = 50;  // Length of the lines

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Calculate the position of the center of each grid cell
            let x = j * spacing + spacing / 2;
            let y = i * spacing + spacing / 2;

            burst(x, y, radius);
        }
    }
}

// lines burst out in a circle
function burst(x, y, radius) {
    r = random(0, 50);
    let numLines = r;  // Number of lines to draw
    let angleStep = TWO_PI / numLines;  // Angle between each line

    // Draw lines radiating from the point (x, y)
    for (let i = 0; i < numLines; i++) {
        let angle = i * angleStep;  // Calculate the angle for each line
        let xEnd = x + radius * cos(angle);  // Calculate x endpoint of the line
        let yEnd = y + radius * sin(angle);  // Calculate y endpoint of the line
        getColor(floor(random(5)));  // Get a new random color from the palette
        stroke(h, s, b);
        strokeWeight(windowWidth * 0.003);


        line(x, y, xEnd, yEnd);  // Draw the line from the grid point to the calculated point
    }
}


// gets colours from palette
function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}

// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        // console.log("working");
    }
    if (key === ' ') {
        background("blue");
    }
}


// Redraw the loop again
function mousePressed() {
    background("blue");
    redraw();
    // console.log("clicked")

}


