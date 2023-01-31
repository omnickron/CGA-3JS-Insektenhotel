import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class SmallWoodRightFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisSmallWoodRightFromFile) {

    this.gltfLoader.load('src/models/smallWoodRight.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -45, 0); // Shift loaded model down half its height
      thisSmallWoodRightFromFile.add(gltf.scene);
      thisSmallWoodRightFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [6.8,-39.5,-13.5],     // 0
      [6.8,-27.5,-13.5],    // 1
      [-1,-27.5,-13.5],    // 2
      [-1,-39.5,-13.5],    // 3
      [6.8,-39.5,2.5],     // 4
      [6.8,-27.5,2.5],    // 5
      [-1,-27.5,2.5],    // 6
      [-1,-39.5,2.5],    // 7

    ];
    const indices = [
      [3,2,1,0],
      [4, 5, 6, 7],
      [0, 1, 4, 5],
      [3, 7, 6, 2],
      [5,6,1,2],
      [4,7,0,3],

    ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}