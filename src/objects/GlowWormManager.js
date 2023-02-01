import * as THREE from 'three';
import * as TWEEN from 'tween';
import CSG from 'csg';
//import HotelBigWood from './HotelWoodBig.js';

import {GridShader} from '../shaders/GridShader.js';

import {Animation, AnimationType, AnimationAxis} from '../animation/Animation.js';

export default class GlowWormManager extends THREE.Group {
    currentPosition;
    sampleAmount;

    constructor() {
        super();
        this.currentPosition = 0;
        this.sampleAmount = 1400;
        this.glowSamples = [];
        this.glowWormAmount = 40;
        //this.opacity = 1;
        this.glowMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});
        this.addParts();
    }

    addParts() {
        //GLOWWORM
        //const glowMaterial = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});
        this.glowMaterial.emissive.set(0xff9d00);
        this.glowMaterial.transparent = true;
        this.glowMaterial.opacity = 0;
        let glowGeometry = new THREE.SphereGeometry( 0.3, 6, 6 );
        let glow = new THREE.Mesh(glowGeometry,this.glowMaterial);
        //this.add(glow);


        //PATHS
        let glowPaths = [];
        for (let i = 0; i < this.glowWormAmount; i++){
            glowPaths[i] = new THREE.CatmullRomCurve3([
                new THREE.Vector3(
                    Math.random() * 60 -30,
                    10,
                    Math.random() * 60 -30),
                new THREE.Vector3(
                    Math.random() * 80 -40,
                    Math.random() * (65 - 20) + 20,
                    Math.random() * 100 -40),
                new THREE.Vector3(
                    Math.random() * 80 -40,
                    Math.random() * (65 - 20) + 20,
                    Math.random() * 100 -40),
                new THREE.Vector3(
                    Math.random() * 80 -40,
                    Math.random() * (65 - 20) + 20,
                    Math.random() * 100 -40),
                new THREE.Vector3(
                    Math.random() * 40 - 20,
                    Math.random() * (48 - 38) + 38,
                    Math.random() * 80 -30),
                new THREE.Vector3(
                    Math.random() * (-(32 - 3) + 3),
                    Math.random() * (49 - 36) + 36,
                    -50)
            ] )
            this.glowSamples[i] = glowPaths[i].getPoints(this.sampleAmount);
            this.add(glow.clone());
        }
    }

    updatePositions(){
        for (let k=0; k < this.children.length-1; k++){
            this.children[k].position.set(this.glowSamples[k][this.currentPosition].x,this.glowSamples[k][this.currentPosition].y,this.glowSamples[k][this.currentPosition].z);

        }
        if ((this.currentPosition/this.sampleAmount*8) < 1){
            this.glowMaterial.opacity = (this.currentPosition/this.sampleAmount*5)%1
        }else if(this.currentPosition >= this.sampleAmount*0.9){
            this.glowMaterial.opacity = (this.sampleAmount-this.currentPosition)/(this.sampleAmount-this.sampleAmount*0.9)
        }else{
            this.glowMaterial.opacity = 1;
        }
        if(this.currentPosition >= this.sampleAmount){
            this.currentPosition = 0;
            window.animationRunning = false;
            window.glowWormsDidFly = true;
        }else{
            this.currentPosition++;
        }

    }
}