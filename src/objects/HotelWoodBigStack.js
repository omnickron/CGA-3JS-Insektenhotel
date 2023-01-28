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
        const hotelWoodBig1 = new HotelWoodBig(1);
        hotelWoodBig1.position.set(0, 70, 0);
        hotelWoodBig1.addPhysics();
        this.add(hotelWoodBig1);

        const hotelWoodBig2 = new HotelWoodBig(2);
        hotelWoodBig2.position.set(0, 100, 0);
        hotelWoodBig2.addPhysics();
        this.add(hotelWoodBig2);
        }
}