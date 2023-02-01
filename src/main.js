import * as THREE from 'three';
import * as DATGUI from 'datgui';
import * as CONTROLS from 'controls';
import * as TWEEN from 'tween';
import SceneFromFile from './objects/SceneFromFile.js';
import GlowWormManager from './objects/GlowWormManager.js';
import Physics from './physics/Physics.js';
import FullHotel from './objects/FullHotel.js';
import FullHotelFromFile from './objects/FullHotelFromFile.js';

// Event functions
import {updateAspectRatio} from './eventfunctions/updateAspectRatio.js';
import {executeRaycast} from './eventfunctions/executeRaycast.js';
import {keyDownAction, keyUpAction} from './eventfunctions/executeKeyAction.js';


function main() {

    window.camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    window.camera.position.set(0, 100, 300);

    window.scene = new THREE.Scene();
    //window.scene.add(new THREE.AxesHelper(50));
    window.scene.background = new THREE.Color('#87ceeb');

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

    window.hotelRotation = [0, THREE.MathUtils.degToRad(-25), 0];
    window.hotelFromFileRotation = [0, THREE.MathUtils.degToRad(25), 0];

    window.timeTracker = {
        switch: false
    };
    window.waitNight = 0;
    window.animationRunning = false;
    window.glowWormsDidFly = false;


//HOTEL FROM FILE
    const fullHotelFromFile = new FullHotelFromFile();
    fullHotelFromFile.scale.set(0.85, 0.85, 0.85);
    fullHotelFromFile.updateMatrix();
    fullHotelFromFile.position.set(-15, 21.3, 10);
    fullHotelFromFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
    fullHotelFromFile.addPhysics();
    window.scene.add(fullHotelFromFile);

    //HOTEL
    const fullHotel = new FullHotel();
    //fullHotel.scale.set(0.85, 0.85, 0.85);
    fullHotel.updateMatrix();
    fullHotel.position.set(70, 20.6, -5);
    fullHotel.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
    fullHotel.addPhysics();
    window.scene.add(fullHotel);

    //GLOWWORMS
    const glowWormManagerForFile = new GlowWormManager();
    glowWormManagerForFile.position.set(8, -40, 50);
    glowWormManagerForFile.rotation.set(hotelFromFileRotation[0], hotelFromFileRotation[1], hotelFromFileRotation[2]);
    window.scene.add(glowWormManagerForFile);

    const glowWormManager = new GlowWormManager();
    glowWormManager.position.set(50, -40, 50);
    glowWormManager.rotation.set(hotelRotation[0], hotelRotation[1], hotelRotation[2]);
    window.scene.add(glowWormManager);

    //SCENE
    const sceneFromFile = new SceneFromFile();
    sceneFromFile.position.set(0, 140, 0);
    sceneFromFile.scale.set(4, 4, 4);
    window.scene.add(sceneFromFile);

    //LIGHT

    const ambientLight = new THREE.AmbientLight(0xffcf87);
    ambientLight.intensity = 0.3;
    window.scene.add(ambientLight);
    const spotLight = new THREE.SpotLight(0xffac63);
    spotLight.position.set(90, 40, 80);
    spotLight.intensity = 0.7;
    //spotLight.target = hotelBody;
    spotLight.angle = THREE.MathUtils.degToRad(70);
    spotLight.penumbra = 1.0;
    spotLight.castShadow = true;
    spotLight.shadow.mapSize.set(2048, 2048);
    spotLight.shadow.camera.aspect = 1;
    spotLight.shadow.camera.near = 100;
    spotLight.shadow.camera.far = 500;
    spotLight.shadow.bias = -0.001;
    window.scene.add(spotLight);

    //gui.open();
    const gui = new DATGUI.GUI();
    gui.add(timeTracker, "switch").name("Nachtmodus");

    const orbitControls = new CONTROLS.OrbitControls(window.camera, window.renderer.domElement);
    orbitControls.target = new THREE.Vector3(0, 0, 0);
    orbitControls.update();

    const clock = new THREE.Clock();

    function mainLoop() {
        updateDayTime(ambientLight, spotLight);

        //animateGlowWorms
        if (window.timeTracker.switch){
            window.waitNight++
            if(!window.glowWormsDidFly && (window.waitNight > 100 || window.animationRunning)){
                window.animationRunning = true;
                glowWormManagerForFile.updatePositions();
                glowWormManager.updatePositions();
            }
        }else{
            window.waitNight = 0;
            window.glowWormsDidFly = false;
            if(window.animationRunning){
                glowWormManagerForFile.updatePositions();
                glowWormManager.updatePositions();
            }
        }
        const delta = clock.getDelta();
        TWEEN.update();
        window.physics.update(delta);
        window.renderer.render(window.scene, window.camera);
        requestAnimationFrame(mainLoop);
    }

    mainLoop();
}

function updateDayTime(ambientLight, spotLight) {
    const debugOn = false;
    let sceneBackgroundColor = {
        day: '#87ceeb',
        night: '#202f36'
    }
    //SWITCH TO DAY MODE
    if (!debugOn && !window.timeTracker.switch) {
        window.scene.background = new THREE.Color(sceneBackgroundColor.day);
        sceneBackgroundColor.isNight = false;
        ambientLight.intensity = 0.3;
        ambientLight.color.setHex( 0xff9a63 );
        spotLight.color.setHex( 0xff9a63 );
        spotLight.intensity = 0.7;

        //SWITCH TO NIGHT MODE
    } else if (!debugOn && window.timeTracker.switch) {
        ambientLight.intensity = 0.035;
        ambientLight.color.setHex( 0x87acd6 );
        spotLight.color.setHex( 0x87acd6 );
        spotLight.intensity = 0.07;
        scene.background = new THREE.Color(sceneBackgroundColor.night);
        sceneBackgroundColor.isNight = true
    }
}

document.getElementById("startButton").addEventListener("click", function () {
    main();
    document.getElementById("overlay").remove();
    window.onresize = updateAspectRatio;
    window.onclick = executeRaycast;
    window.onkeydown = keyDownAction;
    window.onkeyup = keyUpAction;
});