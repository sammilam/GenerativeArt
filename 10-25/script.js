// variables
let c;
let color1;
let r;

// goal to create plus signs and distribute everywhere!
// cool tone 


function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("black");
    color1 = color(random(255), random(255), random(255));
    console.log("Canvas created and parented."); // Check if this message appears

}

function draw() {
    // Draw one layer of plus signs if the mouse is pressed
    if (mouseIsPressed) {
        drawPlusses();
    }
}

function drawPlusses() {
    for (let x = 0; x < width; x += 25) {
        for (let y = 0; y < height; y += 100) {
            fill(color1);
            stroke(255);
            rect(x, y + 40, 100, 20); // Horizontal rectangle

            fill(color1);
            rect(x + 40, y, 20, 100); // Vertical rectangle
            rotate(r);

        }
    }
}

// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern1", "png");
        console.log("working");
    }
    if (key === ' ') {
        background("black");
    }
}


// Change colors when the mouse is pressed
function mousePressed() {
    r = (random(20));
    color1 = color(random(50, 255), random(100, 255), random(150, 255));
}


