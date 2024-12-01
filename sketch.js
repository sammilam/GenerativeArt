
// let table;

// function preload() {
//     table = loadTable("colors.csv", "csv", "header");
// }

// function setup() {
//     createCanvas(700, 700);
//     background(220);
//     colorMode(HSB, 360, 100, 100, 255);
//     textSize(20);
//     for (i = 0; i < 10; i++) { //increase this number as you add palettes
//         fill(0);
//         text(i, 8, i * 60 + 35);
//         for (j = 0; j < 5; j++) {
//             h = int(table.get(i, j * 3));
//             s = int(table.get(i, j * 3 + 1));
//             b = int(table.get(i, j * 3 + 2));
//             fill(h, s, b);
//             rect(j * 50 + 35, i * 60 + 10, 50);
//         }
//     }
// }


//STARTED HERE


// 4 different moods for exhibition to show interaction


function sketch1(p) {
    let table; // Variable for the color table
    let scaleFactor = 1; // Factor for zooming in/out
    let size1, frame, numAcross, palette, h, s, b;

    // Preload the color table
    p.preload = function () {
        table = p.loadTable("colors.csv", "csv", "header");
    };

    // Setup the canvas and initial grid parameters
    p.setup = function () {
        p.createCanvas(p.windowWidth / 4.5, 800).parent('canvas-container1');
        p.colorMode(p.HSB, 360, 100, 100, 255);
        p.noLoop(); // Stop continuous drawing

        // Grid structure
        frame = 100;
        numAcross = 10;
        size1 = (p.width - frame * 2) / numAcross;
    };

    // Draw the grid with random colors and circles
    p.draw = function () {

        palette = 0; // Palette 1
        let newCol = 0;
        p.stroke(h, s, b, 255);
        p.strokeWeight(p.random(0, 5));


        // Row and column grid structure
        for (let x = 0; x < p.width; x += size1) {
            for (let y = 0; y < p.height; y += size1) {
                let col = Math.floor(p.random(5));
                getColor(col);
                p.fill(h, s, b, 255);
                p.circle(x, y, size1);

                // second circle gets a different color
                while (col === newCol) {
                    newCol = Math.floor(p.random(5));
                }
                getColor(newCol);
                p.fill(h, s, b, 255);
                p.circle(x, y, size1 * 0.5);
            }
        }
    };


    // Get colors from the palette
    function getColor(col1) {
        h = parseInt(table.get(palette, col1 * 3));
        s = parseInt(table.get(palette, col1 * 3 + 1));
        b = parseInt(table.get(palette, col1 * 3 + 2));
    }

    // Scale grid size on mouse drag
    p.mouseDragged = function () {
        scaleFactor = p.map(p.mouseY, 0, p.height, 0.5, 2); // Scale between 0.5x and 2x
        size1 = ((p.width - frame * 2) / numAcross) * scaleFactor;
        p.redraw(); // Redraw the grid
    };

    // restart easily with white background
    p.keyPressed = function () {
        if (p.key === ' ') {
            p.background(0, 0, 255);
        }
    };

    // clicking will redraw
    p.mousePressed = function () {
        p.redraw();
    };
}


function sketch2(p) {
    let table; // Variable for the color table
    let palette; // Selected palette row

    // Preload the color table
    p.preload = function () {
        table = p.loadTable("colors.csv", "csv", "header");
    };

    // Setup the canvas and initial settings
    p.setup = function () {
        p.createCanvas(p.windowWidth / 4.5, 800).parent('canvas-container2');
        p.background(200);
        p.colorMode(p.HSB, 360, 100, 100);
        p.noLoop(); // Stops continuous drawing

        palette = 1; // Select the palette row to use
        p.getColor(p.floor(p.random(5))); // Initialize a random color
    };

    // Draw function to generate the design
    p.draw = function () {
        for (let i = 0; i < 3000; i++) {
            let colIndex = p.floor(p.random(5));
            let col = p.getColor(colIndex);
            p.noFill();
            p.stroke(col);
            p.strokeWeight(p.random(1, 5));
            p.rect(
                p.random(-p.width * 0.1, p.width),
                p.random(-p.height * 0.1, p.height),
                200
            );
        }
    };

    // Motif creation for additional elements
    p.motif = function (x, y) {
        p.noStroke();
        let colIndex = p.floor(p.random(5));
        let col = p.getColor(colIndex);
        p.fill(col);

        // Draw a triangle and a rectangle
        p.triangle(x, y, x + 100, y, x, y + 100);
        p.rect(x, y, -x + 300, 60);
    };

    // Retrieve color from the palette
    p.getColor = function (col1) {
        let h = parseInt(table.get(palette, col1 * 3));
        let s = parseInt(table.get(palette, col1 * 3 + 1));
        let b = parseInt(table.get(palette, col1 * 3 + 2));
        return p.color(h, s, b);
    };

    // clear canvas
    p.keyPressed = function () {
        if (p.key === " ") {
            p.background(200);
        }
    };

    // Redraw on mouse press
    p.mousePressed = function () {
        p.redraw();
    };
}

