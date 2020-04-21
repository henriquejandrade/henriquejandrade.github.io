class Ball {

    constructor(size, color) {
        this.size = size;
        this.color = color;
    }

    draw(x, y) {
        noStroke();
        this.color.myFill();
        circle(x, y, this.size);
    }
}