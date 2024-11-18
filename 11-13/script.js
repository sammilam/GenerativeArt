// variables
let table;

// goal: Feeling Angry!!!
// referenced from this: https://editor.p5js.org/StevesMakerspace/sketches/4b2MKfqij

function preload() {
    table = loadTable("/colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    cnvSize = min(windowWidth, windowHeight);
    c = createCanvas(cnvSize, cnvSize);
    // c = createCanvas(800, 800);

    c.parent("canvas-container"); // Place the canvas inside the container div
    background(200);
    colorMode(HSB, 360, 100, 100);
    noLoop(); // stops drawing from running

    // grabbing palette within my csv
    palette = 1; // which row of palette I want to use
    getColor(floor(random(5))); //random colours from the palette

    console.log("Canvas created and parented."); // Check if this message appears

}

// this will draw on canvas
function draw() {


    for (i = 0; i < 3000; i++) {
        let colIndex = floor(random(5));
        let col = getColor(colIndex);
        noFill();
        stroke(col);
        strokeWeight(random(1, 5));
        rect(random(-width * 0.1, width), random(-height * 0.1, height), 200);
    }


    // I need to move this 

    // weird lines
    // for (let i = 0; i < 10; i++) {  // Reduced grid size for better visibility
    //     for (let j = 0; j < 10; j++) {  // Reduced grid size for better visibility
    //         x = 250 * i;  // Set x spacing based on motif width (200 + some padding)
    //         y = 150 * j;  // Set y spacing based on motif height (200 + some padding)

    //         console.log(x, y);
    //         motif(x, y);
    //     }
    // }

}


// created one  charette 
function motif(x, y) {
    noStroke();
    let colIndex = floor(random(5));
    let col = getColor(colIndex);
    fill(col);
    // triangle (x, y, x1, y2, x3, y3)

    triangle(x, y, x + 100, y, x, y + 100);
    rect(x, y, -x + 300, 60);

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
        background(200);
    }
}


// Redraw the loop again
function mousePressed() {
    redraw();
    // console.log("clicked")

}


