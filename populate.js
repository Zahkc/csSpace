stars = 0;
while (stars <= 100) {
  x = Math.floor(Math.random() * 995)/10;
  y = Math.floor(Math.random() * 995)/10;
  while ((x >= 12 && x <=24) && (y >= 25 && y <=75)) {
    x = Math.floor(Math.random() * 995)/10;
    y = Math.floor(Math.random() * 995)/10;
  }
  a = Math.floor(Math.random() * 500) + 500;
  newLine = '<div class="glow" style=" top: ' + x + '%; left: ' + y + '%;"><div class="bigStar" style="animation: glimmer ' + a + 'ms infinite;"></div></div>';
  stars++;
  document.getElementById("galaxy").innerHTML += newLine;
}

stars = 0;
while (stars <= 500) {
  x = Math.floor(Math.random() * 995)/10;
  y = Math.floor(Math.random() * 995)/10;
  while ((x >= 12 && x <=24) && (y >= 25 && y <=75)) {
    x = Math.floor(Math.random() * 995)/10;
    y = Math.floor(Math.random() * 995)/10;
  }
  newLine = '<div class="smallStar" style=" top: ' + x + '%; left: ' + y + '%;"></div>';
  stars++;
  document.getElementById("galaxy").innerHTML += newLine;
}

vaccume(10);

async function vaccume(fallingCount){
  xMax = document.documentElement.clientHeight;
  yMax = document.documentElement.clientWidth;
  for (let i = 0; i < fallingCount; i++) {
    document.getElementById("galaxy").innerHTML += '<div id="star' + i + '"></div>';
  }
  starPos = 0;
  while (true){
    flingStar(starPos%fallingCount);
    starPos++;
    await new Promise(r => setTimeout(r, 500));
  }
}


function flingStar(starPos) {
  switch(Math.floor(Math.random() *4)) {
    case 0:
      xStart = (Math.floor(Math.random() * yMax));
      yStart = -10;
      xArc = xStart;
      yArc = xMax + 10;
      break;
    case 1:
      xStart = -10;
      yStart = (Math.floor(Math.random() * xMax));
      xArc = yMax + 10;
      yArc = yStart;
      break;
    case 2:
      xStart = (Math.floor(Math.random() * yMax));
      yStart = xMax + 10;
      xArc = xStart;
      yArc = - 10;
      break;
    case 3:
      xStart = yMax + 10;
      yStart = (Math.floor(Math.random() * xMax));
      xArc = -10;
      yArc = yStart;
  }

  path = "'M " +
  xStart + " " +
  yStart + " Q " +
  xArc + " " +
  yArc + " " +
  (yMax / 2) + " " +
  (xMax / 2) + "'";

  document.getElementById("star"+starPos).innerHTML = '<div class="sinkingStar" style="offset-path: path(' + path + '); animation: move '+Math.floor(Math.random()*3500 + 1500)+'ms ease-in-out;"></div>';
}
