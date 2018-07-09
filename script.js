var gX = 0;
var gY = 0;

function redisplay()
{
  var rotate = document.getElementById("rotate").value;
  gX += parseInt(document.getElementById("posX").value);
  gY += parseInt(document.getElementById("posY").value);
  console.log("X: "+gX)
  console.log("Y: "+gY);
  var attr = " rotate("+rotate+","+gX+","+gY+") translate("+gX+","+gY+")"

  document.getElementById("transformed").setAttribute("transform",
    attr);
}
