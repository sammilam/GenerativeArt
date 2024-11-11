// variables
let r;
let rows, cols; // Number of rows and columns
// goal: Took orbitcontrol() and find out how it can provide opportunities to scale in and out of patterns. 

// basic setup before loading in
function setup() {
    c = createCanvas(800, 800, WEBGL);
    frameRate(5);
    angleMode(DEGREES);
    c.parent("canvas-container"); // Place the canvas inside the container div
    background(random(0,255));

    console.log("Canvas created and parented."); // Check if this message appears
}

// this will draw on canvas
function draw() {

orbitControl();


for (let zAngle = 0; zAngle < 180; zAngle += 30) {
    // Rotate cubes in a full circle to create a ring of cubes
    for (let xAngle = 0; xAngle < 360; xAngle += 30) {
      push();

      // Rotate from center of sphere
      rotateZ(zAngle);
      rotateX(xAngle);
      lines();

      // Then translate down 400 units
      translate(0, 400, 0);
      box();
      pop();
    }

}
}

// grids around 
function lines(){
    for (var x = 0; x < width; x += width / 20) {
		for (var y = 0; y < height; y += height / 20) {
            fill(255, random(255), random(0, 50));
            square(x, y, 20);

		}
    }
}




// Save a picture when pressing "s" and clear canvas on spacebar
function keyPressed() {
    if (key === 's' || key === 'S') {
        saveCanvas(c, "pattern", "png");
        console.log("working");
    }
    if (key === ' ') {
        clear();
        console.log("cleared");
        background("red");

    }
}


// Change colors when the mouse is pressed
function mousePressed() {
    // r = random(0,255);
    console.log("pressed",);

}


