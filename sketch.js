let x;
let y;

let xspeed;
let yspeed;

let dvd;

let r, g, b;

function preload() {
  dvd = loadImage("dvd_logo.png");
}

function setup() {
  createCanvas(800, 600);
  x = 400;
  y = 300;
  xspeed = 5;
  yspeed = 5;
  pickColour();
}

function pickColour() {
  r = random(256);
  g = random(256);
  b = random(256);
}

function draw() {
  background(0);
  tint(r, g, b);
  image(dvd, x, y, 80, 60)

  x = x + xspeed;
  y = y + yspeed;

  if (x + 80 == width || x == 0) {
    xspeed = -xspeed;
    pickColour();
  }

  if (y + 60 == height || y == 0) {
    yspeed = -yspeed;
    pickColour()
  }
}