import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class PinesFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisPinesFromFile) {

    this.gltfLoader.load('src/models/pines.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -45, 0); // Shift loaded model down half its height
      thisPinesFromFile.add(gltf.scene);
      thisPinesFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [22.3,-2,-9.5],     // 0
      [18,13,-9.5],    // 1
      [0,13,-9.5],    // 2
      [-3.5,-2,-9.5],    // 3
      [22.3,-2,3.5],     // 4
      [18,13,0],    // 5
      [0,13,0],    // 6
      [-3.5,-2,3.5],    // 7

    ];
    const indices = [
      [0, 1, 2, 3],
      [4, 5, 6, 7],
      [0, 1, 4, 5],
      [3, 7, 6, 2],
      [1, 2, 5, 6],
      [0, 3, 4, 7],

    ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}