import * as THREE from 'three';
import * as DATGUI from 'datgui';
import * as CONTROLS from 'controls';
import * as TWEEN from 'tween';
import Stats from 'stats';

// Own modules
import HotelBody from './objects/HotelBody.js';
import HotelBodyFromFile from './objects/HotelBodyFromFile.js';
import GrassFromFile from './objects/GrassFromFile.js';
import Physics from './physics/Physics.js';

// Event functions
import {updateAspectRatio} from './eventfunctions/updateAspectRatio.js';
import {executeRaycast} from './eventfunctions/executeRaycast.js';
import {keyDownAction, keyUpAction} from './eventfunctions/executeKeyAction.js';

function main() {


  window.scene = new THREE.Scene();
  window.scene.add(new THREE.AxesHelper(50));

  window.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  window.camera.position.set(-100, 300, 300);

  window.renderer = new THREE.WebGLRenderer({antialias: true});
  window.renderer.setSize(window.innerWidth, window.innerHeight);
  window.renderer.setClearColor(0xffffff);
  window.renderer.shadowMap.enabled = true;

  window.physics = new Physics();
  window.physics.setup(0, -200, 0, 1 / 240, true);

  window.audioListener = new THREE.AudioListener();
  window.camera.add(window.audioListener);

  document.getElementById('3d_content').appendChild(window.renderer.domElement);

  const hotelBody = new HotelBody();
  hotelBody.position.set(0, 70, 0);
  //hotelBody.position.set(60, 70, 0);
  //hotelBody.rotation.set(0, THREE.MathUtils.degToRad(10), 0);
  //hotelBody.addPhysics();
  window.scene.add(hotelBody);

  const hotelBodyFromFile = new HotelBodyFromFile();
  hotelBodyFromFile.position.set(0, 70, 0);
  //hotelBodyFromFile.position.set(-60, 70, 0);
  //hotelFromhotelBodyFromFileFile.addPhysics();
  //window.scene.add(hotelBodyFromFile);

  const grassFromFile = new GrassFromFile();
  grassFromFile.position.set(0, 50, -10);
  //hotelFromFile.position.set(-60, 70, 0);
  //hotelFromFile.addPhysics();
 // window.scene.add(grassFromFile);

  const ambientLight = new THREE.AmbientLight(0xffffff);
  ambientLight.intensity = 0.5;
  window.scene.add(ambientLight);

  const spotLight = new THREE.SpotLight(0xffffff);
  spotLight.position.set(100, 20, 200);
  spotLight.intensity = 1.7;
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