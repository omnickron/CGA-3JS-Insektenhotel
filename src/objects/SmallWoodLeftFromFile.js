import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class SmallWoodLeftFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisSmallWoodLeftFromFile) {

    this.gltfLoader.load('src/models/smallWoodLeft.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -45, 0); // Shift loaded model down half its height
      thisSmallWoodLeftFromFile.add(gltf.scene);
      thisSmallWoodLeftFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [6,-1,-7.5],     // 0
      [6,11,-7.5],    // 1
      [-2,11,-7.5],    // 2
      [-2,-1,-7.5],    // 3
      [6,-1,7.5],     // 4
      [6,11,7.5],    // 5
      [-2,11,7.5],    // 6
      [-2,-1,7.5],    // 7

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