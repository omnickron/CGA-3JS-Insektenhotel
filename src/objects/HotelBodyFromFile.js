import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class HotelBodyFromFile extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisHotel) {

    this.gltfLoader.load('src/models/hotelBody.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -45, 0); // Shift loaded model down half its height
      thisHotel.add(gltf.scene);
      thisHotel.loadingDone = true;
    });
  }

  addPhysics() {
    const positions = [
      [8.5,-58,-15],     // 0
      [8.5,-17,-15],    // 1
      [-7.3 ,4.5,-15],   //
      [-24,-17,-15],    // 3
      [-24,-58,-15],    // 4
      [8.5,-58,17.5],     // 5
      [8.5,-17,17.5],    // 6
      [-7.3 ,4.5,17.5],   // 7
      [-24,-17,17.5],    // 8
      [-24,-58,17.5],    // 9

    ];
    const indices = [
      [0, 1, 3, 4],
      [5, 6, 8, 9],
      [0, 1, 6, 5],
      [9, 8, 3, 4],
      [0, 5, 4, 9],
      [1, 2, 7, 6],
      [7, 2, 3, 8],
      [7,8,6],
      [1,2,3]
    ];
    window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
  }
}