function sketch3(p) {
    let table;
    let rotationAngle = 0; // Global rotation angle in radians
    let palette; // The selected color palette

    // Preload the color table
    p.preload = function () {
        table = p.loadTable("colors.csv", "csv", "header");
    };

    // Setup the canvas and initial parameters
    p.setup = function () {
        p.createCanvas(p.windowWidth / 4.5, 800).parent('canvas-container3');
        p.colorMode(p.HSB, 360, 100, 100, 255);
        p.noLoop(); // Stops continuous drawing
        palette = 2; // Select the palette row to use
        console.log("Canvas created and parented.");
    };

    // Draw function to create the design
    p.draw = function () {
        p.background(120, 50, 10);

        let motifWidth = 100; // Width of the triangle
        let motifHeight = 100; // Height of the triangle

        for (let i = 0; i < 10; i++) { // Loop over rows
            for (let j = 0; j < 10; j++) { // Loop over columns
                let x = j * motifWidth; // Calculate x position
                let y = i * motifHeight; // Calculate y position

                // Offset every other row to create a staggered effect
                if (i % 2 === 1) {
                    x += motifWidth / 2;
                }

                p.push(); // Save current transformation state
                p.translate(x, y); // Move to position
                p.rotate(rotationAngle); // Apply global rotation
                p.motif(0, 0); // Draw the motif at the new position
                p.pop(); // Restore transformation state
            }
        }
    };

    // Create the motif (a triangle and a rectangle)
    p.motif = function (x, y) {
        p.noStroke();
        let colIndex = p.floor(p.random(5));
        let col = p.getColor(colIndex);
        p.fill(col);
        p.triangle(x, y, x + 100, y, x, y + 100); // Triangle
        p.rect(x, y, 100, 60); // Rectangle
    };

    // Get color from the selected palette
    p.getColor = function (col1) {
        let h = parseInt(table.get(palette, col1 * 3));
        let s = parseInt(table.get(palette, col1 * 3 + 1));
        let b = parseInt(table.get(palette, col1 * 3 + 2));
        return p.color(h, s, b);
    };

    // clear canvas to black
    p.keyPressed = function () {
        if (p.key === " ") {
            p.background("black");
        }
    };

    // Redraw the canvas with rotation when mouse is pressed
    p.mousePressed = function () {
        rotationAngle += p.HALF_PI; // Increment rotation by 90 degrees
        p.redraw(); // Redraw the canvas
    };
}

function sketch4(p) {
    let rows, rowHeight, amplitude;

    // Setup the canvas and initialize randomized values
    p.setup = function () {
        p.createCanvas(p.windowWidth / 4.5, 800).parent('canvas-container4');
        p.background("blue");
        p.colorMode(p.HSB, 360, 100, 100, 255);

        p.randomizeSquiggly(); // Randomize the initial squiggly parameters
    };

    // Empty draw function, trigger everything via mousePressed()
    p.draw = function () {
        // No continuous loop
    };

    // Function to draw red squiggly lines
    p.squid2 = function () {
        p.strokeWeight(5);
        p.stroke("red");

        // Loop through the randomized rows and draw each squiggly line
        for (let i = 0; i < rows; i++) {
            let yOffset = i * rowHeight;
            p.beginShape();
            for (let x = 0; x < p.width; x++) {
                let y = yOffset + amplitude * p.sin(x * 0.02 + p.frameCount * 0.05); // Animate with frameCount
                p.vertex(x, y);
            }
            p.endShape();
        }
    };

    // Function to draw a grid of squiggly lines
    p.gridSquiggly = function () {
        p.stroke("black");
        p.strokeWeight(5);
        p.noFill();

        let columnSpacing = 10; // Distance between columns
        let squiggleHeight = 800; // Height of squiggly lines
        let numColumns = p.width / columnSpacing; // Number of columns

        for (let col = 0; col < numColumns; col++) {
            let xStart = col * columnSpacing + columnSpacing / 2; // Center of the column
            p.drawSquigglyLine(xStart, 0, xStart, squiggleHeight);
        }
    };

    // Function to draw a single squiggly line
    p.drawSquigglyLine = function (x1, y1, x2, y2) {
        p.beginShape();
        let stepSize = 1; // Vertical step between points on the squiggly line
        for (let y = y1; y <= y2; y += stepSize) {
            let x = x1 + p.sin(y * 0.1 + p.frameCount * 0.05) * 20; // Animate with frameCount
            p.vertex(x, y);
        }
        p.endShape();
    };

    // Randomizes the values for squiggly drawing
    p.randomizeSquiggly = function () {
        rows = p.int(p.random(10, 50)); // Randomize number of rows
        rowHeight = p.height / rows; // Update row height based on the number of rows
        amplitude = p.random(30, 80); // Randomize the amplitude of the squiggly line
    };

    // Redraw the squiggly grid on mouse press and randomize its properties
    p.mousePressed = function () {
        p.background("blue"); // Clear the canvas when the mouse is pressed
        p.randomizeSquiggly(); // Randomize the squiggly line's properties
        p.gridSquiggly(); // Draw the black grid of squiggly lines
        p.squid2(); // Draw the red squiggly line
    };

    //clears canvas
    p.keyPressed = function () {
        if (p.key === ' ') {
            p.background("black");
        }
    };
}


new p5(sketch1);
new p5(sketch2);
new p5(sketch3);
new p5(sketch4);

