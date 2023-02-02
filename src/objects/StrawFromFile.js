import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class StrawFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisStrawFromFile) {

    this.gltfLoader.load('src/models/straw.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -25, 0); // Shift loaded model down half its height
      thisStrawFromFile.add(gltf.scene);
      thisStrawFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [-16.5,-11,4],     // 0
      [-16.5,-11,-12.5],    // 1
      [1,-11,4],    // 2
      [1,-11,-12.5],    // 3
      [-7,0,4],     // 4
      [-7,0,-12.5],    // 5

    ];
    const indices = [
      [3,2,1,0],
      [4,5,2,3],
      [4,5,0,1],
      [5,3,1],
      [0,2,4],
    ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}