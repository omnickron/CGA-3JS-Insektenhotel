import * as THREE from 'three';

import HotelBodyFromFile from "./HotelBodyFromFile.js";
import SmallWoodLeftFromFile from "./SmallWoodLeftFromFile.js";
import SmallWoodRightFromFile from "./SmallWoodRightFromFile.js";
import GridBottomFromFile from "./GridBottomFromFile.js";
import GridTopFromFile from "./GridTopFromFile.js";
import StrawFromFile from "./StrawFromFile.js";
import PinesFromFile from "./PinesFromFile.js";
import BigWoodFromFile from "./BigWoodFromFile.js";

export default class FullHotelFromFile extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const hotelBodyFromFile = new HotelBodyFromFile();
        hotelBodyFromFile.updateMatrix();
        //hotelBodyFromFile.addPhysics();
        const smallWoodLeftFromFile = new SmallWoodLeftFromFile();
        //smallWoodLeftFromFile.addPhysics();
        const smallWoodRightFromFile = new SmallWoodRightFromFile();
        //smallWoodRightFromFile.addPhysics();
        const gridBottomFromFile = new GridBottomFromFile();
        const gridTopFromFile = new GridTopFromFile();
        const strawFromFile = new StrawFromFile();
        //strawFromFile.addPhysics();
        const pinesFromFile = new PinesFromFile();
        // pinesFromFile.addPhysics();
        const bigWoodFromFile = new BigWoodFromFile();
        //bigWoodFromFile.addPhysics();

        hotelBodyFromFile.position.set(10,20,5);
        smallWoodLeftFromFile.position.set(10,20,5);
        smallWoodRightFromFile.position.set(10,20,5);
        gridBottomFromFile.position.set(10,20,5);
        gridTopFromFile.position.set(10,20,5);
        strawFromFile.position.set(10,20,5);
        pinesFromFile.position.set(10,20,5);
        bigWoodFromFile.position.set(10,20,5);

        this.add(bigWoodFromFile);
        this.add(gridTopFromFile);
        this.add(gridBottomFromFile);
        this.add(pinesFromFile);
        this.add(strawFromFile);
        this.add(smallWoodRightFromFile);
        this.add(smallWoodLeftFromFile);
        this.add(hotelBodyFromFile);
    }

    addPhysics() {
        const positions = [
            [8.5,-58,-14],     // 0
            [8.5,-17.3,-14],    // 1
            [-8 ,4.5,-14],   //
            [-24,-17.3,-14],    // 3
            [-24,-58,-14],    // 4
            [8.5,-58,4],     // 5
            [8.5,-17.3,4],    // 6
            [-8 ,4.5,4],   // 7
            [-24,-17.3,4],    // 8
            [-24,-58,4],    // 9

        ];
        const indices = [
            [3,2,1,0],
            [5, 6, 8, 9],
            [0, 1, 6, 5],
            [9, 8, 3, 4],
            [0, 5, 4, 9],
            [6,7,1,2],
            [7, 2, 3, 8],
            [7,8,6],
            [3,2,1]
        ];
        window.physics.addBox(this,3,30,50,15, 0, 0, 0, true);
    }
}
