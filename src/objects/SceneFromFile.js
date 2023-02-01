import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class SceneFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisSceneFromFile) {

    this.gltfLoader.load('src/models/scene/scene.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -45, 0); // Shift loaded model down half its height
      thisSceneFromFile.add(gltf.scene);
      thisSceneFromFile.loadingDone = true;
    });
  }
  addPhysics() {

    //addCylinder(object, mass, upperRadius, lowerRadius, height, segments
    //offsetX = 0, offsetY = 0, offsetZ = 0,
    //               eulerX = 0, eulerY = 0, eulerZ = 0,
    //               sleeping = false) {
    window.physics.addCylinder(this, 0, 25, 130,150,8, this.offsetX = 10, this.offsetY = -160, this.offsetZ = -120);
    window.physics.addCylinder(this, 0, 18, 80,100,8, this.offsetX = 95, this.offsetY = -150, this.offsetZ = -110);
    window.physics.addCylinder(this, 0, 8, 6,150,8, this.offsetX = 162, this.offsetY = -150, this.offsetZ = -58);
    window.physics.addCylinder(this, 0, 20, 35,150,8, this.offsetX = -53, this.offsetY = -150, this.offsetZ = -23);
    window.physics.addCylinder(this, 0, 20, 50,50,8, this.offsetX = -123, this.offsetY = -170, this.offsetZ = -23);
  }
}
