class Circle {
    constructor(cx, cy, angle) {
        this.angle = angle;
        this.cx = cx;
        this.cy = cy;
    }

    display() {
        push();
        translate(this.cx, this.cy);
        noFill();
        ellipse(0, 0, r * 2, r * 2);

        let x = r * cos(this.angle);
        let y = r * sin(this.angle); //small circle

        fill(0);
        ellipse(x, y, 10, 10);
        pop();
    }

    move(speed) {
        this.angle += speed;
    }

}