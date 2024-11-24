// variables
let table;
let x;
let y;
let r;
let rotationAngle = 0; // Global rotation angle in radians

// goal: I am so tired. Everything is the same. 

function preload() {
    table = loadTable("/colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    // cnvSize = min(windowWidth, windowHeight);
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    colorMode(HSB, 360, 100, 100, 255);
    noLoop(); // stops drawing from running

    // grabbing palette within my csv
    palette = 2; // which row of palette I want to use
    console.log("Canvas created and parented."); // Check if this message appears

}


// this will draw on canvas
function draw() {
    background(120, 50, 10);

    let motifWidth = 100; // Width of the triangle
    let motifHeight = 100; // Height of the triangle

    for (let i = 0; i < 10; i++) { // Loop over rows
        for (let j = 0; j < 10; j++) { // Loop over columns
            // Calculate position
            let x = j * motifWidth;
            let y = i * motifHeight;

            // Offset every other row to create a staggered effect
            if (i % 2 === 1) {
                x += motifWidth / 2;
            }
            push();
            // Move to position
            translate(x, y);
            // Apply global rotation
            rotate(rotationAngle);
            // Draw the motif
            motif(0, 0);
            // Restore transformation state
            pop();

        }

    }
}

// created one  charette 
function motif(x, y) {
    noStroke();
    let colIndex = floor(random(5));
    let col = getColor(colIndex);
    fill(col);
    let newCol = 0;
    triangle(x, y, x + 100, y, x, y + 100);
    rect(x, y, 100, 60);
}




// gets colours from palette
function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));

    return color(h, s, b);

}



// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        // console.log("working");
    }
    if (key === ' ') {
        background("black");
    }
}


// Redraw the loop again
function mousePressed() {
    rotationAngle += HALF_PI; // Increment rotation by 90 degrees (in radians)
    redraw();
    // console.log("clicked")

}


