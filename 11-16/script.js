// variables
let table;
let palette = 2;
// goal: calming day to learn truchet tile!
// it turns and make different patterns
// https://www.youtube.com/watch?v=99Hr8lpWWSg&ab_channel=Steve%27sMakerspace


function preload() {
    table = loadTable("/colors.csv", "csv", "header");
}

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("#EDE580");
    colorMode(HSB, 360, 100, 100, 255);

    noLoop(); // stops drawing from running

    // grabbing palette within my csv
    // getColor(floor(random(5))); //random colours from the palette
    console.log("Canvas created and parented."); // Check if this message appears


}
// this will draw on canvas
function draw() {

    noFill();
    strokeCap(SQUARE);
    numb = 15;
    size = width / numb;
    strokeWeight(max(1, size / random(4))); //try 2
    stroke(0);
    for (i = 0; i < numb + 1; i++) {
        for (j = 0; j < numb + 1; j++) {
            getColor(floor(random(5)));
            stroke(h, s, b, 255);
            push();
            translate(i * size, j * size);
            rotate(floor(random(4)) * PI * 0.5);
            type = random(1.2); //1,2,2.2
            if (type < 1.8) {
                arc(size / 2, -size / 2, size, size, PI * 0.5, PI);
                arc(-size / 2, size / 2, size, size, -PI * 0.5, 0);
            } else if (type < 2) {
                line(-size / 2, 0, size / 2, 0);
                line(0, -size / 2, 0, size / 2);
            } else {
                line(-size / 2, 0, size / 2, 0);
                point(0, -size / 2);
                point(0, size / 2);
            }
            noFill();
            frameRate(2);


            //square tiles
            // stroke("black");
            // strokeWeight(1);
            // square(-size / 2, -size / 2, size);
            pop();
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
        background("#EDE580");
    }
}


// Redraw the loop again
function mousePressed() {
    background("#EDE580");
    redraw();
    // console.log("clicked")

}


