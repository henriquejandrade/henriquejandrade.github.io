class Building {

    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.width = Math.round(random(20, 50));
        this.height = Math.round(random(75, 100));

        this.pillarsCount = this.width / 10;
        this.hBarsStep = Math.round(random(10, 15)); // Stage Height
        this.hBarsStart = Math.round(random(0, 5));

        this.tilesW = Math.round(this.width / 3);
        this.tilesH = Math.round(this.height / 3);
        this.totalTiles = this.tilesW * this.tilesH;
        this.tilesCount = 0;
    }


    update() {
        this.tilesCount++;
        if (this.tilesCount > this.totalTiles) {
            this.tilesCount = 0;
        }
    }

    draw() {
        noSmooth();
        translate(this.x, this.y);

        // Vertical Bars
        for (let x = 0; x < this.pillarsCount; x++) {
            fill(255, 0, 0);
            rect(Math.floor((x * this.width / this.pillarsCount) - (this.width / 2)), -this.height, 3, this.height);
            fill(150, 0, 0);
            rect(Math.floor((x * this.width / this.pillarsCount) - (this.width / 2)), -this.height, 2, this.height);
        }

        // Horizontal Bars
        let y = this.hBarsStart;
        while (y > -this.height) {
            fill(255, 0, 0);
            rect(Math.round(-this.width / 2), y, this.width, 3);
            fill(150, 0, 0);
            rect(Math.round(-this.width / 2), y, 2, 3);

            y -= this.hBarsStep;
        }

        // Tiles
        fill(102, 102, 102);
        for (let i = 0; i < this.tilesCount; i++) {
            rect(Math.round(-this.width / 2) + ((i % this.tilesW) * 3),
                -3 * Math.floor(i / this.tilesW),
                3,
                -3);
        }

        translate(-this.x, -this.y);
    }
}