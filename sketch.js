
let table;

function preload() {
    table = loadTable("colors.csv", "csv", "header");
}

function setup() {
    createCanvas(700, 700);
    background(220);
    colorMode(HSB, 360, 100, 100, 255);
    textSize(20);
    for (i = 0; i < 6; i++) { //increase this number as you add palettes
        fill(0);
        text(i, 8, i * 60 + 35);
        for (j = 0; j < 5; j++) {
            h = int(table.get(i, j * 3));
            s = int(table.get(i, j * 3 + 1));
            b = int(table.get(i, j * 3 + 2));
            fill(h, s, b);
            rect(j * 50 + 35, i * 60 + 10, 50);
        }
    }
}