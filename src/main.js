import * as THREE from 'three';
import * as DATGUI from 'datgui';
import * as CONTROLS from 'controls';
import * as TWEEN from 'tween';
import Stats from 'stats';

// Own modules
import HotelBody from './objects/HotelBody.js';
import PinesFromFile from './objects/PinesFromFile.js';
import StrawFromFile from './objects/StrawFromFile.js';
import GridTopFromFile from './objects/GridTopFromFile.js';
import GridBottomFromFile from './objects/GridBottomFromFile.js';
import HotelWoodBigStack from './objects/HotelWoodBigStack.js';
import HotelWoodSmallStack from './objects/HotelWoodSmallStack.js';
import HotelBodyFromFile from './objects/HotelBodyFromFile.js';
import SceneFromFile from './objects/SceneFromFile.js';
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
  window.scene.add(hotelBodyFromFile);

  const smallWoodLeftFromFile = new SmallWoodLeftFromFile();
  smallWoodLeftFromFile.scale.set(0.85, 0.85, 0.85);
  smallWoodLeftFromFile.position.set(-15, 21.3, 10);
  smallWoodLeftFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(smallWoodLeftFromFile);

  const smallWoodRightFromFile = new SmallWoodRightFromFile();
  smallWoodRightFromFile.scale.set(0.85, 0.85, 0.85);
  smallWoodRightFromFile.position.set(-15, 21.3, 10);
  smallWoodRightFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(smallWoodRightFromFile);

  const gridBottomFromFile = new GridBottomFromFile();
  gridBottomFromFile.scale.set(0.85, 0.85, 0.85);
  gridBottomFromFile.position.set(-15, 21.3, 10);
  gridBottomFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(gridBottomFromFile);

  const gridTopFromFile = new GridTopFromFile();
  gridTopFromFile.scale.set(0.85, 0.85, 0.85);
  gridTopFromFile.position.set(-15, 21.3, 10);
  gridTopFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(gridTopFromFile);

  const strawFromFile = new StrawFromFile();
  strawFromFile.scale.set(0.85, 0.85, 0.85);
  strawFromFile.position.set(-15, 21.3, 10);
  strawFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(strawFromFile);

  const pinesFromFile = new PinesFromFile();
  pinesFromFile.scale.set(0.85, 0.85, 0.85);
  pinesFromFile.position.set(-15, 21.3, 10);
  pinesFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(pinesFromFile);



  const bigWoodFromFile = new BigWoodFromFile();
  bigWoodFromFile.scale.set(0.85, 0.85, 0.85);
  bigWoodFromFile.position.set(-15, 21.3, 10);
  bigWoodFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
  window.scene.add(bigWoodFromFile);

  //HOTEL

  const hotelBody = new HotelBody();
  hotelBody.scale.set(0.85, 0.85, 0.85);
  hotelBody.updateMatrix();
  hotelBody.position.set(70, 20.6, -5);
  hotelBody.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  hotelBody.addPhysics();
  window.scene.add(hotelBody);

  const bigWoodStack = new HotelWoodBigStack();
  bigWoodStack.position.set(0, 5, 0);
  bigWoodStack.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  window.scene.add(bigWoodStack);

  const smallWoodStackLeft = new HotelWoodSmallStack();
  smallWoodStackLeft.position.set(47.5, -18, -5);
  smallWoodStackLeft.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
  window.scene.add(smallWoodStackLeft);
  const smallWoodStackRight = new HotelWoodSmallStack();
  smallWoodStackRight.position.set(70.2, -18, 6);
  smallWoodStackRight.rotation.set(hotelRotation[0], hotelRotation[1]+THREE.MathUtils.degToRad(180), hotelRotation[2]);
  window.scene.add(smallWoodStackRight);

  //SCENE
  const sceneFromFile = new SceneFromFile();
  sceneFromFile.position.set(0, 140, 0);
  sceneFromFile.scale.set(4,4,4);
  window.scene.add(sceneFromFile);

  //LIGHT

  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.3;
  window.scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff);
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

  const stats = new Stats();
  document.body.appendChild(stats.dom);

  const gui = new DATGUI.GUI();
  gui.add(spotLight.position, 'x', 0, 200);
  gui.add(spotLight.position, 'y', 0, 200);
  gui.add(spotLight.position, 'z', 0, 200);

  const orbitControls = new CONTROLS.OrbitControls(window.camera, window.renderer.domElement);
  orbitControls.target = new THREE.Vector3(0, 0, 0);
  orbitControls.update();

  const clock = new THREE.Clock();

  function mainLoop() {
    stats.begin();
    const delta = clock.getDelta();

    /*television.animations.forEach(function (animation) {
      animation.update(delta);
    });*/

    TWEEN.update();

    /*if (televisionFromFile.animationMixer !== null) {
      televisionFromFile.animationMixer.update(delta);
    }*/

    window.physics.update(delta);


    window.renderer.render(window.scene, window.camera);


    stats.end();
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