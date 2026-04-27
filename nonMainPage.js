//MAIN PAGE
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
let currGame = JSON.parse(localStorage.getItem("curr")) || "SUL";
let currGameName = "Sell Your Life";
let currGameStyle = null;
let x = 0;
let y = 0;
const baseW = 1366;
const baseH = 768;
let scale = Math.min(window.innerWidth / baseW, window.innerHeight / baseH);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
let pagePart = JSON.parse(sessionStorage.getItem("page")) || 'MAIN'
//GBS = GAME BUTTON SECTION
let GBS = 1;
//NECESSARY FUNCTIONS

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

let buttons = [
  //  ONE:                            000000000000000000000000000000000000000000000000000000000000000000000000000000000
 {x: baseW /2 /2 - baseW /2/2/2, y: 0, sx: baseW /2 + baseW /2 / 0.6, sy: 120, col:"rgba(12, 16, 255, 0.8)", actAt: () => GBS === 1},
 {x: baseW /2 + baseW /2/2 + (baseW /2/2/2 + baseW /2/2/2/2), y: baseH /2/2 + baseH /2/2/2/2/2, sx: baseW /2/2, sy: baseH /2, imgSource: loadImg("./GMBG.png"), actAt: () => pagePart === "MAIN"},
];


let text = [
{x: baseW / 2 + baseW /2/2/2, y: 40, col: "white", font: "40px Comic Sans MS", txt: "Xe", actAt: () => buttons !== null},
{x: baseW /2 + baseW /2/2 + (baseW /2/2/2 + baseW /2/2/2), y: baseH /2/2 + baseH /2/2/2 /2, font: "15px Comic Sans", txt: "Navigate through da page here:", actAt: () => pagePart === "MAIN", col: "black"}
];

window.addEventListener("mousedown", e => {
    if(e.button === 0) {
        let rect = canvas.getBoundingClientRect();
         x = Math.floor((e.clientX - rect.left) / scale)
         y = Math.floor((e.clientY - rect.top) / scale)
    buttons.forEach((b) => {
         let is = x >= b.x &&
            x <= b.x + b.sx &&
            y >= b.y &&
            y <= b.y + b.sy;

            if(is && b.onClick && b.actAt()) {
                console.log("X: " + x + " Y: " + y);
                b.onClick();
            };
    });
};
});

window.addEventListener("mousemove", e => {
   let rect = canvas.getBoundingClientRect();
         x = (e.clientX - rect.left) / scale;
         y = (e.clientY - rect.top) / scale;
    buttons.forEach((b) => {
        let is = x >= b.x &&
            x <= b.x + b.sx &&
            y >= b.y &&
            y <= b.y + b.sy;

            if(b.onMouse && is && b.actAt()) {
                b.onMouse();
            };
            if(!is && b.onNM && b.actAt()) {
                b.onNM();
            };
    });
});

window.addEventListener("mouseup", e => {
    let rect = canvas.getBoundingClientRect();
         x = (e.clientX - rect.left) / scale;
         y = (e.clientY - rect.top) / scale;
    buttons.forEach((b) => {
         let is = x >= b.x &&
            x <= b.x + b.sx &&
        y >= b.y &&
            y <= b.y + b.sy;

            if(is && b.onRel && b.actAt()) {
                b.onRel();
            };
    });
});
 ctx.scale(scale, scale);
function render() {
     ctx.setTransform(1, 0, 0, 1, 0, 0);
         ctx.clearRect(0, 0, baseW, baseH);
ctx.scale(scale, scale);
        function drawRotated(what) {
            if(what.imgSource) {
    ctx.save();
    ctx.translate(what.x + what.sx / 2, what.y + what.sy / 2);
    let rotationRadians3 = what.rotation * Math.PI / 180;
    ctx.rotate(rotationRadians3);
      ctx.drawImage(what.imgSource, -what.sx / 2, -what.sy / 2, what.sx, what.sy);
    ctx.restore();
            } else {
                 ctx.translate(what.x + what.sx / 2, what.y + what.sy / 2);
    let rotationRadians3 = what.rotation * Math.PI / 180;
    ctx.rotate(rotationRadians3);
    ctx.fillStyle = what.col;
      ctx.fillRect(-what.sx / 2, -what.sy / 2, what.sx, what.sy);
    ctx.restore();
            };
};
    //render buttons array
    buttons.forEach((b) => {
        if(b.actAt()) {
        if(b.imgSource) {
        ctx.drawImage(b.imgSource, b.x, b.y, b.sx, b.sy);
        } else {
            if(b.col) {
                ctx.fillStyle = b.col;
                ctx.fillRect(b.x, b.y, b.sx, b.sy);
            };
        };
        if(b.rotation) {
            if(b.actAt()) {
                drawRotated(b);
            };
        };
        if(b.hasT) {
            if(b.t && b.font && b.colT) {
                ctx.fillStyle = b.colT;
                ctx.font = b.font;
                ctx.fillText(b.t, b.x + 4, b.y + b.sy /1.6);
            };
        };
    };
    });

    //render text
    text.forEach((t) => {
        if(t.actAt()) {
        ctx.fillStyle = t.col;
        ctx.font = t.font;
        ctx.fillText(t.txt, t.x, t.y);
        if(t.HCF_FUNC) {
            t.HCF_FUNC();
        };
        };
    });

    //All the games running
   

    if(currGame === "SUL") {
        currGameStyle = "3D";
        currGameName = "Sell Your Life";

    };
    if(currGame === "pingAndPong") {
        currGameStyle = "2D";
        currGameName = "ping-pong";
    };
    if(currGame === "BFP") {
        currGameStyle = "2d";
        currGameName = "Random Sandbox";
    };
//Sync that stupid shit (I hate this word "sync")
    requestAnimationFrame(render);
};

render();