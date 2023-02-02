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
      gltf.scene.position.set(0, -25, 0); // Shift loaded model down half its height
      thisPinesFromFile.add(gltf.scene);
      thisPinesFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [7.3,-56,-12],     // 0x
      [5,-42,-12],    // 1x
      [-19,-42,-12],    // 2
      [-23,-56,-12],    // 3
      [7.3,-56,3.5],     // 4x
      [5,-42,0],    // 5x
      [-19,-42,0],    // 6
      [-23,-56,3.5],    // 7

    ];
    const indices = [
      [3,2,1,0],
      [7,6,5,4],
      [4,1,0,5],
      [3, 7, 6, 2],
      [5,6,2,1],
      [4,7,3,0],

    ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}