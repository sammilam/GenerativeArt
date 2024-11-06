// variables
let size = 10;             // Size of each rectangle
let widthMult = 6;        // Multiplier for width
let heightMult = 6;       // Multiplier for height
let c;                    // Variable for canvas

// goal: learned simple patterns from https://www.youtube.com/watch?v=ig0q6vfpD38 
// edited stroke weight, colour, and rotate


// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background("black");
    angleMode(DEGREES); // Set angle mode to degrees
    strokeWeight(1); // Set stroke weight for the rectangles
    lines();
}


// Function to draw colored rectangles
function lines() {
    // Generate random background color
    let startR = random(255);
    let startG = random(200);
    let startB = random(200);

    // Loop to draw rectangles in a grid pattern
    for (let x = width; x > -size * widthMult; x -= size) {
        for (let y = height; y > -size * heightMult; y -= size) {
            fill(
                random(startR, startR + 90), //monochromatic colours
                random(startG, startG + 90),
                random(startB, startB + 90)
            ); // Set fill color randomly based on the background color

            push(); // Save the current drawing state
            translate(x + size / 2, y + size / 2); // Move to the position
            rotate(floor(random(15)) * 45);
            rect(
                0,
                0,
                size * floor(random(1, widthMult)),  // Random width based on size and multiplier
                size * floor(random(1, heightMult))  // Random height based on size and multiplier
            );
            pop(); // Restore the previous drawing state
        }
    }
}

// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern3", "png");
        console.log("Image saved");
    }
    if (key === ' ') {
        background("black"); // Clear the canvas to black on spacebar press
    }
}

// Change colors when the mouse is pressed
function mousePressed() {
    lines();
    // This function seems to be for potential future use
    // You can add functionality if needed
}
