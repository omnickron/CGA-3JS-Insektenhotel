import * as THREE from 'three';
import {GLTFLoader} from 'gltfloader';

export default class GridBottomFromFiles extends THREE.Group {

  constructor() {
    super();
    this.gltfLoader = new GLTFLoader();
    this.loadingDone = false;
    this.load(this);
  }

  load(thisGridBottomFromFiles) {

    this.gltfLoader.load('src/models/gridBottom.gltf', function (gltf) {

      gltf.scene.traverse(function (child) {

        if (child.isMesh) {
          child.receiveShadow = true;
          child.castShadow = true;
        }
      });
      gltf.scene.position.set(0, -25, 0); // Shift loaded model down half its height
      thisGridBottomFromFiles.add(gltf.scene);
      thisGridBottomFromFiles.loadingDone = true;
    });
  }

  addPhysics() {
    if (this.loadingDone === false) {
      window.setTimeout(this.addPhysics.bind(this), 100);
    } else {
    }
  }
}