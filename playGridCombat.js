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
//CSO AS IN CURRENT SELECTED OBJECT
let CSO = null;
let inv = false;

let invSect = "BLOCKS";
let random_wave_interval = 30000 + Math.floor(Math.random() *  35000);
let random_spawn_interval =  25000 + Math.floor(Math.random() *  35000);
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

function die() {
window.location.reload();
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

function othersCollide(o) {
    if(o.coll === true) {
            for (let target of objects) {
            if (target.collO === true && o.stm === false &&target.collO === true) {
           let intersection_happens =  o.x <= target.x + target.sx &&
        o.x + o.sx >= target.x &&
        o.sy + o.y >= target.y &&
        o.y <= target.y;


              if (intersection_happens) {
                  if(target.x < o.x) {
                target.x -= target.speed * 2;
            };
            if(target.x > o.x + o.sx) {
                target.x += target.speed * 2;
            };
            if(target.y < o.y) {
                target.y -= target.speed * 2;
            };
            if(target.y > o.y) {
                target.y += target.speed * 2;
            };
                  
              } else {
               
              };
            };
        };
          };
};


function newWave() {
    for(let i = 0; i < 5; i++) {
        console.log("A WAVE S H O U L D   HAPPEN  . . . ");
 objects.push({
        x: canvas.width - 50, 
        stm: true,
        y: Math.floor(Math.random() * canvas.height - 50),
        sx: 25,
        sy: 25,
        dir: Math.floor(Math.random() * 4) +1,
        dirC: 0,
        dist: 0,
      
        collO: true,
        img: loadImg("./sidemouth.png"),
           actAt: player,
visible: true,
h: true,
HCF_FUNC() {
    this.dist = calcDist(this, player);
if(this.h === true) {
    if(this.dist > canvas.width / 2.4) {
        this.x -= 4.2;
    };
    if(this.dist > 6) {
        if(this.dist < canvas.width / 2.4) {
if(this.x < player.x) this.x += 4;
if(this.x > player.x) this.x -= 4;
if(this.y < player.y) this.y += 4;
if(this.y > player.y) this.y -= 4;
        };
} else {
    player.hp -= 2;
    if(player.hp <= 0) {
        objects = undefined;
       die();
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
  if(this.hp > 0) {
     if(player.gunEq === true && player.bullets > 0) {
        if(Math.floor(Math.random() * 2) + 1 === 1) {
            playS("./sm_hurt.wav");
        } else {
            playS("./sm_hurt_1.wav");
        };
            this.hp -= 20;
            };
  } else {
    playS("./sm_die.wav");
    switch(Math.floor(Math.random() * 8) + 1) {
        case 1: 
player.bullets += player.bullets;
        break;
        case 2:
        player.wood += 1 + Math.floor(Math.random() * 5);
        player.wata += 2;
        break;
        case 3:
            player.glass += Math.floor(Math.random() * 9) + 1;
            player.bullets += 6;
            player.wata += 2;
            player.canned_food += 1 + Math.floor(Math.random() * 3);
break;
case 4:
    player.dirt += 4;
    player.stone += 4;
    player.wata += 2;
    player.water += 1 + Math.floor(Math.random() * 5);
    break;
    case 5:
player.trunks += Math.floor(Math.random() * 6) + 1;
player.canned_food += Math.floor(Math.random() * 5);
player.wood += 5;
    break;
    case 6:
        player.bullets += 15;
        player.glass += 10;
        break;
        case 7:
            player.stone += 20;
            player.wood += 5 + Math.floor(Math.random() * 5);
            player.canned_food += 3;
            player.wata ++;
            break;
            case 8:
                player.canned_food += Math.floor(Math.random() * 4) + 1;
                player.wata +=  Math.floor(Math.random() * 4) + 1;
    };
            this.visible = false;
            this.actAt = player === undefined;
            this.HCF_FUNC = () => {

            };
  };
        },
    });
    objects.push({
        x: canvas.width - 50, 
        stm: true,
        y: Math.floor(Math.random() * canvas.height - 50),
        sx: blockSize,
        sy: blockSize *2,
        dir: Math.floor(Math.random() * 4) +1,
        dirC: 0,
        collO: true,
        countDown: 30,
        dist: 0,
    
        speed: Math.floor(Math.random() * 4) + 2,
        img: loadImg("./casualSoldier.png"),
           actAt: player,
visible: true,
h: true,
HCF_FUNC() {
    this.dist = calcDist(this, player);
if(this.h === true) {
    if(this.dist > canvas.width /2.2) {
        this.x -= this.speed;
    };
    if(this.dist > 6) {
        if(this.dist < canvas.width / 2.2) {
if(this.x < player.x) this.x += this.speed;
if(this.x > player.x) this.x -= this.speed;
if(this.y < player.y) this.y += this.speed;
if(this.y > player.y) this.y -= this.speed;
        };
} else {
    if(this.countDown < 30) {
        this.countDown ++;
    } else {
    player.hp -= 10 + Math.floor(Math.random() * 20);
    this.countDown = 0;
    if(player.hp <= 0) {
        objects = undefined;
        die();
    };
    
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
        if(this.hp > 0) {
            if(player.gunEq === true && player.bullets > 0) {
            this.hp -= 20;
            playS("./hurt.wav");
            };
        } else {
            playS("./die.wav");
           switch(Math.floor(Math.random() * 8) + 1) {
        case 1: 
player.bullets += player.bullets;
        break;
        case 2:
        player.wood += 1 + Math.floor(Math.random() * 5);
        player.wata += 4;
        break;
        case 3:
            player.glass += Math.floor(Math.random() * 9) + 1;
            player.bullets += 6;
            player.wata += 2;
            player.canned_food += 1 + Math.floor(Math.random() * 3);
break;
case 4:
    player.dirt += 4;
    player.stone += 4;
    player.wata ++;
    player.water += 1 + Math.floor(Math.random() * 5);
    break;
    case 5:
player.trunks += Math.floor(Math.random() * 6) + 1;
player.canned_food += Math.floor(Math.random() * 5);
player.wood += 5;
    break;
    case 6:
        player.bullets += 15;
        player.glass += 10;
        break;
        case 7:
            player.stone += 20;
            player.wood += 5 + Math.floor(Math.random() * 5);
            player.canned_food += 3;
            player.wata ++;
            break;
            case 8:
                player.canned_food += Math.floor(Math.random() * 4) + 1;
                player.wata +=  Math.floor(Math.random() * 4) + 1;
    };
            this.visible = false;
            this.actAt = player === undefined;
            this.HCF_FUNC = () => {
                
            };
        };
        },
    });
};
};

function newBox() {
objects.push({
    x: Math.floor(Math.random() * canvas.width - 50),
    y: Math.floor(Math.random() * canvas.height - 50),
    sx: 50,
    sy: 50,
    stm: false,
    img: loadImg("./box1.png"),
    actAt:player,
    cd: 0,
    coll: "push",
    cdLim: 2 + Math.floor(Math.random() * 3),
    onClick() {
this.cd ++;
if(this.cd > this.cdLim) {
    this.x = undefined;
    this.actAt = player === undefined;
    playS("./woodCrack.wav");
            switch(Math.floor(Math.random() * 8) + 1) {
        case 1: 
player.bullets += player.bullets;
        break;
        case 2:
        player.wood += 1 + Math.floor(Math.random() * 5);
        player.wata += 4;
        break;
        case 3:
            player.glass += Math.floor(Math.random() * 9) + 1;
            player.bullets += 6;
            player.wata += 2;
            player.canned_food += 1 + Math.floor(Math.random() * 3);
break;
case 4:
    player.dirt += 4;
    player.stone += 4;
    player.wata ++;
    player.water += 1 + Math.floor(Math.random() * 5);
    break;
    case 5:
player.trunks += Math.floor(Math.random() * 6) + 1;
player.canned_food += Math.floor(Math.random() * 5);
player.wood += 5;
    break;
    case 6:
        player.bullets += 15;
        player.glass += 10;
        break;
        case 7:
            player.stone += 20;
            player.wood += 5 + Math.floor(Math.random() * 5);
            player.canned_food += 3;
            player.wata ++;
            break;
            case 8:
                player.canned_food += Math.floor(Math.random() * 4) + 1;
                player.wata +=  Math.floor(Math.random() * 4) + 1;
    };
};

    }
});
};

function spawn() {
   if(Math.floor(Math.random() * 2) === 1) {
    spawnSM(true);
   } else {
    spawnZ(true);
   };
};

function slimeBehav(what, what1, isPush) {
    if(what.z === what1.z) {
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
        stm: true,
        dir: Math.floor(Math.random() * 4) +1,
        dirC: 0,
        dist: 0,
      
        collO: true,
        img: loadImg("./sidemouth.png"),
           actAt: player,
visible: true,
h: hostile,
HCF_FUNC() {
    this.dist = calcDist(this, player);
if(this.h === true) {
    if(this.dist > 6) {
if(this.x < player.x) this.x += 5;
if(this.x > player.x) this.x -= 5;
if(this.y < player.y) this.y += 5;
if(this.y > player.y) this.y -= 5;
} else {
    player.hp -= 2;
    if(player.hp <= 0) {
        objects = undefined;
       die();
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
  if(this.hp > 0) {
     if(player.gunEq === true && player.bullets > 0) {
            this.hp -= 20;
            if(Math.floor(Math.random()) * 2 + 1 === 1) {
                playS("./sm_hurt.wav");
            } else {
                playS("./sm_hurt_1.wav")
            };
            };
  } else {
    playS("./sm_die.wav");
    switch(Math.floor(Math.random() * 8) + 1) {
        case 1: 
player.bullets += player.bullets;
        break;
        case 2:
        player.wood += 1 + Math.floor(Math.random() * 5);
        player.wata += 2;
        break;
        case 3:
            player.glass += Math.floor(Math.random() * 9) + 1;
            player.bullets += 6;
            player.wata += 2;
            player.canned_food += 1 + Math.floor(Math.random() * 3);
break;
case 4:
    player.dirt += 4;
    player.stone += 4;
    player.wata += 2;
    player.water += 1 + Math.floor(Math.random() * 5);
    break;
    case 5:
player.trunks += Math.floor(Math.random() * 6) + 1;
player.canned_food += Math.floor(Math.random() * 5);
player.wood += 5;
    break;
    case 6:
        player.bullets += 15;
        player.glass += 10;
        break;
        case 7:
            player.stone += 20;
            player.wood += 5 + Math.floor(Math.random() * 5);
            player.canned_food += 3;
            player.wata ++;
            break;
            case 8:
                player.canned_food += Math.floor(Math.random() * 4) + 1;
                player.wata +=  Math.floor(Math.random() * 4) + 1;
    };
            this.visible = false;
            this.actAt = player === undefined;
            this.HCF_FUNC = () => {

            };
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
        collO: true,
        countDown: 30,
        stm: true,
        dist: 0,
    
        speed: Math.floor(Math.random() * 4) + 4,
        img: loadImg("./casualSoldier.png"),
           actAt: player,
visible: true,
h: hostile,
HCF_FUNC() {
    this.dist = calcDist(this, player);
if(this.h === true) {
    if(this.dist > 6) {
if(this.x < player.x) this.x += this.speed;
if(this.x > player.x) this.x -= this.speed;
if(this.y < player.y) this.y += this.speed;
if(this.y > player.y) this.y -= this.speed;
} else {
    if(this.countDown < 30) {
        this.countDown ++;
    } else {
    player.hp -= 10 + Math.floor(Math.random() * 20);
    if(player.hp <= 0) {
        objects = undefined;
        die();
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
        if(this.hp > 0) {
            if(player.gunEq === true && player.bullets > 0) {
                playS("./hurt.wav");
            this.hp -= 20;
            };
        } else {
            playS("./die.wav");
           switch(Math.floor(Math.random() * 8) + 1) {
        case 1: 
player.bullets += player.bullets;
        break;
        case 2:
        player.wood += 1 + Math.floor(Math.random() * 5);
        player.wata += 4;
        break;
        case 3:
            player.glass += Math.floor(Math.random() * 9) + 1;
            player.bullets += 6;
            player.wata += 2;
            player.canned_food += 1 + Math.floor(Math.random() * 3);
break;
case 4:
    player.dirt += 4;
    player.stone += 4;
    player.wata ++;
    player.water += 1 + Math.floor(Math.random() * 5);
    break;
    case 5:
player.trunks += Math.floor(Math.random() * 6) + 1;
player.canned_food += Math.floor(Math.random() * 5);
player.wood += 5;
    break;
    case 6:
        player.bullets += 15;
        player.glass += 10;
        break;
        case 7:
            player.stone += 20;
            player.wood += 5 + Math.floor(Math.random() * 5);
            player.canned_food += 3;
            player.wata ++;
            break;
            case 8:
                player.canned_food += Math.floor(Math.random() * 4) + 1;
                player.wata +=  Math.floor(Math.random() * 4) + 1;
    };
            this.visible = false;
            this.actAt = player === undefined;
            this.HCF_FUNC = () => {
                
            };
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
CSO = o;

            } else {
              
            };
                
            
      };
      return undefined;
    };

function newBlock(img, s, coll, type) {
    if(inv === false &&pause === false) {
        playS("./placeBlock.wav");
    objects.push({
        x: CSO.x,
        y: CSO.y,
        sx: blockSize,
        sy: blockSize,
        t: type,
        stm: false,
        coll: true,
        actAt: player,
        key: null,
        visible: true,
        slimeBehav: false,
        cd: 0,
             onClick() {
            if(player.sb === "NONE") {
                let x = this.x;
                    let y = this.y;
                

                if(this.img === loadImg("./box1.png")) {
                    
                    if(Math.floor(Math.random() * 3) + 1 === 2) {
                         objects.push({
        x: x, 
        y: y,
        sx: 25,
        sy: 25,
        dir: Math.floor(Math.random() * 4) +1,
        dirC: 0,
        dist: 0,
      
        coll: true,
        img: loadImg("./sidemouth.png"),
           actAt: player,
visible: true,
h: true,
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
                };
                this.x = undefined;
                if(this.t === "water") {
                    player.water ++;
                };
                if(this.t == "stone") {
                    player.stone ++;
                };
               
                if(this.t === "trunk") {
                    player.trunks ++;
                };
                if(this.t === "dirt") {
                    player.dirt ++;
                };
                if(this.t === "wood") {
                    player.wood ++;
                };
            };
        },
        z: 0,
        img: img,
        HCF_FUNC() {
            if(s !== undefined) {
                this.slimeBehav = true;
            };
            if(coll !== undefined) {
                this.coll = false;
            };
if(this.key === "Shift") {
     let is = currX >= this.x &&
            currX <= this.x + this.sx &&
            currY>= this.y &&
            currY <= this.y + this.sy;

            if(is) {
    this.x = undefined;
};

};
}
    });
};
};

function newBlockUnIMG(col, s, t) {
    if(inv === false) {
        playS("./placeBlock.wav");
    objects.push({
        x: CSO.x,
        y: CSO.y,
        sx: blockSize,
        sy: blockSize,
        coll: true,
        stm: false,
        actAt: player,
        t:t,
        key: null,
        visible: true,
        slimeBehav: false,
        cd: 0,
        col: col,
        onClick() {
            if(player.sb === "NONE") {
                this.x = undefined;
                 if(this.t === "glass") {
                    player.glass ++;
                };
            };
        },
        HCF_FUNC() {
            if(s !== undefined) {
                this.slimeBehav = true;
            };
if(this.key === "Shift") {
     let is = currX >= this.x &&
            currX <= this.x + this.sx &&
            currY >= this.y &&
            currY <= this.y + this.sy;

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
            z: 0,
            sy: blockSize,
            col: "rgba(221, 255, 70," + (0.4 + Math.random()) + ")",
            
            coll:false,
        
            onInteract() {
                if(inv === false) {
                if(player.sb === "stone" && player.stone > 0) {
          newBlock(loadImg("./stone.png"), false, true, "stone");
          player.stone --;
                };
                if(player.sb === "wood" && player.wood > 0) {
                    newBlock(loadImg("./wood.png"), false, true, "wood");
                    player.wood --;
                };
                if(player.sb === "dirt" && player.dirt > 0) {
                    newBlock(loadImg("./dirt.png"), false, true, "dirt");
                    player.dirt --;
                };
                if(player.sb === "trunk" && player.trunks > 0) {
                    newBlock(loadImg("./treeTR.png"), false, true, "trunk");
                    player.trunks --;
                };
                if(player.sb === "water" && player.water > 0) {
newBlock(loadImg("./water.png"),true, false, "water");
player.water --;
                };
                if(player.sb === "glass" && player.glass > 0) {
                    newBlockUnIMG("rgba(6, 105, 147, 0.56)", false, "glass");
                    player.glass --;
                };
                if(player.sb === "wool") {
                    newBlock(loadImg("./wool.png"));
                };
                if(player.sb === "box") {
                    newBlock(loadImg("./box1.png"));
                };
            };
            },
         

                HCF_FUNC() {


            },
            onM() {
               
            },
            notM() {
            
            }
        });
    };
};
};
//EVERYTHING
let player = {hp: 100,sb: "stone", img: loadImg("./dandoe_soldier.png"), b: null,z: 0,gunEq: false, wood: 0, glass: 0, water: 0, canned_food: 0, wata: 0, bullets: 20,thirst: 0, hunger: 0,stone: 36, dirt: 0, trunks: 0,push: false, paused: false, keyLock: 0, x: canvas.width / 2, y: canvas.height / 2, sx: blockSize * 2.5, sy: blockSize * 3.5,
    keys: {w: null, s: null, a: null, d: null},
     speed: 3,
HCF_FUNC() {
    this.thirst += 0.01;
    this.hunger += 0.005;

    if(this.hunger >= 100 || this.thirst >= 100) {
this.hunger = 0;
this.thirst = 0;
die();

    };
    if(this.keys.a === "g"|| this.keys.a === "G") {
        if(this.gunEq === true) {
            this.gunEq = false;
        } else {
            this.gunEq = true;
        };
    };
    if(pause === false) {
  
if(this.keys.w === "w" || this.keys.w === "W") {
    this.y -= this.speed
};
if(this.keys.a === "a"|| this.keys.w === "A") {
    this.x -= this.speed;
};
if(this.keys.d === "d" || this.keys.w === "D") {
    this.x += this.speed;
};
if(this.keys.s === "s"|| this.keys.w === "S") {
    this.y += this.speed;
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
if(this.keys.w === "1" && this.stone > 0) {
    this.sb = "stone";
};
if(this.keys.w === "2" && this.wood > 0) {
    this.sb = "wood";
};
if(this.keys.s === "3" && this.dirt > 0) {
    this.sb = "dirt";
};
if(this.keys.s === "4" && this.trunks > 0) {
    this.sb = "trunk";
};
if(this.keys.s === "0") {
    this.sb = "NONE";
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

let bullets = [

];

let buttons = [
    {x: (canvas.width - canvas.width /2 /2 /2) / 2, y: canvas.height /2 / 1.5, sx: canvas.width /2 /2 /2, sy: canvas.height /2 /2 /2 /2, img: loadImg("./reset.png"), onClick() {
   window.location.reload();
     },
     },

        {x: (canvas.width -  canvas.width /2 /2 /2) / 2, y: canvas.height /2 / 2, sx: canvas.width /2 /2 /2, sy: canvas.height /2 /2 /2 /2, img: loadImg("./resume.png"), onClick() {
   pause = false;
     },
     },
     //0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000
         {x: canvas.width * 5, y: canvas.height /2 / 1.5, sx: canvas.width /2 /2 /2, key: null,sy: canvas.height /2 /2 /2 /2, img: loadImg("./reset.png"), onClick() {

}, actAt: pause === true, visible: false, HCF_FUNC() { 
    if(this.key === "i" || this.key === "I") {
        inv = !inv;
        invSect = "BLOCKS"
    };
}},

//000000000000000000000000000000000000000000000000000000000000000000  !!!
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3, y: canvas.height / 1.5, sx: canvas.width /2/2 /2/2/2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./stone.png"), onClick() {
if(player.stone > 0) {
    player.sb = "stone";
};

}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (window.innerWidth - 90) / 2, y: canvas.height - 55, img: loadImg("./sht.png"), actAt: player.gunEq === true, sx: 90, sy:50, visible: false, HCF_FUNC() {
    function helper() {
        return player.gunEq === true;
    };
    if(helper()) {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
//00000000000000000000000000000000000000000000000000000000000000000  !!!
{x: (canvas.width - canvas.width /2/2 /2/2/2) / 2.3,  y: canvas.height /1.5 + (canvas.height /2/2/2/2) * 2,sx: canvas.width /2/2/2/2/2, sy: canvas.height /2/2/2/2, coll: false,img:loadImg("./wood.png"), onClick() {
if(player.wood > 0) {
    player.sb = "wood"
};
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (canvas.width - canvas.width /2/2 /2/2/2) / 2.3,  y: canvas.height /1.5 + (canvas.height /2/2/2/2) * 4,sx: canvas.width /2/2/2/2/2, sy: canvas.height /2/2/2/2, coll: false,img: loadImg("./dirt.png"), onClick() {
if(player.dirt > 0) {
    player.sb = "dirt"
};
}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.width /2/2 /2/2/2 * 1.5), y: canvas.height / 1.5, sx: canvas.width /2/2 /2/2/2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./treeTR.png"), onClick() {
if(player.trunks > 0) {
    player.sb = "trunk";
};

}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.width /2/2 /2/2/2 * 1.5), y: canvas.height / 1.5 + (canvas.height /2/2/2/2) * 2, sx: canvas.width /2/2 /2/2/2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./water.png"), onClick() {
if(player.water > 0) {
    player.sb = "water";
};

}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.width /2/2 /2/2/2 * 1.5), y: canvas.height / 1.5 + (canvas.height /2/2/2/2) * 4, sx: canvas.width /2/2 /2/2/2, sy: canvas.height /2/2/2/2, coll: false, col:"rgba(6, 105, 147, 0.56)" , onClick() {
if(player.glass > 0) {
    player.sb = "glass";
};

}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.width /2/2 /2/2/2 * 3), y: canvas.height / 1.5, sx: canvas.width /2/2 /2/2/2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./foodCan.png") , onClick() {
if(player.canned_food > 0) {
    player.canned_food --;
    if(player.hunger < 11) {
        player.hunger = 0;
    } else {
        player.hunger -= 10;
        if(player.hp > 85) {
            player.hp = 100;
        } else {
            player.hp += 15;
        };
    };
};

}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.width /2/2 /2/2/2 * 3), y: canvas.height / 1.5 +   (canvas.height /2/2/2/2) * 2, sx: canvas.width /2/2 /2/2/2, sy: canvas.height /2/2/2/2, coll: false, img: loadImg("./waterBottle.png") , onClick() {
if(player.wata > 0) {
    player.wata--;
    if(player.thirst < 11) {
        player.thirst = 0;
    } else {
        player.thirst -= 10;
    };
};

}, actAt: inv === true && invSect === "BLOCKS", visible: true, HCF_FUNC() {
    if(inv == true && invSect === "BLOCKS") {
        this.visible = true;
    } else {
        this.visible = false;
    };
}},
];

let objects = [
{x: (canvas.width - 45), y: 0, sx: 45, sy: 45, col: null, img: 0, stm: false,visible: true, actAt: pause === false, HCF_FUNC() {
    if(player.sb === "stone") {
        this.col = 0;
        this.img = loadImg("./stone.png");
    };
    if(player.sb === "trunk") {
         this.col = 0;
        this.img = loadImg("./treeTR.png");
    };
    if(player.sb === "dirt") {
         this.col = 0;
        this.img = loadImg("./dirt.png");
    };
    if(player.sb === "wood") { 
         this.col = 0;
        this.img = loadImg("./wood.png");
    };
    if(player.sb === "water") {
         this.col = 0;
        this.img = loadImg("./water.png");
    };
    if(player.sb === "wool") {
         this.col = 0;
        this.img = loadImg("./wool.png");
    };
    if(player.sb === "glass") {
        this.img = 0;
        this.col = "rgba(6, 105, 147, 0.56)";
    };
    if(player.sb === "box") {
        this.col = 0;
        this.img = loadImg("./box1.png");
    };

}},
];

let text = [
{x: 1, y: 25, font: "20px monoscope", col: "black", actAt() {return player}, text: "Grid Combat alpha 1.0"},

{x: 30, y: canvas.height -150, font: "20px Comic Sans MS", actAt() {return player}, text: player.hp, HCF_FUNC() {this.text = "Health: " + player.hp;}},
{x: 30, y: canvas.height -120, font: "20px Comic Sans MS", actAt() {return player}, text: player.hp, HCF_FUNC() {this.text = "Thirst: " + Math.trunc(player.thirst);}},
{x:30, y: canvas.height -90, font: "20px Comic Sans MS", actAt() {return player}, text: player.hp, HCF_FUNC() {this.text = "Hunger: " + Math.trunc(player.hunger);}},
{x:30, y: canvas.height- 60, font: "20px Comic Sans MS", actAt() {return player}, text: player.hp, HCF_FUNC() {this.text = "bullets: " + Math.trunc(player.bullets);}},
{x:30, y: canvas.height- 30, font: "20px Comic Sans MS", actAt() {return player}, text: player.hp, HCF_FUNC() {
    if(player.sb === "stone") {
    this.text = "Blocks: " + Math.trunc(player.stone);
    };
    if(player.sb === "wood") {
    this.text = "Blocks: " + Math.trunc(player.wood);
    };
    if(player.sb === "water") {
    this.text = "Blocks: " + Math.trunc(player.water);
    };
    if(player.sb === "glass") {
        this.text = "Blocks: " + Math.trunc(player.glass);
    };
    if(player.sb === "dirt") {
        this.text = "Blocks: " + Math.trunc(player.dirt);
    };
    if(player.sb === "trunk") {
        this.text = "Blocks: " + Math.trunc(player.trunks);
    };
}
},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + 10, y: canvas.height / 1.5 - 15, sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.stone,HCF_FUNC() {this.text = player.stone}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + 10, y: canvas.height / 1.5 - 15 + (canvas.height /2/2/2/2) * 2, sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.wood,HCF_FUNC() {this.text = player.wood}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + 10, y: canvas.height / 1.5 - 15 + (canvas.height /2/2/2/2) * 4, sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.dirt,HCF_FUNC() {this.text = player.dirt}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.height /2/2/2/2) * 2, y: canvas.height / 1.5 - 15 , sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.trunks,HCF_FUNC() {this.text = player.trunks}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.height /2/2/2/2) * 2, y: canvas.height / 1.5 - 15 + (canvas.height /2/2/2/2) * 2, sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.water,HCF_FUNC() {this.text = player.water}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.height /2/2/2/2) * 2, y: canvas.height / 1.5 - 15 + (canvas.height /2/2/2/2) * 4, sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.glass,HCF_FUNC() {this.text = player.glass}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.height /2/2/2/2) * 4 - 15, y: canvas.height / 1.5 - 15 , sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.canned_food,HCF_FUNC() {this.text = player.canned_food}},
{x: (canvas.width - canvas.width /2/2/2/2/2) / 2.3 + (canvas.height /2/2/2/2) * 4 - 15, y: canvas.height / 1.5 - 15 + (canvas.height /2/2/2/2) * 2, sx: canvas.width /2/2 /2/2/2, font: "20px Comic Sans MS", actAt() {return inv === true}, text: player.wata,HCF_FUNC() {this.text = player.wata}},
];

let grass = [

];

//USER INPUT

window.addEventListener("mousemove", e => {
    currX = e.clientX;
    currY = e.clientY;
});

window.addEventListener("keydown", e => {
player.keys.w = e.key;
player.keys.s = e.key;
player.keys.a = e.key;
player.keys.d = e.key

objects.forEach((o) => {
    o.key = e.key;
});

buttons.forEach((b) => {
    b.key = e.key;
});
});

window.addEventListener("keyup", e => {
    player.keys.w = null;
player.keys.a = null;
player.keys.s = null;
player.keys.d = null;
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

window.addEventListener("mousedown", e => {
       currX = e.clientX;
    currY = e.clientY;

if(player.gunEq === true && player.bullets > 0 && pause == false && player.sb === "NONE" && inv === false) {
    player.bullets --;
    playS("./shot.wav");
};

    buttons.forEach((o) => {
    
   
    let is = currX >= o.x &&
            currX <= o.x + o.sx &&
            currY >= o.y &&
            currY <= o.y + o.sy;

if(o.onClick && is && o.visible) {
    o.onClick();
    playS("./bClick.wav");
};
});
objects.forEach((o) => {
    
    let is = currX >= o.x &&
            currX <= o.x + o.sx &&
            currY >= o.y &&
            currY <= o.y + o.sy;

if(o.onClick && is && o.visible) {
    o.onClick();
};
});
grass.forEach((o) => {
    let is = currX>= o.x &&
        currX <= o.x + o.sx &&
            currY >= o.y &&
            currY <= o.y + o.sy;

            if(is && o.onInteract &&  pause === false) {
                o.onInteract();
            };
});
});


//CALL FUNCTIONS
draw();

setInterval(function() {newWave();}, random_wave_interval);
setInterval(function() {newBox(); spawn()}, random_spawn_interval);

//RENDER FUNCTION
function render() {
    if(objects !== undefined) {
    ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
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
 let is = currX>= o.x &&
            currX <= o.x + o.sx &&
            currY >= o.y &&
            currY <= o.y + o.sy;
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
 let is = currX >= o.x &&
            currX <= o.x + o.sx &&
            currY >= o.y &&
            currY <= o.y + o.sy;
            if(is) {
            o.onM();
            } else {
                o.notM();
            };
        };
        if(o.slimeBehav !== undefined && o.slimeBehav ===true) {
            slimeBehav(player, o, false);
        };
        othersCollide(o);
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

    if(o.visible) { 
           if(o.onM) {
 let is = currX >= o.x &&
            currX <= o.x + o.sx &&
            currY >= o.y &&
            currY <= o.y + o.sy;
            if(is) {
            o.onM();
            } else {
                o.notM();
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
    if(t.actAt()) {
    ctx.fillStyle = t.col;
    ctx.font = t.font;
    ctx.fillText(t.text, t.x, t.y);
    if(t.HCF_FUNC) {
        t.HCF_FUNC();
    };
    };

});

goom(currX, currY);

    requestAnimationFrame(render);
};
};
render();
};

renderAndPlay();

export {renderAndPlay};