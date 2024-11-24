// variables
let table;
let columns = 4; let rows = 4;
let colSize; let rowSize;

// goal: eager! pumped to show my work!
// thank you https://www.youtube.com/watch?v=UKxB2j4h7Ag&list=PL0beHPVMklwh3KNAibTZKkHjN4xILaWvE&index=34&ab_channel=PattVira

function preload() {
    table = loadTable("/colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    colorMode(HSB, 360, 100, 100, 255);
    background("white");

    noLoop(); // stops drawing from running

    // grabbing palette within my csv
    palette = 6; // which row of palette I want to use
    // getColor(floor(random(5))); //random colours from the palette

    console.log("Canvas created and parented."); // Check if this message appears

}

// this will draw on canvas
function draw() {

    noFill();
    strokeCap(SQUARE);
    numb = random(5, 30);
    size = width / numb;
    strokeWeight(max(1, size / 5)); //try 2
    stroke(0);



    // arcs
    for (i = 0; i < numb + 1; i++) {
        for (j = 0; j < numb + 1; j++) {
            getColor(floor(random(5)));
            stroke(h, s, b, 255);
            push();
            translate(i * size, j * size);
            rotate(floor(random(2)) * PI * 0.5);
            type = random(2); //1,2,2.2
            if (type < 1.8) {
                arc(size / 5, -size / 5, size, size, PI * 0.5, PI);
                arc(-size / 5, size / 5, size, size, -PI * 0.5, 0);
            } else if (type < 5) {
                line(-size / 2, 10, size / 10, 0);
                line(0, -size / 10, 10, size / 2);
            } else {
                line(-size / 2, 10, size / 2, 0);
                point(5, -size / 10);
                point(0, size / 2);
            }
            noFill();
            // frameRate(2);
            pop();

        }

    }

    // grid of dots
    for (let i = 0; i < numb + 2; i++) {
        for (let j = 0; j < numb + 2; j++) {
            if (i % 2 === 0) { // Check if i is even
                fill("#EC368D");
                noStroke();
                circle(i * size, j * size, random(20));
            }
            // } else { // If i is odd
            //     fill("purple");
            //     noStroke();
            //     circle(i * size, j * size, random(size));
            // }
        }
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
        background("white");
        redraw();
    }
}


// Redraw the loop again
function mousePressed() {
    background("white");
    redraw();
    // console.log("clicked")

}


