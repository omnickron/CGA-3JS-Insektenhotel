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
}
