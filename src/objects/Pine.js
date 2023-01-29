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

    addPhysics() {
        //TODO: THIS IS VERY WRONG
        const positions = [
            [9, -44, 20],     // 0
            [9, 3.5, 0],    // 1
            [9, 28.5, 0],   // 2
            [-27, 3.5, 0],    // 3
            [-27, -44, 0],    // 4
            [9, -44, 20],     // 5
            [9, 3.52, 20],    // 6
            [9, 28.5, 20],   // 7
            [-27, 3.5, 20],    // 8
            [-27, -44, 20],    // 9

        ];
        const indices = [
            [0, 1, 3, 4],  // front
            [5, 6, 8, 9],  // left
            [0, 1, 6, 5],  // right
            [9, 8, 3, 4],  // top
            [0, 5, 4, 9],  // bottom
            [1, 2, 7, 6],
            [7, 2, 3, 8],
            [7, 8, 6],
            [1, 2, 3]// back
        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
    }
}