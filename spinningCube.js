import * as tr from "three";

let r = 0
let g = 0;
let b = 250
let color = new tr.MeshBasicMaterial({ color: "rgb(" + r + ", " + g + ', ' + b + ")"});

let scene = new tr.Scene()
scene.background = new tr.Color("rgb(255, 255, 255)");


let renderer = new tr.WebGLRenderer()

document.body.appendChild(renderer.domElement)

renderer.domElement.style.display = "block";
renderer.domElement.style.margin = "auto";
renderer.domElement.style.position = "absolute";
renderer.domElement.style.top = "-5%";
renderer.domElement.style.left = "100%";
renderer.domElement.style.transform = "translate(-100%, -5%)";

renderer.domElement.width = 200
renderer.domElement.height = 200

let cube = new tr.Mesh(
    new tr.BoxGeometry(0.7, 1, 0.7),
    color
);
cube.position.set(-1, 0, 1);

scene.add(cube)
let cam = new tr.PerspectiveCamera(90, renderer.domElement.width / renderer.domElement.height, 0.5, 1000)

cam.position.set(1, 0, 1)
cam.lookAt(-1, 0, 1)
cam.rotation.y = 1.2907963267948963
cam.position.x = 0.15999999999999925

let dir = 1;
let dirCount = 0;
let colorCount = 0;

function render() {
    if(colorCount < 90) {
       colorCount ++
    } else {
        colorCount = 0;
         r = 1 + Math.floor(Math.random() * 255)
         g = 1 + Math.floor(Math.random() * 255)
          b = 1 + Math.floor(Math.random() * 255)
            scene.remove(cube);
            color =  new tr.MeshBasicMaterial({ color: "rgb(" + r + ", " + g + ', ' + b + ")"});
            cube.material = color
            scene.add(cube)
    };
if(dirCount < 600) {
    dirCount ++
} else {
    dirCount = 0;
    dir = Math.floor(Math.random() * 2) + 1
}


if(dir === 2) {
    cube.rotation.y += 0.04
}
if(dir === 1) {
    cube.rotation.y -= 0.04
}
    requestAnimationFrame(render)
    renderer.render(scene, cam)
};

render()