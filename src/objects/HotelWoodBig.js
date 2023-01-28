import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';

export default class HotelWoodBig extends THREE.Group {

    constructor(holes) {
        super();
        this.holes = holes;
        this.addParts();
    }

    addParts(holes) {
        const woodMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false});
        let woodGeometryMain = new THREE.CylinderGeometry(5, 5, 20, 24);
        let woodMain = new THREE.Mesh(woodGeometryMain, woodMaterial);
        const woodMainCsg = CSG.fromMesh(woodMain);

        switch (this.holes) {
            case 1:
                console.log("create log 1");
                let woodGeometryMainBool = new THREE.CylinderGeometry(2, 2, 25, 24);
                let woodBigBool = new THREE.Mesh(woodGeometryMainBool, woodMaterial);
                const woodBigBoolCsg = CSG.fromMesh(woodBigBool);
                const woodExp1 = CSG.toMesh(woodMainCsg.subtract(woodBigBoolCsg), woodMain.matrix, woodBigBool.material);
                //woodExp1.position.set(-9.2, -39.3, 20.9);
                woodExp1.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp1);
                break;
            case 2:
                console.log("create log 2");
                /*let woodGeometryBoolMed1 = new THREE.CylinderGeometry(1.2, 1.2, 25, 24);
                let woodMedBool1 = new THREE.Mesh(woodGeometryBoolMed1, woodMaterial);
                const woodMedBool1Csg = CSG.fromMesh(woodMedBool1);
                let woodExp2 = CSG.toMesh(woodMainCsg.subtract(woodMedBool1Csg), woodMain.matrix, woodMedBool1.material);

                let woodGeometryBoolMed2 = new THREE.CylinderGeometry(1.2, 1.2, 25, 24);
                let woodMedBool2 = new THREE.Mesh(woodGeometryBoolMed2, woodMaterial);
                woodMedBool2.position.set(-3, 1, 0);
                const woodMedBool2Csg = CSG.fromMesh(woodMedBool2);
                woodExp2 = CSG.toMesh(CSG.fromMesh(woodExp2).subtract(woodMedBool2Csg), woodMain.matrix, woodMedBool2.material);

                woodExp2.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp2);*/

                let woodGeometryBoolMed = new THREE.CylinderGeometry(1.2, 1.2, 25, 24);
                let woodGeometryBoolMedTest = new THREE.BoxGeometry(2,25,2);

                let woodMedBool1 = new THREE.Mesh(woodGeometryBoolMed, woodMaterial);
                woodMedBool1.position.set(-3, 1, 0);
                const boolCsg1 = CSG.fromMesh(woodMedBool1);
                //this.add(woodMedBool1);

                let woodMedBool2 = new THREE.Mesh(woodGeometryBoolMedTest, woodMaterial);
                woodMedBool2.position.set(0, -1, 0);
                const boolCsg2 = CSG.fromMesh(woodMedBool2);
                //this.add(woodMedBool2);

                let woodExp2 = CSG.toMesh(woodMainCsg.subtract(boolCsg1), woodMain.matrix, woodMedBool1.material);
                const woodExp2Csg = CSG.fromMesh(woodExp2);
                woodExp2 = CSG.toMesh(woodExp2Csg.subtract(boolCsg2), woodExp2.matrix, woodMedBool2.material);
                woodExp2.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp2);

                break;
            /*case 3:
                let woodGeometryMainBool = new THREE.CylinderGeometry(2, 2, 25, 24);
                let woodBigBool = new THREE.Mesh(woodGeometryMainBool, woodMaterial);
                const woodBigBoolCsg = CSG.fromMesh(woodBigBool);
                const woodExp = CSG.toMesh(woodMainCsg.subtract(woodBigBoolCsg), woodMain.matrix, woodBigBool.material);
                //woodExp.position.set(-9.2, -39.3, 20.9);
                woodExp.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp);
                break;*/
            default:
                console.log(`Sorry, das war nix.`);
        }

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