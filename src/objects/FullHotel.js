import * as THREE from 'three';

import HotelBody from "./HotelBody.js";
import HotelWoodBigStack from "./HotelWoodBigStack.js";
import HotelStrawStack from "./HotelStrawStack.js";
import HotelWoodSmallStack from "./HotelWoodSmallStack.js";
import HotelPineStack from "./HotelPineStack.js";
import {Animation, AnimationAxis, AnimationType} from "../animation/Animation.js";

export default class FullHotel extends THREE.Group {

    constructor() {
        super();
        this.animations=[];
        this.addParts();
    }

    addParts() {
        let gitterMaterial = new THREE.LineBasicMaterial({
            color: 0x454545,
            transparent: true
        });
        let untenGitterGeo = new THREE.PlaneGeometry(35.5, 20, 28, 15);
        ToQuads(untenGitterGeo);
        let gitter = new THREE.LineSegments(untenGitterGeo, gitterMaterial);
        gitter.scale.set(0.85, 0.85, 0.85);
        gitter.position.set(-7.7, -49.3, 17.35);
        this.add(gitter);


        let obenGitterGeo1 = new THREE.PlaneGeometry(20.2, 2.66, 16, 2);
        ToQuads(obenGitterGeo1);
        let obenGitter1 = new THREE.LineSegments(obenGitterGeo1, gitterMaterial);
        obenGitter1.position.set(-7.7, -10, 18);
        this.add(obenGitter1);
        let obenGitterGeo2 = new THREE.PlaneGeometry(17.75, 2.66, 14, 2);
        ToQuads(obenGitterGeo2);
        let obenGitter2 = new THREE.LineSegments(obenGitterGeo2, gitterMaterial);
        obenGitter2.position.set(-7.7, (2.66-10), 18);
        this.add(obenGitter2);
        let obenGitterGeo3 = new THREE.PlaneGeometry(12.67, 2.66, 10, 2);
        ToQuads(obenGitterGeo3);
        let obenGitter3 = new THREE.LineSegments(obenGitterGeo3, gitterMaterial);
        obenGitter3.position.set(-7.7, (2.66+2.66-10), 18);
        this.add(obenGitter3);
        let obenGitterGeo4 = new THREE.PlaneGeometry(7.6, 2.66, 6, 2);
        ToQuads(obenGitterGeo4);
        let obenGitter4 = new THREE.LineSegments(obenGitterGeo4, gitterMaterial);
        obenGitter4.position.set(-7.7, (2.66+2.66+2.66-10), 18);
        this.add(obenGitter4);
        let obenGitterGeo5 = new THREE.PlaneGeometry(2.53, 2.66, 2, 2);
        ToQuads(obenGitterGeo5);
        let obenGitter5 = new THREE.LineSegments(obenGitterGeo5, gitterMaterial);
        obenGitter5.position.set(-7.7, (2.66+2.66+2.66+2.66-10), 18);
        this.add(obenGitter5);


        function ToQuads(g) {
            let p = g.parameters;
            let segmentsX = (g.type == "TorusBufferGeometry" ? p.tubularSegments : p.radialSegments) || p.widthSegments || p.thetaSegments || (p.points.length - 1) || 1;
            let segmentsY = (g.type == "TorusBufferGeometry" ? p.radialSegments : p.tubularSegments) || p.heightSegments || p.phiSegments || p.segments || 1;
            let indices = [];
            for (let i = 0; i < segmentsY + 1; i++) {
                let index11 = 0;
                let index12 = 0;
                for (let j = 0; j < segmentsX; j++) {
                    index11 = (segmentsX + 1) * i + j;
                    index12 = index11 + 1;
                    let index21 = index11;
                    let index22 = index11 + (segmentsX + 1);
                    indices.push(index11, index12);
                    if (index22 < ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                        indices.push(index21, index22);
                    }
                }
                if ((index12 + segmentsX + 1) <= ((segmentsX + 1) * (segmentsY + 1) - 1)) {
                    indices.push(index12, index12 + segmentsX + 1);
                }
            }
            g.setIndex(indices);
        }
        const hotelBody = new HotelBody();
        hotelBody.scale.set(0.85, 0.85, 0.85);
        hotelBody.updateMatrix();
        hotelBody.castShadow = true;
        hotelBody.receiveShadow = true;
        //hotelBody.addPhysics();

        const bigWoodStack = new HotelWoodBigStack();
        bigWoodStack.position.set(-18.6, -22, 10);
        bigWoodStack.castShadow = true;
        bigWoodStack.receiveShadow = true;
        bigWoodStack.name = 'bigWoodStack';
        //bigWoodStack.addPhysics();

        const strawStack = new HotelStrawStack();
        strawStack.position.set(-16, -10.5, 10);
        strawStack.castShadow = true;
        strawStack.receiveShadow = true;
        //strawStack.addPhysics();

        const smallWoodStackLeft = new HotelWoodSmallStack();
        smallWoodStackLeft.position.set(-20.3, -38.6, 10);
        smallWoodStackLeft.castShadow = true;
        smallWoodStackLeft.receiveShadow = true;
        smallWoodStackLeft.name = 'smallWoodStackLeft';
        smallWoodStackLeft.children.forEach(child => child.children.forEach(child => child.name="smallWoodStackLeft"));
        //smallWoodStackLeft.addPhysics();

        const smallWoodStackRight = new HotelWoodSmallStack();
        smallWoodStackRight.position.set(1.1, -38.6, 10);
        smallWoodStackRight.castShadow = true;
        smallWoodStackRight.receiveShadow = true;
        smallWoodStackRight.name = 'smallWoodStackRight';
        smallWoodStackRight.children.forEach(child => child.children.forEach(child => child.name="smallWoodStackRight"));
        //smallWoodStackRight.addPhysics();

        const pineStack = new HotelPineStack();
        pineStack.position.set(-17.6, -54.4, 12);
        pineStack.castShadow = true;
        pineStack.receiveShadow = true;
        //pineStack.addPhysics();

        let woodMaterial = new THREE.MeshLambertMaterial({
            color: 0x5e3f21,
        });

        // ANOMATIONS
        const bigWoodStackAnimation = new Animation(bigWoodStack, AnimationType.TRANSLATION, AnimationAxis.Z);
        bigWoodStackAnimation.setAmount(20);
        bigWoodStackAnimation.setSpeed(30);
        bigWoodStack.linearAnimation = bigWoodStackAnimation;
        this.animations.push(bigWoodStackAnimation);

        const smallWoodStackLeftAnimation = new Animation(smallWoodStackLeft, AnimationType.TRANSLATION, AnimationAxis.Z);
        smallWoodStackLeftAnimation.setAmount(7);
        smallWoodStackLeftAnimation.setSpeed(30);
        smallWoodStackLeft.linearAnimation = smallWoodStackLeftAnimation;
        this.animations.push(smallWoodStackLeftAnimation);

        const smallWoodStackRightAnimation = new Animation(smallWoodStackRight, AnimationType.TRANSLATION, AnimationAxis.Z);
        smallWoodStackRightAnimation.setAmount(15);
        smallWoodStackRightAnimation.setSpeed(30);
        smallWoodStackRight.linearAnimation = smallWoodStackRightAnimation;
        this.animations.push(smallWoodStackRightAnimation);

        this.add(hotelBody);
        this.add(bigWoodStack);
        this.add(strawStack);
        this.add(smallWoodStackLeft);
        this.add(smallWoodStackRight);
        this.add(pineStack);
    }

    addPhysics() {
        const positions = [
            [8.5, -58, -1.75],     // 0
            [8.5, -17, -1.75],    // 1
            [-7.3, 4.5, -1.75],   //
            [-24, -17, -1.75],    // 3
            [-24, -58, -1.75],    // 4
            [8.5, -58, 17.5],     // 5
            [8.5, -17, 17.5],    // 6
            [-7.3, 4.5, 17.5],   // 7
            [-24, -17, 17.5],    // 8
            [-24, -58, 17.5],    // 9

        ];
        const indices = [
            [4, 3, 2, 1],
            [5, 6, 8, 9],
            [0, 1, 6, 5],
            [9, 8, 3, 4],
            [0, 5, 4, 9],
            [6, 7, 1, 2],
            [7, 2, 3, 8],
            [7, 8, 6],
            [3, 2, 1]
        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, false);
    }
}