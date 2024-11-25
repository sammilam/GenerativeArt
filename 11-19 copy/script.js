// variables
let table;
let circles = []
let cols; let rows; let size = 50;
let r = size / 2;


// let scaleFactor = 1; // Factor for zooming in/out

// goal: Happy because I went to a concert!!
// Tutorial: https://www.youtube.com/watch?v=zR5onrdWCeY&list=PL0beHPVMklwh3KNAibTZKkHjN4xILaWvE&index=33&ab_channel=PattVira
// I learned how to use an archimedean spiral

function preload() {
    table = loadTable("../colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div

    cols = width / size;
    rows = height / size;

    for (let i = 0; i < cols; i++) {
        circles[i] = [];
        for (let j = 0; j < rows; j++) {
            let x = size / 2 + i * size;
            let y = size / 2 + j * size;
            let angle = x + y;
            circles[i][j] = new Circle(x, y, angle);

        }
    }

    colorMode(HSB, 360, 100, 100, 255);
    // noLoop(); // stops drawing from running
    // grabbing palette within my csv
    palette = 7; // which row of palette I want to use
    getColor(floor(random(5))); //random colours from the palette

    console.log("Canvas created and parented."); // Check if this message appears
    c = new Circle(width / 2, height / 2);

}

// this will draw on canvas
function draw() {
    background("grey");
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            circles[i][j].display();
            circles[i][j].move(0.01);

        }
    }

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
        background("red");
    }
}


// Redraw the loop again
function mousePressed() {
    // redraw();

    // console.log("clicked")

}


