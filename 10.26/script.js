// Global variables

// resource: https://p5js.org/examples/repetition-kaleidoscope/
// exploring the kaleidoscope and changing into how I want it
// changed stroke weight, symmetry, colour changes based on mouse click


// The symmetry variable will define how many reflective sections the canvas
// is split into.
let symmetry = 9;
let col;
let color1;
// The angle button will calculate the angle at which each section is rotated.
let angle = 360 / symmetry;


function setup() {
    c = createCanvas(800, 800);
    stroke("black");
    c.parent("canvas-container"); // Place the canvas inside the container div
    console.log("Canvas created and parented."); // Check if this message appears
    describe(
        `Dark grey canvas that reflects the lines drawn within it in ${symmetry} sections.`
    );
    angleMode(DEGREES);
    background("white");
    drawOutline();
}

// drawing border around canvas
function drawOutline() {
    noFill(); // No fill for the rectangle
    stroke("black"); // Outline color
    strokeWeight(5); // Width of the outline
    rect(0, 0, width, height); // Draw rectangle covering the canvas
}

function draw() {
    // Move the 0,0 coordinates of the canvas to the center, instead of in
    // the top left corner.
    translate(width / 2, height / 2);

    // If the cursor is within the limits of the canvas...
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
        // Translate the current position and the previous position of the
        // cursor to the new coordinates set with the translate() function above.
        let lineStartX = mouseX - width / 2;
        let lineStartY = mouseY - height / 2;
        let lineEndX = pmouseX - width / 2;
        let lineEndY = pmouseY - height / 2;

        // And, if the mouse is pressed while in the canvas...
        if (mouseIsPressed === true) {
            // For every reflective section the canvas is split into, draw the cursor's
            // coordinates while pressed...
            for (let i = 0; i < symmetry; i++) {
                rotate(angle);
                stroke(color1);
                strokeWeight(5);
                line(lineStartX, lineStartY, lineEndX, lineEndY);

                // ... and reflect the line within the symmetry sections as well.
                push();
                scale(1, -1);
                line(lineStartX, lineStartY, lineEndX, lineEndY);
                pop();
            }
        }
    }
}


// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern2", "png");
        console.log("working");
    }
    if (key === ' ') {
        background("white");    //change bg
    }
}

function mousePressed() {
    color1 = color(random(100, 255), random(0, 255), random(0, 255));
}

