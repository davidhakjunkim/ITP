Phase4

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function drawObject(x, y, s) {
  push();
  translate(x, y);
  scale(s);
  
  fill(255);
  
  for (let y = 0; y <= 260; y +=20) {
    square(56, y, 56)
  }
  square(56, 285, 56, 50);
  
  for (let y = 344; y >= 144; y -=20) {
    square(220, y, 56)
  }
  square(220, 120, 56, 50);
  
  quad(88, 160, 244, 120, 250, 174, 88, 216);
  
  quad(88, 285, 244, 245, 250, 299, 88, 341);
  
  pop();
}

function draw() {
  background(255, 0, 0);
  
  let cols = 5;
  let rows = 5;
  
  let cellWidth = width / cols;
  let cellHeight = height / rows;
  
  let objectSize = 400;
  let s = cellWidth / objectSize;
  
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
		
      let x = i * cellWidth;
      let y = j * cellHeight;
	  
      drawObject(x, y, s);
	  
    }
  }
}
