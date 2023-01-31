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
      [-15.3,-39.5,-13.5],     // 0 x
      [-15,-27.5,-13.5],    // 1
      [-22.8,-27.5,-13.5],    // 2
      [-22.8,-39.5,-13.5],    // 3x
      [-15,-39.5,2.5],     // 4x
      [-15,-27.5,2.5],    // 5
      [-22.8,-27.5,2.5],    // 6
      [-22.8,-39.5,2.5],    // 7x

    ];
    const indices = [
      [3,2,1,0],
      [4, 5, 6, 7],
      [4,5,0,1],
      [3, 7, 6, 2],
      [5,6,1,2],
      [4,7,0,3]
        ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}