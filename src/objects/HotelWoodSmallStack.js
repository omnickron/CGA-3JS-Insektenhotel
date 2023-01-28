import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';
import HotelWoodSmall from './HotelWoodSmall.js';


import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';

export default class HotelWoodSmallStack extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const row1part1 = new HotelWoodSmall(2);
        row1part1.position.set(0, 0, 0);
        row1part1.addPhysics();
        this.add(row1part1);
        const row1part2 = new HotelWoodSmall(3);
        row1part2.position.set(0, 0, 0);
        row1part2.addPhysics();
        this.add(row1part2);
        const row1part3 = new HotelWoodSmall(1);
        row1part3.position.set(0, 0, 0);
        row1part3.addPhysics();
        this.add(row1part3);
        const row1part4 = new HotelWoodSmall(4);
        row1part4.position.set(0, 0, 0);
        row1part4.addPhysics();
        this.add(row1part4);


    }

}