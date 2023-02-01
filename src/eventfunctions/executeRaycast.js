import * as THREE from 'three';

window.raycaster = new THREE.Raycaster();

export function executeRaycast(event) {

  const mousePosition = new THREE.Vector2();
  mousePosition.x = 2 * (event.clientX / window.innerWidth) - 1;
  mousePosition.y = -2 * (event.clientY / window.innerHeight) + 1;

  window.raycaster.setFromCamera(mousePosition, window.camera);
  let intersects = window.raycaster.intersectObject(window.scene, true);

  if (intersects.length > 0) {
    let firstHit = intersects[0].object;
    console.log(firstHit = intersects[0].object);
    if (firstHit.name === 'bigWoodStack') {
      console.log("bigWoodStack raycast received");
      if (firstHit.children.length > 0) {
        firstHit.linearAnimation.toggleEndPosition();
      } else {
        //console.log(firstHit.parent.parent.linearAnimation);
        firstHit.linearAnimation.toggleEndPosition();
      }
    } else if (firstHit.name === 'smallWoodStackLeft') {
      console.log("smallWoodStackLeft raycast received");
      if (firstHit.name === 'smallWoodStackLeft') {
        firstHit.up = !firstHit.up;
        if (firstHit.up) {
          firstHit.tweenAnimationDown.stop();
          firstHit.tweenAnimationUp.start();
        } else {
          firstHit.tweenAnimationUp.stop();
          firstHit.tweenAnimationDown.start();
        }
      } else if (firstHit.name === 'powerKnobGLTF') {
        firstHit.parentTelevision.state.powerOn = !firstHit.parentTelevision.state.powerOn;
        if (firstHit.parentTelevision.state.powerOn) {
          firstHit.parentTelevision.animations.get('powerKnob_off').stop();
          firstHit.parentTelevision.animations.get('powerKnob_on').play();
        } else {
          firstHit.parentTelevision.animations.get('powerKnob_on').stop();
          firstHit.parentTelevision.animations.get('powerKnob_off').play();
        }
      } else if (firstHit.name === 'volumeKnobGLTF') {
        firstHit.parentTelevision.state.volumeHigh = !firstHit.parentTelevision.state.volumeHigh;
        if (firstHit.parentTelevision.state.volumeHigh) {
          firstHit.parentTelevision.animations.get('volumeKnob_low').stop();
          firstHit.parentTelevision.animations.get('volumeKnob_high').play();
        } else {
          firstHit.parentTelevision.animations.get('volumeKnob_high').stop();
          firstHit.parentTelevision.animations.get('volumeKnob_low').play();
        }
      } else if (firstHit.name === 'antennaGLTF') {
        firstHit.parentTelevision.state.antennaUp = !firstHit.parentTelevision.state.antennaUp;
        if (firstHit.parentTelevision.state.antennaUp) {
          firstHit.parentTelevision.animations.get('antenna_down').stop();
          firstHit.parentTelevision.animations.get('antenna_up').play();
        } else {
          firstHit.parentTelevision.animations.get('antenna_up').stop();
          firstHit.parentTelevision.animations.get('antenna_down').play();
        }
      }
    }
  }
}