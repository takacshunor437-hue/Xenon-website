//PARTICLE ENGINE CODES
import * as THREE from "three";


function renderAndPlay() {



//      !!!!!! ONLY ENGINE !!!!!
let objects =  [

];
                //1     2         3       4       5          6 7 8 9  10 11     12      13      14    15  16  17  18    19          20      21    22    23    24      25      26        27       28  29   30      parameters... EH?!?!?!?!?!?!?,44?!!
function newObj(coll, setter, HCF_FUNC, onClick, slimeBehav, x,y,z,sx,sy,sz, material, grav, rotated, rx, ry, rz, t, additionals, parent, onMD, onMR, isLast, weight, push, fragility, onBreak, stm,mass, co) {
let o = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(sx, sy, sz),
    material
  ), 
  stm: null,
  isLast: isLast,
  onMD() {
    if(typeof onMD === "function") {
    onMD();
    };
  },

  onMR() {
    if(typeof onMR === "function") {
    onMR();
    };
  },
  ad: additionals,
  collides: coll, HCF_FUNC() {
    HCF_FUNC();
     if(currentSelectedObject === this) {
         currentSelectedObject.object.position.x = this.object.position.x;
         currentSelectedObject.object.position.y = this.object.position.y;
         currentSelectedObject.object.position.z = this.object.position.z;
         };
  }, slimeBehav: slimeBehav, setCount: 0, setter() {
    if(co === undefined) {
      this.collidesOthers = true
    } else {
      this.collidesOthers = co;
    };
    if(mass !== undefined) {
      this.mass = mass;
    } else {
      this.mass = 1;
    };
    if(stm !== undefined) {
      this.stm = true;
    };
    this.object.position.x = x;
    this.object.position.y = y;
    this.object.position.z = z;
    if(rotated === true) {
      this.object.rotation.x = rx;
      this.object.rotation.y = ry;
      this.object.rotation.z = rz;
    };
  
    if(push !== undefined && weight !== undefined) {
      this.push = true;
      this.weight = weight;
    };
    if(fragility === undefined) {
    this.object.userData.onClick = () => {
      onClick();
        if(this.dist && this.dist < 3 && addedCam.isMetalRodEq === true) {
      playSound("./pipe.mp3");
    };
    };
  } else {
    this.object.userData.onClick = () => {
    if(this.fragility > 0 && this.dist && this.dist < 3) { 
      this.fragility --;
      playSound("./pipe.mp3");
    } else {
      playSound("./woodCrack.wav");
      stuff_broken ++;
      onBreak();
      this.object.visible = false;
      this.object.collides = false;
      world.remove(this.object);
      this.object = null;
    };
  };
  };
    if(fragility !== undefined) {
      this.fragility = fragility;
    };
    if(onBreak !== undefined) {
      this.onBreak = () => {
        onBreak();
      };
    };
if(parent !== undefined && parent !== 0) {
  parent.add(this.object);
} else {
  world.add(this.object);
}
    setter();
  }, grav: grav, type: t
};
objects.push(o);
return o;
};

let addedCamBehav = function() {};
let addedCamspeed = 1;
let tdmode = false;
let isCerNewObj = false;
let playerGravity = 1;
let laserPistolRange =  84;
let req_destroy = 4;
let alienSpeaks = false;
let paused = false;
let tel = 0;
let savedPosx = JSON.parse(localStorage.getItem("x") )|| -129.699999999997; //<= ULTIMATE MEME NUMBER
let savedPosy =  JSON.parse(localStorage.getItem("y")) || 35;
let savedPosz = JSON.parse(localStorage.getItem("z")) ||3.9;
let electricity = JSON.parse(localStorage.getItem("electricity")) || false;
let playerLookx = JSON.parse(localStorage.getItem("prx")) ||-129.699999999997;
let playerLooky = JSON.parse(localStorage.getItem("pry")) || 36;
let playerLookz = JSON.parse(localStorage.getItem("prz")) || 40;
let codes_to_crack = 2;
let tramx;
let tramy;
let tramz;
let tram_active;
let isLarry = false;
let larry_sizex = 0;
let larry_sizey = 0;
let tram_playerOn;
let used = false;
let used1 = false;
let stuff_broken = JSON.parse(localStorage.getItem("stuffBroken")) || 0;
let medkits_picked_up = JSON.parse(localStorage.getItem("medUp")) || 0;
let soldiers_killed = JSON.parse(localStorage.getItem("skilled")) || 0;
let sidemouths_killed = JSON.parse(localStorage.getItem("smKilled")) || 0;
let timesDead = JSON.parse(localStorage.getItem("timesDied")) || 0;
//LSP = LARRY'S SPEECH COUNT! 
let lsp = 0;
let end_text = [
"Larry: . . . Why did I let you survive? . . .", // 0 
"Larry: I could've finished you the moment you killed that guard . . .", // 1
"Larry: ...Who now suffers until the end of space and time for . . .", // 2
"Larry: 'Unsatisfactory performance'.", // 3
"Larry: I will now end you . . .", // 4
"Larry: N-No, not yet...", // 5
"Larry: Instead, let's see if you are worth my energy, or . . .", // 6
"Larry: ... or if you are not worthy of witnessing the... giant's power and... you die.", // 7
"Larry: I will enjoy watching it either way . . .", // 8
"Larry: But for now... DIE!" // 9
];
//LAAS STANDS FOR: LARRY - ALIEN SPEECH
let lac = 0;

let laas = [
"Larry: You will never be able to kill the freak! Never! *The 'freak' cries*", //0 
"Larry: You cannot escape my minions - They're brainwashed only to kill you. *laugh* they don't even know!", // 1
"The 'freak': End me, human! Death is better than- *Larry interrupts* SHUT UP! YOU DESERVE IT ANYWAY!", // 2
"The 'freak': *alien-cry*", // 3
"Larry: You idiot! YOU gave him the launch codes of the turrets??? CREATURE!", // 4
"The 'freak': Human! The launch codes are up at the- *Larry* SHUT UP!", // 5
"Larry: How can you write with such pathetic and ugly numbers, freak??", // 6
"Larry: HE won't be able to read the numbers, you pathetic freak! How will I find a better plaything if he dies??", // 7
"The 'freak': H . . . G . . . C - *Larry* SHUT UP! *The alien 'monster' cries in pain*" // 8
];
let ecc = 0;
let canR = false;

let endCredits = [
" . . . That is it . . .",
"You, Steve Johnson, have successfully laid the foundation for humanity's survival.",
"You made the first step to end Larry's reign of terror,",
"And liberate any enslaved alien species, sentient or not.",
"He tried to hypnotize you, corrupt your mind",
"it did not work.",
"You resisted and kept on pushing.",
"For humanity.",
"But then the question might come to your mind:",
"Is Larry dead?",
"Nobody knows.",
"Not yet.",
"See that?",
"You see how desperate he was to stop you . . .",
"Going as far as...",
"brainwashing and hypnotizing his own men knowing he's sending them into doom.",
"You are great.",
"You did what you had to.",
"Yes, you had to kill a sentient, thinking, sensitive, abused and innocent giant . . .",
"To continue.",
"Yes, you did it.",
"Do you feel it?",
"Do you feel the regret?",
"Do you?",
"Think.",
"You most likely do, don't you?",
"Don't worry...",
"Everything is okay...",
"You put it out of its misery.",
"And while doing so, you:",
"Destroyed " + stuff_broken + " objects,",
"Used " + medkits_picked_up + " Alien first aid kits,",
"Killed " + sidemouths_killed + " Unidentified alien orange creatures,",
"Killed " + soldiers_killed  +  " of Larry's soldiers,",
"And 'died' " + timesDead + " times.",
"You did well.",
"But DO NOT think that this story is over.",
"Larry might still be alive...",
"Good luck.",
"To be continued . . ."
]; 
//NOT ACTUAL CREDITS, I CREATED THE GAME ALONE ON MY OWN...






const ODC = 7.4 //THE ODC CONSTANT.      IMPORTANT IF YOU NEED TO ALIGN A WALL AND A FLOOR PROPERLY, CONSIDERING
//THAT A FLOOR HAS THE X OR Z SIZE OF 6.5, IT'S THE SAME WITH WALLS. ALWAYS 6.5. SMALLER IS ONLY ALLOWED WITH
//HAVING TO FILL IN SPACES THAT ARE SMALLER THAN A WALL!
let keys = {};
let sector = localStorage.getItem("sector") || "PRISON";
const c = document.createElement("canvas");
document.body.appendChild(c);
Math.POO = 3.14
 //IF YOU NEED PI BUT LESS ACCURATE FOR SOME REASON, LEMME INTRODUCE MATH.POO()!

c.style.position = "absolute"
c.style.top = "95%"
c.style.left = '50%'
c.style.pointerEvents = "auto";
c.style.zIndex = "10"
c.style.transform = "translate(-50%, -95%)"
const ctx = c.getContext("2d");

//SET THIS VARIABLE TO TRUE IF YOU'RE DONE WITH DEVELOPING THE GAME (THIS TELLS THE ENGINE TO
//EXECUTE THE GAME INSTEAD OF THE ENGINE)



let published = true;

const renderer = new THREE.WebGLRenderer();
renderer.domElement.width = window.innerWidth;
renderer.domElement.height = window.innerHeight;
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "0%";
renderer.domElement.style.left = "0%";
renderer.domElement.style.transform = "translate(0%, 0%)";
c.width = renderer.domElement.width;
c.height = renderer.domElement.height
document.body.appendChild(renderer.domElement);
const world = new THREE.Scene();
let currentSelectedObject = "none";
let addedCam = null;
let isDark = false;
//2D OBJECTS
let objects2D = [

];

let text = [

];
//ALL NECESSARY FUNCTIONS
function setDark() {
  isDark = true;
};
function brighten() {
  isDark = false;
};
//IMAGE LOADER
function loadImg(src) {
  const img = new Image();
  img.src = src;
  return img;
};

//SOUND PLAYING FUNCTION
function playSound(path) {
let s = new Audio();
s.src= path;
s.play();
};
function playSLooped(path, stopStatement) {
  let s = new Audio();
  s.src = path;
  s.loop = true;
  s.play();
  if(stopStatement !== undefined && stopStatement === true) {
    s.loop = false;
  };
};
 let tll = new THREE.TextureLoader();

 //MATERIAL LOADING FUNCTION
 function newMaterial(type, path) {
  let x = tll.load(path);

 if(type === "bas") {
  return new THREE.MeshBasicMaterial({map: x});
 };
 if(type === "stat") {
  return new THREE.MeshStandardMaterial({map: x});
 };
 };
 //GRAVITY


function cGrav(o) {
  if(o.fs === undefined) o.fs = 0.1;
  collObj(o);
if(o.grav === true && o.object.position.y > 0.5) {
  o.object.position.y -=o.fs;
};
};

//IF YOU ARE DONE WITH COLLISION DETECTION, YOU ARE DONE WITH 0.75 OF THE GAME...
let ready = 10;
let x = 0;
let y = x+1;

function collObj(o) {

  let xv = new THREE.Vector3();
let yv = new THREE.Vector3();

  if(objects.length !== 0) {

    if(ready === true) {
if(o.collidesOthers === true) {
  if(x < objects.length) {
    x++;
    y = x+1;
  } else {
    x = 0;
    y = 1;
  }
let o1 = objects[x];
let o2 = objects[y];
     let box = new THREE.Box3().setFromObject(o1.object);
          let box1 = new THREE.Box3().setFromObject(o2.object);
          box.getSize(xv);
          box1.getSize(yv);
          box.setFromCenterAndSize(o1.object.position, xv);
          box1.setFromCenterAndSize(o2.object.position, yv);

          if(box.intersectsBox(box1)) {
            if(o1.stm === true) {
              if(o1.object.position.x < o2.object.position.x) o1.object.position.x -= addedCam.speed;
              if(o1.object.position.x > o2.object.position.x) o1.object.position.x += addedCam.speed;
              if(o1.object.position.z < o2.object.position.z) o1.object.position.z -= addedCam.speed;
              if(o1.object.position.z > o2.object.position.z) o1.object.position.z += addedCam.speed;
            };
            if(o2.stm === true) {
                if(o2.object.position.x < o1.object.position.x) o2.object.position.x -= addedCam.speed;
              if(o2.object.position.x > o1.object.position.x) o2.object.position.x += addedCam.speed;
              if(o2.object.position.z < o1.object.position.z) o2.object.position.z -= addedCam.speed;
              if(o2.object.position.z > o1.object.position.z) o2.object.position.z += addedCam.speed;
            };
          };
};
  };

       if (o.grav === true) {
      for (let target of objects) {
        if (target.type === "floor" && target !== o && o.collidesOthers === true) {
          let box = new THREE.Box3().setFromObject(o.object);
          let box1 = new THREE.Box3().setFromObject(target.object);
          box.getSize(xv);
          box1.getSize(yv);
          box.setFromCenterAndSize(o.object.position, xv);
          box1.setFromCenterAndSize(target.object.position, yv);
          if (box.intersectsBox(box1)) {
              o.fs = 0; 
              break;
          } else {
            o.fs = 0.1;
          };
        };
      };
    };
};
};


function die() {
  timesDead ++;
  localStorage.setItem("timesDied", JSON.stringify(timesDead));
  window.location.reload();
};

//DISTANCE CALCULATOR BETWEEN TWO OBJECTS, THE PARAMETERS MUST LOOK LIKE THIS: calcDist(object.obj, object1.obj)
//IF WE ARE TALKING ABOUT 3D OBJECTS OF COURSE
function calcDist(a,b) {
  let dx = a.position.x - b.position.x;
  let dy = a.position.y - b.position.y;
  let dz = a.position.z - b.position.z;

  return Math.sqrt(dx * dx + dy * dy + dz * dz)
};

function autoSave() {
  localStorage.setItem("x", JSON.stringify(addedCam.position.x));
  localStorage.setItem("y", JSON.stringify(addedCam.position.y + 1));
   localStorage.setItem("z", JSON.stringify(addedCam.position.z));
    localStorage.setItem("health", JSON.stringify(addedCam.health));
    localStorage.setItem("electricity", JSON.stringify(electricity));
    localStorage.setItem("sector", sector);
    localStorage.setItem("prx", JSON.stringify(playerLookx));
    localStorage.setItem("pry", JSON.stringify(playerLooky));
    localStorage.setItem("prz", JSON.stringify(playerLookz));
    localStorage.setItem("stuffBroken", JSON.stringify(stuff_broken));
    localStorage.setItem("sKilled", JSON.stringify(soldiers_killed));
    localStorage.setItem("smKilled", JSON.stringify(sidemouths_killed));
    localStorage.setItem("medUp", JSON.stringify(medkits_picked_up));
    if(addedCam.hasPist === true) {
      localStorage.setItem("pbul", JSON.stringify(addedCam.pBullets));
      localStorage.setItem("has", JSON.stringify(addedCam.hasPist));
    };
    if(addedCam.key === true) {
      localStorage.setItem("playerHasKey", JSON.stringify(addedCam.key));
      localStorage.setItem("tx", JSON.stringify(tramx));
      localStorage.setItem("ty", JSON.stringify(tramy));
      localStorage.setItem("tz", JSON.stringify(tramz));
      localStorage.setItem("on?", JSON.stringify(tram_playerOn));
      localStorage.setItem("active", JSON.stringify(tram_active));
    };
window.location.reload();
};


//ADD PLAYER
let sens = 0.4;

function ladder(x,y,z,sx,sy,sz,m, dir) {
objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(sx,sy,sz),
    m
  ),
  setCount: 0,
  collides: true,
  type: 0,
  h: sy,
  d: dir,
  setter() {
    this.object.position.set(x,y,z);
    world.add(this.object);
let a = this.object.position.x;
let b = this.object.position.y;
let c = this.object.position.z;

    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 3.5) {
        if(addedCam.isMetalRodEq === true) {
        playSound("./pipe.wav");
        };
         if(this.d === "x+") {
          addedCam.position.set(a + 1, b + (this.h /2) + 1.4, c);
         };
         if(this.d === "x-") {
          addedCam.position.set(a - 1, b + (this.h /2) + 1.4, c);
         };
         if(this.d === "z+") {
          addedCam.position.set(a, b + (this.h /2) + 1.4, c + 1);
         };
         if(this.d === "z-") {
            addedCam.position.set(a, b + (this.h /2) + 1.4, c - 1);
         };
      };
    };
    this.object.userData.onM = () => {
      console.log("NYA~❤️❤️❤️");
    };
  }
});
};

function addPlayer(fov, renderDistance, x, y, z, whereToLook, fpsc, mouseSensitivity, speed) {
  sens = mouseSensitivity;
  addedCamspeed = speed;
 let c = new THREE.PerspectiveCamera(fov, renderer.domElement.width / renderer.domElement.height, 0.5, renderDistance);
 c.position.x = x;
 c.position.y = y;
 c.position.z = z;
 c.lookAt(whereToLook.x, whereToLook.y, whereToLook.z);
 world.add(c);
 return c;
};
//SAVE VARIABLES
function saveVar(varName, id) {
  localStorage.setItem(id, JSON.stringify(varName));
};
//LOAD VARIABLES
function loadVar(id, vari) {
 vari= JSON.parse(localStorage.getItem(id));
};


const playerSize = new THREE.Vector3(1.5, 1.3, 0.6);
const playerBB = new THREE.Box3();

//COLLISION
 function collide(o, cam){
const objBB = new THREE.Box3().setFromObject(o.object);
 playerBB.setFromCenterAndSize( cam.position, playerSize );
   
  if(!playerBB.intersectsBox(objBB)) return;
if(o.type !== "floor") {
  if(cam.position.x <= o.object.position.x) cam.position.x -= addedCamspeed * 2;
  if(cam.position.x >= o.object.position.x) cam.position.x += addedCamspeed * 2;

  if(cam.position.z <= o.object.position.z) cam.position.z -= addedCamspeed * 2;
  if(cam.position.z >= o.object.position.z) cam.position.z += addedCamspeed * 2;
};
  if(o.type === "floor") {
  if(cam.position.y >= o.object.position.y) cam.position.y += playerGravity;
  if(cam.position.y <= o.object.position.y) cam.position.y -= playerGravity;
  };
};






//A PUSH FUNCTION

 function push(o, cam){
const objBB = new THREE.Box3().setFromObject(o.object);
 playerBB.setFromCenterAndSize( cam.position, playerSize );
   
  if(!playerBB.intersectsBox(objBB)) return;
  if(cam.position.x <= o.object.position.x) o.object.position.x += addedCamspeed * 2;
  if(cam.position.x >= o.object.position.x) o.object.position.x -= addedCamspeed * 2;

  if(cam.position.z <= o.object.position.z) o.object.position.z += addedCamspeed * 2;
  if(cam.position.z >= o.object.position.z) o.object.position.z -= addedCamspeed * 2;
};




