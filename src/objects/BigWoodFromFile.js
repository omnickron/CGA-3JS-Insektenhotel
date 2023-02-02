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
      gltf.scene.position.set(0, -25, 0); // Shift loaded model down half its height
      thisBigWoodFromFile.add(gltf.scene);
      thisBigWoodFromFile.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [6.6,-25.5,-13.6],     // 0
      [5.3,-12.5,-13.6],    // 1
      [-19,-12.5,-13.6],    // 2
      [-21,-25.5,-13.6],    // 3
      [6.6,-25.5,4.2],     // 4
      [5.3,-12.5,4.2],    // 5
      [-19,-12.5,4.2],    // 6
      [-21,-25.5,4.2],    // 7

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
