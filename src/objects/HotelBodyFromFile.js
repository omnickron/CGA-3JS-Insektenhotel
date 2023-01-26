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
    if (this.loadingDone === false) {
      window.setTimeout(this.addPhysics.bind(this), 100);
    } else {
      //TODO: PHYSICS COLLIDER ANPASSEN
      window.physics.addCylinder(this, 5, 20, 10, 150, 12);
    }
  }
}