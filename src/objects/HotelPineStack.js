import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';
import Pine from "./Pine.js";

export default class HotelPineStack extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const pine1 = new Pine();
        pine1.position.set(0, 2, -2);
        pine1.rotation.set(THREE.MathUtils.degToRad(80), THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(20));
        this.add(pine1);

        const pine2 = new Pine();
        pine2.position.set(4, 0, 0);
        pine2.rotation.set(THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(30), THREE.MathUtils.degToRad(-40));
        this.add(pine2);

        const pine3 = new Pine();
        pine3.position.set(13, 0, -1);
        pine3.rotation.set(THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(40));
        this.add(pine3);

        const pine4 = new Pine();
        pine4.position.set(19, 1, -3);
        pine4.rotation.set(THREE.MathUtils.degToRad(60), THREE.MathUtils.degToRad(20), THREE.MathUtils.degToRad(-20));
        this.add(pine4);

        const pine5 = new Pine();
        pine5.position.set(15, 6, -7);
        pine5.rotation.set(THREE.MathUtils.degToRad(35), THREE.MathUtils.degToRad(40), THREE.MathUtils.degToRad(-20));
        this.add(pine5);

        const pine6 = new Pine();
        pine6.position.set(3, 6, -4);
        pine6.rotation.set(THREE.MathUtils.degToRad(-15), THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(20));
        this.add(pine6);

        const pine7 = new Pine();
        pine7.position.set(10, 2, -7);
        pine7.rotation.set(THREE.MathUtils.degToRad(35), THREE.MathUtils.degToRad(-30), THREE.MathUtils.degToRad(-20));
        this.add(pine7);

        const pine8 = new Pine();
        pine8.position.set(10, 9, -6);
        pine8.rotation.set(THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(30), THREE.MathUtils.degToRad(0));
        this.add(pine8);
    }
}