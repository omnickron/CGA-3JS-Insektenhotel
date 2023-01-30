import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';
//import HotelBigWood from './HotelWoodBig.js';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';
import HotelWoodBig from "./HotelWoodBig.js";

export default class HotelWoodBigStack extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const hotelWoodBig1 = new HotelWoodBig(2, 4);
        hotelWoodBig1.position.set(0, 0, -2);
        this.add(hotelWoodBig1);

        const hotelWoodBig2 = new HotelWoodBig(2, 3);
        hotelWoodBig2.position.set(7, -1, -3);
        hotelWoodBig2.rotation.set(0,0, THREE.MathUtils.degToRad(60));
        this.add(hotelWoodBig2);

        const hotelWoodBig3 = new HotelWoodBig(1, 2.3);
        hotelWoodBig3.position.set(13, -1.7, -2.5);
        this.add(hotelWoodBig3);

        const hotelWoodBig4 = new HotelWoodBig(1, 4.2);
        hotelWoodBig4.position.set(20, -0.1,-0.5);
        this.add(hotelWoodBig4);

        const hotelWoodBig5 = new HotelWoodBig(1, 3.2);
        hotelWoodBig5.position.set(5.3, 4.8, -1);
        this.add(hotelWoodBig5);

        const hotelWoodBig6 = new HotelWoodBig(1, 3);
        hotelWoodBig6.position.set(18.7, 6.7, -1);
        this.add(hotelWoodBig6);

        const hotelWoodBig7 = new HotelWoodBig(2, 3);
        hotelWoodBig7.position.set(13.7, 3.4, -2);
        hotelWoodBig7.rotation.set(0,0, THREE.MathUtils.degToRad(20));
        this.add(hotelWoodBig7);

        const hotelWoodBig8 = new HotelWoodBig(2, 2);
        hotelWoodBig8.position.set(10.2, 6.7, -2.5);
        hotelWoodBig8.rotation.set(0,0, THREE.MathUtils.degToRad(20));
        this.add(hotelWoodBig8);
        }

    addPhysics() {
        const positions = [
            [24.3,-4,-9.5],     // 0
            [20.3,9.5,-9.5],    // 1
            [3,9.5,-9.5],    // 2
            [-3.5,-4,-9.5],    // 3
            [24.3,-4,6],     // 4
            [20.3,9.5,6],    // 5
            [3,9.5,6],    // 6
            [-3.5,-4,6],    // 7

        ];
        const indices = [
            [0, 1, 2, 3],
            [4, 5, 6, 7],
            [0, 1, 4, 5],
            [3, 7, 6, 2],
            [1, 2, 5, 6],
            [0, 3, 4, 7],

        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
    }
}