//MAIN PAGE
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 300;
let pos = 100;
canvas.style.position = "absolute";
canvas.style.top = "170%";
canvas.style.left = pos + "%";
canvas.style.pointerEvents = "auto";
canvas.style.zIndex = "1";
canvas.style.transform = "translate(-" + pos + "%, -170%)";
let currGame = JSON.parse(localStorage.getItem("curr")) || "SUL";
let currGameName = "Sell Your Life";
let currGameStyle = null;
let x = 0;
let y = 0;
const baseW = 1366;
const baseH = 768;
let scale = Math.min(window.innerWidth / baseW, window.innerHeight / baseH);
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
{x: 0, y: 0, sx: 200, sy: 60, col: "red", hasT: true, font: "15px Comic Sans MS", colT: "white", t: "Don't press! Too useless!", actAt: () => 1 === 1, onClick() {
    console.log("Wow! You have found da useless button! Use it's useless power for completely useless things!");
    text[0].actAt = () => 1 === 1;
    setTimeout(function() {
        text[0].actAt = () => 1 === 2
    }, 6000)
    playS("./bClick.wav");
    this.sx = 100;
    this.sy = 30;
}, onMouse() {
    this.col="grey";
}, onNM() {
    this.col="red";
}, onRel() {
    this.sx = 200;
    this.sy = 60;
}},
];


let text = [
{x: 5, y: 75, col:"black", font:"20px Comic Sans MS", txt:"WoW! You have found da useless button! Use it's useless power for useless things!", actAt: () => 1 === 2}
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

            if( b.onRel && b.actAt()) {
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