import * as THREE from 'three';
import {TextureLoader} from "three";

export default class StrawSingle extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const max = 4;
        const min = -4;
        let maxStraws = 24;
        const maxShift = 3;
        let test = [];

        let strawMap = new TextureLoader().load('src/maps/straw2.png');
        let strawMaterial = new THREE.MeshStandardMaterial({
            color: 0x98925d,
            map: strawMap
        });

        let strawGeometry = new THREE.CylinderGeometry(0.3, 0.3, 13, 3);
        let strawMesh = new THREE.Mesh(strawGeometry, strawMaterial);


        let yValue = 0;
        for (let j = 0; j <= maxStraws * 13; j++) {
            for (let i = 1; i <= maxStraws; i++) {
                test[i] = strawMesh.clone();
                test[i].position.set((j+(i / 1.3) - 1-0.3*j), yValue, -(Math.random() * maxShift));
                test[i].rotation.set(
                    THREE.MathUtils.degToRad(90 + Math.random() * (max - min) + min),
                    THREE.MathUtils.degToRad(Math.random() * (max - min) + min),
                    THREE.MathUtils.degToRad(Math.random() * (max - min) + min));
                this.add(test[i]);
            }
            maxStraws -= 2;
            yValue += 1;

        }
    }
}