const ads = addedCamspeed;
//DOOR -------------------------------------------------------------------------------------- 
function door(x,y,z,sx,sy,sz,texture, isNew, locked, unlockStatement, clickF) {
  objects.push({
    object: new THREE.Mesh(
      new THREE.BoxGeometry(sx,sy,sz),
      texture
    ),
    onM() {},
    inMD() {},
    onMR() {},
    collides: true,
    push: false,
    type: 0,
    stm: false,
isLast: isNew,
setCount: 0,

isUsed: false,
setter() {

  if(locked !== undefined) {
this.locked = true;
if(unlockStatement !== undefined) {
this.unlockStatement = () => {
  return unlockStatement
};
};
  };
  this.object.position.set(x,y,z);
 const yp = this.object.position.y;
  this.object.userData.onClick = () => {
  if(this.dist && this.dist < 3) {
           if(clickF !== undefined) {
      clickF();
      console.log("C L I C K E D !");
    };
  };
    if(locked === undefined && unlockStatement === undefined) {
    if(this.dist && this.dist < 3) {
 
      if(this.isUsed === false) {
if(Math.floor(Math.random() * 2) + 1 === 1) {
  playSound("./d.mp3");
} else {
playSound("./d1.mp3");
};
      };

    this.HCF_FUNC = () => {
if(this.object.position.y < yp + (this.object.scale.y * 2 - 0.050) && this.isUsed === false) {
  this.object.position.y += 0.4;
} else {
  this.isUsed = true;
  this.collides = false;
};  
    };
  };
    } else {
if(this.unlockStatement()) {
  if(this.dist && this.dist < 3) {
      if(this.isUsed === false) {
if(Math.floor(Math.random() * 2) + 1 === 1) {
  playSound("./d.mp3");
} else {
playSound("./d1.mp3");
};
      };

    this.HCF_FUNC = () => {
if(this.object.position.y < yp + (this.object.scale.y * 2 - 0.050) && this.isUsed === false) {
  this.object.position.y += 0.4;
} else {
  this.isUsed = true;
  this.collides = false;
};  
    };
  };
};
          };
  };
  world.add(this.object);
}
  });
};

//END DOOR ---------------------------------------------------------------------------------------------------------
//THIS FUNCTION IS BASICALLY USED FOR SLIMY / LIQUID OBJECTS

function slimeBehav(o, cam) {
  const objBB = new THREE.Box3().setFromObject(o.object);
 playerBB.setFromCenterAndSize( cam.position, playerSize );
   
  if(!playerBB.intersectsBox(objBB)) return;

  if(cam.position.x < o.object.position.x) cam.position.x -= cam.speed / 2;
  if(cam.position.x > o.object.position.x) cam.position.x += cam.speed / 2;

  if(cam.position.z < o.object.position.z) cam.position.z -= cam.speed / 2;
  if(cam.position.z > o.object.position.z) cam.position.z += cam.speed / 2;
};

//NEW DIRECTIONAL LIGHT

function newDirLight(col, intensity, x,y,z, dir) {
  let l = new THREE.DirectionalLight(col, intensity);
  l.position.set(x,y,z);
  l.lookAt(dir);
  world.add(l);
  objects.push({
    object: new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: "rgb(255,255,255)"})
    ), push: false, setCount: 0, coll: false, slimeBehav: false, setter() {
      this.object.position.set(l.position.x, l.position.y, l.position.z);
      world.add(this.object);
    },
    HCF_FUNC() {
      
        currentSelectedObject = this;
        l.position.set(this.object.position.x, this.object.position.y, this.object.position.z);
        if(published === true) {
          this.object.visible = false;
        } else {
          this.object.visible = true;
        };
    },
    type: "light",
  });
   objects.push({
    object: new THREE.Mesh(
      new THREE.BoxGeometry(0.5, 0.5, 0.5),
      new THREE.MeshBasicMaterial({color: "rgb(255,255,255)"})
    ), push: false, setCount: 0, coll: false, slimeBehav: false, setter() {
      this.object.position.set(dir.x, dir.y, dir.z);
      world.add(this.object);
    },
    HCF_FUNC() {
        currentSelectedObject = this;
        l.lookAt(this.object.position.x, this.object.position.y, this.object.position.z);
        if(published === true) {
          this.object.visible = false;
        } else {
          this.object.visible = true;
        };
    },
    type: "light",
  });
  return l;
};
world.background = new THREE.Color(0x87ceeb);
function collGLTF(o, cam) {
const objBB = new THREE.Box3().setFromObject(o.clickerGeometry);
 playerBB.setFromCenterAndSize( cam.position, playerSize );
   
  if(!playerBB.intersectsBox(objBB)) return;

  if(cam.position.x < o.object.position.x) cam.position.x -= cam.speed * 2;
  if(cam.position.x > o.object.position.x) cam.position.x += cam.speed * 2;

  if(cam.position.z < o.object.position.z) cam.position.z -= cam.speed * 2;
  if(cam.position.z > o.object.position.z) cam.position.z += cam.speed * 2;

};


function newLight(intensity, col, x,y,z, setting, isLast) {
  let l = new THREE.AmbientLight(col);
  l.position.set(x,y,z);
  world.add(l);
  objects.push({
    object: new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({color: "rgb(255,255,255)"})
    ), isLast: isLast, push: false, setCount: 0, coll: false, slimeBehav: false, setter() {
      this.object.position.set(l.position.x, l.position.y, l.position.z);
      world.add(this.object);
    },
    HCF_FUNC() {
      if(setting) {
        currentSelectedObject = this;
        l.position.set(this.object.position.x, this.object.position.y, this.object.position.z);
      };
        if(published === true) {
          this.object.visible = false;
        } else {
          this.object.visible = true;
        };
    },
    type: "light",
  });
}
//NEW 2D OBJECT FUNCTION
function new2dObj(x, y, sx, sy, img, onClick, HCF, aw, isCol, col) {
  if(isCol === false) {
  objects2D.push({
    x:x,
    y:y,
    sx:sx,
    sy:sy,
    img: img,
    onClick() {
      onClick();
    },
    HCF_FUNC() {
      HCF();
    },
    A_W: aw
  });
} else {
  objects2D.push({
    x:x,
    y:y,
    sx:sx,
    sy:sy,
    HCF_FUNC() {
      HCF();
    },
    onClick() {
      onClick();
    },
    col: col,
    A_W: aw
  });
};
};
//new text
function newTxt(x,y, font, col, aw, HCF_FUNC, txt) {
text.push({
  x:x,
  y:y,
  txt: txt,
  f: font,
  col: col,
  A_W: aw,
  HCF_FUNC() {
    HCF_FUNC();
    this.txt = this.txt;
  }
});
};

//ADDITIONAL GAME FUNCTIONS
function newCasualSoldier(x, y, z, attackRange, isLast) {
    let soldierMat = [
      newMaterial("bas", "./casualSoldierS.png"),
newMaterial("bas", "./casualSoldierS.png"),
newMaterial("bas", "./casualSoldierS.png"),
newMaterial("bas", "./casualSoldierS.png"),
newMaterial("bas", "./casualSoldierS.png"),
 newMaterial("bas", "./casualSoldier.png"),
    ];
      let texture = [
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./top.png"),
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./gun.png"),
     newMaterial("stat", "./barrel.png"),
  ];
    
  objects.push({
    object: new THREE.Mesh(
      new THREE.BoxGeometry(1,2, 1),
      soldierMat
    ),
    sight: new THREE.Mesh(
new THREE.BoxGeometry(0.06, 0.1, 0.06),
newMaterial("stat","./aim.png")
),
    weapon: null,
    collides: false, attackRange: attackRange, isLast: isLast, setCount: 0,
    type: Math.floor(Math.random() * 2) + 1, speed: 0.5, hp: 100,
    bullets: 10 + Math.floor(Math.random() * 10), countDown: 0,
    shootR: 0,
    collidesOthers: true,
    stm: true,
    grav: true,
    wCD: 0,
    setter() {
      this.object.position.set(x,y,z);
      if(this.type === 1) {
        this.type = "shortRange";
      } else {
        this.type = "longRange";
      };
      if(this.type === "shortRange") {
        this.weapon = new THREE.Mesh(
          new THREE.BoxGeometry(0.2, 1.2, 0.2),
         newMaterial("stat", "./metalRod.png")
        )
        this.weapon.position.set(0.7, 0, -0.9)
        this.object.add(this.weapon);
      } else {
this.weapon = new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 0.3, 1.3),
  texture
);
this.weapon.position.set(0.7, 0, -0.9)
        this.object.add(this.weapon);
        this.sight.position.set(0, 0.2, -0.60);
        this.weapon.add(this.sight);
      };
      this.object.userData.onClick = () => {
if(addedCam.isMetalRodEq === true && this.dist < 2) {
this.hp -= 20;

playSound("./pipe.mp3");
playSound("./hurt.wav")
if(this.hp <= 0) {
  playSound("./die.wav")
  this.object.visible = false;
this.object = undefined;
this.HCF_FUNC = () => {};
};
};

if(addedCam.pistEQ === true && this.dist && this.dist < laserPistolRange && addedCam.pBullets > 0) {
  this.hp -= 50;
  playSound("./hurt.wav")
  if(this.hp <= 0) {
    this.object.visible = false;
    soldiers_killed ++;
    playSound("./die.wav")
    this.object = undefined;
    this.HCF_FUNC = () => {};
  };
};
      };

      this.HCF_FUNC = () => {
        if(this.object !== undefined) {
this.object.rotation.y = Math.atan2(
  this.object.position.x - addedCam.position.x,
  this.object.position.z - addedCam.position.z
);
        };
if(this.type === "shortRange") {
if(this.object !== undefined) {
if(this.dist !== undefined && this.dist < this.attackRange) {
if(this.dist > 2.5) {
  if(this.object.position.x > addedCam.position.x) this.object.position.x -= this.speed;
  if(this.object.position.x < addedCam.position.x) this.object.position.x += this.speed;
  if(this.object.position.z > addedCam.position.z) this.object.position.z -= this.speed;
  if(this.object.position.z < addedCam.position.z) this.object.position.z += this.speed;
} else {
if(this.countDown < 40) {
this.countDown ++;
this.weapon.rotation.x = 0;
} else {
addedCam.health -= Math.floor(Math.random() * 30) + 10
this.weapon.rotation.x = 45;
playSound("./pipe.wav");

if(addedCam.health <= 0) {
 die();
};
this.countDown = 0;
};
};
};
};
} else {
if(this.object !== undefined) {
if(this.dist !== undefined && this.dist < this.attackRange) {
  if(this.dist < this.attackRange /2 /2) {
if(this.object.position.x < addedCam.position.x) this.object.position.x += this.speed /2/2;
if(this.object.position.x > addedCam.position.x) this.object.position.x -= this.speed /2/2;
if(this.object.position.z > addedCam.position.z) this.object.position.z += this.speed /2/2;
if(this.object.position.z < addedCam.position.z) this.object.position.z -= this.speed /2/2;
  };
  if(this.dist < this.attackRange && this.dist > this.attackRange /2) {
    this.shootR = 1 + Math.floor(Math.random() * 40);
  };
  if(this.dist < this.attackRange /2 && this.dist > this.attackRange /2/2) {
this.shootR = 1 + Math.floor(Math.random() * 20);
  };
    if(this.dist < this.attackRange /2/2) {
this.shootR = 1 + Math.floor(Math.random() * 15);
  };

  if(this.shootR === 1) {
playSound("./laserGun.wav");
addedCam.health -= 20;
this.weapon.position.z = 0.7;
if(addedCam.health <= 0) {
die();
};

  } else {
    this.weapon.position.z = -0.9;
  };

  
};
};
};
      };
      world.add(this.object);
    }
  
  });
};

function THISONLYEXISTSCUZIMSCAREDTHATTHEUSERWONTNOTICETHATTHEIRHEALTHISDECLININGYOUGUYSMUSTNEEDSOMETHINGMOREVISUALILOVEUGUYS(t) {
tel = t;
};

function medKit(x,y,z) {
  let medMat = [
    newMaterial("stat", "./medkit_else.png"),
    newMaterial("stat", "./medkit_else.png"),
    newMaterial("stat", "./medkit_top.png"),
    newMaterial("stat", "./medkit_else.png"),
     newMaterial("stat", "./medkit_else.png"),
    newMaterial("stat", "./medkit_else.png"),
  ];
  objects.push({
    object: new THREE.Mesh(
      new THREE.BoxGeometry(0.4, 0.2, 0.4),
      medMat
    ),
    grav: true,
    collides: false,
    setCount: 0,
    stm: false,
    countDown: 0,
    collidesOthers: true,
    used: false,
    setter() {
this.object.position.set(x,y,z);
world.add(this.object);
this.HCF_FUNC = () => {
  if(this.used === false) {
if(this.dist !== undefined) {
  if(this.dist < 1.5 && addedCam.health < 100) {
    addedCam.health += 25;
    medkits_picked_up ++;
    this.object.visible = false;
    world.remove(this.object);
this.used = true;
    this.countDown ++;
    if(this.countDown < 2) {
      if(Math.floor(Math.random() * 2) + 1 === 1) {
        playSound("./medkti.wav");
      } else {
        playSound("./medkti.wav");
      };
    };
    };
  };
};
};
    }
  });
}; 
function sideMouth(x,y,z, isLast, attackRange) {
  let smGM = [
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    newMaterial("stat", "./smgum.png")
  ];
  let smGM1 = [
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    newMaterial("stat", "./smgum.png"),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"})
  ];
  let smMater = [
    newMaterial("stat", "./smtr.png"),
     new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
    new THREE.MeshStandardMaterial({color: "rgb(255, 123, 0)"}),
  ];
  objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(0.5,0.5,0.5),
 smMater
),
lip: new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.1),
  smGM
),
lip1: new THREE.Mesh(
  new THREE.BoxGeometry(0.5,0.5,0.1),
    smGM1
),
teeth: new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 0.05, 0.1), // Line 1048. The line that does something about 3D and edited last in the game. truly memorable...
  newMaterial("stat", "./bloody_bone.png")
),
teeth1: new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 0.05, 0.1),
  newMaterial("stat", "./bloody_bone.png")
),
teeth2: new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 0.05, 0.1),
  newMaterial("stat", "./bloody_bone.png")
),
teeth3: new THREE.Mesh(
  new THREE.BoxGeometry(0.05, 0.05, 0.1),
  newMaterial("stat", "./bloody_bone.png")
),
collidesOthers: true,
collides: true,
isLast: isLast,
health: 100,
stm: false,
attackRange: attackRange,
atm: 0,
grav: true,
setCount: 0,
setter() {
  this.object.position.set(x,y,z);
  this.lip.position.set(0.4,0,0.2);
  this.lip1.position.set(0.4, 0, -0.2);
  world.add(this.object);
  this.object.add(this.lip);
  this.teeth.position.set(0.13, 0.15, -0.1);
  this.lip.add(this.teeth);
  this.teeth1.position.set(0.13, -0.15, -0.1)
  this.lip.add(this.teeth1);
this.object.add(this.lip1);
this.teeth2.position.set(0.13, 0.15, 0.1);
this.lip1.add(this.teeth2);
this.teeth3.position.set(0.13, -0.15, 0.1);
this.lip1.add(this.teeth3);
this.object.userData.onClick = () => {
  if(addedCam.isMetalRodEq == true &&this.dist && this.dist < 3) {
    playSound("./pipe.mp3");
    if(Math.floor(Math.random() * 2) +1 === 1) {
        playSound("./sm_hurt.wav");
      } else {
        playSound("./sm_hurt_1.wav");
      };
    this.health -= 40;
    if(this.health <= 0) {
      playSound("./sm_die.wav");
      sidemouths_killed ++;
      this.object.visible = false;
      this.object = undefined;
    };
  };
  if(addedCam.pistEQ === true && this.dist && this.dist < laserPistolRange && addedCam.pBullets > 0) {
 if(Math.floor(Math.random() * 2) +1 === 1) {
        playSound("./sm_hurt.wav");
      } else {
        playSound("./sm_hurt_1.wav");
      };
      this.health -= 55;
        if(this.health <= 0) {
      playSound("./sm_die.wav");
      this.object.visible = false;
      this.object = undefined;
    };
  };
};

  this.HCF_FUNC = () => {
    if(this.object !== undefined) {
      if(this.dist) {
        if(this.dist < this.attackRange) {
          if(this.object.position.x > addedCam.position.x) this.object.position.x -= 0.4;
          if(this.object.position.x < addedCam.position.x) this.object.position.x += 0.4;
          if(this.object.position.z > addedCam.position.z) this.object.position.z -= 0.4;
          if(this.object.position.z < addedCam.position.z) this.object.position.z += 0.4;

          this.object.rotation.y = Math.atan2(
            this.object.position.x - addedCam.position.x,
            this.object.position.z - addedCam.position.z
          );
          if(this.dist < 2) {
          if(this.atm < 30) {
            this.atm ++;
          } else {
            this.atm = 0;
            addedCam.health -= 15;
if(addedCam.health  <= 0) {
  die();
};
};
          };
        };
      };
    };
  };
}
  });
};


function givePlayerPistol() {
  let texture = [
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./top.png"),
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./gun.png"),
    newMaterial("stat", "./gun.png"),
  ];
  addedCam.hasPist = true;
  if(sector === "PRISON") {
  addedCam.pBullets = 15;
  };
  addedCam.pistEQ = true;
  addedCam.isMetalRodEq = false;
  objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(0.3, 0.3, 0.9),
texture
),
sight: new THREE.Mesh(
new THREE.BoxGeometry(0.06, 0.1, 0.06),
newMaterial("stat","./aim.png")
),
setCount: 0,
keyCD: 0,
setter() {
  this.object.position.set(1, -0.4, -0.8);
  this.sight.position.set(0, 0.2, -0.4);
  addedCam.add(this.object);
  this.object.add(this.sight);
  
  this.HCF_FUNC = () => {
    if(keys["e"] || keys["E"]) {
      this.object.position.x = 0;
      this.object.position.y = -0.4;
      laserPistolRange = 100;
    } else {
this.object.position.set(1, -0.4, -0.8);
laserPistolRange = 35;
    };
if(keys["2"]) {
  this.keyCD ++;
  if(this.keyCD < 2) {
    addedCam.isMetalRodEq = false;
  if(addedCam.pistEQ === false) {
    addedCam.pistEQ = true;
  } else {
    addedCam.pistEQ = false;
  };
};

} else {
  this.keyCD = 0;
};
if(addedCam.pistEQ === true) {
  this.object.visible = true;
} else {
  this.object.visible = false;
};
  };

  this.onMD = () => {
  if(addedCam.pBullets > 0 && addedCam.pistEQ === true) {
  this.object.position.z = -0.5;
  playSound("./laserGun.wav");
  addedCam.pBullets --;
  };
};
this.onMR = () => {
  this.object.position.z  = -0.8;
};
}
  });
};


