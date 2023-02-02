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
    window.physics.addCylinder(this, 0, 75, 75,150,10, this.offsetX = 0, this.offsetY = -160, this.offsetZ = -120);
    window.physics.addCylinder(this, 0, 60, 60,100,10, this.offsetX = 110, this.offsetY = -150, this.offsetZ = -100);
    window.physics.addCylinder(this, 0, 8, 6,150,10, this.offsetX = 162, this.offsetY = -150, this.offsetZ = -58);
    window.physics.addCylinder(this, 0, 25, 25,150,10, this.offsetX = -53, this.offsetY = -150, this.offsetZ = -23);
    window.physics.addCylinder(this, 0, 20, 50,50,10, this.offsetX = -123, this.offsetY = -170, this.offsetZ = -23);
  }
}
