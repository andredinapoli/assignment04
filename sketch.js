 function setup() {
  createCanvas(windowWidth,windowHeight);
  strokeCap(SQUARE)
  angleMode(DEGREES);
 }
 
 function draw() {
   background(179,181,148);
   translate(width/2, height/2);
   
   fill(255,255,255,100);
   stroke(255,255,255);
   strokeWeight(20)
   ellipse(0,0,380,380)
   
   if (hour() > 12) {
     var hour12 = hour() - 12;
   } else {
     var hour12 = hour();
   }
   
   clockHand(second(), 60,2, 150, (0,0,0));
   clockHand(minute(), 60, 5, 130, (230,230,230));
   clockHand(hour12, 12, 7, 80, (255,255,255))
 
   fill(255,255,255);
   noStroke();
   ellipse(0,0,15,15)
}
 
 function clockHand(timeValue, range, size, radius, color) {
   push();
   var angle = map(timeValue, 0, range, -90, 270);
   console.log(angle);
   noFill();
   noStroke();
   strokeWeight(size);
   stroke(color);
   line(0,0,radius*cos(angle),radius*sin(angle));
   pop();
 } 
 
 function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}