function ammoBox(x,y,z,islast,type, howManyBullets) {
  let material = [
newMaterial("stat", "./ammoBox_else.png"),
newMaterial("stat", "./ammoBox_else.png"),
newMaterial("stat", "./ammoBox_top.png"),
newMaterial("stat", "./ammoBox_bottom.png"),
newMaterial("stat", "./ammoBox_else.png"),
newMaterial("stat", "./ammoBox_else.png")
  ];

  objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(0.4, 0.4, 0.6),
  material
),
isLast: islast,
tp: type,
give: howManyBullets,
setCount: 0,
collidesOthers: true,
grav: true,
setter() {
this.object.position.set(x,y,z);

world.add(this.object);

this.HCF_FUNC = () => {
if(this.dist && this.dist < 2) {
  if(this.tp === "pistol") {
    addedCam.pBullets += this.give;
  };



this.object.visible = false;
  this.object = undefined;
};
};
}
  });
};

function shoot_some_slow_boring_laser_thingy(x,y,z,dir) {
  playSound("./shoot.flac");

  let laserTexture = newMaterial("stat", "./energyBall.png");
objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    laserTexture
  ),
  setCount: 0,
  speed: 0.3 + Math.random(), 
  dr: dir,
  setter() {
    this.object.position.set(x,y,z);
    world.add(this.object);
    this.HCF_FUNC = () => {
      if(this.object !== undefined) {
      this.speed =  0.3 + Math.random();
      if(this.dir !== "0 dismension") {
      if(this.dr === "x+") {
        this.object.position.x += this.speed;
      };
      if(this.dr === "x-") {
        this.object.position.x -= this.speed;
      };
      if(this.dr === "y+") {
        this.object.position.y += this.speed;
      };
      if(this.dr === "y-") {
        this.object.position.y -= this.speed;
      };
      if(this.dr === "z+") {
        this.object.position.z +=  this.speed;
      };
      if(this.dr === "z-") {
        this.object.position.z -= this.speed;
      };
    };
      this.object.rotation.y += 0.5;
      this.object.rotation.z -= 0.5;
      this.object.rotation.x += this.speed;

      if(this.dist && this.dist < 1.5) {
        die();
      };
      if(this.dist && this.dist > 170) {
        this.object.visible = false;
        this.object = undefined;
      };
    };
  };
  }
});
};


function ZOLINAK_SPEECIAL(x,y,z, dir) {
    let laserTexture = newMaterial("stat", "./energyBall.png");
objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(2,2,2),
    laserTexture
  ),
  setCount: 0,
  speed: 0.3 + Math.random(), 
  dr: dir,
  canKill: true,
  setter() {
    this.object.userData.onClick = () => {
      if(this.dist < 3.5 && this.canKill === true) {
      playSound("./crystal.flac");
      this.object.visible = false;
      this.object = undefined;
      req_destroy = req_destroy - 1;
      this.canKill = false;
      };
    };
    this.object.position.set(x,y,z);
    world.add(this.object);
    this.HCF_FUNC = () => {
      if(this.object !== undefined) {
      this.speed =  0.3 + Math.random();
      if(this.dir !== "0 dismension") {
      if(this.dr === "x+") {
        this.object.position.x += this.speed;
      };
      if(this.dr === "x-") {
        this.object.position.x -= this.speed;
      };
      if(this.dr === "y+") {
        this.object.position.y += this.speed;
      };
      if(this.dr === "y-") {
        this.object.position.y -= this.speed;
      };
      if(this.dr === "z+") {
        this.object.position.z +=  this.speed;
      };
      if(this.dr === "z-") {
        this.object.position.z -= this.speed;
      };
    };
      this.object.rotation.y += 0.5;
      this.object.rotation.z -= 0.5;
      this.object.rotation.x += this.speed;

      if(this.dist && this.dist < 1.5 && this.canKill === true) {
        die();
      };
      if(this.dist && this.dist > 170) {
        this.object.visible = false;
        this.object = undefined;
      };
    };
  };
  }
});
};

function release() {
  paused = true;
  setDark();
  
  playSound("./end_exp.wav");
  playSound("./death.wav");

setTimeout(function() {
  playSound("./lastLine.wav");
  laas.push("Larry: ... We'll see about that! . . .");
  canR = true;
}, 4000);

};


//ALL MATERIALS;
let saverMaterial = [
  newMaterial("bas", "./vitya_else.png"),
  newMaterial("bas", "./vitya_else.png"),
  newMaterial("bas", "./vitya_else.png"),
  newMaterial("bas", "./vitya_else.png"),
  newMaterial("bas", "./vitya_face.png"),
  newMaterial("bas", "./vitya_else.png")
];






































if(published === true) {
objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(0.08, 0.8, 0.08),
    newMaterial("stat", "./metalRod.png")
  ),
  coll: false,
  setCount: 0,
  slimeBehav: false,
  type: 0,
  rotated: true,
  rx: 0,
  ry: 0,
  rz: 0,
  animationRoot: null,
  pressed: false,
  onMR() {
    this.rx = 0;
    this.ry = 0;
    this.rz = 0;
    this.pressed = false;
  },
  onMD() {
    this.pressed = true;
    this.animationRoot = Math.floor(Math.random() * 2) + 1;
    this.rx = Math.PI /2/2;
  },
  grav: false,
  count: 0,
  setter() {
    this.size = this.object.scale;
    this.object.position.set(0.7, -0.2, -0.6);
    addedCam.add(this.object);
    this.HCF_FUNC = () => {
      this.object.rotation.set(this.rx, this.ry, this.rz);
      if(keys["1"]) {
        this.count ++;
        if(this.count < 1) {
          addedCam.isMetalRodEq = !addedCam.isMetalRodEq;
        };
      } else {
        this.count = 0;
      };
      if(addedCam.isMetalRodEq === true) {
        this.object.visible = true;
      } else {
        this.object.visible = false;
      };
      if(this.pressed === true) {
        this.object.position.rz += 0.01
        this.rx -= 0.0001;
      };
    };
  }
});
};





















function ifPublished() {
  if(published === true) {
addedCam = addPlayer(75, 300, -129.699999999997,  35, 3.9, {x:0,y:0,z:0}, 0.002, 0.01, 0.1);
addedCam.hasDinamyte = false;
addedCamBehav = function() { 
  if(isLarry === false) {
  const dir = new THREE.Vector3();
        const forward = new THREE.Vector3();
      addedCam.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();
      const right1 = new THREE.Vector3();
      right1.crossVectors(forward, addedCam.up).normalize();
      if (keys['w'] || keys["W"]) {
        if(keys["q"] || keys["Q"]) {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, addedCamspeed * 2)
        } else {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, addedCamspeed);
        }
      } else {
      
      };
      if (keys['s'] || keys["S"]) {
        if(keys["q"] || keys["Q"]) {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, -addedCamspeed * 2)
        } else {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, -addedCamspeed);
        }
      } else {
      }
      const right = new THREE.Vector3();
      
      if (keys['a'] || keys["A"]) {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        right.crossVectors(addedCam.up, dir).normalize();
        addedCam.position.addScaledVector(right, addedCamspeed);
      } else {
      
      }
      
      if (keys['d'] || keys["D"]) {
          addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        right.crossVectors(dir, addedCam.up).normalize();
        addedCam.position.addScaledVector(right, addedCamspeed);
      } else {
      };
     
      if(addedCam.position.y !== 2) {
      addedCam.position.y -= playerGravity;
      };
    };
};

addedCam.rotation.order = "YXZ";
let yaw = 0;
let pitch = 0;

window.addEventListener("click", () => {
  if(published === true) {
    renderer.domElement.requestPointerLock();
  }});

window.addEventListener("mousemove", e => {
   if (document.pointerLockElement) {
  yaw -= e.movementX * sens;
  pitch -= e.movementY * sens;
  pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));
  addedCam.rotation.set(pitch, yaw, 0);
  playerLookx = addedCam.rotation.x;
  playerLooky = addedCam.rotation.y;
  playerLookz = addedCam.rotation.z;
   };
});




addedCam.position.x = savedPosx;
addedCam.position.y = savedPosy;
addedCam.position.z = savedPosz;
addedCam.health = localStorage.getItem("health") || 100;
sector = localStorage.getItem("sector") || "PRISON";








const raycaster = new THREE.Raycaster();
window.addEventListener("mousemove", e => {
  if(addedCam !== null) {
 raycaster.setFromCamera(new THREE.Vector2(0,0), addedCam);
  };

  const meshes = [];
  objects.forEach(o=>{
    if(o.object && o.object.parent){
      meshes.push(o.object);
    }
  });


  const hits = raycaster.intersectObjects(meshes,false);


  if(hits.length){
    hits[0].object.userData.onM?.();
  }; 

}),
window.addEventListener("keydown", e => keys[e.key] = true)
window.addEventListener("keyup", e => keys[e.key] = false)
window.addEventListener("mousedown", e => {
if(isLarry === false) {
  objects2D.forEach((o) => {
    const rect = c.getBoundingClientRect();
const mx = (e.clientX - rect.left)
const my = (e.clientY - rect.top)
 let is = mx >= o.x &&
            mx <= o.x + o.sizex &&
            my >= o.y &&
            my <= o.y + o.sizey;

if(e.button === 0 && is) {
  o.onClick();
};
  });
  if(e.button !== 0) return;
if(addedCam !== null && published === true) {
  raycaster.setFromCamera(new THREE.Vector2(0,0), addedCam);
};

  const meshes = [];
  objects.forEach(o=>{
    if(o.object && o.object.parent){
      meshes.push(o.object);
    };
    if(o.onMD) {
    o.onMD();
    };
  });


  const hits = raycaster.intersectObjects(meshes,false);

  if(hits.length){
    hits[0].object.userData.onClick?.();
  };
};
  });
window.addEventListener("mouseup", e => {
  if(isLarry === false) {
        if(e.button === 0) {
          objects.forEach((o) => {
            if(o.onMR && typeof o.onMR === "function") {
            o.onMR();
            };
          });
        };
      };
});

let keyLock = {};

window.addEventListener("keydown", e=>{
  if(isLarry === false) {
  if(keyLock[e.key]) return;
  keyLock[e.key] = true;
  };
});

window.addEventListener("keyup", e=>{
  keyLock[e.key] = false;
  if(e.key === "1") {
    addedCam.isMetalRodEq = !addedCam.isMetalRodEq;
    addedCam.pistEQ = false;
  };
});

let i = 0;
let j = 0;
//RENDER FUNCTION
function render() {
ctx.clearRect(0, 0, c.width, c.height)
if(addedCam !== null) {
  addedCamBehav();
};
if(keys["t"] && keys["z"] && keys["u"] || keys["T"] && keys["Z"] && keys["U"]) {
  localStorage.clear();
};


if(keys["ArrowUp"]) {
  sens += 0.001;
};
if(sens > 0) {
if(keys["ArrowDown"]) {
  sens -= 0.001;
};
};

let floors = objects.filter(o => o.type === "floor");
objects.forEach((o) => {
  if(paused === false) {
  if(o.object !== null && o.object !== undefined && o !== undefined  && o !== null) {

   if(i < objects.length) {
    i ++;
    j = i+1;
    let a = objects[i];
    let b = objects[j];

  
   } else {
    i = 0;
    j = 1;
   };
     collObj(o);
  cGrav(o);

  o.dist = calcDist(o.object, addedCam);
  if(o.slimeBehav) {
    if(addedCam !== null) {
slimeBehav(o, addedCam);
    };
  };
if(o.collides === true && addedCam !== null) {
  collide(o, addedCam)
}
if(o.push !== undefined && o.push === true) {
push(o, addedCam);
};

if(o.HCF_FUNC) {
  o.HCF_FUNC();
};

if(o.setCount < 1) {
  o.setCount ++;
o.setter();
};
  };
};
});

renderer.setSize(window.innerWidth, window.innerHeight);
if(addedCam !== null) {
renderer.render(world, addedCam);
};
       objects2D.forEach((o) => {
      if(o.A_W() && o.img) {
        ctx.drawImage(o.img, o.x, o.y, o.sx, o.sy);
        if(typeof o.HCF_FUNC === "function") {
        o.HCF_FUNC();
        };
      };
      if(o.A_W() && o.col) {
        ctx.fillStyle = o.col;
        ctx.fillRect(o.x, o.y, o.sx, o.sy);
         if(typeof o.HCF_FUNC === "function") {
        o.HCF_FUNC();
        };
      };
    });
text.forEach((t) => {
  if(t.A_W() && t.txt !== undefined) {
    ctx.fillStyle = t.col;
    ctx.font = t.f;
    ctx.fillText(t.txt, t.x, t.y);
if(t.HCF_FUNC !== undefined) {
    t.HCF_FUNC();
};
  };
});


    requestAnimationFrame(render);
};
render();
  };

  //EVERYTHING ELSE SET & UI
addedCam.health = JSON.parse(localStorage.getItem("health")) || 100;
addedCam.hasMetalRod = true;
addedCam.isMetalRodEq = true;
addedCam.hasPist = JSON.parse(localStorage.getItem("has")) || false;
addedCam.pBullets = JSON.parse(localStorage.getItem("pbul")) || 0;
addedCam.key = JSON.parse(localStorage.getItem("playerHasKey")) || false;
if(sector !== "PRISON") {
  givePlayerPistol();
};

let color = "rgba(138, 0, 0," + tel + ")";


objects2D.push({
  col: "rgba(138, 0, 0," + tel + ")",
  isCol: true,
  x: 0,
  y: 0,
  sx: window.innerWidth,
  sy: window.innerHeight,
  HCF_FUNC() {
  if(addedCam.health > 90) {
    tel = 0;
  };
if(addedCam.health < 90   && addedCam.health  > 75) {
  tel = 0.4;
};
if(addedCam.health < 75  && addedCam.health > 50) {
  tel = 0.6;
};

if(addedCam.health < 50 && addedCam.health > 35) {
  tel = 0.8
};
if(addedCam.health < 35 && addedCam.health > 5) {
  tel = 0.9;
};
if(addedCam.health <= 1) {
  tel = 1;
};
this.col = "rgba(138, 0, 0," + tel + ")";
  },
  A_W() {return 5 === 5}
});
objects2D.push({
A_W() {return paused === false && isLarry === false},
x:0,
y:window.innerHeight - 115,
col: "rgba(0,0,0,0.4)",
sx: 180,
sy: 128,
isCol: true,
HCF_FUNC() {
  this.x = (window.innerWidth - this.sx) /2;
}
});
text.push({
  col: "rgba(255,0,0,1)",
  f: "50px Comic Sans MS",
  txt: addedCam.health,
  x: 10,
  y: window.innerHeight - 35,
  A_W() {return 1 === 1 &&paused === false && isLarry === false},
  HCF_FUNC() {
    let l = ctx.measureText(this.txt).width;
    let xp = (window.innerWidth - l) / 2;
    this.x = xp;
    this.txt = addedCam.health;
  }
});

text.push({
  col: "rgba(0,255,0,1)",
  f: "25px Comic Sans MS",
  txt: null,
  x: 0,
  y: window.innerHeight - 75,
  A_W() {return addedCam.isMetalRodEq === false &&paused === false && isLarry === false},
HCF_FUNC() {
  let l = ctx.measureText(this.txt).width;
  this.x = (window.innerWidth - (l + 95)) /2;
  if(!this.A_W()) 
    {
      this.x = window.innerWidth *2;
    } else {
        this.x = (window.innerWidth - (l - 95)) /2;
    };
  if(addedCam.pistEQ === true) {
    this.txt = addedCam.pBullets;
  };
}
});



text.push({
  x: window.innerWidth /2/2,
  y: window.innerHeight - window.innerHeight /2/2 /2,
  txt: end_text[lsp],
  f: "25px Comic Sans MS",
  col: "white",
  A_W() { return isLarry === true },
  cd: 0,
  HCF_FUNC() {
 if(keys[" "]) {
  this.cd ++;
  if(this.cd < 2) {
lsp ++;
switch(Math.floor(Math.random() * 4) + 1) {
  case 1:
    playSound("./larry_talk.wav");
    break;
    case 2:
      playSound("./larry_talk1.wav");
      break;
      case 3:
playSound("./larry_talk2.wav");
      break;
      case 4:
        playSound("./larry_talk3.ogg");
        break;
};
this.txt = end_text[lsp];
if(lsp === 10) {
  sector = "END";
  autoSave();
};
  };
 } else {
  this.cd = 0;
 };
  }
});
objects2D.push({
  x: window.innerWidth /2 - 7,
  y: window.innerHeight /2 - 7,
  sx: 7,
  sy: 7,
  A_W() {return Math.PI === Math.PI},
  isCol: true,
  col: "rgb(0,0,0)"
});


 
objects2D.push(
  {
    x: 0,
    y: 0,
    sx: window.innerWidth,
    sy: window.innerHeight,
    img: loadImg("./wtf.png"),
    A_W() {
      return isLarry === true;
    },
    isCol: false,
    HCF_FUNC() {
      return 0;
    }
  }
);

objects2D.push({
  x: 0,
  y:window.innerHeight - (window.innerHeight /2/2 /2) - 35,
  sx: window.innerWidth,
  sy: window.innerHeight,
  A_W() {return isLarry === true && paused === false},
  isCol: true,
  col: "rgba(0,0,0,0.6)",
  HCF_FUNC() {
    
  }
});

objects2D.push({
  x: (window.innerWidth - 150) / 2,
  y: (window.innerHeight - 225) /2,
  sx: 1,
  sy: 1,
  A_W() { return isLarry === true},
  img: loadImg("./larry_quiet.png"),
  HCF_FUNC() {
    if(this.sx < 300 && this.sy < 450) {
      this.sx += 5;
      this.sy += 5;
    };
  }
});


if(sector === "END") {
  addedCam.position.set(0, 5, 5);

text.push({
  x: window.innerWidth /2/2/2/2,
  y: window.innerHeight - window.innerHeight /2/2 /2,
  txt: " ",
  f: "20px Comic Sans MS",
  col: "black",
  random: 0,
  A_W() { return true === true },
  cd: 0,
  HCF_FUNC() {
     if(lac === 0 ||lac === 2 ||lac === 3 ||lac ===5 || lac === 8) {
    alienSpeaks = true;
  } else {
    alienSpeaks = false;
  };
if(this.txt !== " ") {
  this.txt = laas[lac];
};
if(isDark == false) {
if(this.cd < 512) {
this.cd ++;
} else {
  this.cd = 0;
  this.random = Math.floor(Math.random() * 16);
  lac = this.random;
  this.txt = laas[lac];
 
};
} else {
  if(typeof laas[9] === "string") {
    this.col = "white";
    this.txt = laas[9];
    this.cd ++;
    if(this.cd > 248) {
this.txt = " ";
//END FUNCTION CALL HERE!
    };
  };
};
  }
});

};


};

text.push({
  txt: endCredits[ecc],
  x: window.innerWidth /2 /2,
  y: window.innerHeight /2,
  f: "25px Comic sans MS",
  cd:0,
  col: "white",
  A_W() {
    return canR === true;
  },
  HCF_FUNC() {
this.txt = endCredits[ecc];
let w = ctx.measureText(this.txt).width;
this.x = (window.innerWidth - w) / 2;

if(keys[" "]) {
this.cd ++;
if(this.cd < 2) {
  ecc ++;
};
} else {
  this.cd = 0;
};
  }
});



