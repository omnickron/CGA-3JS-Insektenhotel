import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';

export default class HotelWoodBig extends THREE.Group {

    constructor(holes, diameter) {
        super();
        this.holes = holes;
        this.diameter = diameter;
        this.addParts();
    }

    addParts() {
        const woodMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00, wireframe: false});
        let woodGeometryMain = new THREE.CylinderGeometry(this.diameter, this.diameter, 14, 24);
        let woodMain = new THREE.Mesh(woodGeometryMain, woodMaterial);
        const woodMainCsg = CSG.fromMesh(woodMain);

        switch (this.holes) {
            case 1:
                let woodGeometryMainBool = new THREE.CylinderGeometry(this.diameter/4.5, this.diameter/3, 25, 24);
                let woodBigBool = new THREE.Mesh(woodGeometryMainBool, woodMaterial);
                const woodBigBoolCsg = CSG.fromMesh(woodBigBool);
                const woodExp1 = CSG.toMesh(woodMainCsg.subtract(woodBigBoolCsg), woodMain.matrix, woodBigBool.material);
                //woodExp1.position.set(-9.2, -39.3, 20.9);
                woodExp1.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp1);
                break;
            case 2:
                let woodGeometryBoolMed = new THREE.CylinderGeometry(this.diameter/6, this.diameter/5, 25, 24);

                let woodMedBool1 = new THREE.Mesh(woodGeometryBoolMed, woodMaterial);
                woodMedBool1.position.set(this.diameter/3, 0, 0);
                woodMedBool1.updateMatrix();
                const boolCsg1 = CSG.fromMesh(woodMedBool1);

                let woodMedBool2 = new THREE.Mesh(woodGeometryBoolMed, woodMaterial);
                woodMedBool2.position.set(-this.diameter/3, 0, 0);
                woodMedBool2.updateMatrix();
                const boolCsg2 = CSG.fromMesh(woodMedBool2);

                let woodExp2 = CSG.toMesh(woodMainCsg.subtract(boolCsg1), woodMain.matrix, woodMedBool1.material);
                const woodExp2Csg = CSG.fromMesh(woodExp2);
                woodExp2 = CSG.toMesh(woodExp2Csg.subtract(boolCsg2), woodExp2.matrix, woodMedBool2.material);
                woodExp2.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp2);
                break;
           /* case 3:
                let woodGeometryBoolSmall = new THREE.CylinderGeometry(0.8, 0.8, 25, 24);

                let woodSmallBool1 = new THREE.Mesh(woodGeometryBoolSmall, woodMaterial);
                woodSmallBool1.position.set(-2.3, 2, 0);
                woodSmallBool1.updateMatrix();
                const boolCsgSmall1 = CSG.fromMesh(woodSmallBool1);

                let woodSmallBool2 = new THREE.Mesh(woodGeometryBoolSmall, woodMaterial);
                woodSmallBool2.position.set(2.3, 2, 0);
                woodSmallBool2.updateMatrix();
                const boolCsgSmall2 = CSG.fromMesh(woodSmallBool2);

                let woodSmallBool3 = new THREE.Mesh(woodGeometryBoolSmall, woodMaterial);
                woodSmallBool3.position.set(-1, 2, 0);
                woodSmallBool3.updateMatrix();
                const boolCsgSmall3 = CSG.fromMesh(woodSmallBool3);

                let woodSmallBool4 = new THREE.Mesh(woodGeometryBoolSmall, woodMaterial);
                woodSmallBool4.position.set(-1, 2, 0);
                woodSmallBool4.updateMatrix();
                const boolCsgSmall4 = CSG.fromMesh(woodSmallBool4);

                let woodSmallBool5 = new THREE.Mesh(woodGeometryBoolSmall, woodMaterial);
                woodSmallBool5.position.set(-2, 1, 0);
                woodSmallBool5.updateMatrix();
                const boolCsgSmall5 = CSG.fromMesh(woodSmallBool5);

                let woodSmallBool6 = new THREE.Mesh(woodGeometryBoolSmall, woodMaterial);
                woodSmallBool6.position.set(-2.3, 2, 0);
                woodSmallBool6.updateMatrix();
                const boolCsgSmall6 = CSG.fromMesh(woodSmallBool6);


                let woodExp3 = CSG.toMesh(woodMainCsg.subtract(boolCsgSmall1), woodMain.matrix, woodSmallBool1.material);
                let woodExp3Csg = CSG.fromMesh(woodExp3);
                 woodExp3 = CSG.toMesh(woodExp3Csg.subtract(boolCsgSmall2), woodExp3.matrix, woodSmallBool2.material);
                 woodExp3Csg = CSG.fromMesh(woodExp3);
                 woodExp3 = CSG.toMesh(woodExp3Csg.subtract(boolCsgSmall3), woodExp3.matrix, woodSmallBool3.material);
                 woodExp3Csg = CSG.fromMesh(woodExp3);
                 woodExp3 = CSG.toMesh(woodExp3Csg.subtract(boolCsgSmall4), woodExp3.matrix, woodSmallBool4.material);
                 woodExp3Csg = CSG.fromMesh(woodExp3);
                 woodExp3 = CSG.toMesh(woodExp3Csg.subtract(boolCsgSmall5), woodExp3.matrix, woodSmallBool5.material);
                 woodExp3Csg = CSG.fromMesh(woodExp3);
                 woodExp3 = CSG.toMesh(woodExp3Csg.subtract(boolCsgSmall6), woodExp3.matrix, woodSmallBool6.material);
                woodExp3.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
                this.add(woodExp3);
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