Phase2

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(255, 0, 0);
  fill(255);
  
  //this is the shape in the left
  for (let y = 0; y <= 260; y +=20) {
    square(56, y, 56)
  }
  square(56, 285, 56, 50);
  
  //this is the shape in the right
  for (let y = 344; y >= 144; y -=20) {
    square(220, y, 56)
  }
  square(220, 120, 56, 50);
  
  //this is the shape in the top
  quad(88, 160, 244, 120, 250, 174, 88, 216);
  
  //this is the shape in the bottom
  quad(88, 285, 244, 245, 250, 299, 88, 341);
}