if(sector === "PRISON") {
newObj(true, function() {
  console.log("works");
}, function() {
}, function() {
  console.log("CLICK!");
}, false, 0, 100, 0, 3, 5, 3, newMaterial("bas","./dev.insertTexture.png"), false, true, 0, 6, 0, null,0,0,0,0,false);

newObj(false, function() {
  console.log("works");
}, function() {
}, function() {
  console.log("CLICK!");
}, false, 0, -1, 0, 1000,0.01, 1000, newMaterial("bas","./dev.insertTexture.png"), false, false, 0, 6, 0, "floor",0,0,0,0,false);

newObj(true, function() {}, function() {}, function() {}, false, -129.6999999999969, 34.800000000000225, 1, 7.5,5, 1, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -132.3999999999968, 34.800000000000225, 6.8999999999999915, 2,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -126.99999999999687, 34.800000000000225, 6.8999999999999915, 2.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null,null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704, 34.800000000000225, 3.80, 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -126.09999999999721, 34.800000000000225, 3.9, 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  31.970000000000784, 3.9, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  35.970000000000784, 3.9, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0,0,0,0,false);
newLight(100, "rgb(255,255,255)", -129.80000000000018, 35.50000000000013, 3.9, false, false);
newCasualSoldier(-129.66666667779,  31.970000000000784 + 1.5, 3.9 + (6.5 * 3), 15, false);
newObj(false, function() {}, function() {}, function() {}, false, 0, 5, 5, 1,1.5,1,saverMaterial, true, true, 0,0,0,null,0);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779, 31.970000000000784, 3.9 + 6.5, 6.5, 1, 6.5, newMaterial("stat", "./floor.png"), false, false, 0,0,0,"floor", 0,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704, 34.800000000000225, 3.80 + 6, 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  35.970000000000784, 3.9 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -126.09999999999721, 34.800000000000225, 3.9 + 6, 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779, 31.970000000000784, 3.9 + (6.5 * 2), 6.5, 1, 6.5, newMaterial("stat", "./floor.png"), false, false, 0,0,0,"floor", 0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779, 31.970000000000784, 3.9 + (6.5 * 3), 6.5, 1, 6.5, newMaterial("stat", "./floor.png"), false, false, 0,0,0,"floor", 0,0,0,0,false,);
newObj(true, function() {}, function() {}, function() {}, false, -126.09999999999721, 34.800000000000225, 3.9 + (6 * 2), 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704, 34.800000000000225, 3.80 + (6 * 2), 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704, 34.800000000000225, 3.80 + (6 * 3), 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  35.970000000000784, 3.9 + (6.5 * 2), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  35.970000000000784, 3.9 + (6.5 * 3), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -126.09999999999721, 34.800000000000225, 3.9 + (6 * 4), 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  35.970000000000784, 3.9 + (6.5 * 4), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779, 31.970000000000784, 3.9 + (6.5 * 4), 6.5, 1, 6.5, newMaterial("stat", "./floor.png"), false, false, 0,0,0,"floor", 0,0,0,0,false,);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704, 34.800000000000225, 3.80 + (6 * 4), 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704, 34.800000000000225, 3.80 + (6 * 5) + 0.5, 1,5,3, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -126.09999999999721, 34.800000000000225, 3.9 + (6 * 5), 1,5,6, newMaterial("stat", "./wall.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779, 31.970000000000784, 3.9 + (6.5 * 5), 6.5, 1, 6.5, newMaterial("stat", "./floor.png"), false, false, 0,0,0,"floor", 0,0,0,0,false,);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,  35.970000000000784, 3.9 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -129.66666667779,34.800000000000225, 36.099999999999994, 6.5,5,1, newMaterial("stat", "./wallMath.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -136.16666667778964,  31.960000000001564, 32.09999999999994, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -133.09999999999704,35.1600000000003, 31.299999999999926, 1,1, 3, newMaterial("stat", "./wallEmpty.png"), false, false, null,null,null, 0,0, 0,0,0,false);
door(-133.09999999999704, 33.57000000000044, 31.799999999999933, 0.8, 2.2, 2, newMaterial("stat", "./doorDANGER.png"),  false);

let bombMater = [
  newMaterial("stat", "./bomb_else.png"),
  newMaterial("stat", "./bomb_else.png"),
  newMaterial("stat", "./bomb_top.png"),
  newMaterial("stat", "./bomb_else.png"),
  newMaterial("stat", "./bomb_else.png"),
  newMaterial("stat", "./bomb_else.png"),
];
objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1, 1),
 bombMater
), collides: true, setCount: 0, isLast: false, onM() {}, onMD() {}, onMR() {}, setter() {
this.object.position.set(-137.59999999999678, 32.95000000000097, 31.799999999999933);
this.object.rotation.set(0,-Math.PI /2,0);
world.add(this.object);
this.size = this.object.scale;
this.object.userData.onClick = () => {
this.object.visible = false;
addedCam.hasDinamyte = true;
this.collides = false;
};
}
});



newObj(true, function() {}, function() {}, function() {}, false, -136.36666667778962, 34.800000000000225,  35.79999999999999, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -136.36666667778962, 34.800000000000225,  35.79999999999999 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -139.86666667778942,  34.800000000000225, 32.80000000000004, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -136.36666667778962, 35.97000000000078, 32.39999999999994, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042, 34.800000000000225, 25.399999999999935, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042, 34.800000000000225, 25.399999999999935 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -123.16666667779037,  35.97000000000078,  22.299999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + 6.5, 34.800000000000225, 25.399999999999935, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + 6.5, 34.800000000000225, 25.399999999999935 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,-113.06666667779058, 34.800000000000225, 21.99999999999998, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -123.16666667779037 + 6.5,  31.960000000001564,  22.299999999999798-(0.1 + 0.05) , 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -123.16666667779037 + 6.5,  35.97000000000078,  22.299999999999798 , 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);

    let click = () => {
if(addedCam.hasDinamyte === true) {
console.log("this runs");
objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(1.5, 1, 1),
 bombMater
), collides: true, setCount: 0, exploded: false, clicked: false, soundCountDown: 0, countDown: 0, isLast: false, onM() {}, onMD() {}, onMR() {}, setter() {
this.object.position.set(-123.16666667779037,  32.960000000001564,  22.299999999999798 - (0.1 + 0.05));
this.size = this.object.scale;
this.HCF_FUNC = () => {
  if(this.clicked === true) {
    this.countDown ++;
    if(this.countDown > 100) {
      this.soundCountDown ++;
      if(this.object.visible === true) {
      if(this.dist !== undefined && this.dist < 1) {
        addedCam.health -= 60;
        if(addedCam.health <= 0) {
       die();
        };
      };
      if(this.dist !== undefined && this.dist < 3) {
        addedCam.health -= 20;
            if(addedCam.health <= 0) {
die();
        };
      };
      if(this.dist !== undefined && this.dist < 5) {
        addedCam.health -= 5;
            if(addedCam.health <= 0) {
            die();
        };
      };
      };
            this.exploded = true;
      this.object.visible = false;
      if(this.soundCountDown < 2) {
      playSound("./explosion.mp3");
      
      };
    };
  };
  if(this.exploded === true) {
  console.log(this.exploded); 
floor.object.rotation.x -= 0.001;
floor.object.rotation.z += 0.1;
floor.grav = true;
floor.collides = false;
  };
};
this.object.userData.onClick = () => {
  if(keys["1"] && keys["5"] && keys["3"]) {
this.clicked = true;
  };
};
world.add(this.object);

}
});
};
    };

let floor = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(6.5,1,6.5),
    newMaterial("stat", "./floor.png")
  ),
  type: "floor",
  isLast: false,
  setCount: 0,
  stm: false,
  collides: true,
  onM() {}, 
  onMD() {}, 
  onMR() {},
  countDown: 0,
  collidesOthers: false,
  setter() {
    this.object.position.set(-123.16666667779037,  31.960000000001564,  22.299999999999798 - (0.1 + 0.05));
     world.add(this.object);

this.size = this.object.scale;
    this.HCF_FUNC = () => {

if(this.dist < 6) {
  this.countDown ++;
  if(this.countDown < 2) {
  click();
  };
};
};
  }
};
let boxPokerMat = [
  newMaterial("stat", "./box.png"),
  newMaterial("stat", "./box.png"),
  newMaterial("stat", "./box_poker.png"),
  newMaterial("stat", "./box.png"),
  newMaterial("stat", "./box.png"),
  newMaterial("stat", "./box.png"),
];


objects.push(floor);
newObj(true, function() {}, function() {}, function() {}, false, -131.7999999999968, 33.210000000000235,  13.499999999999968, 1.5,1.5,1.5, newMaterial("stat", "./box.png"), false, false, 0,0,0,0,0,0,false);

//PLAN: THE ALIEN HAS SHUT DOWN A GENERATOR POWERING THE SECTION OF THE FACILITY, THE PLAYER HAS TO RESTORE ELECTRICITY TO 
//OPEN A DOOR THAT LEADS TO THE END OF THE FACILITY SECTION.
newObj(true, function() {}, function() {}, function() {}, false, -128.399999999997,  33.210000000000235 - 0.5, 31.500000000000178, 1,1,1, boxPokerMat, false, true, 0,Math.PI /2/2,0,0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,-113.06666667779058, 28.960000000000306, 21.99999999999998, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);

newObj(true, function() {}, function() {}, function() {}, false,  -116.66666667779037, 26.020000000000636, 22.299999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -116.66666667779037 - 6.5, 26.020000000000636, 22.299999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -116.66666667779037 - 6.5, 26.020000000000636, 22.299999999999798 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);

newObj(true, function() {}, function() {}, function() {}, false,-116.76666667779037, 28.960000000000306, 25.70000000000003, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-116.76666667779037, 28.960000000000306, 25.70000000000003 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,-116.76666667779037 - 6.5, 28.960000000000306, 25.70000000000003 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,-113.06666667779058 - (6.5 * 2), 28.960000000000306, 21.99999999999998, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,-113.06666667779058 - (6.5 * 2), 28.960000000000306, 21.99999999999998 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,-113.06666667779058 - 6.5 , 28.960000000000306, 21.99999999999998 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);

newObj(true, function() {}, function() {}, function() {}, false,  -116.66666667779074, 26.020000000000636, 28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -110.16666667779111,  26.020000000000636, 28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -110.16666667779111, 26.020000000000636, 22.299999999999706, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -103.66666667779148,  26.020000000000636,  22.299999999999706, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -103.66666667779148,  26.020000000000636, 28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -103.66666667779148, 26.020000000000636, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -110.16666667779111, 26.020000000000636, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -116.66666667779074, 26.020000000000636, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -116.66666667779074 - 6.5, 26.020000000000636, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -116.66666667779074, 26.020000000000636 + 5, 28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -110.16666667779111,  26.020000000000636 + 5, 28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -110.16666667779111, 26.020000000000636 + 5, 22.299999999999706, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -103.66666667779148,  26.020000000000636 + 5,  22.299999999999706, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false,  -103.66666667779148,  26.020000000000636 + 5, 28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -103.66666667779148, 26.020000000000636 + 5, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -110.16666667779111, 26.020000000000636 + 5, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -116.66666667779074, 26.020000000000636 + 5, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -116.66666667779074 - 6.5, 26.020000000000636 + 5, 35.29999999999989, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -123.16666667779074,  31.020000000000636,  28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -123.16666667779074,  31.020000000000636 + 1,  28.799999999999798, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.06666667779021,  28.960000000000306,35.00000000000007, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + 6.5, 28.960000000000306, 38.700000000000124, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + (6.5 * 2), 28.960000000000306, 38.700000000000124, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + (6.5 * 3), 28.960000000000306, 38.700000000000124, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + 6.5, 28.960000000000306, 38.700000000000124 - (6.5 * 3), 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + (6.5 * 2), 28.960000000000306, 38.700000000000124 - (6.5 * 3), 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -122.36666667779042 + (6.5 * 3), 28.960000000000306, 38.700000000000124 - (6.5 * 3), 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -99.96666667779058, 28.960000000000306, 22.900000000000176, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);
newObj(true, function() {}, function() {}, function() {}, false, -99.96666667779058, 28.960000000000306, 22.900000000000176 + (6.5 * 2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,false);


medKit(-110.16666667779111, 26.020000000000636 + 1, 35.29999999999989);
door(-122.36666667779042, 28.960000000000306 + 2.3, 38.700000000000124, 6.5, 5, 1, newMaterial("stat", "./bigDoor.png"), false);

newObj(true, function() {}, function() {}, function() {}, false,   -122.76666667779077, 26.009999999999703, 41.49999999999998, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -122.76666667779077, 26.009999999999703, 41.49999999999998 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-119.06666667779024, 28.960000000000306, 41.80000000000026, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-119.06666667779024 , 28.960000000000306, 41.80000000000026 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -126.06666667779021, 28.960000000000306, 41.500000000000256 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -126.06666667779021, 28.960000000000306, 41.500000000000256, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 31.890000000000438, 41.49999999999998, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 31.890000000000438, 41.49999999999998 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 27.009999999999447, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 - 6.5, 27.009999999999447 + 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 + 6.5, 27.009999999999447 + 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 - (6.5 *2), 27.009999999999447 + 2, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 + (6.5 *2), 27.009999999999447 + 2, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 - (6.5 *3), 27.009999999999447 + 3, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 + (6.5 *3), 27.009999999999447 + 3, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 27.009999999999618, 61.000000000000256, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 27.009999999999618, 61.000000000000256+6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -126.06666667779021, 29.979999999999883, 60.90000000000053, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -126.06666667779021 + 6.5, 29.979999999999883, 60.90000000000053, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -126.06666667779021, 29.979999999999883, 60.90000000000053 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -126.06666667779021 + 6.5, 29.979999999999883, 60.90000000000053 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779003, 29.979999999999883, 71.10000000000032, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.26666667778966, 30.959999999999738, 51.100000000000634, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.26666667778966, 30.959999999999738, 58.00000000000064, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.26666667778966 - 6.5, 30.959999999999738 +1, 51.100000000000634, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.26666667778966 - 6.5, 30.959999999999738+1, 58.00000000000064, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -129.26666667778966 - (6.5 * 2), 30.959999999999738 +2, 51.100000000000634, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945, 32.95999999999974, 54.50000000000068, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -116.26666667779003, 31.029999999999763 - 0.04, 58.20000000000064, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -116.26666667779003 + 6.5, 31.029999999999763 +1 - 0.04, 58.20000000000064, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -116.26666667779003 + (6.5 *2), 31.029999999999763 +2 - 0.04, 58.20000000000064 - 7.4, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -116.26666667779003 + 6.5 , 31.029999999999763 +1 -0.04, 58.20000000000064 - 7.4, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -116.26666667779003  , 31.029999999999763 -0.04, 58.20000000000064 - 7.4, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7), 32.95999999999974 - 0.04, 54.50000000000068, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 27.009999999999447 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 - 6.5, 27.009999999999447 + 1 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 + 6.5, 27.009999999999447 + 1 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 - (6.5 *2), 27.009999999999447 + 2 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 + (6.5 *2), 27.009999999999447 + 2 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 - (6.5 *3), 27.009999999999447 + 3 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077 + (6.5 *3), 27.009999999999447 + 3 + 6.5 - 1, 54.50000000000007, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 27.009999999999618 + 6.5 - 1, 61.000000000000256, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -122.76666667779077, 27.009999999999618 + 6.5 - 1, 61.000000000000256+6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 61.00000000000041, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 61.00000000000041, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, 0,0, 0,0,0, false);

let box1PokerMat =  [
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1_poker.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
];



newObj(true, function() {}, function() {}, function() {}, false, -125.06666667779064, 27.019999999998884,  35.70000000000005, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-105.76666667779173, 27.019999999998884, 20.199999999999832, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-122.0666666777908, 28.499999999998803, 68.30000000000021, 2,2,2, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false, 0,0,5,function() {
  for(let i = 0; i < 2; i++) {
  medKit(-122.0666666777908, 28.499999999998803, 68.30000000000021);
  };
});
sideMouth(-122.0666666777908, 26.839999999998458, 49.40000000000025, false, 12); 
newObj(true, function() {}, function() {}, function() {}, false,-101.86666667779195, 26.689999999998832, 36.00000000000006, 1,1,1, box1PokerMat, false, false, null,null,null, 0,0, 0,0,0, false,0,0);
newObj(true, function() {}, function() {}, function() {}, false, -101.36666667779198, 30.86999999999889, 53.80000000000031, 1,1,1, box1PokerMat, false, false, null,null,null, 0,0, 0,0,0, false, 0,0, 5, function() {medKit(-101.36666667779198, 30.86999999999889, 53.80000000000031)});
newObj(false, function() {}, function() {}, function() {}, false,-105.36666667779176, 27.039999999998546, 25.099999999999902, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false, 0.5, true);
sideMouth(-120.86666667779087, 28.43999999999848, 63.80000000000045, false, 7);
sideMouth(-120.86666667779087 - 2, 28.43999999999848, 63.80000000000045, false, 15);
sideMouth(-120.86666667779087 - 4, 28.43999999999848, 63.80000000000045, false, 12);
sideMouth(-128.66666667779066 + 6.5 + 3, 29.32999999999845, 53.70000000000031, false, 12);
sideMouth(-128.66666667779066, 29.32999999999845, 53.70000000000031, true, 12);

newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 67.40000000000026, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 67.40000000000026 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 67.40000000000026 + (6.5 * 2), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 67.40000000000026 + (6.5 * 3), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 67.40000000000026 + (6.5 * 4), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937, 67.40000000000026 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937, 61.000000000000256, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937, 61.000000000000256 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937, 61.000000000000256 + (6.5*2), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937, 61.000000000000256 + (6.5*3), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937, 61.000000000000256 + (6.5 * 4), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + 6.5, 30.02999999999937, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5 *2), 30.02999999999937, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5 * 3), 30.02999999999937, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7), 32.95999999999974 - 0.04, 54.50000000000068 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7), 32.95999999999974 - 0.04, 54.50000000000068 + (6.5*2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7), 32.95999999999974 - 0.04, 54.50000000000068 + (6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7), 32.95999999999974 - 0.04, 54.50000000000068 + (6.5 * 4), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,  false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7), 32.95999999999974 - 0.04, 54.50000000000068 + (6.5*5), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7) - 6.5, 32.95999999999974 - 0.04, 54.50000000000068 + 6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7) - 6.5, 32.95999999999974 - 0.04, 54.50000000000068 + (6.5*2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7) - 6.5, 32.95999999999974 - 0.04, 54.50000000000068 + (6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7) - 6.5, 32.95999999999974 - 0.04, 54.50000000000068 + (6.5 * 4), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0,  false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778945 + (6.5 * 7)-6.5, 32.95999999999974 - 0.04, 54.50000000000068 + (6.5*5), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195 +6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195 + (6.5*2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195 +(6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195 + (6.5 * 4), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195 + (6.5 * 5), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724, 32.95999999999986, 61.00000000000195 + (6.5 * 6), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724 + 6.5, 32.95999999999986, 61.00000000000195, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724 + 6.5, 32.95999999999986, 61.00000000000195 +6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724 + 6.5, 32.95999999999986, 61.00000000000195 + (6.5*2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724 + 6.5, 32.95999999999986, 61.00000000000195 +(6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -145.86666667778724 + 6.5, 32.95999999999986, 61.00000000000195 + (6.5 * 4), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707, 32.95999999999986,97.20000000000137, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + 6.5, 32.95999999999986,97.20000000000137, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 2), 32.95999999999986,97.20000000000137, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 3), 32.95999999999986,97.20000000000137, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 5), 32.95999999999986,97.20000000000137, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 6), 32.95999999999986,97.20000000000137, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + 6.5, 32.95999999999986,97.20000000000137 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 2), 32.95999999999986,97.20000000000137 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 3), 32.95999999999986,97.20000000000137 - 6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 4), 32.95999999999986,97.20000000000137-6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778707 + (6.5 * 5), 32.95999999999986,97.20000000000137-6.5, 6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724, 32.95999999999986, 93.50000000000121, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 67.40000000000026, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 67.40000000000026 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 67.40000000000026 + (6.5 * 2), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 67.40000000000026 + (6.5 * 3), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 67.40000000000026 + (6.5 * 4), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 67.40000000000026 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937+5.5, 61.000000000000256, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937+5.5, 61.000000000000256 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937+5.5, 61.000000000000256 + (6.5*2), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937+5.5, 61.000000000000256 + (6.5*3), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 4), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966, 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + 6.5, 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5 *2), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5 * 3), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937 +5.5, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937 + 5.5, 61.000000000000256 + (6.5 * 5), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false)
newObj(true, function() {}, function() {}, function() {}, false, -103.46666667779186, 30.02999999999937+5.5, 61.00000000000041, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937, 61.000000000000256 + (6.5 * 6), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937, 61.000000000000256 + (6.5 * 6), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937, 61.000000000000256 + (6.5 * 6), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937, 61.000000000000256 + (6.5 * 7), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937, 61.000000000000256 + (6.5 * 7), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937, 61.000000000000256 + (6.5 * 7), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937, 61.000000000000256 + (6.5 * 8), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937, 61.000000000000256 + (6.5 * 8), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937, 61.000000000000256 + (6.5 * 8), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937, 61.000000000000256 + (6.5 * 9), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937, 61.000000000000256 + (6.5 * 9), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937, 61.000000000000256 + (6.5 * 9), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 6), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 6), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 6), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 7), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 7), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 7), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 8), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 8), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 8), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*4), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 9), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*3), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 9), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -142.26666667778966 + (6.5*5), 30.02999999999937+5.5, 61.000000000000256 + (6.5 * 9), 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724, 32.95999999999986, 93.50000000000121+6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724- ( 6.5/2), 32.95999999999986, 93.50000000000121+6.5+(6.5/2),6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724- ( 6.5/2) - (6.5 * 3), 32.95999999999986, 93.50000000000121+6.5+(6.5/2) + (6.5*3),6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724- ( 6.5/2) - (6.5 * 2), 32.95999999999986, 93.50000000000121+6.5+(6.5/2) + (6.5*3),6.5,5,1, new THREE.MeshStandardMaterial({color: "rgba(7, 51, 196, 0.52)", transparent: true, opacity: 0.4}), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724- ( 6.5/2) - 6.5, 32.95999999999986, 93.50000000000121+6.5+(6.5/2) + (6.5*3),6.5,5,1, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - (6.5 * 4), 32.95999999999986, 93.50000000000121+6.5, 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - (6.5 * 4), 32.95999999999986, 93.50000000000121+(6.5 *2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - (6.5 * 4), 32.95999999999986, 93.50000000000121+(6.5 *3), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - (6.5 * 4), 32.95999999999986, 93.50000000000121+(6.5 *4), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - 6.5 , 32.95999999999986, 93.50000000000121+(6.5 *2), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - 6.5 , 32.95999999999986, 93.50000000000121+(6.5 *3), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.36666667778724 - 6.5 , 32.95999999999986, 93.50000000000121+(6.5 *4), 1,5,6.5, newMaterial("stat", "./wall.png"), false, false, null,null,null, 0,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, -114.16666667778682, 31.509999999999827, 96.7000000000025, 2,2,2, newMaterial("stat", "./box1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -114.16666667778682, 31.509999999999827, 96.7000000000025, 1.9,1.9,1.9, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -114.16666667778682 - 3, 31.509999999999827, 96.7000000000025, 3,3,3, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -114.66666667778696, 31.039999999999683, 95.1000000000026, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -114.66666667778696, 31.039999999999683 +1, 95.1000000000026, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(1,1.2,1),
    newMaterial("stat", "./box1.png")
  ),
  type: 0,
  grav: true,
  collidesOthers: true,
  collides: false,
  push: true,
  setCount: 0,
  stm: true,
  isLast: false,
  onM() {},
  onMD() {
    if(this.dist !== undefined && this.dist < 6) {
    if(this.push === true) {
  this.push = false;
  } else {
    this.push = true;
  };
  if(this.collides === true) {
  this.collides = false;
  }else{
    this.collides = true;
  };
  if(this.type === 0) {
    this.type = "floor";
  } else {
    this.type = 0;
  };
  console.log(this.collides  + " " + this.push);
};
  },
  onMR() {},
  setter() {
    this.size = this.object.scale;
this.object.position.set(-140.76666667778548,31.08999999999969,92.60000000000274);
this.object.userData.onClick = () => {

};
world.add(this.object);
  }
});


objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(1,1.2,1),
    newMaterial("stat", "./box1.png")
  ),
  grav: true,
  type: 0,
  collides: false,
  stm:true,
  push: true,
  collidesOthers: true,
  setCount: 0,
  isLast: false,
  onM() {},
  onMD() {
    if(this.dist !== undefined && this.dist < 6) {
    if(this.push === true) {
  this.push = false;
  } else {
    this.push = true;
  };
  if(this.collides === true) {
  this.collides = false;
  }else{
    this.collides = true;
  };
  if(this.type === 0) {
    this.type = "floor";
  } else {
    this.type = 0;
  };
  console.log(this.collides  + " " + this.push);
};
  },
  onMR() {},
  setter() {
    this.size = this.object.scale;
this.object.position.set(-140.76666667778548 + (6.5 * 5),31.08999999999969,92.60000000000274);
this.object.userData.onClick = () => {

};
world.add(this.object);
  }
});

sideMouth(-140.76666667778548 + (6.5 * 6),31.08999999999969,92.60000000000274 - (6.5 * 3), false, 25);
sideMouth(-140.76666667778548,31.08999999999969,92.60000000000274 - (6.5 * 3), false, 25);


newObj(false, function() {}, function() {}, function() {}, false, -115.96666667778672, 32.95999999999986, 141.2, 20,20,1, newMaterial("stat", "./wall1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(false, function() {}, function() {}, function() {}, false, -126.56666667778669, 32.95999999999986, 131.2, 1,20,20, newMaterial("stat", "./wall1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(false, function() {}, function() {}, function() {}, false, -126.56666667778669 + 20, 32.95999999999986, 131.2, 1,20,20, newMaterial("stat", "./wall1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(false, function() {}, function() {}, function() {}, false, -126.56666667778669 + 10, 32.95999999999986 - 10, 131.2, 20,1,20, newMaterial("stat", "./tb.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(false, function() {}, function() {}, function() {}, false, -126.56666667778669 + 10, 32.95999999999986 + 10, 131.2, 20,1,20, newMaterial("stat", "./tb.png"), false, false, null,null,null, 0,0, 0,0,0, false);

objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(4, 12, 4),
    newMaterial("stat", "./GMBG.png")
  ),
  isLast: false,
  setCount: 0,
  setter() {
    this.object.position.set(-126.56666667778669 + 10, 32.95999999999986 - 10 + 6, 131.2);

    world.add(this.object);
  },
  HCF_FUNC() {
    if(electricity ===  true) {
      this.object.rotation.y += Math.PI /2 /2;
    };
  }
});




newObj(true, function() {}, function() {}, function() {}, false, -114.26666667778682, 31.05000000000467, 98.20000000000186, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -114.26666667778682, 31.05000000000467, 98.20000000000186+1, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -114.26666667778682, 31.05000000000467+1, 98.20000000000186, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -114.26666667778682 + 4, 31.05000000000467, 98.20000000000186+3, 1,1,1, newMaterial("stat", "./box1.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, true, 10, function() {sideMouth(-114.26666667778682 + 4, 31.05000000000467, 98.20000000000186+3, false, 10)}, true);

let comput = new THREE.MeshStandardMaterial({color:"rgb(37, 35, 35)"});

let computerMaterialOFF = [
  comput,
  newMaterial("stat", "./computer_off.png"),
  comput,
  comput,
  comput,
  comput
];

let computerMaterialON = [
comput,
  newMaterial("stat", "./computer_on.png"),
  comput,
  comput,
  comput,
  comput
];

//IF AN OBJECT HAS PROPERTIES LIKE SCD OR SCD1, IT MEANS SOUND COUNTDOWN
objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 5, 6.5),
  computerMaterialOFF
),
collides: true,
isLast: true,
scd:  0,
scd1: 0,
scd2: 0,
scd3: 0,
setCount: 0,
setter() {
  this.object.position.set(-107.86666667778695, 32.550000000005156, 109.20000000000141);
  world.add(this.object);
  this.HCF_FUNC = () => {
    if(electricity === true) {
      this.object.material = computerMaterialON;
      if(this.dist !== undefined && this.dist < 20 && electricity === true) {
        this.scd3 ++;
        if(this.scd3 < 2) {
          playSLooped("./cbeep (3).wav", this.dist < 20 && electricity === true);
        };
if(this.scd < 40) {
  this.scd ++;
} else {
  this.scd = 0;
  playSound("./cbeep (4).wav");
};
if(this.scd1 < 130) {
  this.scd1 ++;
} else {
  this.scd1 = 0;
  playSound("./cbeep (2).wav")
};
if(this.scd2 < 80) {
  this.scd2++;
} else {
  this.scd2 = 0;
  playSound("./cbeep (1).wav")
};
      } else if(this.dist !== undefined) {
this.scd1 = 0;
this.scd = 0;
this.scd2 = 0;
this.scd3 = 0;
      };
    };
  };
}
});


objects.push({
object: new THREE.Mesh(
  new THREE.BoxGeometry(1.2, 5, 6.5),
  computerMaterialOFF
),
collides: true,
isLast: true,
setCount: 0,
setter() {
  this.object.position.set(-107.86666667778695, 32.550000000005156, 109.20000000000141 + 6.5 +0.5);
  world.add(this.object);
  this.HCF_FUNC = () => {
    if(electricity === true) {
      this.object.material = computerMaterialON;
    };
  };
}
});

let keybMat = [
  newMaterial("stat", "./y.png"),
  newMaterial("stat", "./y.png"),
  newMaterial("stat", "./x.png"),
  newMaterial("stat", "./y.png"),
  newMaterial("stat", "./y.png"),
  newMaterial("stat", "./y.png")
];


newObj(true, function() {}, function() {}, function() {}, false,  -116.56666667778646, 35.82000000000474, 131.30000000000015, 4.7,1.5,4.7, newMaterial("stat", "./y.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, false);
newObj(true, function() {}, function() {}, function() {}, false,   -122.66666667778611, 35.82000000000474, 130.3000000000002, 8,0.7,0.7, newMaterial("stat", "./y.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, false);
newObj(true, function() {}, function() {}, function() {}, false,   -122.66666667778611, 35.82000000000474, 130.3000000000002 + 1.5, 8,0.7,0.7, newMaterial("stat", "./y.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, false);
newObj(true, function() {}, function() {}, function() {}, false,   -122.66666667778611 + 12, 35.82000000000474, 130.3000000000002, 8,0.7,0.7, newMaterial("stat", "./y.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, false);
newObj(true, function() {}, function() {}, function() {}, false,   -122.66666667778611+12, 35.82000000000474, 130.3000000000002 + 1.5, 8,0.7,0.7, newMaterial("stat", "./y.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, false);

newObj(true, function() {}, function() {}, function() {}, false,   -116.56666667778578,  40.1200000000048, 130.20000000000024, 0.7,9,0.7, newMaterial("stat", "./y.png"), false, false, null,null,null, "flr",0, 0,0,0, true, 0.5, false);
newObj(true, function() {}, function() {}, function() {}, false,    -116.46666667778578, 30.930000000006064, 120.60000000000079, 4,1.3,3, keybMat, false, true, 0,Math.PI, 0, "flr",0, 0,0,0, true, 0.5, false);
newObj(false, function() {}, function() {}, function() {
  electricity = true;
  playSound("./bClick.wav");
  autoSave();
}, false,-117.76666667778662, 31.400000000004695, 120.00000000000063, 0.7,0.4,1, newMaterial("stat", "./lift_button_01.png"), false, false, null,null,null, 0,0, 0,0,0,false);

newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 27.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false,0,0,7, function() {givePlayerPistol()});
newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 30.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 27.8000000000032 +1.5, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 2), 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 2), 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *2), 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 3), 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 3), 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *3), 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373 +5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373 +5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 2), 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 2), 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *2), 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 3), 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 3), 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *3), 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 4), 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 4), 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *4), 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *4), 25.99000000000373 +1, 29.400000000003317  + (6.5*2), 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 4), 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 4), 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *4), 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 29.090000000003773 - 0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +6.5, 29.090000000003773-0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+6.5, 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5*2), 29.090000000003773-0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+(6.5 *2), 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5*3), 29.090000000003773-0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+(6.5 *3), 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+(6.5 *4), 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616, 29.00000000000363, 23.70000000000342 -0.5, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616, 29.00000000000363, 23.70000000000342 +(6.5 * 2) -1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

door(-99.96666667779058, 28.53000000000014, 29.400000000000176, 1, 4, 6.5, newMaterial("stat", "./bigDoor.png"), false, true,  electricity === true);

newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5*5) -0.1, 29.00000000000363, 23.70000000000342, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 29.00000000000363, 23.70000000000342 +(6.5 * 2), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 29.00000000000363, 23.70000000000342 + 6.5, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 30.00000000000363, 23.70000000000342 +(6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);




objects.push( {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(0.0001, 0.0001, 0.0001),
    newMaterial("stat", "./GMBG.png")
  ),
  isLast: false,
  setCount: 0,
  setter() {
    this.object.position.set( -97.16666667778779, 25.99000000000373, 29.400000000003317);
    this.object.visible = false;
    world.add(this.object);

    this.HCF_FUNC = () => {
if(this.dist && this.dist < 3.4 && sector !== "OUTDOOR_01_GARAGE_TRAMSITE") {
  sector = "OUTDOOR_01_GARAGE_TRAMSITE";
  autoSave();
};
    };
  }
 });


newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 27.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false,0,0,7, function() {givePlayerPistol()});
newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 30.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 27.8000000000032 +1.5, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false,  -98.5666666777835, 27.350000000003075, 32.30000000000322, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, true);



newObj(true, function() {}, function() {}, function() {}, false, -123.37666667778915, 31.910000000001556, 16.049999999997834, 6.5,1,6.5, newMaterial("stat", "./floor.png"), false, false, null,null,null, "floor",0, 0,0,0,false);

};


if(sector === "OUTDOOR_01_GARAGE_TRAMSITE") {

let box1PokerMat =  [
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1_poker.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
];

let craftingTableMat = [
    newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./crft.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
];

let craftingTable1Mat = [
    newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./crft1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
  newMaterial("stat", "./box1.png"),
];

let ladderMat = [
  newMaterial("stat", "./ladder_else.png"),
  newMaterial("stat", "./ladder.png"),
    newMaterial("stat", "./ladder_else.png"),
      newMaterial("stat", "./ladder_else.png"),
        newMaterial("stat", "./ladder_else.png"),
          newMaterial("stat", "./ladder_else.png")
];





  newLight(100, "#ffffff", 0, 0, 0, false, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 2), 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 2), 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *2), 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 3), 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 3), 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *3), 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373 +5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373 +5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + 6.5, 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 2), 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 2), 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *2), 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 3), 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 3), 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *3), 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 4), 25.99000000000373, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 4), 25.99000000000373, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *4), 25.99000000000373, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *4), 25.99000000000373 +1, 29.400000000003317  + (6.5*2), 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5  * 4), 25.99000000000373 + 5.5, 29.400000000003317, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 * 4), 25.99000000000373 + 5.5, 29.400000000003317 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 + (6.5 *4), 25.99000000000373 +5.5, 29.400000000003317  + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 29.090000000003773 - 0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779, 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +6.5, 29.090000000003773-0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+6.5, 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5*2), 29.090000000003773-0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+(6.5 *2), 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779 +(6.5*3), 29.090000000003773-0.1, 39.50000000000337, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+(6.5 *3), 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -97.16666667778779+(6.5 *4), 29.090000000003773-0.1, 39.50000000000337 - (6.5*  3), 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616, 29.00000000000363, 23.70000000000342 -0.5, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616, 29.00000000000363, 23.70000000000342 +(6.5 * 2) -1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

door(-99.96666667779058, 28.53000000000014, 29.400000000000176, 1, 4, 6.5, newMaterial("stat", "./bigDoor.png"), false, true,  Math.PI === Math.pow(Math.PI, Math.PI));

newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5*5) -0.1, 29.00000000000363, 23.70000000000342, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 29.00000000000363, 23.70000000000342 +(6.5 * 2), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 29.00000000000363, 23.70000000000342 + 6.5, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 30.00000000000363, 23.70000000000342 +(6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);




objects.push( {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(0.0001, 0.0001, 0.0001),
    newMaterial("stat", "./GMBG.png")
  ),
  isLast: false,
  setCount: 0,
  setter() {
    this.object.position.set( -97.16666667778779, 25.99000000000373, 29.400000000003317);
    this.object.visible = false;
    world.add(this.object);

    this.HCF_FUNC = () => {
if(this.dist && this.dist < 3 && sector !== "OUTDOOR_01_GARAGE_TRAMSITE") {
  sector = "OUTDOOR_01_GARAGE_TRAMSITE";
  autoSave();
};
    };
  }
 });



newObj(true, function() {}, function() {}, function() {}, false, -100.16666667778429, 30.00000000000363, 29.20000000000322, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 27.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false,0,0,7, function() {givePlayerPistol()});
newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 30.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -98.46666667778413, 27.370000000003106, 27.8000000000032 +1.5, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,   -87.46666667778413, 27.370000000003106, 30.8000000000032, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -89.46666667778413, 27.370000000003106, 23.8000000000032 +1.5, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {ammoBox(-89.46666667778413, 27.370000000003106, 23.8000000000032 +1.5, false, "pistol", 10);});




newCasualSoldier(-73.06666667778507, 29.24000000000313, 42.400000000003445, 15, false);

