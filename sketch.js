var t = 255; //variable for the text's transparency which will change based on the user's action


//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
  // Pick colors randomly
  r = random(255);
  g = random(255);
  b = random(255);
}

//The draw function happens over and over again
function draw() {
  background(0,0,76); //an RGB color for the canvas' background
  //circle
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  noStroke();
    // Draw a circle
  fill(r, g, b, 127);
  ellipse(360, 200, 200, 200);
  textSize(35);
  textAlign(RIGHT);
  textFont("Palatino");
  fill(255,255,127,t); // yellow, t refers to the transparency (set to fully opaque (255) at the beginning (see variable a the top of the sketch))
  text("MMP100",width-20, height-20);
  if(mouseIsPressed) //making the text disappear when the mouse is down
  	t = t-3; // decrease the opacity of the text (see variable at the top of the sketch)
  	if (t<=0){ //if the text is completely transparent, reset it
  		t=255;
  	}
  fill(255,255,127,200); //white, semi-transparent
  ellipse(mouseX+50,mouseY+50,10,10); // follows the mouse, 10px dia
  //sparkly sky (points are redrawn randomly on the canvas everytime we go through the draw function
  stroke(255);
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
  point(random(0,width),random(0,height));
}

// When the user clicks the mouse
function mousePressed(){
  // Check if mouse is inside the circle
  let d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}