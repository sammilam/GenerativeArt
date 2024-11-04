// variables
let rez = 0.02;      // Resolution of the noise
let t = 0;          // Time variable for the noise
let space = 10;     // Space between rectangles
let size = 12;      // Size of the rectangles
let bgColor = "black"; // Default background color

// goal: using perlin noise from tutorial https://www.youtube.com/watch?v=ig0q6vfpD38

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background(bgColor);
    console.log("Canvas created and parented."); // Check if this message appears
}

// this will draw on canvas
function draw() {
    perlin();
    // Optional: Add real-time updates or animations if needed
}

// Function to generate and display Perlin noise pattern
function perlin() {
    background(bgColor); // Use the current background color
    for (let i = 0; i < width; i += space) {
        for (let j = 0; j < height; j += space) {
            let n = noise(i * rez, j * rez, t); // Get the Perlin noise value
            stroke(n * 200, n * 200, n * 200, 200); // Set stroke color based on noise
            strokeWeight(3);
            fill(n * 200, n * 200, n * 200, 25); // Fill rectangles with noise
            rect(i, j, size); // Draw rectangle
        }
        t += 0.0002; // Increment time for noise
    }
}

// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        console.log("Image saved");
    }
    if (key === ' ') {
        // Reset parameters and background on spacebar press
        resetCanvas();
    }
}

// Change colors and generate new pattern when the mouse is pressed
function mousePressed() {
    // Change background color to a random color
    bgColor = color(random(255), random(50), random(255));
    perlin(); // Generate a new Perlin noise pattern
    console.log("Pattern updated and background changed");
}

// Reset function to clear and reset all parameters
function resetCanvas() {
    bgColor = "black"; // Reset background color
    rez = 0.02;        // Reset resolution
    space = 15;       // Reset space
    size = 12;        // Reset size
    t = 0;            // Reset time
    background(bgColor); // Clear the canvas
    console.log("Canvas reset to defaults");
}