newObj(true, function() {}, function() {}, function() {}, false,  -98.5666666777835, 27.350000000003075, 32.30000000000322, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), false, false, null,null,null, null,0, 0,0,0, true);

newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779, 26.99000000000373, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779, 26.99000000000373, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 6.5, 26.99000000000373, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5)  - 7.5, 30.00000000000363, 23.70000000000342 +(6.5 * 3), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) - 7.5, 30.00000000000363, 23.70000000000342 +(6.5 * 4), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 30.00000000000363, 23.70000000000342 +(6.5 * 4), 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -99.86666667778616 + (6.5 * 5) -0.1, 30.00000000000363, 23.70000000000342 +(6.5 * 5) , 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-70.96666667778595,30.00000000000363, 59.10000000000346, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-70.96666667778595 -6.5,30.00000000000363, 59.10000000000346, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -78.06666667778592, 30.00000000000363, 52.40000000000347, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779, 26.99000000000373 + 5.5, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779, 26.99000000000373 +5.5, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 6.5, 26.99000000000373 +5.5, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779, 26.99000000000373 + 5, 48.9000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 13, 26.99000000000373, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 13, 26.99000000000373, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 13, 26.99000000000373, 48.9000000000035 + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 19.5, 26.99000000000373, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 19.5, 26.99000000000373, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 19.5, 26.99000000000373, 48.9000000000035 + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 26, 26.99000000000373, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 26, 26.99000000000373, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 26, 26.99000000000373, 48.9000000000035 + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -89.16666667778415,  28.960000000003056,  60.5000000000037, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {sideMouth( -89.16666667778415, 28.960000000003056, 60.5000000000037, false, 15)});
newObj(true, function() {}, function() {}, function() {}, false,  -89.16666667778415,  28.960000000003056,  60.5000000000037 - 6.5, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {sideMouth( -89.16666667778415, 28.960000000003056, 60.5000000000037 -6.5, false, 15)});

newObj(true, function() {}, function() {}, function() {}, false,  -92.16666667778415,  28.960000000003056,  54.5000000000037, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false, 0.5, true);
newObj(true, function() {}, function() {}, function() {}, false,  -89.16666667778415 + 3,  28.960000000003056,  60.5000000000037 - 4, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false, 0.5, true);

newObj(true, function() {}, function() {}, function() {}, false,   -83.26666667778449, 28.960000000003056, 60.5000000000037, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false, 0.5, true);



newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 13, 26.99000000000373 + 5.5, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 13, 26.99000000000373 + 5.5, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 13, 26.99000000000373 + 5.5, 48.9000000000035 + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -77.6666666777889, 27.00000000000305,61.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 19.5, 26.99000000000373 + 5.5, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 19.5, 26.99000000000373 + 5.5, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 19.5, 26.99000000000373 + 5.5, 48.9000000000035 + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 26, 26.99000000000373 + 5.5, 48.9000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 26, 26.99000000000373 + 5.5, 48.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -71.16666667778779 - 26, 26.99000000000373 + 5.5, 48.9000000000035 + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -84.16666667778557, 30.00000000000363, 65.60000000000355, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -84.16666667778557 - 6.5, 30.00000000000363, 65.60000000000355, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -84.16666667778557 - 13, 30.00000000000363, 65.60000000000355, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -84.16666667778557, 30.00000000000363, 65.60000000000355 - ((6.5 * 3) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -84.16666667778557 - 6.5, 30.00000000000363, 65.60000000000355 - ((6.5 * 3) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -84.16666667778557 - 13, 30.00000000000363, 65.60000000000355 - ((6.5 * 3) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -100.86666667778536, 30.00000000000363, 62.00000000000361, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.86666667778536, 30.00000000000363, 62.00000000000361 - 13.035, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
door(-100.86666667778536, 30.00000000000363, 62.00000000000361 - 6.5, 1, 5, 6.5, newMaterial("stat", "./bigDoor.png"), false, true, 0 === 0);

newObj(true, function() {}, function() {}, function() {}, false, -100.86666667778536 + ((6.5 * 3) + 0.9), 30.00000000000363, 62.00000000000361, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -100.86666667778536 + ((6.5 * 3) + 0.9), 30.00000000000363, 62.00000000000361 - 13.035, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -77.6666666777889, 27.00000000000305,61.9000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false,  -99.46666667778356, 28.960000000003056, 57.50000000000375, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {ammoBox(-99.46666667778356, 28.960000000003056, 57.50000000000375, false, "pistol", 6)});
newObj(true, function() {}, function() {}, function() {}, false,   -99.46666667778317, 28.960000000003056, 53.20000000000371, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {sideMouth( -99.46666667778317, 28.960000000003056, 53.20000000000371, false, 15)});
newObj(true, function() {}, function() {}, function() {}, false,  -99.76666667778355, 28.960000000003056, 54.60000000000371, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {sideMouth(-99.76666667778355, 28.960000000003056,54.60000000000371, false, 15)});
newObj(true, function() {}, function() {}, function() {},false, -99.36666667778357, 29.19000000000305, 56.00000000000364, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {sideMouth(-99.36666667778357, 29.19000000000305,56.00000000000364, false, 15)});


//FLOOR MARK HERE <----------------------------------------------------------------------------->
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 -6.5, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 13, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 19.5, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 26, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 32.5, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 39, 27.000000000003034, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 10.000000000003034, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
//FLOOR ENDS HERE <-------------------------------------------------------------------------------------------------------------------->


medKit( -103.66666667778964, 29.710000000003593, 69.00000000000347);
medKit(-103.66666667778964, 29.710000000003593, 68.00000000000347);
medKit(-103.66666667778964, 29.710000000003593, 67.00000000000347);

newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156, 30.00000000000363, 62.0000000000035 - 19.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156, 30.00000000000363, 62.0000000000035 - 19.5 + 6.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156, 30.00000000000363, 62.0000000000035 - 19.5 + 13, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156, 30.00000000000363, 62.0000000000035, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156, 30.00000000000363, 62.0000000000035 - 19.5+ 26, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156 + ((6.5 * 7) + 0.9), 30.00000000000363, 62.0000000000035 - 19.5+ 26, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778156 + ((6.5 * 7) + 0.9), 30.00000000000363, 62.0000000000035 - 19.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 6.5, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false); // yes
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 13, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 19.5, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false); // yes
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 26, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 32.5, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false); // yes
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 39, 30.00000000000363, 72.20000000000329, 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134, 30.00000000000363, 72.20000000000329 - ((6.5 * 5) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 6.5, 30.00000000000363, 72.20000000000329- ((6.5 * 5) + 0.9), 6.5, 5, 1, newMaterial("stat", "./garage.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 13, 30.00000000000363, 72.20000000000329  - ((6.5 * 5) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 19.5, 30.00000000000363, 72.20000000000329- ((6.5 * 5) + 0.9), 6.5, 5, 1, newMaterial("stat", "./garage.png"), false, false, null,null,null, null,0, 0,0,0, false); // yes
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 26, 30.00000000000363, 72.20000000000329  - ((6.5 * 5) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
//THE OPEN DOOR, NO DOOR HERE !!
newObj(true, function() {}, function() {}, function() {}, false,-104.56666667778134 - 39, 30.00000000000363, 72.20000000000329 - ((6.5 * 5) + 0.9), 6.5, 5, 1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);

//PIT WALLS
newObj(true, function() {}, function() {}, function() {}, false, -143.56666667778134, 18.970000000001907,72.20000000000317, 6.5, 17, 1, newMaterial("stat", "./pit.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778113, 18.970000000001907, 68.50000000000338, 1, 17, 6.5, newMaterial("stat", "./pit.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -143.56666667778134, 18.970000000001907,72.20000000000317 - 7.4, 6.5, 17, 1, newMaterial("stat", "./pit.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, -147.26666667778113 + 7.4, 18.970000000001907, 68.50000000000338, 1, 17, 6.5, newMaterial("stat", "./pit.png"), false, false, null,null,null, null,0, 0,0,0, false);

//THEM GARAGE BOXES
//175
newObj(true, function() {}, function() {}, function() {}, false,  -129.56666667778185, 28.040000000002912, 67.20000000000366, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,0,7,function() {ammoBox(-129.56666667778185, 28.040000000002912, 67.20000000000366, false, "pistol", 17)}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -119.56666667778185, 28.040000000002912, 63.20000000000366, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 1000000, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -142.56666667778055, 29.13000000000287, 62.60000000000365, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 100000, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -109.9666666777824, 29.13000000000287, 62.00000000000364, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 100000, function() {console.log("WOW! CONGRATS, YOUR PATIENCE IS ... FASCINATING! KEEP GOING, YOU CAN DO IT!")}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -109.9666666777824, 29.13000000000287, 62.00000000000364 + 1.3, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 100000000000000, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -109.9666666777824 + 1.3, 29.13000000000287, 62.00000000000364 + 1.3, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 1010101010101010, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -105.1666666777826, 29.13000000000287, 66.5000000000035, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 500, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -93.06666667778329, 29.13000000000287, 58.70000000000356, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 4003232, function() {}, false, 3);
newObj(false, function() {}, function() {}, function() {}, false,  -144.1666666777804, 29.13000000000287, 48.70000000000342, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 543210, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,   -141.96666667778052, 30.01000000000285, 54.5000000000035, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 10000000, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,   -130.2666666777812, 30.01000000000285, 54.5000000000035, 1, 1,1, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 10000001, function() {}, true, 3);
newObj(false, function() {}, function() {}, function() {}, false,   -115.26666667778204, 30.01000000000285, 68.90000000000336, 1.5, 1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, null,0, 0,0,0, false,0,true, 400000, function() {}, true, 4.5);
//187
newObj(true, function() {}, function() {}, function() {}, false,   -101.9666666777828, 29.980000000002846, 49.700000000003435, 1, 1,1, box1PokerMat, true, false, null,null,null, null,0, 0,0,0, false,0,);
newObj(true, function() {}, function() {}, function() {}, false,   -117.7666666777819, 29.980000000002846, 51.50000000000346, 1, 1,1, craftingTableMat, true, true, 0,Math.PI /2,0, null,0, 0,0,0, false,0,);
newObj(true, function() {}, function() {}, function() {}, false,   -117.7666666777819, 29.980000000002846, 52.600000000003476, 1, 1,1, craftingTable1Mat, true, true, 0,Math.PI /2,0, null,0, 0,0,0, false,0,);

newObj(true, function() {}, function() {}, function() {}, false,  -146.26666667778028, 29.980000000002846, 44.100000000003355, 1, 1,1, craftingTable1Mat, true, true, 0,Math.PI /2,0, null,0, 0,0,0, false,0,);

newObj(true, function() {}, function() {}, function() {}, false,  -147.1666666777804, 30.00000000000363, 43.30000000000335, 1, 3.5, 5, newMaterial("stat", "./whatever_this_is.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -107.46666667778265, 30.00000000000363, 72.10000000000318, 5, 3.5, 1, newMaterial("stat", "./whatever_this_is.png"), false, false, null,null,null, null,0, 0,0,0, false);

sideMouth(-142.86666667778064, 30.00000000000363, 42.50000000000333, false, 25);
sideMouth(-132.86666667778064, 30.00000000000363, 52.50000000000333, false, 20);

let keyMat = [
  newMaterial("stat", "./key_else.png"),
 newMaterial("stat", "./key_else.png"),
newMaterial("stat", "./key_top.png"),
 newMaterial("stat", "./key_else.png"),
  newMaterial("stat", "./key_else.png"),
   newMaterial("stat", "./key_else.png"),
];

let key = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(0.4, 0.1, 0.4),
   keyMat
  ),
  c: true,
  setCount: 0,
  setter() {
    this.object.position.set(-141.9666666777807, 12.770000000001389, 67.90000000000342);
    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 8) {
      addedCam.key = true;
      this.object.visible = false;
      this.c = false;
      };
    };
    this.HCF_FUNC = () => {
      if(this.c === false) {
        this.object = undefined;
      };
    };
    world.add(this.object);
  }
};

let wata = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(20,0.01, 20),
    new THREE.MeshStandardMaterial({color: "rgba(0,0,255,0.7)"})
  ),
  proximity: 6.5,
  setCount: 0,
  j: null,
  setter() {
    this.object.position.set(-142.86666667778064, 12.560000000001388, 63.60000000000363);
    world.add(this.object);
 this.j = 174;
    this.HCF_FUNC = () => {
      if(key.object !== undefined) {
      key.object.position.y = this.object.position.y;
      };
      if(this.dist && this.dist < this.proximity /2) {
         addedCam.health = 100;
  addedCam.position.x = savedPosx;
  addedCam.position.y = savedPosy;
  addedCam.position.z = savedPosz;
      };
if(this.j < 188) {
this.j ++;
} else {
  this.j = 174;
};
let d = null;
if(objects[this.j].object !== null && objects[this.j].object !== undefined) {
d = calcDist(this.object, objects[this.j].object);
};

if(d < this.proximity && this.j > 174 && this.j < 188 && this.object.position.y < 26) {
  this.object.position.y += objects[this.j].mass /2;
  objects[this.j].mass = 0;
};
    };
  },
};

objects.push(wata);
objects.push(key);

let tramBodyMaterial = [
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_floor.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
];

let tramCTRLMAT = [
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./control_panel.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
];

let main_tram_isActive = false;

let aTramCTRL_panel = {
object: new THREE.Mesh(
  new THREE.BoxGeometry(4, 1, 1),
  tramCTRLMAT
),
collides: true,
setCount: 0,
setter() {
  this.object.position.set(0,0,0);
  this.object.userData.onClick = () => {
    if(addedCam.key === true) {
main_tram_isActive = true;
tramCTRLMAT[2] = newMaterial("stat", "./control_panel_T.O.png");

this.object.material = tramCTRLMAT;
playSound("./cbeep (1).wav");
    };
  };
  world.add(this.object);
}
};


let tram = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.5, 6.5),
    tramBodyMaterial
  ),
  collides: true,
  type: 0,
  setCount: 0,
  active: main_tram_isActive,
  playerOn: true,
  main: true,
  setter() {
    this.object.position.set(-136.86666667778098, 28.58000000000146, 49.50000000000343);
    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 1.5) {
        if(addedCam.isMetalRodEq === true) {
          playSound("./pipe.wav");
        };
      };
    };
    this.HCF_FUNC = () => {
      tramx = this.object.position.x;
      tramy = this.object.position.y;
      tramz = this.object.position.z;
      tram_active = this.active;
      tram_playerOn = this.playerOn;
      this.active = main_tram_isActive;
aTramCTRL_panel.object.position.x = this.object.position.x;
aTramCTRL_panel.object.position.y = this.object.position.y + (1.2 + 0.05);
aTramCTRL_panel.object.position.z = this.object.position.z - 2.75;
if(addedCam.position.y > this.object.position.y) {
  this.type = "floor";
  this.playerOn = true;
} else {
  this.type = 0;
  this.playerOn = false;
};

if(this.main === true &&this.active === true && this.playerOn === true) {
  this.object.position.z -= 0.4
  addedCam.position.z = this.object.position.z;
  if(keys["o"]) {
    this.playerOn = false;
  };
};
    };

    world.add(this.object);
  }
};

objects.push(tram);
objects.push(aTramCTRL_panel);

ladder(-138.76666667778088, 28.400000000001317, 49.90000000000344, 0.5, 1.7, 1.5, ladderMat, "x+");

let aTramCTRL_panel1 = {
object: new THREE.Mesh(
  new THREE.BoxGeometry(4, 1, 1),
  tramCTRLMAT
),
collides: true,
setCount: 0,
setter() {
  this.object.position.set(0,0,0);
  this.object.userData.onClick = () => {
    if(addedCam.key === true) {
    };
  };
  world.add(this.object);
}
};


let tram1 = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.5, 6.5),
    tramBodyMaterial
  ),
  collides: true,
  type: 0,
  setCount: 0,
  active: false,
  playerOn: false,
  main: false,
  setter() {
    this.object.position.set(-136.86666667778098 + 13, 28.58000000000146, 49.50000000000343);
    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 1.5) {
        if(addedCam.isMetalRodEq === true) {
          playSound("./pipe.wav");
        };
      };
    };
    this.HCF_FUNC = () => {
aTramCTRL_panel1.object.position.x = this.object.position.x;
aTramCTRL_panel1.object.position.y = this.object.position.y + (1.2 + 0.05);
aTramCTRL_panel1.object.position.z = this.object.position.z - 2.75;
if(addedCam.position.y > this.object.position.y) {
  this.playerOn = true;
} else {
  this.type = 0;
  this.playerOn = false;
};

if(this.main === true &&this.active === true && this.playerOn === true) {
  this.object.position.z -= 1.4;
  addedCam.position.z = this.object.position.z;
  if(keys["o"]) {
    this.playerOn = false;
  };
};
    };

    world.add(this.object);
  }
};



objects.push(tram1);
objects.push(aTramCTRL_panel1);

let aTramCTRL_panel2 = {
object: new THREE.Mesh(
  new THREE.BoxGeometry(4, 1, 1),
  tramCTRLMAT
),
collides: true,
setCount: 0,
setter() {
  this.object.position.set(0,0,0);
  this.object.userData.onClick = () => {
    if(addedCam.key === true) {
    };
  };
  world.add(this.object);
}
};


let tram2 = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.5, 6.5),
    tramBodyMaterial
  ),
  collides: true,
  type: 0,
  setCount: 0,
  active: false,
  playerOn: false,
  main: false,
  setter() {
    this.object.position.set(-136.86666667778098 + 26, 28.58000000000146, 49.50000000000343);
    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 1.5) {
        if(addedCam.isMetalRodEq === true) {
          playSound("./pipe.wav");
        };
      };
    };
    this.HCF_FUNC = () => {
aTramCTRL_panel2.object.position.x = this.object.position.x;
aTramCTRL_panel2.object.position.y = this.object.position.y + (1.2 + 0.05);
aTramCTRL_panel2.object.position.z = this.object.position.z - 2.75;
if(addedCam.position.y > this.object.position.y) {
  this.playerOn = true;
} else {
  this.type = 0;
  this.playerOn = false;
};

if(this.main === true &&this.active === true && this.playerOn === true) {
  this.object.position.z -= 1.4;
  addedCam.position.z = this.object.position.z;
  if(keys["o"]) {
    this.playerOn = false;
  };
};
    };

    world.add(this.object);
  }
};

objects.push(tram2);
objects.push(aTramCTRL_panel2);


newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034 + 5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 -6.5, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034 +5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-6.5, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 13, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034 + 5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-13, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 19.5, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034 + 5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-19.5, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 26, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034 + 5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-26, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 32.5, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034 + 5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-32.5, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737 - 39, 27.000000000003034 + 5.5, 62.0000000000035, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034 + 5.5, 62.0000000000035 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034 + 5.5, 62.0000000000035 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034 + 5.5, 62.0000000000035 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -104.56666667778737-39, 27.000000000003034 + 5.5, 62.0000000000035 + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

//ONE UNIT <-------------------------------->
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

