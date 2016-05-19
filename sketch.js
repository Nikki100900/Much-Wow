
// The setup function runs once
function setup() {
  createCanvas(windowWidth,windowHeight);

}

//The draw function runs many times per second. The default rate is 60 frames per second!
function draw() {
 background(204,204,255);
 fill(238,185,205);
 ellipse (600,mouseY,200,200);
 ellipse (mouseX,300,200,200)
}