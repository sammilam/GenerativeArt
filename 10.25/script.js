// variables
let c;
let color1;
let r;



function setup() {
    c = createCanvas(800, 800);
    background("black");
    color1 = color(random(255), random(255), random(255));
}

function draw() {
    noStroke();
    // Draw one layer of plus signs if the mouse is pressed
    if (mouseIsPressed) {
        drawPlusses();
    }
}

function drawPlusses() {
    for (let x = 0; x < width; x += 50) {
        for (let y = 0; y < height; y += 100) {
            fill(color1);
            rect(x, y + 40, 100, 20); // Horizontal rectangle

            fill(color1);
            rect(x + 40, y, 20, 100); // Vertical rectangle
            rotate(r);

        }
    }
}

// Save a picture when pressing "c"
function keyPressed() {
    if (key === 'c' || key === 'C') {
        saveCanvas(c, "layered", "png");
    }
}

// Change colors when the mouse is pressed
function mousePressed() {
    r = (random(20));
    color1 = color(random(100, 255), random(0, 255), random(50, 255));

}