//DO NOT COPY, ONLY A "HOLE FILLER  😏"  <=========================>
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 4.5, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 4.5, 35.10000000000334, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
// <=====================================>


//<-------------------------------------------------------------------->
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 6.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 6.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 6.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 6.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);







newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 13, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 13, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 13, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 13, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);





newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 19.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 19.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 19.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 19.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);







newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 26, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 26, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 26, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 26, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);










newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 32.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 32.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 32.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 32.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,   -136.966666677787, 32.42000000000325, -0.39999999999666036, 19.5, 10, 0.1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);


let pmesh = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(0.1, 0.1, 0.01),
    tramBodyMaterial
  ),
setCount: 0,
setter() {
  this.object.position.set(-136.966666677787, 32.42000000000325, -0.39999999999666036 - 1);
  world.add(this.object);
  this.HCF_FUNC = () => {
    if(this.dist && this.dist < ODC && tram.playerOn === true) {
      sector = "OUTDOOR_02_RAILS";
      autoSave();
    };
  };
}
};

objects.push(pmesh);



newObj(true, function() {}, function() {}, function() {}, false,  -137.06666667778737,27.000000000003034, 38.80000000000362, 6.5,1,0.9, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -137.06666667778737,27.000000000003034 + 5.5, 38.80000000000362, 6.5,1,0.9, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -100.86666667778942, 27.000000000003034, 55.40000000000386, 0.9,1,ODC, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

};





















if(sector === "OUTDOOR_02_RAILS") {
  //USING THE UNITS, IT CONTINUES
  newLight(100, "rgba(255,255,255,1)", 0,0,0, function() {}, false);
  newObj(true, function() {}, function() {}, function() {}, false,   -136.966666677787, 32.42000000000325, -0.39999999999666036 + ODC + (ODC /2), 19.5, 10, 0.1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 26, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 26, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 26, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 26, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);










newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 32.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 32.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 32.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 32.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 32.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);





let tramBodyMaterial = [
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_floor.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
];

let tramCTRLMAT = [
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./control_panel.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
];

let main_tram_isActive = false;

let aTramCTRL_panel = {
object: new THREE.Mesh(
  new THREE.BoxGeometry(4, 1, 1),
  tramCTRLMAT
),
collides: true,
setCount: 0,
setter() {
  this.object.position.set(0,0,0);
  this.object.userData.onClick = () => {
    if(addedCam.key === true) {
main_tram_isActive = true;
tramCTRLMAT[2] = newMaterial("stat", "./control_panel_T.O.png");

this.object.material = tramCTRLMAT;
playSound("./cbeep (1).wav");
    };
  };
  world.add(this.object);
}
};


let tram = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.5, 6.5),
    tramBodyMaterial
  ),
  collides: true,
  type: 0,
  setCount: 0,
  active: true,
  playerOn: true,
  main: true,
  setter() {
      let x = JSON.parse(localStorage.getItem("tx"));
    let y = JSON.parse(localStorage.getItem("ty"));
    let z = JSON.parse(localStorage.getItem("tz"));
   
  
    this.active = JSON.parse(localStorage.getItem("active"));
    this.playerOn = JSON.parse(localStorage.getItem("on?"));
    this.object.position.set(x,y,z);
    if(published === true) {
     addedCam.position.y = this.object.position.y + 4;
    };
    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 1.5) {
        if(addedCam.isMetalRodEq === true) {
          playSound("./pipe.wav");
        };
      };
    };

    this.HCF_FUNC = () => {
      this.active = main_tram_isActive;
aTramCTRL_panel.object.position.x = this.object.position.x;
aTramCTRL_panel.object.position.y = this.object.position.y + (1.2 + 0.05);
aTramCTRL_panel.object.position.z = this.object.position.z - 2.75;
if(addedCam.position.y > this.object.position.y) {
  this.type = "floor";
  this.playerOn = true;
} else {
  this.type = 0;
  this.playerOn = false;
};

if(this.main === true &&this.playerOn === true) {
  this.object.position.z -= 0.4
  addedCam.position.z = this.object.position.z;
  if(keys["o"]) {
    this.playerOn = false;
  };
};
    };

    world.add(this.object);
  }
};

objects.push(tram);
objects.push(aTramCTRL_panel);


newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 39, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 39, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 39, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 39, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 39, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 39, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 39, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 39, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 39, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 39, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 45.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 45.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 45.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 45.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 45.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 45.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 45.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 45.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 45.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 45.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 52, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 52, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 52, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 52, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 52, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 52, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 52, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 52, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 52, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 52, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - 58.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - 58.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - 58.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - 58.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - 58.5, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - 58.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - 58.5, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 58.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - 58.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - 58.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
//10TH UNIT 
//THIS WAS THE MOMENT I REALIZED I COULD ALSO DO THIS
function unit(num) {
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, 35.10000000000334 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, 35.10000000000334 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, 35.10000000000334 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, 35.10000000000323 - num, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, 35.10000000000323 - num, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417,35.40000000000323 - num, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417,35.40000000000323 - num, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, 35.10000000000334 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, 35.10000000000334 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
};

unit(65);
unit(71.5);
unit(78);
unit(84.5);
unit(91);
unit(97.5);
unit(104);
unit(110.5);
unit(117);
unit(123.5)
unit(130);
unit(136.5);
unit(143);
unit(149.5);
unit(156);
unit(162.5);
unit(169);
unit(175.5);
unit(182);
unit(188.5);
unit(195);
unit(201.5);
unit(208);
unit(214.5)


let a = 6.5;
let b  = 1; //32 <= um... why is 32 here when I wrote 1? I'm confused because of my owwn code...
let c = 208;
let enabled = true;

//AND THEN THIS... I WOULD'VE NEVER FINISHED IF I WAS SO STOOPID...
for(let i = 0; i < 360; i ++) {
  b ++;
unit(c + (a * b));
};

let random = -143.56666667778737 + Math.random() * 12;
if(published === true) {
setInterval(function() {
  if(enabled === true) {
  random = -143.56666667778737 + Math.random() * 12;
  shoot_some_slow_boring_laser_thingy(random, addedCam.position.y, addedCam.position.z - 150, "z+");
  };
}, 1000);
};



newObj(true, function() {}, function() {}, function() {}, false,   -136.966666677787, 32.42000000000325, -2522 - 0.9, 19.5, 10, 0.1, newMaterial("stat", "./box1.png"), false, false, null,null,null, 0,0, 0,0,0, true);


objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(0.0001, 0.0001, 0.00001),
    newMaterial("stat", "./dev.insertTexture.png")
  ),
  setCount: 0,
  setter() {
    this.object.position.set(-136.966666677787, 32.42000000000325, -2522);
    world.add(this.object);

    this.HCF_FUNC = () => { 
      if(this.dist && this.dist < 6.5) {
        sector = "OUTDOOR_03_RAILWAY";
        autoSave();
      };
    };
  }
}
);

};

if(sector === "OUTDOOR_03_RAILWAY") {
  newLight(100, "rgb(255,255,255)", -129.80000000000018, 35.50000000000013, 3.9, false, false);
  function unit(num) {
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388, 30.790000000003612, -2522- num, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, -2522 - num, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417, -2522 - num, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426 + ODC, 29.540000000003417, -2522 - num, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, -2522- num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
};


let origin = -6.5;
for(let i = 0; i < 19; i++) {
  unit(origin);
  origin = origin + 6.5;
};

let tramBodyMaterial = [
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_floor.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
];

let tramCTRLMAT = [
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./control_panel.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
  newMaterial("stat", "./tram_side.png"),
];

let main_tram_isActive = false;

let aTramCTRL_panel = {
object: new THREE.Mesh(
  new THREE.BoxGeometry(4, 1, 1),
  tramCTRLMAT
),
collides: true,
setCount: 0,
isLast: false,
setter() {
  this.object.position.set(0,0,0);
  this.object.userData.onClick = () => {
    if(addedCam.key === true) {
main_tram_isActive = true;
tramCTRLMAT[2] = newMaterial("stat", "./control_panel_T.O.png");

this.object.material = tramCTRLMAT;
playSound("./cbeep (1).wav");
    };
  };
  world.add(this.object);
}
};


let tram = {
  object: new THREE.Mesh(
    new THREE.BoxGeometry(4, 1.5, 6.5),
    tramBodyMaterial
  ),
  collides: true,
  type: 0,
  setCount: 0,
  active: true,
  playerOn: true,
  isLast: false,
  main: true,
  setter() {
      let x = -136.86666667778098;  
    let y = 28.58000000000146;
    let z = -2522;
   
  
    this.active = true;
    this.playerOn = true;
    this.object.position.set(x,y,z);
    if(published === true) {
     addedCam.position.y = this.object.position.y + 4;
    };
    this.object.userData.onClick = () => {
      if(this.dist && this.dist < 1.5) {
        if(addedCam.isMetalRodEq === true) {
          playSound("./pipe.wav");
        };
      };
    };

    this.HCF_FUNC = () => {
      this.active = main_tram_isActive;
aTramCTRL_panel.object.position.x = this.object.position.x;
aTramCTRL_panel.object.position.y = this.object.position.y + (1.2 + 0.05);
aTramCTRL_panel.object.position.z = this.object.position.z - 2.75;
if(addedCam.position.y > this.object.position.y) {
  this.type = "floor";
  this.playerOn = true;
} else {
  this.type = 0;
  this.playerOn = false;
};

if(this.main === true &&this.playerOn === true && this.object.position.z > -2522 - (6.5 * 18)) {
  this.object.position.z -= 0.4
  addedCam.position.z = this.object.position.z;
  if(keys["o"]) {
    this.playerOn = false;
  };
};
    };

    world.add(this.object);
  }
};

objects.push(tram);
objects.push(aTramCTRL_panel);


newObj(true,  function() {}, function() {}, function() {}, false, -136.86666667778098,30.58000000000146, -2522 + 6.5, 22,ODC, 0.1, newMaterial("stat", "./box1.png"), false, false, 0,0,0,0,0,0,function() {}, function() {}, false);
newObj(true,  function() {}, function() {}, function() {}, false, -136.86666667778098,30.58000000000146, -2642.2400000027665, 22,ODC, 0.1, newMaterial("stat", "./box1.png"), false, false, 0,0,0,0,0,0,function() {}, function() {}, true);

let num = 6.5 * 18;

newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-126.86666667778388 - 20.4, 30.790000000003612, -2522 - num, 1, 5, 6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,-140.76666667778426, 29.540000000003417, -2522 - num, 0.2, 0.2, 6.5, newMaterial("stat", "./rrod.png"), false, false, null,null,null, null,0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737, 28.000000000003034 + 5.5, -2522- num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -143.56666667778737 + 6.5, 27.000000000003034 + 5.5, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737, 28.000000000003034 + 5.5, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 6.5, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 13, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 6.5, 28.000000000003034 + 5.5, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 13, 28.000000000003034 + 5.5,  -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034 + 5.5, -2522 - num, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034 + 5.5, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034 + 5.5, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034 + 5.5, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034 + 5.5, -2522 - num + 6.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034 + 5.5, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034 + 5.5, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034 + 5.5, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034 + 5.5, -2522 - num + 13, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034 + 5.5,  -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034 + 5.5, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034 + 5.5, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034 + 5.5, -2522 - num + 19.5, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 19.5, 28.000000000003034 + 5.5, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 26, 28.000000000003034 + 5.5, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 32.5, 28.000000000003034 + 5.5, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  -130.56666667778737 + 39, 28.000000000003034 + 5.5, -2522 - num + 26, 6.5,1,6.5, newMaterial("stat", "./floor1.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737, 30.9800000000035, -2609.239999999918, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 6.5, 30.9800000000035, -2609.239999999918, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 13, 30.9800000000035, -2609.239999999918, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 19.5, 30.9800000000035, -2609.239999999918, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737, 30.9800000000035, -2609.239999999918 - (6.5 * 4) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 6.5, 30.9800000000035, -2609.239999999918- (6.5 * 4) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 13, 30.9800000000035, -2609.239999999918- (6.5 * 4) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 26, 30.9800000000035, -2609.239999999918- (6.5 * 4) , 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 32.5, 30.9800000000035, -2609.239999999918- (6.5 * 4) , 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 26, 30.9800000000035, -2609.239999999918- (6.5 * 5) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 32.5, 30.9800000000035, -2609.239999999918- (6.5 * 5) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 32.5, 30.9800000000035, -2609.239999999918- (6.5 * 5) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -91.56666667778737 - 19.5, 30.9800000000035, -2609.239999999918- (6.5 * 5) -1, 6.5,5,1, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545, 30.9800000000035, -2639.9699999998575, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 - ODC, 30.9800000000035, -2639.9699999998575 + ODC + 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 -ODC, 30.9800000000035, -2639.9699999998575 + ODC +(6.5* 1)+ 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 - ODC, 30.9800000000035, -2639.9699999998575 + ODC +(6.5 * 2) + 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 - ODC, 30.9800000000035, -2639.9699999998575 + ODC + (6.5 *3) + 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 - ODC + (6.5 * 4) + 0.9, 30.9800000000035, -2639.9699999998575 + ODC + 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 -ODC+ (6.5 * 4) + 0.9, 30.9800000000035, -2639.9699999998575 + ODC +(6.5* 1)+ 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   -107.31666667778545 - ODC+ (6.5 * 4) + 0.9, 30.9800000000035, -2639.9699999998575 + ODC +(6.5 * 2) + 0.1, 1,5,6.5, newMaterial("stat", "./wall2.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
door(-87.83666667778546, 30.9800000000035, -2612.989999999716, 1,5,6.5, newMaterial("stat", "./bigDoor1.png"), false, false, 1 === 1, function() { 
  isLarry = true;
  console.log(isLarry);
});

newObj(true, function() {}, function() {}, function() {}, false, -89.40666667778524, 30.9800000000035, -2615.369999999768, 1.5,1.5,1.5, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {sideMouth(-89.40666667778524, 30.9800000000035, -2615.369999999768,false, 15)});
newObj(true, function() {}, function() {}, function() {}, false, -89.40666667778524, 30.9800000000035, -2615.369999999768 +2, 1.5,1.5,1.5, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {sideMouth(-89.40666667778524, 30.9800000000035, -2615.369999999768 +2,false, 15)});
newObj(true, function() {}, function() {}, function() {}, false, -89.40666667778524, 30.9800000000035, -2615.369999997698 + 4, 1.5,1.5,1.5, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {medKit(-89.40666667778524, 30.9800000000035, -2615.369999997698 + 4)});

newObj(true, function() {}, function() {}, function() {}, false, -95.12666667778817, 29.360000000003247, -2619.779999999908, 1.5,1.5,1.5, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {});
newObj(true, function() {}, function() {}, function() {}, false, -95.12666667778817, 29.360000000003247, -2619.779999999908, 2,2,2, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {});
newObj(true, function() {}, function() {}, function() {}, false, -95.12666667778817 - ODC, 29.360000000003247, -2619.779999999908 + ODC, 2,2,2, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {});
newObj(true, function() {}, function() {}, function() {}, false, -100.52666667778817, 29.360000000003247, -2628.470000000368, 2,2,2, newMaterial("stat", "./box3.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {});
newObj(true, function() {}, function() {}, function() {}, false, -100.52666667778817 + 2, 29.360000000003247, -2628.470000000368 + 6.5, 1.5,1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {});
newObj(true, function() {}, function() {}, function() {}, false, -100.52666667778817 + 6.5, 29.360000000003247, -2628.470000000368 - 6.5, 1.5,1.5,1.5, newMaterial("stat", "./box1.png"), true, false, null,null,null, "floo",0, 0,0,0, false, 0.5, false, 6, function() {});
newCasualSoldier( -95.38666667778887, 29.58000000000328,-2630.830000000278, 15, false);
newCasualSoldier( -107.90666667779527, 29.58000000000328, -2619.4300000002777, 15, false);



};











if(sector === "END") {
   newLight(100000000, "rgb(255,255,255)", 0,0,0, false, false);

function row(n) {
  if(n == 0) {
newObj(true, function() {}, function() {}, function() {}, false,  0, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  6.5, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  13, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  19.5, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  26, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  32.5, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  39, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  45.5, 2, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
} else {
  newObj(true, function() {}, function() {}, function() {}, false,  0, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  6.5, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  13, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  19.5, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  26, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  32.5, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  39, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  45.5, 2, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
};
};

row(0);
row(1);
row(2);
row(3);
row(4);
row(5);
row(6);
row(7);


let code = [
  newMaterial("stat", "./tb.png"),
  newMaterial("stat", "./tb.png"),
  newMaterial("stat", "./tb_code.png"),
  newMaterial("stat", "./tb.png"),
   newMaterial("stat", "./tb.png"),
  newMaterial("stat", "./tb.png"),
];

let code1 = [
   newMaterial("stat", "./tb.png"),
  newMaterial("stat", "./tb.png"),
   newMaterial("stat", "./tb_code1.png"),
  newMaterial("stat", "./tb.png"),
   newMaterial("stat", "./tb.png"),
  newMaterial("stat", "./tb.png"),
];


newObj(true, function() {}, function() {}, function() {}, false,  49.22999999999926, 28.500000000001656, 22.750000000000757, 1,52,52, newMaterial("stat", "./wall1.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  49.22999999999926 - 52.9, 28.500000000001656, 22.750000000000757, 1,52,52, newMaterial("stat", "./wall1.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   22.73999999999998,  28.500000000001656, -3.699999999999965, 52,52,1, newMaterial("stat", "./wall1.png"), false, false, null,null,null, "floo",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,   22.73999999999998,  28.500000000001656, -3.699999999999965 + 52.8, 52,52,1, newMaterial("stat", "./wall1.png"), false, false, null,null,null, "floo",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 2.979999999999979, 5.910000000000151, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 3.979999999999979, 5.910000000000151 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 4.979999999999979, 5.910000000000151 + 6.5, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 5.979999999999979, 5.910000000000151 + 9.75, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 6.979999999999979, 5.910000000000151 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - 6.5, 6.979999999999979, 5.910000000000151 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - 13, 6.979999999999979, 5.910000000000151 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 7.979999999999979, 5.910000000000151 + 9.75 + 6.5, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 8.979999999999979, 5.910000000000151 + 9.75 + 9.75, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 9.979999999999979, 5.910000000000151 + 9.75 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 10.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 2), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - 6.5, 10.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 2), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - 13, 10.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 2), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 11.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 3), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 12.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 4), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999, 13.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - 6.5, 13.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 3), 14.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 4), 15.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 5), 16.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6), 17.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5,  newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 6.5, 17.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, code1, false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13, 17.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, code, false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 6.5, 17.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 3), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13, 17.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 3), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - 3.25, 16.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 2), 15.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 3), 14.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 13.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 5), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 12.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 4), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 11.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 3), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 10.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 2), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4) + 6.5, 10.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 2), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4) + 13, 10.979999999999979, 5.910000000000151 + 9.75 + 9.75 + (3.25 * 2), 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 9.979999999999979, 5.910000000000151 + 9.75 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 8.979999999999979, 5.910000000000151 + 9.75 + 9.75, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 7.979999999999979, 5.910000000000151 + 9.75 + 6.5, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 6.979999999999979, 5.910000000000151 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4) + 6.5, 6.979999999999979, 5.910000000000151 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4) + 13, 6.979999999999979, 5.910000000000151 + 9.75 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 5.979999999999979, 5.910000000000151 + 9.75, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 4.979999999999979, 5.910000000000151 + 6.5, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 3.979999999999979, 5.910000000000151 + 3.25, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false, 45.53999999999999 - (3.25 * 6) - 13 - (3.25 * 4), 2.979999999999979, 5.910000000000151, 6.5,1,6.5, newMaterial("stat", "./tb.png"), false, false, null,null,null, "floor",0, 0,0,0, false);



