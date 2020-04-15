class Ball {

    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
    }

    draw() {
        noStroke();
        fill(255, 0, 0);
        circle(this.x, this.y, this.size);
    }
}