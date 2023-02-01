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
    const positions = [
      [8.5,-58,-14],     // 0
      [8.5,-17.3,-14],    // 1
      [-8 ,4.5,-14],   //
      [-24,-17.3,-14],    // 3
      [-24,-58,-14],    // 4
      [8.5,-58,4],     // 5
      [8.5,-17.3,4],    // 6
      [-8 ,4.5,4],   // 7
      [-24,-17.3,4],    // 8
      [-24,-58,4],    // 9

    ];
    const indices = [
      [3,2,1,0],
      [5, 6, 8, 9],
      [0, 1, 6, 5],
      [9, 8, 3, 4],
      [0, 5, 4, 9],
      [6,7,1,2],
      [7, 2, 3, 8],
      [7,8,6],
      [3,2,1]
    ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}
