import * as THREE from 'three';
import {TextureLoader} from "three";
import CSG from 'csg';

export default class HotelWoodSmall extends THREE.Group {

    constructor(diameter) {
        super();
        this.diameter = diameter;
        this.addParts();
    }

    addParts() {
            let woodMap = new TextureLoader().load('src/maps/bamboo2.png');
            let woodMaterial = new THREE.MeshStandardMaterial({
                color: 0xbeaf6f,
                map: woodMap
            });
        let woodGeometryMain = new THREE.CylinderGeometry(this.diameter, this.diameter, 15, 16);
        let woodMain = new THREE.Mesh(woodGeometryMain, woodMaterial);
        const woodMainCsg = CSG.fromMesh(woodMain);
        let woodGeometryMainBool = new THREE.CylinderGeometry(this.diameter/1.6, this.diameter/1.6, 15, 16);
        let woodBool = new THREE.Mesh(woodGeometryMainBool, woodMaterial);
        const woodBoolCsg = CSG.fromMesh(woodBool);
        const woodExp = CSG.toMesh(woodMainCsg.subtract(woodBoolCsg), woodMain.matrix, woodBool.material);
        woodExp.rotation.set(THREE.MathUtils.degToRad(90), 0, 0);
        this.add(woodExp);
    }
}
