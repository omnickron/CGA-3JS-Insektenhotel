import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';

export default class HotelWoodSmall extends THREE.Group {

    constructor(diameter) {
        super();
        this.diameter = diameter;
        this.addParts();
    }

    addParts() {
        const woodMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false});
        let woodGeometryMain = new THREE.CylinderGeometry(this.diameter, this.diameter, 20, 24);
        let woodMain = new THREE.Mesh(woodGeometryMain, woodMaterial);
        const woodMainCsg = CSG.fromMesh(woodMain);
        let woodGeometryMainBool = new THREE.CylinderGeometry(this.diameter/2, this.diameter/2, 20, 24);
        let woodBool = new THREE.Mesh(woodGeometryMainBool, woodMaterial);
        const woodBoolCsg = CSG.fromMesh(woodBool);
        const woodExp = CSG.toMesh(woodMainCsg.subtract(woodBoolCsg), woodMain.matrix, woodBool.material);
        woodExp.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
        this.add(woodExp);


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