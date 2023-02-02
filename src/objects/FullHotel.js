import * as THREE from 'three';

import HotelBody from "./HotelBody.js";
import HotelWoodBigStack from "./HotelWoodBigStack.js";
import HotelStrawStack from "./HotelStrawStack.js";
import HotelWoodSmallStack from "./HotelWoodSmallStack.js";
import HotelPineStack from "./HotelPineStack.js";

export default class FullHotel extends THREE.Group {

    constructor() {
        super();
        this.addParts();
    }

    addParts() {
        const hotelBody = new HotelBody();
        hotelBody.scale.set(0.85, 0.85, 0.85);
        hotelBody.position.set(7.7, 33.2, -8);
        hotelBody.updateMatrix();
        //hotelBody.addPhysics();

        const bigWoodStack = new HotelWoodBigStack();
        bigWoodStack.position.set(-10, 11.5, 2);

        //bigWoodStack.addPhysics();

        const strawStack = new HotelStrawStack();
        strawStack.position.set(-8.3, 23, 2);
        //strawStack.addPhysics();

        const smallWoodStackLeft = new HotelWoodSmallStack();
        smallWoodStackLeft.position.set(-12.4, -5.1, 2);
        //smallWoodStackLeft.addPhysics();

        const smallWoodStackRight = new HotelWoodSmallStack();
        smallWoodStackRight.position.set(8.8, -5.1, 2);
        //smallWoodStackRight.addPhysics();

        const pineStack = new HotelPineStack();
        pineStack.position.set(-9.2, -20.9, 4);
        //pineStack.addPhysics();

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
            //[4, 3, 2, 1], //back tri
            [5, 6, 8, 9], //front box
            [6, 7, 1, 2], //schindel rechts
            [7, 2, 3, 8],//schindel links
            [7, 8, 6], //vorne dreieck
            [3, 2, 1], //hinten dreieck
            [5, 6, 8, 9], //front box
            [0, 1, 6, 5], //rechte wand
            [9, 8, 3, 4], //linke wand
            [0, 5, 4, 9], //boden
        ];
        window.physics.addBox(this,3,30,50,15, 0, 0, 0, true);
    }
}
