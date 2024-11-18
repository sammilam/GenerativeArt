// variables
let rows, rowHeight, amplitude;

// goal: I am sad today.

function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("blue");
    colorMode(HSB, 360, 100, 100, 255);

    // Initialize randomized values
    randomizeSquiggly();
}

function draw() {
    // Redraw only when mouse is pressed (no continuous loop)
    // Empty draw function, we trigger everything via mousePressed()
}

function squid2() {
    strokeWeight(5); // Set the stroke thickness to 5
    stroke("red"); // Set the stroke color to red

    // Loop through the randomized rows and draw each squiggly line
    for (let i = 0; i < rows; i++) {
        let yOffset = i * rowHeight;
        beginShape();
        for (let x = 0; x < width; x++) {
            let y = yOffset + amplitude * sin(x * 0.02 + frameCount * 0.05); // Animate with frameCount
            vertex(x, y);
        }
        endShape();
    }
}

function gridSquiggly() {
    stroke("black");
    strokeWeight(5);
    noFill();

    let columnSpacing = 10; // Distance between columns
    let squiggleHeight = 800; // Height of squiggly lines
    let numColumns = width / columnSpacing; // Number of columns

    for (let col = 0; col < numColumns; col++) {
        let xStart = col * columnSpacing + columnSpacing / 2; // Center of the column
        drawSquigglyLine(xStart, 0, xStart, squiggleHeight);
    }
}

function drawSquigglyLine(x1, y1, x2, y2) {
    beginShape();
    let stepSize = 1; // Vertical step between points on the squiggly line
    for (let y = y1; y <= y2; y += stepSize) {
        let x = x1 + sin(y * 0.1 + frameCount * 0.05) * 20; // Animate with frameCount
        vertex(x, y);
    }
    endShape();
}

// Randomizes the values for squiggly drawing
function randomizeSquiggly() {
    rows = int(random(10, 50)); // Randomize number of rows
    rowHeight = height / rows; // Update row height based on the number of rows
    amplitude = random(30, 80); // Randomize the amplitude of the squiggly line
}

// Redraw the squiggly grid on mouse press and randomize its properties
function mousePressed() {
    background("blue"); // Clear the canvas when the mouse is pressed
    randomizeSquiggly(); // Randomize the squiggly line's properties
    gridSquiggly(); // Draw the black grid of squiggly lines
    squid2(); // Draw the red squiggly line
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

