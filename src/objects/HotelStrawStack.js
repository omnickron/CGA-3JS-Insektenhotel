import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';
import StrawSingle from "./StrawSingle.js";

export default class HotelStrawStack extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const strawGenerated = new StrawSingle();
        this.add(strawGenerated);
        }

    addPhysics() {
        const positions = [
            [-1,-1,4],     // 0
            [-1,-1,-12.5],    // 1

            [19,-1,4],    // 2
            [19,-1,-12.5],    // 3
            [8, 12, 4],     // 4
            [8,12,-12.5],    // 5

        ];
        const indices = [
            [3, 2, 1, 0],
            [3, 5, 4, 2],
            [4, 5, 0, 1],
            [5, 3, 1],
            [0, 2, 4],
        ];
        window.physics.addConvexPolyhedron(this, 3, positions, indices, true);
    }
}