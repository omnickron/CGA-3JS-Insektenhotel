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
    if (firstHit.name === 'bigWoodStack' || firstHit.name === 'Joined_Bigholz001') {
      if (firstHit.children.length > 0) {
        firstHit.linearAnimation.toggleEndPosition();
      } else {
        console.log(firstHit.parent.parent);
        firstHit.parent.parent.linearAnimation.toggleEndPosition();
      }
    } else if (firstHit.name === 'smallWoodStackLeft' ||
        firstHit.name === 'smallWoodStackRight' ||
        firstHit.name === 'joined_bambus'||
        firstHit.name === 'joined_bambus_links'||
        firstHit.name === 'smallWoodLeftFromFile') {
      if (firstHit.children.length > 0) {
        firstHit.linearAnimation.toggleEndPosition();
      } else {
        firstHit.parent.parent.linearAnimation.toggleEndPosition();
      }
    }
  }
}