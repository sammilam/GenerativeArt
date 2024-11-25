// variables
let table;
let scaleFactor = 1; // Factor for zooming in/out


// goal: My strongest emotion was happy!
// credit to https://editor.p5js.org/StevesMakerspace/sketches/Y8RWi6DO5 

function preload() {
    table = loadTable("../colors.csv", "csv", "header");
}


// basic setup before loading in
function setup() {

    cnvSize = min(windowWidth, windowHeight);
    // console.log(windowWidth, windowHeight); // checks the width of current laptop
    c = createCanvas(cnvSize, cnvSize);
    c.parent("canvas-container"); // Place the canvas inside the container div
    console.log("Canvas created and parented."); // Check if this message appears
    colorMode(HSB, 360, 100, 100, 255);
    background("white");
    noLoop(); // stops drawing from running
    // console.log("CSV Loaded:");
    // console.log(table);

    // grid structure 
    frame = 100;
    numAcross = 10;
    size1 = (width - frame * 2) / numAcross;
}

// this will draw on canvas
function draw() {
    // frameRate(1); // for frameRate to slow
    palette = 0; // palette 1 I want to add
    getColor(floor(random(5)));
    stroke(h, s, b, 255);
    strokeWeight(random(0, 15));
    newCol = 0;

    // row and columns
    for (x = 0; x < width; x += size1) {
        for (y = 0; y < height; y += size1) {
            col = floor(random(5));
            getColor(col);
            //circle 1
            fill(h, s, b, 255);
            circle(x, y, size1);
            while (col == newCol) {
                newCol = floor(random(5));
            }
            //circle 2
            getColor(newCol);
            fill(h, s, b, 255);
            circle(x, y, size1 * 0.5);
        }
    }



}

// gets colours from palette
function getColor(col1) {
    h = int(table.get(palette, col1 * 3));
    s = int(table.get(palette, col1 * 3 + 1));
    b = int(table.get(palette, col1 * 3 + 2));
}

function mouseDragged() {
    // Calculate a scaling factor based on mouseY
    scaleFactor = map(mouseY, 0, height, 0.5, 2); // Scale between 0.5x and 2x
    size1 = ((width - frame * 2) / numAcross) * scaleFactor; // Adjust grid size

    redraw(); // Trigger a redraw whenever the mouse moves
}


// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
    }
    if (key === ' ') {
        background("white");
    }
}


// Change colors when the mouse is pressed
function mousePressed() {
    redraw();
    // console.log("clicked")
}


