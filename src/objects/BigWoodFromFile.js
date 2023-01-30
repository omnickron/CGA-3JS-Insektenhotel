import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class BigWoodFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisBigWoodFromFile) {

    this.gltfLoader.load('src/models/bigWood.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -45, 0); // Shift loaded model down half its height
      thisBigWoodFromFile.add(gltf.scene);
      thisBigWoodFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [24.3,-4,-9.5],     // 0
      [20.3,9.5,-9.5],    // 1
      [3,9.5,-9.5],    // 2
      [-3.5,-4,-9.5],    // 3
      [24.3,-4,6],     // 4
      [20.3,9.5,6],    // 5
      [3,9.5,6],    // 6
      [-3.5,-4,6],    // 7

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