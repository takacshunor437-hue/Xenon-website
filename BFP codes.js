//The-open-world

function renderAndPlay() {
    const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
let pos = 50;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.style.position = "absolute";
canvas.style.top = "1%";
canvas.style.left =  "1%"
canvas.style.pointerEvents = "auto";
canvas.style.zIndex = "10";
canvas.style.transform = "translate(-1%, -1%)";

document.body.appendChild(canvas);

//NECESSARY VARIABLES
let blockSize = 20;
let currX = null;
let currY = null;
let pause = false;
let inv = false;
let invSect = "MAIN";

//NECESSARY FUNCTiONS

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

function calcDist(a, b) {
    let dx = a.x - b.x;
    let dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
};

function collide(what, what1, isPush) {
   let collide = what.x <= what1.x + what1.sx &&
        what.x + what.sx >= what1.x &&
        what.y <= what1.y + what1.sy &&
        what.sy + what.y >= what1.y;

        if(!what.speed) {
            what.speed = 2;
        };
           if(collide && isPush === true) {
            if(what.x < what1.x) {
                what.x -= blockSize;
            };
            if(what.x > what1.x + what1.sx) {
                what.x += blockSize;
            };
            if(what.y < what1.y) {
                what.y -= blockSize;
            };
            if(what.y > what1.y) {
                what.y += blockSize;
            };
        };

        if(isPush === false && collide) {
 if(what.x < what1.x) {
                what.x -= what.speed * 2;
            };
            if(what.x > what1.x + what1.sx) {
                what.x += what.speed * 2;
            };
            if(what.y < what1.y) {
                what.y -= what.speed * 2;
            };
            if(what.y > what1.y) {
                what.y += what.speed * 2;
            };
        };
};

function slimeBehav(what, what1, isPush) {
   let collide = what.x <= what1.x + what1.sx &&
        what.x + what.sx >= what1.x &&
        what.y <= what1.y + what1.sy &&
        what.sy + what.y >= what1.y;

        if(!what.speed) {
            what.speed = 2;
        };
           if(collide && isPush === true) {
            if(what.x < what1.x) {
                what.x -= blockSize /2;
            };
            if(what.x > what1.x + what1.sx) {
                what.x += blockSize/2;
            };
            if(what.y < what1.y) {
                what.y -= blockSize /2;
            };
            if(what.y > what1.y) {
                what.y += blockSize/2;
            };
        };

        if(isPush === false && collide) {
 if(what.x < what1.x) {
                what.x -= what.speed /2 /2;
            };
            if(what.x > what1.x + what1.sx) {
                what.x += what.speed /2 /2;
            };
            if(what.y < what1.y) {
                what.y -= what.speed /2 /2;
            };
            if(what.y > what1.y) {
                what.y += what.speed /2/2;
            };
        };
};

function shoot() {

};

function cloneP() {
objects.push({
    x: player.x,
    visible: true,
    y: player.y,
    sx: player.sx,
    sy: player.sy,
    img: player.img,
    coll: true,
    dir: 1,
    onClick() {
        this.x = undefined;
    },
    actAt: player,
    dirCount: 0,
    HCF_FUNC() {
        if(this.dirCount < 100) {
            this.dirCount ++;
        } else {
            this.dirCount = 0;
            this.dir = Math.floor(Math.random() * 4);
        };

        if(this.dir === 1) {
            this.x += player.speed;
        };
        if(this.dir === 2) {
            this.x -= player.speed;
        };
        if(this.dir === 3) {
            this.y -= player.speed;
        };
        if(this.dir === 4) {
            this.y += player.speed;
        };
        if(this.x >= canvas.width - this.sx) {
            this.dir = 2;
        };
        if(this.x <= 0) {
            this.dir = 1;
        };
        if(this.y >= canvas.height - this.sy) {
            this.dir = 3;
        };
        if(this.y <= 0) {
            this.dir = 4;
        };
    }
});
};

function spawnSM(hostile) {
    objects.push({
        x: Math.floor(Math.random() * canvas.width - 50), 
        y: Math.floor(Math.random() * canvas.height - 50),
        sx: 25,
        sy: 25,
        dir: Math.floor(Math.random() * 4) +1,
        dirC: 0,
        dist: 0,
      
        coll: true,
        img: loadImg("./sidemouth.png"),
           actAt: player,
visible: true,
h: hostile,
HCF_FUNC() {
    this.dist = calcDist(this, player);
if(this.h === true) {
    if(this.dist > 10) {
if(this.x < player.x) this.x += 1;
if(this.x > player.x) this.x -= 1;
if(this.y < player.y) this.y += 1;
if(this.y > player.y) this.y -= 1;
} else {
    player.hp -= 30;
    if(player.hp <= 0) {
        player.x = canvas.width /2;
        player.y = canvas.height /2;
        playS("./bClick.wav");
        player.hp = 100;
    };
}
} else {
    if(this.dirC < 90) {
this.dirC ++;
    }else{
        this.dirC = 0;
        this.dir = Math.floor(Math.random() * 4) + 1;
    };
    if(this.dir === 1) this.x += 2;
    if(this.dir === 2) this.x -= 2;
    if(this.dir === 3) this.y -= 2;
    if(this.dir === 4) this.y += 2;
    if(this.x >= canvas.width - this.sx) {
            this.dir = 2;
        };
        if(this.x <= 0) {
            this.dir = 1;
        };
        if(this.y >= canvas.height - this.sy) {
            this.dir = 3;
        };
        if(this.y <= 0) {
            this.dir = 4;
        };
};
},
  onClick() {
            this.visible = false;
            this.actAt = player === undefined;
            this.HCF_FUNC = () => {

            };
        },
    });
};

function spawnZ(hostile) {
    objects.push({
        x: Math.floor(Math.random() * canvas.width - 50), 
        y: Math.floor(Math.random() * canvas.height - 50),
        sx: blockSize,
        sy: blockSize *2,
        dir: Math.floor(Math.random() * 4) +1,
        dirC: 0,
        coll: true,
        countDown: 30,
        dist: 0,
    
        speed: Math.floor(Math.random() * 4) + 3,
        img: loadImg("./casualSoldier.png"),
           actAt: player,
visible: true,
h: hostile,
HCF_FUNC() {
    this.dist = calcDist(this, player);
if(this.h === true) {
    if(this.dist > 10) {
if(this.x < player.x) this.x += this.speed;
if(this.x > player.x) this.x -= this.speed;
if(this.y < player.y) this.y += this.speed;
if(this.y > player.y) this.y -= this.speed;
} else {
    if(this.countDown < 30) {
        this.countDown ++;
    } else {
    player.hp -= 10 + Math.floor(Math.random() * 40);
    if(player.hp <= 0) {
        player.x = canvas.width /2;
        player.y = canvas.height /2;
        playS("./bClick.wav");
        player.hp = 100;
    };
    this.countDown = 0;
};
}
} else {
    if(this.dirC < 90) {
this.dirC ++;
    }else{
        this.dirC = 0;
        this.dir = Math.floor(Math.random() * 4) + 1;
    };
    if(this.dir === 1) this.x += 2;
    if(this.dir === 2) this.x -= 2;
    if(this.dir === 3) this.y -= 2;
    if(this.dir === 4) this.y += 2;
    if(this.x >= canvas.width - this.sx) {
            this.dir = 2;
        };
        if(this.x <= 0) {
            this.dir = 1;
        };
        if(this.y >= canvas.height - this.sy) {
            this.dir = 3;
        };
        if(this.y <= 0) {
            this.dir = 4;
        };
};
},
    onClick() {
            this.visible = false;
            this.actAt = player === undefined;
            this.HCF_FUNC = () => {
                
            };
        },
    });
};





function spawnGordonFeetman() {
    objects.push({
      x: Math.floor(Math.random() * canvas.width - 35) + 1,
    visible: true,
    y: Math.floor(Math.floor(Math.random() * canvas.height - 40)) + 1, 
    sx: 90,
    sy: 90,
    img: loadImg("./gordon feetman npc.png"),
    coll: false,
    dir: Math.floor(Math.random() * 4) + 1,
    actAt: player,
    dirCount: 0,
    onClick() {
        this.x = undefined;
    },
    speechCount: 0,
    HCF_FUNC() {
        if(this.distP < this.sx) {
this.speechCount ++;
if(this.speechCount < 2) {
    ///SOUND HERE LATER
    console.log("WANNA SEE THE ULTIMATE FEET?");
} else {
    this.speechCount = 0;
};
        }
        if(this.dirCount < 100) {
            this.dirCount ++;
        } else {
            this.dirCount = 0;
            this.dir = Math.floor(Math.random() * 4);
        };

        if(this.dir === 1) {
            this.x += player.speed / 2;
        };
        if(this.dir === 2) {
            this.x -= player.speed / 2;
        };
        if(this.dir === 3) {
            this.y -= player.speed / 2;
        };
        if(this.dir === 4) {
            this.y += player.speed / 2;
        };
        if(this.x >= canvas.width - this.sx) {
            this.dir = 2;
        };
        if(this.x <= 0) {
            this.dir = 1;
        };
        if(this.y >= canvas.height - this.sy) {
            this.dir = 3;
        };
        if(this.y <= 0) {
            this.dir = 4;
        };
    }
});
};

function spawnUgandaKnuckles() {
objects.push({
    x: Math.floor(Math.random() * canvas.width - 35) + 1,
    visible: true,
    y: Math.floor(Math.floor(Math.random() * canvas.height - 40)) + 1, 
    sx: 35,
    sy: 40,
    img: loadImg("./ugandaa.png"),
    coll: true,
    dir: 1,
    actAt: player,
    dirCount: 0,
    speechCount: 0,
    onClick() {
        this.x = undefined;
    },
    HCF_FUNC() {
        if(this.distP < this.sx) {
this.speechCount ++;
if(this.speechCount < 2) {
    ///SOUND HERE LATER
    console.log("Do you know da wae?");
} else {
    this.speechCount = 0;
};
        }
        if(this.dirCount < 100) {
            this.dirCount ++;
        } else {
            this.dirCount = 0;
            this.dir = Math.floor(Math.random() * 4);
        };

        if(this.dir === 1) {
            this.x += player.speed / 2;
        };
        if(this.dir === 2) {
            this.x -= player.speed / 2;
        };
        if(this.dir === 3) {
            this.y -= player.speed / 2;
        };
        if(this.dir === 4) {
            this.y += player.speed / 2;
        };
        if(this.x >= canvas.width - this.sx) {
            this.dir = 2;
        };
        if(this.x <= 0) {
            this.dir = 1;
        };
        if(this.y >= canvas.height - this.sy) {
            this.dir = 3;
        };
        if(this.y <= 0) {
            this.dir = 4;
        };
    }
});
};

function goom(x,y) {
    
      for(let o of grass) {
        let inMouse = x >= o.x &&
            x <= o.x + o.sx &&
            y >= o.y &&
            y <= o.y + o.sy;

        if(inMouse) {
currX = o.x;
currY = o.y
return o;

            } else {
                currX = null;
                currY = null;
            };
                
            
      };
      return undefined;
    };

function newBlock(img, s, coll) {
    if(inv === false) {
        playS("./placeBlock.wav");
    objects.push({
        x: currX,
        y: currY,
        sx: blockSize,
        sy: blockSize,
        coll: true,
        actAt: player,
        key: null,
        visible: true,
        slimeBehav: false,
        cd: 0,
        img: img,
        HCF_FUNC() {
            if(s !== undefined) {
                this.slimeBehav = true;
            };
            if(coll !== undefined) {
                this.coll = false;
            };
if(this.key === "Shift") {
     let is = cursor.x >= this.x &&
            cursor.x <= this.x + this.sx &&
            cursor.y >= this.y &&
            cursor.y <= this.y + this.sy;

            if(is) {
    this.x = undefined;
};

};
}
    });
};
};

function newBlockUnIMG(col, s) {
    if(inv === false) {
        playS("./placeBlock.wav");
    objects.push({
        x: currX,
        y: currY,
        sx: blockSize,
        sy: blockSize,
        coll: true,
        actAt: player,
        key: null,
        visible: true,
        slimeBehav: false,
        cd: 0,
        col: col,
        HCF_FUNC() {
            if(s !== undefined) {
                this.slimeBehav = true;
            };
if(this.key === "Shift") {
     let is = cursor.x >= this.x &&
            cursor.x <= this.x + this.sx &&
            cursor.y >= this.y &&
            cursor.y <= this.y + this.sy;

            if(is) {
    this.x = undefined;
};

};
}
    });
};
};

function draw() {
const groundRows = Math.ceil(canvas.width / blockSize);
const groundCols = Math.ceil(canvas.width / blockSize);
 
for (let row = 0; row < groundRows; row++) {
    for (let col = 0; col < groundCols; col++) {
        grass.push({
            x: col * blockSize,
            y: row * blockSize,
            sx: blockSize,
            sy: blockSize,
            col: "green",
            coll:false,
            onInteract() {
                console.log("runs");
                if(player.sb === "stone") {
          newBlock(loadImg("./stone.png"));
                };
                if(player.sb === "wood") {
                    newBlock(loadImg("./wood.png"));
                };
                if(player.sb === "dirt") {
                    newBlock(loadImg("./dirt.png"));
                };
                if(player.sb === "trunk") {
                    newBlock(loadImg("./treeTR.png"));
                };
                if(player.sb === "water") {
newBlock(loadImg("./water.png"),true, false);
                };
                if(player.sb === "glass") {
                    newBlockUnIMG("rgba(6, 105, 147, 0.56)")
                };
                if(player.sb === "wool") {
                    newBlock(loadImg("./wool.png"));
                };
            },
            onM() {
                this.col = "white";
            },
            notM() {
                this.col = "green";
            }
        });
    };
};
};
//EVERYTHING
let player = {hp: 100,sb: "stone", img: loadImg("./playerBFP.png"), b: null, push: false, paused: false, keyLock: 0, x: canvas.width / 2, y: canvas.height / 2, sx: blockSize, sy: blockSize,
    keys: {w: null, s: null, a: null, d: null},
     speed: 3,
HCF_FUNC() {
    if(this.keys.w === " ") {
        shoot();
    };
    if(pause === false) {
        if(this.keys.w === "f") {
            this.push = !this.push;
        };
if(this.keys.w === "w") {
    console.log("registers (Player)")
    this.y -= this.speed
};
if(this.keys.a === "a") {
    this.x -= this.speed;
};
if(this.keys.d === "d") {
    this.x += this.speed;
};
if(this.keys.s === "s") {
    this.y += this.speed;
};
if(this.keys.w === "c") {
    this.keyLock ++;
    if(this.keyLock < 2) {
        cloneP();
    };
};
if(this.keys.w === null) {
    this.keyLock = 0;
};
if(this.x >= canvas.width - this.sx) {
    this.x -= this.speed * 2;
};
if(this.x <= 0) {
    this.x += this.speed * 2;
};
if(this.y >= canvas.height - this.sy) {
    this.y -= this.speed * 2;
};
if(this.y <= 0) {
    this.y += this.speed * 2
};
if(this.keys.w === "1") {
    this.sb = "stone";
};
if(this.keys.w === "2") {
    this.sb = "wood";
};
if(this.keys.s === "3") {
    this.sb = "dirt";
};
if(this.keys.s === "4") {
    this.sb = "trunk";
};
    };

    if(this.keys.w === "Escape") {
        this.keyLock ++
        if(this.keyLock < 2) {
pause = true;
        };
    };
 if(pause) {
    buttons[0].visible = true;
    buttons[1].visible = true;
 } else {
     buttons[0].visible = false;
    buttons[1].visible = false;
 };
ctx.drawImage(this.img, this.x, this.y, this.sx, this.sy);
},
};

let buttons = [
    {x: canvas.width / 2 - canvas.width /2/2/2/2, y: canvas.height /2 / 1.5, sx: canvas.width /2 /2 /2, sy: canvas.height /2 /2 /2 /2, img: loadImg("./reset.png"), onClick() {
    objects = [

    ];
    draw();
    player.x = canvas.width /2;
    player.y = canvas.height /2;
}, actAt: pause === true, visible: false},

{x: canvas.width / 2 - canvas.width /2/2/2/2, coll: false, y: canvas.height / 2 /2, sx: canvas.width /2 /2 /2, sy: canvas.height /2 /2 /2 /2, img: loadImg("./resume.png"), onClick() {
   pause = false;
}, actAt: pause === true, HCF_FUNC() {
    console.log(this.actAt)
}, visible: false},
//0000000000000000000000000000000000000000000000000000000000000000000000000000
//NPC BUTTON AT MAIN
{x: canvas.width /2 - canvas.width /2/2 /2 +canvas.width /2/2 /2 /2, y: canvas.height /2 + canvas.height /2/2-canvas.height /2/2/2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./npc_button_rs.png"), onClick() {
invSect = "NPC";
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "MAIN", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "MAIN") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//00000000000000000000000000000000000000000000000000000000000000000000000000000000000
//BLOCKS BUTTON AT MAIN
{x: canvas.width /2 +canvas.width /2/2 /2 /2, y: canvas.height /2 + canvas.height /2/2-canvas.height /2/2/2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./b_sel_b.png"), onClick() {
invSect = "BLOCKS";
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "MAIN", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "MAIN") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 - canvas.width /2/2 /2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false, img: loadImg("./ugandaa.png"), onClick() {
spawnUgandaKnuckles();
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "NPC", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "NPC") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 , y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false, img: loadImg("./gordon feetman npc.png"), onClick() {
spawnGordonFeetman();
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "NPC", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "NPC") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 + canvas.width /2/2/2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false, img: loadImg("./sidemouth.png"), onClick() {
spawnSM(false);
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "NPC", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "NPC") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 - canvas.width /2/2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false, img: loadImg("./sidemouth.png"), onClick() {
spawnSM(true);
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "NPC", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "NPC") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//000000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 - canvas.width /2/2, y: canvas.height /2/2 + canvas.height /2/2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false, img: loadImg("./casualSoldier.png"), onClick() {
spawnZ(true);
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "NPC", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "NPC") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//000000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 - canvas.width /2/2/2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false, img: loadImg("./water.png"), onClick() {
player.sb = "water"
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//00000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false,col: "rgba(6, 105, 147, 0.56)", onClick() {
player.sb = "glass"
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//00000000000000000000000000000000000000000000000000000000000000000
{x: canvas.width /2 + canvas.width /2/2/2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false,img: loadImg("./wool.png"), onClick() {
player.sb = "wool"
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: canvas.width /2 + canvas.width /2/2/2, y: canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2, coll: false,img: loadImg("./wool.png"), onClick() {
player.sb = "wool"
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//BACK BUTTON AT BLOCKS
{x: canvas.width /2, y: canvas.height /2 + canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./back.png"), onClick() {
invSect = "MAIN";
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//BACK BUTTON AT NPCS
{x: canvas.width /2, y: canvas.height /2 + canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./back.png"), onClick() {
invSect = "MAIN";
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "NPC", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "NPC") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//BACK BUTTON AT MAIN
{x: canvas.width /2, y: canvas.height /2 + canvas.height /2/2, sx: canvas.width /2/2 /2, sy: canvas.height /2/2/2/2, coll: false,  img: loadImg("./back.png"), onClick() {
inv = false;
console.log("ONCLICK FUNCTION RUNS.")
}, actAt: inv === true && invSect === "MAIN", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "MAIN") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
    {x: canvas.width * 5, y: canvas.height /2 / 1.5, sx: canvas.width /2 /2 /2, key: null,sy: canvas.height /2 /2 /2 /2, img: loadImg("./reset.png"), onClick() {

}, actAt: pause === true, visible: false, HCF_FUNC() { 
    if(this.key === "i" || this.key === "I") {
        inv = true;
    };
}},
];

//CURSOR
 let cursor = {x: player.x, y: player.y, sx: 10, sy: 10, actAt: player,  col: "black", speed: 2, coll: false, key: null, HCF_FUNC() {
if(this.key == "ArrowUp") {
    if(this.y > 0) {
    this.y -= this.speed;
    this.speed += 0.02;
    };
};
if(this.key === "ArrowLeft") {
    if(this.x > 0) {
    this.x -= this.speed;
    this.speed += 0.02;
    };
};
if(this.key === "ArrowRight") {
    if(this.x < canvas.width - this.sx) {
    this.x += this.speed;
    this.speed += 0.02;
    };
};
if(this.key === "ArrowDown") {
    if(this.y < canvas.height - this.sy) {
    this.y += this.speed;
    this.speed += 0.02;
    };
};
if(this.key === null) {
    this.speed = 2;
};
currX = this.x;
currY = this.y;
    },
    visible: true
};


let objects = [
//GIRAFFE DOGOOOOOOOOOOOOOOOOOOOOOOOOOO
{x: canvas.width + 75, y: canvas.height /2, sx: 70, sy: 70, apC: 0, appear: 0, img: loadImg("./GIRAFFEDOGGOOOO.png"), actAt: 0 == 0, visible: true, HCF_FUNC() {
if(this.appear < 500) {
    this.appear ++;
} else {
    this.appear = 0;
    this.apC = 4 + Math.floor(Math.random() * 70);
};
if(this.apC === 10) {
    this.x -= 10;
} else {
    this.x = canvas.width + 75;
};
if(this.x < -75) {
    this.x = canvas.width +75;
};
}}
];

let text = [
{x: 1, y: 25, font: "20px monoscope", col: "black", actAt: objects !== undefined, text: "Random sandbox alpha 0.5"},
{x: 5, y: canvas.height - 35, font: "15px monoscope", col: "black", actAt: player, text: "Push mode on. Press F to turn it off.", HCF_FUNC() {
    if(player.push === false) {
        this.text = "Push mode off. Press F to turn it on.";
    } else {
        this.text = "Press F to turn off push mode.";
    };
}},
{x: canvas.width - 60, y: canvas.height -30, font: "20px Comic Sans MS", actAt: player, text: player.hp, HCF_FUNC() {this.text = player.hp;}}
];

let grass = [

];

//USER INPUT
window.addEventListener("keydown", e => {
player.keys.w = e.key;
player.keys.s = e.key;
player.keys.a = e.key;
player.keys.d = e.key
cursor.key = e.key;

buttons.forEach((o) => {
    
        if(o.key !== undefined) {
            o.key = e.key;
    };
    let is = cursor.x >= o.x &&
            cursor.x <= o.x + o.sx &&
            cursor.y >= o.y &&
            cursor.y <= o.y + o.sy;

if(o.onClick && is && e.key === "Control" && o.visible) {
    o.onClick();
};
});
objects.forEach((o) => {
    
        if(o.key !== undefined) {
            o.key = e.key;
    };
    let is = cursor.x >= o.x &&
            cursor.x <= o.x + o.sx &&
            cursor.y >= o.y &&
            cursor.y <= o.y + o.sy;

if(o.onClick && is && e.key === "Control" && o.visible) {
    o.onClick();
};
});
grass.forEach((o) => {
    let is = cursor.x >= o.x &&
            cursor.x <= o.x + o.sx &&
            cursor.y >= o.y &&
            cursor.y <= o.y + o.sy;

            if(is && o.onInteract && e.key === "Control" && pause === false) {
                o.onInteract();
            };
});
});

window.addEventListener("keyup", e => {
    player.keys.w = null;
player.keys.a = null;
player.keys.s = null;
player.keys.d = null;
cursor.key = null;
objects.forEach((o) => {
    if(o) {
        if(o.key) {
            o.key = null;
        };
    };
});
buttons.forEach((o) => {
    if(o) {
        if(o.key) {
            o.key = null;
        };
    };
});

});


//CALL FUNCTIONS
draw();


//RENDER FUNCTION
function render() {
    grass.forEach((o) => {
        if(o) {
        if(o.img) {
            ctx.drawImage(o.img, o.x, o.y, o.sx, o.sy);
        };
        if(o.col) {
            ctx.fillStyle = o.col;
            ctx.fillRect(o.x, o.y, o.sx, o.sy);
        };
        if(o.coll === true && player.push === false) {
            collide(player, o, false);
        };

        if(o.onM) {
 let is = cursor.x >= o.x &&
            cursor.x <= o.x + o.sx &&
            cursor.y >= o.y &&
            cursor.y <= o.y + o.sy;
            if(is) {
            o.onM();
            } else {
                o.notM();
            };
        };
        o.distP = calcDist(o, player);
        if(o.HCF_FUNC) {
            if(pause === false) {
        o.HCF_FUNC();
        };
    };
        };
});
 player.HCF_FUNC();
objects.forEach((o) => {
    if(o.actAt) {
        o.visible = true;
    };
    if(o.visible) { 
           if(o.onM) {
 let is = cursor.x >= o.x &&
            cursor.x <= o.x + o.sx &&
            cursor.y >= o.y &&
            cursor.y <= o.y + o.sy;
            if(is) {
            o.onM();
            } else {
                o.nonM();
            };
        };
        if(o.slimeBehav !== undefined && o.slimeBehav ===true) {
            slimeBehav(player, o, false);
        };
        if(o.img) {
            ctx.drawImage(o.img, o.x, o.y, o.sx, o.sy);
        };
        if(o.col) {
            ctx.fillStyle = o.col;
            ctx.fillRect(o.x, o.y, o.sx, o.sy);
        };
        if(o.coll === true && player.push === false) {
            collide(player, o, false);
        } else if (player.push === true) {
            collide(o, player, true);
        };
        o.distP = calcDist(o, player);
    };
        if(o.HCF_FUNC && pause === false) {
        o.HCF_FUNC();
        };
    
});

buttons.forEach((o) => {
    if(o.actAt) {
        o.visible = true;
    };
    if(o.visible) { 
           if(o.onM) {
 let is = cursor.x >= o.x &&
            cursor.x <= o.x + o.sx &&
            cursor.y >= o.y &&
            cursor.y <= o.y + o.sy;
            if(is) {
            o.onM();
            } else {
                o.nonM();
            };
        };
        if(o.slimeBehav !== undefined && o.slimeBehav ===true) {
            slimeBehav(player, o, false);
        };
        if(o.img) {
            ctx.drawImage(o.img, o.x, o.y, o.sx, o.sy);
        };
        if(o.col) {
            ctx.fillStyle = o.col;
            ctx.fillRect(o.x, o.y, o.sx, o.sy);
        };
        if(o.coll === true && player.push === false) {
            collide(player, o, false);
        } else if (player.push === true) {
            collide(o, player, true);
        };
        o.distP = calcDist(o, player);
    };
        if(o.HCF_FUNC && pause === false) {
        o.HCF_FUNC();
        };
    
});


text.forEach((t) => {
    if(t.actAt) {
    ctx.fillStyle = t.col;
    ctx.font = t.font;
    ctx.fillText(t.text, t.x, t.y);
    if(t.HCF_FUNC) {
        t.HCF_FUNC();
    };
    };
});

ctx.fillStyle = cursor.col;
ctx.fillRect(cursor.x, cursor.y, cursor.sx, cursor.sy);
cursor.HCF_FUNC();
goom(cursor.x, cursor.y);

    requestAnimationFrame(render);
};
render();
};

renderAndPlay();

export {renderAndPlay};