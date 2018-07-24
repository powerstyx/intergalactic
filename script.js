var level = {
  name: "Level 1",
  x:200,
  y:200,
}

// Player
var speed = {
    x:0,
    y:0,
    spin:0
};

var ship = {
  x:0,
  y:0,
  direction:0
}

function redisplay()
{

  // Read User Input
  speed.x += parseInt(document.getElementById("control.x").value);
  speed.y += parseInt(document.getElementById("control.y").value);
  speed.spin += parseInt(document.getElementById("control.spin").value);

  // Update state
  ship.x += speed.x;
  if(Math.abs(ship.x)>level.x) {
    ship.x = (-1)*Math.sign(ship.x)*level.x - (Math.abs(ship.x)-level.x)*Math.sign(ship.x)*(-1);
  }
  ship.y += speed.y;
  if(Math.abs(ship.y)>level.y) {
    ship.y = (-1)*Math.sign(ship.y)*level.y - (Math.abs(ship.y)-level.y)*Math.sign(ship.y)*(-1);
  }
  ship.direction = (ship.direction + speed.spin)%360;


  // Update Map
  var attr = " rotate("+ship.direction+","+ship.x+","+ship.y+") translate("+ship.x+","+ship.y+")"
  document.getElementById("transformed").setAttribute("transform", attr);
 if(Math.abs(ship.x) == 200) {
   var cloned = document.getElementById("transformed").cloneNode(true);
   cloned.id ="clownX";
   var attr2 = " rotate("+ship.direction+","+ship.x*(-1)+","+ship.y+") translate("+ship.x*(-1)+","+ship.y+")"
   cloned.setAttribute("transform", attr2);
   document.getElementById("transformed").parentElement.appendChild(cloned);
 }
 else {
   if(document.getElementById("clownX")) {
     document.getElementById("clownX").remove();
   }
 }
 if(Math.abs(ship.y) == 200) {
   var cloned = document.getElementById("transformed").cloneNode(true);
   cloned.id ="clownY";
   var attr2 = " rotate("+ship.direction+","+ship.x+","+ship.y*(-1)+") translate("+ship.x+","+ship.y*(-1)+")"
   cloned.setAttribute("transform", attr2);
   document.getElementById("transformed").parentElement.appendChild(cloned);
 }
 else {
   if(document.getElementById("clownY")) {
     document.getElementById("clownY").remove();
   }
 }

 if(Math.abs(ship.x) == 200 && Math.abs(ship.y) == 200) {
   var cloned = document.getElementById("transformed").cloneNode(true);
   cloned.id ="clownXY";
   var attr2 = " rotate("+ship.direction+","+ship.x*(-1)+","+ship.y*(-1)+") translate("+ship.x*(-1)+","+ship.y*(-1)+")"
   cloned.setAttribute("transform", attr2);
   document.getElementById("transformed").parentElement.appendChild(cloned);
 }
 else {
   if(document.getElementById("clownXY")) {
     document.getElementById("clownXY").remove();
   }
 }



  // Write State
  document.getElementById("ship.x").value = ship.x;
  document.getElementById('ship.y').value = ship.y;
  document.getElementById("ship.direction").value = ship.direction;
  document.getElementById("speed.x").value = speed.x;
  document.getElementById("speed.y").value = speed.y;
  document.getElementById("speed.spin").value = speed.spin;

  // Reset Controller
  document.getElementById("control.x").value = 0;
  document.getElementById("control.y").value = 0;
  document.getElementById("control.spin").value =0;


}
