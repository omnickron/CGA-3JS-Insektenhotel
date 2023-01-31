import * as THREE from 'three';
import * as DATGUI from 'datgui';
import * as CONTROLS from 'controls';
import * as TWEEN from 'tween';
import Stats from 'stats';

// Own modules
import HotelBody from './objects/HotelBody.js';
import PinesFromFile from './objects/PinesFromFile.js';
import StrawFromFile from './objects/StrawFromFile.js';
import HotelStrawStack from './objects/HotelStrawStack.js';
import GridTopFromFile from './objects/GridTopFromFile.js';
import GridBottomFromFile from './objects/GridBottomFromFile.js';
import HotelWoodBigStack from './objects/HotelWoodBigStack.js';
import HotelWoodSmallStack from './objects/HotelWoodSmallStack.js';
import HotelBodyFromFile from './objects/HotelBodyFromFile.js';
import SceneFromFile from './objects/SceneFromFile.js';
import HotelPineStack from './objects/HotelPineStack.js';
import SmallWoodLeftFromFile from './objects/SmallWoodLeftFromFile.js';
import SmallWoodRightFromFile from './objects/SmallWoodRightFromFile.js';
import BigWoodFromFile from './objects/BigWoodFromFile.js';
import Physics from './physics/Physics.js';

// Event functions
import {updateAspectRatio} from './eventfunctions/updateAspectRatio.js';
import {executeRaycast} from './eventfunctions/executeRaycast.js';
import {keyDownAction, keyUpAction} from './eventfunctions/executeKeyAction.js';

