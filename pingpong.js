function renderAndPlay() {
  //boredGame
let canvas = document.createElement("canvas");
  let score = 0;
  function loadImg(path) { 
let img = new Image();

img.src = path;

return img;
};

function playS(path) {
    let s = new Audio();
    s.src = path;

    s.play();
};


  let pointerImage = loadImg("./bg.pointer.png");
let pos = 50;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.top = "1%";
canvas.style.left =   1+ "%";
canvas.style.pointerEvents = "auto";
canvas.style.zIndex = "10";
canvas.style.transform = "translate(-" + 1 + "%, -1%)";
  const a = canvas.getContext('2d');
  document.body.appendChild(canvas);
  const movingThing = { x: 0, y: 30, size: 30, speed: 25};
  const pointer = { x: canvas.width /2, y: 70, size: 20}
let isActive = false;
let dist = 0;

function loadImg(path) { 
let img = new Image();

img.src = path;

return img;
};
function calcDist(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};

function moveMovingThing() {
    if(movingThing.x <= 0) {
      isActive = true
    };
    if(movingThing.x >= canvas.width) {
    isActive = false
    };

};

function actual() {
    if(isActive === true) {
        movingThing.x += movingThing.speed
    } else {
          movingThing.x -= movingThing.speed
    };
};


window.addEventListener('keydown', e => {
    if(e.key === " ") {
        console.log("ALSO registers")
       if(dist < 50) {
        playS("./cbeep (4).wav");
        console.log("Registers")
            score ++;
            movingThing.speed += 0.01;
            } else {
              score --;
            };
    };
});


function gameLoop() {
    dist = calcDist(pointer, movingThing)
   a.clearRect(0,0, canvas.width, canvas.height);
 a.fillStyle = "black";
 a.fillRect(0,0, canvas.width, canvas.height);
    a.fillStyle = 'white';
    a.fillRect(movingThing.x, movingThing.y, movingThing.size, movingThing.size);
      a.fillStyle = 'white';
  a.font = '24px sans-serif';
  a.fillText(`Score: ${score}`, canvas.width /2 - `Score: ${score}`.length, 300);
  if(pointerImage) {
    a.drawImage(pointerImage, pointer.x, pointer.y, pointer.size, pointer.size)
  }
   requestAnimationFrame(gameLoop);
     moveMovingThing(); 
    actual();
};

gameLoop();
};

renderAndPlay();

export {renderAndPlay};