let controller = [
  newMaterial("stat", "./whatever_this_is.png"),
  newMaterial("stat", "./whatever_this_is.png"),
  newMaterial("stat", "./x.png"),
  newMaterial("stat", "./whatever_this_is.png"),
  newMaterial("stat", "./whatever_this_is.png"),
  newMaterial("stat", "./whatever_this_is.png")
];



newObj(true, function() {}, function() {}, function() {
  if(keys["f"] && keys["g"] && keys["c"] && keys["h"] || keys["F"] && keys["G"] && keys["C"] && keys["H"] && used === false) {
  playSound("./cbeep (1).wav");
  used = true;
codes_to_crack --;
  } else {
    playSound("./d.mp3");
  };
}, false, 13.159999999999757, 18.980000000000167,32.910000000002256, 6.5,1,2, controller, false, false, null,null,null, " ",0, 0,0,0, false);


newObj(true, function() {}, function() {}, function() {
  if(keys["f"] && keys["b"] && keys["c"] || keys["F"] && keys["B"] && keys["C"] &&used1 === false) {
  playSound("./cbeep (1).wav");
codes_to_crack --;
used1 = true;
  } else {
    playSound("./d.mp3");
  };
}, false, 13.159999999999757 + 6.5, 18.980000000000167,32.910000000002256, 6.5,1,2, controller, false, false, null,null,null, " ",0, 0,0,0, false);


ZOLINAK_SPEECIAL(27.410000000001478, 9.0099999999999785, 18.59000000000034, "0 dismension");

newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478, 3.87999999999996, 18.59000000000034, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478, 6.37999999999996, 18.59000000000034, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);

newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478-9.50, 3.87999999999996, 18.59000000000034, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478 - 9.50, 6.37999999999996, 18.59000000000034, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
ZOLINAK_SPEECIAL(27.410000000001478 - 9.50, 9.0099999999999785, 18.59000000000034, "0 dismension");

newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478, 3.87999999999996, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478, 3.87999999999996 + 2.5, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478, 8.87999999999996, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478, 8.87999999999996 + 2.5, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
ZOLINAK_SPEECIAL(27.410000000001478, 13.87999999999996, 31.790000000002404, "0 dismension");

let countd = 0;

newObj(true, function() {}, function() {
  if(req_destroy <= 0 && codes_to_crack <= 0) {
    countd ++;
    if(countd < 2) {
    release();
    /*
    Story time!
    I forgot to give this loop a countown so it only executes the release function once,
    so when I first tested the code I almost got a freaking heart attack because it was so sudden,
    and the sounds were so continous I almost jumped - there was also a delay in the sound because the loop first had to load
    all those sound files, so I was already deep in thinking about why it won't play..
    */
    };
  };
}, function() {}, false, 27.410000000001478 - 9.5, 3.87999999999996, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478 - 9.5, 3.87999999999996 + 2.5, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478 - 9.5, 8.87999999999996, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false, 27.410000000001478 - 9.5, 8.87999999999996 + 2.5, 31.790000000002404, 2.5,2.5,2.5, newMaterial("stat", "./box3.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
ZOLINAK_SPEECIAL(27.410000000001478 - 9.5, 13.87999999999996, 31.790000000002404, "0 dismension");

//THE ALIEN
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 8.99000000000001, 25.480000000001418, 2.5,13,2.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 15.729999999999867, 24.320000000001237, 6.5,1,6.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 16.719999999999974, 24.320000000001237, 1,1,1, newMaterial("stat", "./alien_brains.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  23.40000000000218, 16.719999999999974, 24.320000000001237, 1,1,1, newMaterial("stat", "./alien_brains.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  21.40000000000218, 16.719999999999974, 24.320000000001237, 1,1,1, newMaterial("stat", "./alien_brains.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 17.719999999999974, 24.320000000001237, 1,1,1, newMaterial("stat", "./alien_brains.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 16.719999999999974, 25.320000000001237, 1,1,1, newMaterial("stat", "./alien_brains.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 20.380000000000233, 21.2400000000006, 1.5,1.5,1.5, newMaterial("stat", "./eye.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.40000000000218, 19.39000000000039, 21.32000000000061, 6.5,6.5,0.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  25.40000000000265 , 22.370000000000857, 24.540000000001115, 0.5,0.5,6.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  19.40000000000265, 22.370000000000857, 24.540000000001115, 0.5,0.5,6.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  19.40000000000265, 19.31000000000038, 27.560000000001587, 0.5,6.5,0.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  25.40000000000265 , 19.31000000000038, 27.560000000001587, 0.5,6.5,0.5, newMaterial("stat", "./bloody_bone.png"), false, false, null,null,null, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.480000000002192, 19.210000000000363, 22.480000000000793, 0.5,5,0.5, newMaterial("stat", "./rrod.png"), false, true, -Math.PI /2/3,0,0, "flo",0, 0,0,0, true);
newObj(true, function() {}, function() {}, function() {}, false,  22.480000000002192, 16.62999999999996, 26.280000000001387, 0.5,0.5,1, newMaterial("stat", "./rrod.png"), false, true, 0,0,0, "flo",0, 0,0,0, true);

objects.push({
  object: new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    newMaterial("stat", "./eye.png")
  ),
 setCount: 0,
  c: 0,
  cd: 0,
  setter() {
    this.object.position.set(22.46000000000219, 16.709999999999894, 26.910000000001485);
    world.add(this.object);
    this.HCF_FUNC = () => {

if(this.c === 0) {
  this.c = 1;
} else {
  this.c = 0;
};
if(alienSpeaks === true) {
this.cd ++;
if(this.cd < 12) {
  if(this.c === 1) {
  this.object.position.x += 0.1;
  this.object.position.z -= 0.1;
  } else {
     this.object.position.x -= 0.1;
  this.object.position.z += 0.1;
  };
} else {
  this.cd = 0;
  this.object.position.set(22.46000000000219, 16.709999999999894, 26.910000000001485);
};
} 

    };
  }
});

newObj(true, function() {}, function() {}, function() {}, false,  20.660000000001908, 16.67999999999989, 26.200000000001374, 1,1,1, newMaterial("stat", "./heart.png"), false, true, 0,0,0, "flo",0, 0,0,0, true);



setInterval(function() {
if(addedCam.position.y < 16) {
if(Math.floor(Math.random() * 2) + 1 === 1) {
  medKit(10 + Math.floor(Math.random() * 70), 20 + Math.floor(Math.random() * 17), Math.floor(Math.random() * 50));
sideMouth(20.660000000001908, 4.570000000000029,3.3400000000000514, false, 25);

} else {
newCasualSoldier(20.660000000001908, 4.570000000000029, 3.3400000000000514, 20, false);
};
} else {
  if(Math.floor(Math.random() * 10) + 1 === 5) {
    playSound("./spawn.flac");
    newCasualSoldier(addedCam.position.x, addedCam.position.y, addedCam.position.z, 20, false);
  } else {
if(Math.floor(Math.random() * 4) +1 === 3) {
  if(Math.floor(Math.random() * 2) +1 === 1) {
sideMouth(17.4200000000014, 20.550000000000495, 38.22000000000104, false, 20);
  } else {
newCasualSoldier(17.4200000000014, 20.550000000000495, 38.22000000000104, 20, false);
  };
};
  };
};
}, 13000);

newCasualSoldier(17.4200000000014, 20.550000000000495, 38.22000000000104, 15, false);
medKit(18.340000000001545, 18.940000000000243, 43.01000000000009);
medKit(16.340000000001545, 18.940000000000243, 43.01000000000000);
medKit(20.340000000001545, 18.940000000000243, 43.01000000000000);
medKit(22.340000000001545, 18.940000000000243, 43.01000000000000);
medKit(14.340000000001545, 18.940000000000243, 43.01000000000000);
medKit( 47.01000000000102, 18.940000000000243, 43.01);
medKit(46.66000000000109, 16.129999999999804, 30.380000000001935);
newCasualSoldier(30.830000000003825, 13.109999999999847, 31.82000000000216, 7, false);
sideMouth(30.830000000003825, 13.109999999999847, 31.82000000000216 - 13, false, 7)

for(let i = 0; i < 10; i ++) {
  sideMouth(10 + Math.floor(Math.random() * 70), 20 + Math.floor(Math.random() * 17), Math.floor(Math.random() * 50), false, 5 + Math.floor(Math.random() * 15));
};

for(let i = 0; i < 5; i ++) {
  newCasualSoldier(10 + Math.floor(Math.random() * 70), 20 + Math.floor(Math.random() * 17), Math.floor(Math.random() * 50), 15, false);
};


newObj(true, function() {}, function() {}, function() {}, false,  11.390000000001278, 19.63000000000035, 36.29000000000143, 1,1,1, newMaterial("stat", "./box1.png"), true, true, 0,0,0, "flo",0, 0,0,0, true, 0.5, false, 5, function() {ammoBox(11.390000000001278, 19.63000000000035, 36.29000000000143,false,"pistol", 15)});



newObj(true, function() {}, function() {}, function() {}, false,    32.02000000000368, 3.000000000000062, 8.029999999999951, 1,1,1, newMaterial("stat", "./box1.png"), true, true, 0,0,0, "flo",0, 0,0,0, true, 0.5, false, 5, function() {ammoBox(32.02000000000368, 3.000000000000062, 8.029999999999951,false,"pistol", 15)});
newObj(true, function() {}, function() {}, function() {}, false,   12.070000000001263, 19.63000000000035, 30.98000000000212, 1,1,1, newMaterial("stat", "./box1.png"), true, true, 0,0,0, "flo",0, 0,0,0, true, 0.5, false, 5, function() {ammoBox(12.070000000001263, 12.099999999999868, 30.98000000000212,false,"pistol", 15)});






function rowCel(n) {
  if(n == 0) {
newObj(true, function() {}, function() {}, function() {}, false,  0, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  6.5, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  13, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  19.5, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  26, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  32.5, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  39, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  45.5, 42, 0, 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
} else {
  newObj(true, function() {}, function() {}, function() {}, false,  0, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  6.5, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  13, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  19.5, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  26, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  32.5, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  39, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
newObj(true, function() {}, function() {}, function() {}, false,  45.5, 42, (6.5 * n), 6.5,1,6.5, newMaterial("stat", "./GMBG.png"), false, false, null,null,null, "floor",0, 0,0,0, false);
};
};



rowCel(0);
rowCel(1);
rowCel(2);
rowCel(3);
rowCel(4);
rowCel(5);
rowCel(6);
rowCel(7);

};
























new2dObj(0,0, window.innerWidth, window.innerHeight, null, function()  {}, function() {}, function() {return isDark === true}, true, "black");

function ifInProgress() {
  let x = 0;
 let y = 0;
 let z = 0;
 let sx = 0;
 let sy = 0;
 let sz = 0;
 let rotated = false;
 let HCF = function() {

 };
 let onClick = function() {

 };
 let rx = 0;
 let ry = 0;
 let rz = 0;
 let mat = null;
 let coll = false;
 let grav = false;
 let slimeBehav = false;
 let isSettingX = false;


  function inObjectCreatWin() {
 newObj(coll, function() {}, HCF, onClick, slimeBehav, x, y, z, sx, sy, sz, mat, grav, rotated, rx, ry,rz);
  };
if(published === false) {


new2dObj(window.innerWidth /2-10, window.innerHeight /2-10, 20, 20, loadImg("./dev.insertTexture.png"), function() {}, function() {}, function() {return published === false}, true, "black");
new2dObj(0, 0, 50, 50, null, function() {saveVar(objects, "o")}, function() {}, function() {return "1" === "1"}, true, "red");
new2dObj(0, 0, window.innerWidth, window.innerHeight, loadImg("./GMBG.png"), function() {}, function(){}, function() {return isCerNewObj === true}, false, "urMom");
new2dObj(window.innerWidth /2 - 25, window.innerHeight /2 + window.innerHeight /2/2, 50, 50, null, function() {inObjectCreatWin(), isCerNewObj = false;}, function() {}, function() {return isCerNewObj === true}, true, "red");
new2dObj(window.innerWidth /2 /2/2, window.innerHeight /2/2/2/2, 50, 50, null, function() {

}, function() {console.log(x)}, function() {return isCerNewObj === true}, true, "white");

let addedCam = null;


addedCam = addPlayer(75, 1000, 0,0,0, {x:0,y:2,z:0}, 0.002, 0.01, 0.1);
addedCamBehav = function() { 
  const dir = new THREE.Vector3();
        const forward = new THREE.Vector3();
      addedCam.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();
      const right1 = new THREE.Vector3();
      right1.crossVectors(forward, addedCam.up).normalize();
      if (keys['w']) {
        if(keys["q"]) {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, addedCamspeed * 2)
        } else {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, addedCamspeed);
        }
      } else {
      
      };
      if (keys['s']) {
        if(keys["q"]) {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, -addedCamspeed * 2)
        } else {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        addedCam.position.addScaledVector(dir, -addedCamspeed);
        }
      } else {
      }
      const right = new THREE.Vector3();
      
      if (keys['a']) {
        addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        right.crossVectors(addedCam.up, dir).normalize();
        addedCam.position.addScaledVector(right, addedCamspeed);
      } else {
      
      };
      
      if (keys['d']) {
          addedCam.getWorldDirection(dir);
        dir.y = 0;
        dir.normalize();
        right.crossVectors(dir, addedCam.up).normalize();
        addedCam.position.addScaledVector(right, addedCamspeed);
      } else {
      };
      if(keys["q"]) {
        addedCam.position.y += addedCamspeed;
      };
      if(keys['e']) {
        addedCam.position.y -= addedCamspeed;
      };
      if(keys["x"]) {
        addedCamspeed += 0.05;
      };
      if(keys["y"]) {
        addedCamspeed -= 0.05;
      };
};



window.addEventListener("click", () => {
  if(tdmode === false) {
    renderer.domElement.requestPointerLock();
  };
  });

addedCam.rotation.order = "YXZ";

let yaw = 0;
let pitch = 0;

window.addEventListener("mousemove", e => {
   if (document.pointerLockElement) {
  yaw -= e.movementX * sens;
  pitch -= e.movementY * sens;
  pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));
  addedCam.rotation.set(pitch, yaw, 0);
   };
});


const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();


window.addEventListener("mousemove", e => {
 raycaster.setFromCamera(new THREE.Vector2(0,0), addedCam);
  

  const meshes = [];
  objects.forEach(o=>{
    if(o.object && o.object.parent){
      meshes.push(o.object);
    };
  });


  const hits = raycaster.intersectObjects(meshes,false);


  if(hits.length && o.isLast === true){
    hits[0].object.userData.onM?.();
  }; 
}),
window.addEventListener("keydown", e => keys[e.key] = true)
window.addEventListener("keyup", e => keys[e.key] = false)
window.addEventListener("mousedown", e => {

  objects2D.forEach((o) => {
    const rect = c.getBoundingClientRect();
const mx = (e.clientX - rect.left)
const my = (e.clientY - rect.top)
 let is = e.x >= o.x &&
            e.x <= o.x + o.sx &&
            e.y >= o.y &&
            e.y <= o.y + o.sy;

if(e.button === 0 && is) {
  o.onClick();
};
  });
  if(e.button !== 0) return;
    raycaster.setFromCamera(new THREE.Vector2(0,0), addedCam);


  const meshes = [];
  objects.forEach(o=>{
    if(o.object && o.object.parent){
      meshes.push(o.object);
    };
  const hits = raycaster.intersectObjects(meshes,false);
  if(hits.length){
    currentSelectedObject = "none";
  
    currentSelectedObject = o;
    return o;
  };
});
  });

let keyLock = {};

window.addEventListener("keydown", e=>{
  if(keyLock[e.key]) return;
  keyLock[e.key] = true;
});

window.addEventListener("keyup", e=>{
  keyLock[e.key] = false;
});


function moveSelOBJ() {
  if(currentSelectedObject !== "none") {
    console.log(currentSelectedObject.object.position);
  if(keys["t"]) {
    currentSelectedObject.object.position.y += 0.01;
  };
  if(keys["g"]) {
    currentSelectedObject.object.position.y -= 0.01;
  };
  if(keys["f"]) {
    currentSelectedObject.object.position.x += 0.01;
  };
  if(keys["h"]) {
    currentSelectedObject.object.position.x -= 0.01;
  };
  if(keys["b"]) {
    currentSelectedObject.object.position.z -= 0.01;
  };
  if(keys["v"]) {
    currentSelectedObject.object.position.z += 0.01;
  };
};
  if(keys["Shift"]) {
    currentSelectedObject = "none";
  };
  if(keys["Control"]) {
    document.body.releasePointerCapture();
  };
  if(keys["m"]) {
    tdmode = true;
  };
  if(keys["n"]) {
    tdmode = false;
  };
  if(isSettingX === true) {
    if(keys["ArrowUp"]) {
      x ++;
    };
    if(keys["arrowDown"]) {
      x --;
    };
  };
};

//RENDER FUNCTION
function render() {
  moveSelOBJ();
ctx.clearRect(0, 0, c.width, c.height);
if(addedCam !== null) {
  addedCamBehav();
};
objects.forEach((o) => {
if(o.setCount < 1) {
  o.setCount ++;
o.setter();
};
if(o.type && o.type === "light") {
  o.HCF_FUNC();
};
});
renderer.setSize(window.innerWidth, window.innerHeight);
if(addedCam !== null) {
renderer.render(world, addedCam);
};
    objects2D.forEach((o) => {
      if(o.A_W() && o.img) {
        ctx.drawImage(o.img, o.x, o.y, o.sx, o.sy);
        o.HCF_FUNC();
      };
      if(o.A_W() && o.col) {
        ctx.fillStyle = o.col;
        ctx.fillRect(o.x, o.y, o.sx, o.sy);
        o.HCF_FUNC();
      };
    });
    saveVar(addedCam.position.x, "px");
    saveVar(addedCam.position.y, "py");
    saveVar(addedCam.position.z, "pz");
    requestAnimationFrame(render);
    console.log(currentSelectedObject);
    console.log(objects.length);
};
render();


};
};
if(published === true) {
  ifPublished();
} else {
  ifInProgress();
  console.log("Current objects in the game: " + objects.length);
};

};
renderAndPlay();

export {renderAndPlay};

//FOR LATER USE!!
/* 



*/