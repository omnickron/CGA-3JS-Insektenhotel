import * as THREE from 'three';
import {TextureLoader} from "three";
import CSG from 'csg';

export default class HotelWoodBig extends THREE.Group {

    constructor(holes, diameter) {
        super();
        this.holes = holes;
        this.diameter = diameter;
        this.addParts();
    }

    addParts() {
        let woodMap = new TextureLoader().load('src/maps/dunkelHolz2.png');
        let woodMaterial = new THREE.MeshLambertMaterial({
            color: 0x5e3f21,
            //roughness:0.1,
            map: woodMap
        });

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
                woodExp1.receiveShadow = true;
                woodExp1.castShadow = true;
                woodExp1.name = 'bigWoodStack';
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
                woodExp2.name = 'bigWoodStack';
                woodExp2.receiveShadow = true;
                woodExp2.castShadow = true;
                this.add(woodExp2);
                break;
            default:
                console.log(`Sorry, das war nix.`);
        }
    }
}
