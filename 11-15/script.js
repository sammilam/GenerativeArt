// variables
let table;
// let scaleFactor = 1; // Factor for zooming in/out

// goal:

function preload() {
    table = loadTable("/colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("white");
    colorMode(HSB, 360, 100, 100, 255);
    noLoop(); // stops drawing from running

    // grabbing palette within my csv
    palette = 0; // which row of palette I want to use
    getColor(floor(random(5))); //random colours from the palette

    console.log("Canvas created and parented."); // Check if this message appears

}

// this will draw on canvas
function draw() {

}


// gets colours from palette
function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}

// Scalabiity of the pattern to zoom in or out
// function mouseDragged() {
//     // Calculate a scaling factor based on mouseY
//     scaleFactor = map(mouseY, 0, height, 0.5, 2); // Scale between 0.5x and 2x
//     size1 = ((width - frame * 2) / numAcross) * scaleFactor; // Adjust grid size

//     redraw(); // Trigger a redraw whenever the mouse moves
// }

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
    redraw();
    // console.log("clicked")

}


