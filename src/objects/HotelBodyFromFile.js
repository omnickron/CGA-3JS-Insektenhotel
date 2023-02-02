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
      gltf.scene.position.set(0, -25, 0); // Shift loaded model down half its height
      thisHotel.add(gltf.scene);
      thisHotel.loadingDone = true;
    });
  }
}