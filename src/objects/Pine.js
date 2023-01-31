import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';

export default class Pine extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {

        const pineMaterial = new THREE.MeshLambertMaterial({color: 0x0000ff, wireframe: false});
        let pineGeometry = new THREE.IcosahedronGeometry(5);

        let pineSegment1 = new THREE.Mesh(pineGeometry,pineMaterial);
        pineSegment1.scale.set(0.9, 0.6, 0.9);
        pineSegment1.position.set(0,1,0);

        let pineSegment2 = new THREE.Mesh(pineGeometry,pineMaterial);
        pineSegment2.scale.set(0.8,0.8,0.8);
        pineSegment2.position.set(0,2.2,0);
        pineSegment2.rotation.set(0,THREE.MathUtils.degToRad(30),0);

        let pineSegment3 = new THREE.Mesh(pineGeometry,pineMaterial);
        pineSegment3.scale.set(0.6,0.6,0.6);
        pineSegment3.position.set(0,0,0);

        let pineSegment4 = new THREE.Mesh(pineGeometry,pineMaterial);
        pineSegment4.scale.set(0.4,0.4,0.4);
        pineSegment4.position.set(0,5.5,0);
        pineSegment4.rotation.set(0,THREE.MathUtils.degToRad(30),0);


        let pineExp = new THREE.Group();
        pineExp.add(pineSegment1);
        pineExp.add(pineSegment2);
        pineExp.add(pineSegment3);
        pineExp.add(pineSegment4);

        this.add(pineExp);
    }
}