function main() {


  window.scene = new THREE.Scene();
  window.scene.add(new THREE.AxesHelper(50));

  window.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  window.camera.position.set(0, 100, 300);

  window.renderer = new THREE.WebGLRenderer({antialias: true});
  window.renderer.setSize(window.innerWidth, window.innerHeight);
  window.renderer.setClearColor(0xffffff);
  window.renderer.outputEncoding = THREE.sRGBEncoding;
  window.renderer.shadowMap.enabled = true;

  window.physics = new Physics();
  window.physics.setup(0, -200, 0, 1 / 240, true);

  window.audioListener = new THREE.AudioListener();
  window.camera.add(window.audioListener);

  document.getElementById('3d_content').appendChild(window.renderer.domElement);

  const hotelRotation = [0, THREE.MathUtils.degToRad(-25), 0];
  const hotelFromFileRotation = [0, THREE.MathUtils.degToRad(25), 0];


//HOTEL FROM FILE

  const hotelBodyFromFile = new HotelBodyFromFile();
  hotelBodyFromFile.scale.set(0.85, 0.85, 0.85);
  hotelBodyFromFile.updateMatrix();
  hotelBodyFromFile.position.set(-15, 21.3, 10);
  hotelBodyFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  hotelBodyFromFile.addPhysics();

  const smallWoodLeftFromFile = new SmallWoodLeftFromFile();
  smallWoodLeftFromFile.scale.set(0.85, 0.85, 0.85);
  smallWoodLeftFromFile.position.set(-15, 21.3, 10);
  smallWoodLeftFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  smallWoodLeftFromFile.addPhysics();

  const smallWoodRightFromFile = new SmallWoodRightFromFile();
  smallWoodRightFromFile.scale.set(0.85, 0.85, 0.85);
  smallWoodRightFromFile.position.set(-15, 21.3, 10);
  smallWoodRightFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  smallWoodRightFromFile.addPhysics();

  const gridBottomFromFile = new GridBottomFromFile();
  gridBottomFromFile.scale.set(0.85, 0.85, 0.85);
  gridBottomFromFile.position.set(-15, 21.3, 10);
  gridBottomFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);

  const gridTopFromFile = new GridTopFromFile();
  gridTopFromFile.scale.set(0.85, 0.85, 0.85);
  gridTopFromFile.position.set(-15, 21.3, 10);
  gridTopFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);

  const strawFromFile = new StrawFromFile();
  strawFromFile.scale.set(0.85, 0.85, 0.85);
  strawFromFile.position.set(-15, 21.3, 10);
  strawFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  strawFromFile.addPhysics();

  const pinesFromFile = new PinesFromFile();
  pinesFromFile.scale.set(0.85, 0.85, 0.85);
  pinesFromFile.position.set(-15, 21.3, 10);
  pinesFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  pinesFromFile.addPhysics();

  const bigWoodFromFile = new BigWoodFromFile();
  bigWoodFromFile.scale.set(0.85, 0.85, 0.85);
  bigWoodFromFile.position.set(-15, 21.3, 10);
  bigWoodFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
 bigWoodFromFile.addPhysics();

  //HOTEL

  const hotelBody = new HotelBody();
  hotelBody.scale.set(0.85, 0.85, 0.85);
  hotelBody.updateMatrix();
  hotelBody.position.set(70, 20.6, -5);
  hotelBody.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  hotelBody.addPhysics();

  const bigWoodStack = new HotelWoodBigStack();
  bigWoodStack.position.set(50, -1.2, -5);
  bigWoodStack.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  bigWoodStack.addPhysics();

    const strawStack = new HotelStrawStack();
    strawStack.position.set(51.6, 10, -4);
    strawStack.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
    strawStack.addPhysics();

  const smallWoodStackLeft = new HotelWoodSmallStack();
  smallWoodStackLeft.position.set(47.5, -18, -5);
  smallWoodStackLeft.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  smallWoodStackLeft.addPhysics();

  const smallWoodStackRight = new HotelWoodSmallStack();
  smallWoodStackRight.position.set(70.2, -18, 6);
  smallWoodStackRight.rotation.set(hotelRotation[0], hotelRotation[1]+THREE.MathUtils.degToRad(180), hotelRotation[2]);
  smallWoodStackRight.addPhysics();

  const pineStack = new HotelPineStack();
  pineStack.position.set(50, -34.4, 0);
  pineStack.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  pineStack.addPhysics();


  //ADD HOTEL FROM FILE COMPONENTS
  //window.scene.add(bigWoodFromFile);
  //window.scene.add(pinesFromFile);
  //window.scene.add(gridTopFromFile);
  //window.scene.add(strawFromFile);
  //window.scene.add(gridBottomFromFile);
  //window.scene.add(smallWoodRightFromFile);
  //window.scene.add(smallWoodLeftFromFile);
  //window.scene.add(hotelBodyFromFile);


  //ADD HOTEL COMPONENTS
  //window.scene.add(hotelBody);
  //window.scene.add(bigWoodStack);
  // window.scene.add(strawStack);
  //window.scene.add(smallWoodStackLeft);
  //window.scene.add(smallWoodStackRight);
  //window.scene.add(pineStack);

  //SCENE
  const sceneFromFile = new SceneFromFile();
  sceneFromFile.position.set(0, 140, 0);
  sceneFromFile.scale.set(4,4,4);
  window.scene.add(sceneFromFile);

  //LIGHT

  const ambientLight = new THREE.AmbientLight(0xffcf87);
  ambientLight.intensity = 0.3;
  window.scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffac63);
  spotLight.position.set(100, 20, 200);
  spotLight.intensity = 0.7;
  spotLight.target = hotelBody;
  spotLight.angle = THREE.MathUtils.degToRad(30);
  spotLight.penumbra = 1.0;
  spotLight.castShadow = true;
  spotLight.shadow.mapSize.set(2048, 2048);
  spotLight.shadow.camera.aspect = 1;
  spotLight.shadow.camera.near = 100;
  spotLight.shadow.camera.far = 500;
  spotLight.shadow.bias = -0.001;
  //window.scene.add(new THREE.CameraHelper(spotLight.shadow.camera));
  window.scene.add(spotLight);

  //const stats = new Stats();
  //document.body.appendChild(stats.dom);

  const gui = new DATGUI.GUI();
  gui.add(spotLight.position, 'x', 0, 200);
  gui.add(spotLight.position, 'y', 0, 200);
  gui.add(spotLight.position, 'z', 0, 200);

  const orbitControls = new CONTROLS.OrbitControls(window.camera, window.renderer.domElement);
  orbitControls.target = new THREE.Vector3(0, 0, 0);
  orbitControls.update();

  const clock = new THREE.Clock();

  function mainLoop() {
    //stats.begin();
    const delta = clock.getDelta();
    TWEEN.update();
    window.physics.update(delta);
    window.renderer.render(window.scene, window.camera);
    //stats.end();
    requestAnimationFrame(mainLoop);
  }

  mainLoop();
}

document.getElementById("startButton").addEventListener("click", function () {
  main();
  document.getElementById("overlay").remove();
  window.onresize = updateAspectRatio;
  window.onclick = executeRaycast;
  window.onkeydown = keyDownAction;
  window.onkeyup = keyUpAction;
});